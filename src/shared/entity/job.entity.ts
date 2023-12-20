// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// @Entity('workbay_jobs', { schema: 'public' })
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column('text', { name: 'username' })
//   username: string;

//   @Column('text', { name: 'email' })
//   email: string;
// }
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('jobs_entity', { schema: 'public' })
export class Job {
  @PrimaryColumn('integer', { name: 'id', nullable: false })
  id: number | null;

  @Column('text', { name: 'title', nullable: true })
  title: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;
}
