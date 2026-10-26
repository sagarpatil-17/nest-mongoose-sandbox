import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from './student.schema';
import { Model } from 'mongoose';
import { error } from 'console';
import { NotFoundError } from 'rxjs';

@Injectable()
export class StudentService {
    constructor(
        @InjectModel(Student.name) private studentModel: Model<StudentDocument>
    ) { }

    async createStudent(data: Partial<Student>): Promise<Student> {
        const newStudent = new this.studentModel(data)
        return newStudent.save();
    }

    async getAllStudents(): Promise<Student[]> {
        return await this.studentModel.find().exec();
    }

    async getStudentById(id: string): Promise<Student> {
        const student = await this.studentModel.findById(id).exec();

        if (!student) {
            throw new NotFoundException(`Student with ID "${id}" not found!`)
        }

        return student;
    }

    async updateStudent(id: string, data: Partial<Student>): Promise<Student> {
        const updatedStudent = await this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec()

        if (!updatedStudent) {
            throw new NotFoundException(`Student with ID "${id}" not found!`)
        }

        return updatedStudent
    }

    async deleteStudent(id: string): Promise<Student> {
        const deletedStudent = await this.studentModel.findByIdAndDelete(id).exec();

        if (!deletedStudent) {
            throw new NotFoundException(`Student with ID "${id}" not found`);
        }

        return deletedStudent;
    }
}
