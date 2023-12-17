import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('workbay_jobs', { schema: 'public' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { name: 'username' })
  username: string;

  @Column('text', { name: 'email' })
  email: string;
}
