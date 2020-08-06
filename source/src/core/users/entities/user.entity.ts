import { Column, Entity, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from '../../../core/entities';
import { RoleEntity } from './role.entity';

@Entity({ name: 'user', schema: 'iformbox_sys' })
export class UserEntity extends BaseEntity {
    @Column({ type: 'int4', nullable: true, name: 'department_id' })
    public departmentId: number;

    @Column({ type: 'varchar', nullable: true, name: 'employee_id' })
    public employeeId: string;

    @Column({ type: 'varchar', nullable: true, name: 'chinese_name' })
    public chineseName: string;

    @Column({ type: 'varchar', nullable: true, name: 'english_name' })
    public englishName: string;

    @Column({ type: 'varchar', nullable: true, name: 'alias_name' })
    public aliasName: string;

    @Column({ type: 'varchar', nullable: true, name: 'email' })
    public email: string;

    @Column({ type: 'varchar', nullable: true, name: 'tel_phone' })
    public telPhone: string;

    @Column({ type: 'jsonb', nullable: true, name: 'others' })
    public others: string;

    @Column({ type: 'text', nullable: false, name: 'password' })
    public password: string;

    @ManyToMany(() => RoleEntity, role => role.users)
    @JoinTable({
        name: 'user_role_mapping',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
    })
    roles: RoleEntity[];
}
