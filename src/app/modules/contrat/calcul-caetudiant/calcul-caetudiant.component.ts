import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../shared/services/contrat.service";
import {EtudiantService} from "../../../shared/services/etudiant.service";
import {Etudiant} from "../../../shared/models/etudiant";

@Component({
  selector: 'app-calcul-caetudiant',
  templateUrl: './calcul-caetudiant.component.html',
  styleUrls: ['./calcul-caetudiant.component.css']
})
export class CalculCAEtudiantComponent implements OnInit {
  startdate: Date;
  enddate: Date;
  chiffre: number;
  etudiants: Etudiant[];
  idEtudiant : number;
  etudiant : Etudiant;

  constructor(private contratService: ContratService, private etudiantService: EtudiantService) {
  }

  ngOnInit(): void {
    this.etudiantService.getAll().subscribe(value => this.etudiants=value);
    console.log(this.etudiants)
  }

  calculerCA() {
    this.contratService.getChiffreDaffaireParEtudiant(this.idEtudiant,this.startdate, this.enddate).subscribe(value => this.chiffre = value)
  }

}
