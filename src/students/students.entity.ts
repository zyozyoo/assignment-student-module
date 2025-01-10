import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('students')
export class Student {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ unique: true})
    email: string

    @Column()
    enrollmentDate: string

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

}