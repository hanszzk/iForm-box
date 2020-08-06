import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../core/entities';
import { UserEntity } from './user.entity';
import { type } from 'os';
import { MenusEntity } from './menus.entity';

@Entity({ name: 'role', schema: 'iformbox_sys' })
export class RoleEntity extends BaseEntity {
    @Column({ type: 'varchar', nullable: false, name: 'name' })
    public name: string;

    // @Column({ type: 'varchar', nullable: false, name: 'role_code', unique: true })
    // public roleCode: string;

    @Column({ type: 'varchar', nullable: false, name: 'comment' })
    public comment: string;

    // @Column({ type: 'varchar', nullable: false, name: 'type' })
    // public type: string;

    @Column({ type: 'boolean', nullable: false, name: 'is_approval' })
    public isApproval: boolean;

    @Column({ type: 'boolean', nullable: false, default: false, name: 'is_default' })
    public isDefault: boolean;

    @Column({ type: 'jsonb', nullable: true, name: 'others' })
    public others: object;

    @ManyToMany(() => UserEntity, user => user.roles)
    users: UserEntity[];

    @ManyToMany(() => MenusEntity, menu => menu.roles)
    @JoinTable({
        name: 'role_menu_mapping',
        joinColumn: { name: 'role_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'menu_id', referencedColumnName: 'id' },
    })
    menus: MenusEntity[];
}
