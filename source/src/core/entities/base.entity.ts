import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, VersionColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn({ name: 'Id' })
    public id?: number;

    @Column({ name: 'created_user', nullable: true })
    public createdUser?: string;

    @CreateDateColumn({ name: 'created_date', nullable: true })
    public createdDate?: Date;

    @Column({ name: 'modified_user', nullable: true })
    public modifiedUser?: string;

    @UpdateDateColumn({ name: 'modified_date', nullable: true })
    public modifiedDate?: Date;

    @Column({ name: 'is_deleted', default: false })
    public isDeleted?: boolean;

    @VersionColumn({ name: 'version_number', nullable: true })
    public versionNumber?: number;

    @BeforeInsert()
    public beforeInsertListener() {
        const currentUser = null;
        this.createdDate = new Date();
        this.createdUser = null;
    }

    @BeforeUpdate()
    public beforeUpdateListener() {
        const currentUser = null;
        this.modifiedDate = new Date();
        this.modifiedUser = null;
    }
}
