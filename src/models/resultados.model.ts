import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Estudiante } from './estudiantes.model';
import { Prueba } from "./pruebas.model";
import { Pregunta } from './preguntas..model';

@Entity('Resultado')
export class Resultado {
    @PrimaryGeneratedColumn()
    ID:string;

    @ManyToOne(()=>Estudiante,(estudiante)=>estudiante.ID)
    @JoinColumn({ name: "IDEstudiante" })
    IDEstudiante:Estudiante;

    @ManyToOne(()=>Prueba,(prueba)=>prueba.ID)
    @JoinColumn({ name: "IDPrueba" })
    IDPrueba:Prueba;

    @ManyToOne(()=>Pregunta,(pregunta)=>pregunta.ID)
    @JoinColumn({ name: "IDPregunta" })
    IDPregunta:Pregunta;
}