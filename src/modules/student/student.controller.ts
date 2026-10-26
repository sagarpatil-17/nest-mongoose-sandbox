import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService) { }

    @Post('create')
    async createStudent(@Body() data: Partial<Student>) {
        return this.studentService.createStudent(data)
    }

    @Get('all')
    async getAllStudents() {
        return this.studentService.getAllStudents()
    }

    @Get(':id')
    async getStudentById(@Param('id') id: string) {
        return this.studentService.getStudentById(id)
    }

    @Patch('update/:id')
    async updateStudent(@Param('id') id: string, @Body() data: Partial<Student>) {
        return this.studentService.updateStudent(id, data);
    }

    @Delete('delete/:id')
    async deleteStudent(@Param('id') id: string) {
        return this.studentService.deleteStudent(id);
    }
}
