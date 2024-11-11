import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Resultado } from "./resultados.model";

@Entity('Estudiante')
export class Estudiante extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID:string;

    @Column()
    Nombres:string;

    @Column()
    Grado:string;

    @Column()
    Salon:string;

    @OneToMany(()=>Resultado,(resultado)=>resultado.IDEstudiante)
    resultados:Resultado[];

}