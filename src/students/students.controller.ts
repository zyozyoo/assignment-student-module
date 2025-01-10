import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';
import { Student } from './students.entity';


@Controller('students')
export class StudentsController {
    constructor(private readonly studentService: StudentsService) {}

    // Creating New Student
    @Post()
    async createStudent(@Body() data: Partial<Student>): Promise<Student> {
        return this.studentService.createStudent(data);
    }


    // Finding Student by ID
    @Get()
    async getStudent(): Promise<Student[]> {
        return this.studentService.getStudents();
    }

    @Get(':id')
    async getStudentsByID(@Param('id') id: number): Promise<Student> {
        return this.studentService.getStudentsByID(id);
    }
}
