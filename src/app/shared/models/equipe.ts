import { DetailEquipe } from "./DetailEquipe";

export class Equipe{
    idEquipe!:number;
    nomEquipe!:string;
    niveau!:Niveau;
    detailequipe:DetailEquipe;
   
}
enum Niveau{
    JUNIOR,
    SENIOR,
    EXPERT
}