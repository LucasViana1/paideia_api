// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   OneToOne,
//   PrimaryColumn,
// } from 'typeorm'; //DEV
import typeorm from 'typeorm';
import { v4 as uuid } from 'uuid';
import User from './User';

const {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} = typeorm;

@Entity('candidates')
class Candidate {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  citizen: string;

  @Column()
  birth_city: string;

  @Column()
  cpf: string;

  @Column()
  course: string;

  @Column()
  birth_date: string;

  @Column()
  state: string;

  @Column()
  fullname: string;

  @Column()
  rg: string;

  @Column()
  phone1: string;

  @Column()
  phone2: string;

  @CreateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Candidate;
