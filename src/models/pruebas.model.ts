import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Resultado } from "./resultados.model";
import { Pregunta } from "./preguntas..model";

@Entity('Prueba')
export class Prueba extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID:string;

    @Column()
    Nombre:string;

    @Column()
    Anio:Date;

    @OneToMany(()=>Resultado,(resultado)=>resultado.IDPrueba)
    resultados:Resultado[];

    @OneToMany(()=>Pregunta,(pregunta)=>pregunta.IDPrueba)
    pregunta:Pregunta[];
}