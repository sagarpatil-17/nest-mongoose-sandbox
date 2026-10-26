import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) { }

  @Post('create')
  createEmployee() {
    return this.employeeService.createEmployee();
  }

  @Get('all')
  findAllEmployees() {
    return this.employeeService.findAllEmployees();
  }
}
