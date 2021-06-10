// import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'; // DEV
import typeorm from 'typeorm';
import { v4 as uuid } from 'uuid';

const { Column, CreateDateColumn, Entity, PrimaryColumn } = typeorm;
@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  code: number;

  @Column()
  enrollment: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  presence: string;

  @Column()
  status: string;

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

export default User;
