import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './students.entity';
import { Repository } from 'typeorm';


@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
    ) {}


    // Create Students Function
    async createStudent(data: Partial<Student>): Promise<Student> {
        const student = this.studentRepository.create(data);
        return this.studentRepository.save(student);
    }

    // Read/Find Students Function
    async getStudents(): Promise<Student[]> {
        return this.studentRepository.find()
    }

    async getStudentsByID(id: number): Promise<Student> {
        const student = await this.studentRepository.findOneBy({ id });
        if (!student) {
            throw new NotFoundException('Student with ID ${id} not found');
        }

        return student; 
    }

    // Update Student Function
    async updateStudent(id: number, data: Partial<Student>): Promise<Student> {
        const student = await this.getStudentsByID(id);
        Object.assign(student, data);
        return this.studentRepository.save(student);
    }

    // Deleting Student Function
    async deleteStudent(id: number): Promise<void> {
        const result = await this.studentRepository.delete(id);
        if(result.affected === 0 ){
            throw new NotFoundException('Student with ID ${id} was not found');
        }
    }
}
