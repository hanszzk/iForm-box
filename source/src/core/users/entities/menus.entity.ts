import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../../core/entities';
import { RoleEntity } from './role.entity';

@Entity({ name: 'menus', schema: 'iformbox_sys' })
export class MenusEntity extends BaseEntity {

    @Column({ type: 'varchar', nullable: false, name: 'menu_name' })
    public menuName: string;

    @Column({ type: 'varchar', nullable: false, name: 'menu_url' })
    public menuUrl: string;

    @Column({ type: 'int', nullable: true, name: 'parent_id' })
    public parentId: number;

    @Column({ type: 'varchar', nullable: true, name: 'description' })
    public description: string;

    @ManyToMany(() => RoleEntity, role => role.menus)
    roles: RoleEntity[];
}
