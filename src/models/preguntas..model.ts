import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Resultado } from "./resultados.model";
import { Prueba } from "./pruebas.model";

@Entity('Pregunta')
export class Pregunta extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID:string;

    @Column()
    Respuesta:string;

    @Column()
    Orden:string;

    @OneToMany(()=>Resultado,(resultado)=>resultado.IDPregunta)
    resultados:Resultado[];

    @ManyToOne(()=>Prueba,(prueba) => prueba.ID)
    @JoinColumn({ name: "IDPrueba" })
    IDPrueba:Prueba;
}