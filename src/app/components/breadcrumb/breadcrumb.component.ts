import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  private _title !: String;
  private _component !: String;
  private _function !: String;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  // getTitle(): String {
  //   if (this.router.url.includes("/contrats")) {
  //     this._title = "Contrat";
  //   }
  //   return this._title;
  // }

  getComponent(): String {
    if (this.router.url.includes("/contrats")) {
      this._component = "Contrats";
    } else if (this.router.url.includes("/departement")) {
      this._component = "Departements";
    } else if (this.router.url.includes("enseignants")) {
      this._component = "Enseignants"
    } else if (this.router.url.includes("equipe")) {
      this._component = "Equipes"
    } else if (this.router.url.includes("etudiant")) {
      this._component = "Etudinats"
    } else if (this.router.url.includes("universites")) {
      this._component = "Univeristes"
    } else {
      this._component = "";
    }
    return this._component;
  }

  getFunction(): String {
    if (this.router.url == "/contrats/ajouter") {
      this._function = "Ajouter Contrat";
    } else if (this.router.url == "/contrats") {
      this._function = "Liste Contrats"
    } else if (this.router.url == "/contrats/calculcaetudiant") {
      this._function = "Calcul Chiffre D'affaire Par Etudiant"
    } else if (this.router.url == "/contrats/calculca") {
      this._function = "Calcul Chiffre D'affaire"
    } else if (this.router.url == "/departement") {
      this._function = "Liste Departements"
    } else if (this.router.url == "/enseignants") {
      this._function = "Liste Enseignants"
    } else if (this.router.url == "/enseignants/ajouterEns") {
      this._function = "Ajouter Enseignant"
    } else if (this.router.url == "/etudiants") {
      this._function = "Liste Etudiants";
    } else if (this.router.url == "/universites") {
      this._function = "Liste Univeristes"
    } else if (this.router.url == "/universites/AjouterUniv") {
      this._function = "Ajouter Universite"
    } else if (this.router.url == "/equipe") {
      this._function = "Liste Equipes"
    } else if (this.router.url == "/equipe/ajouter") {
      this._function = "AjouterEquipe";
    } else {
      this._function = "";
    }
    return this._function;
  }
}
