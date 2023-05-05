import { Departement } from "./departement";

export interface Etudiant{
    idEtudiant :number;
    nom : string;
    prenom: string;
    email : string;
    telephone : number;
    imageUrl: string;
    op:Option;
    departement:Departement;
}
export enum Option{
    GAMIX,SIM,NIDS,SE
}