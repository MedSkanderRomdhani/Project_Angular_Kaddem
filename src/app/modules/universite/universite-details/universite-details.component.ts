import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UniversiteService} from "../../../shared/services/universite.service";
import {Universite} from "../../../shared/models/universite";

@Component({
  selector: 'app-universite-details',
  templateUrl: './universite-details.component.html',
  styleUrls: ['./universite-details.component.css']
})
export class UniversiteDetailsComponent implements OnInit {
  idUniv: number;
  universite !: Universite;
  univ: Universite = new Universite();
  myobj: any
  myobj2: any
  listUniv: Universite []

  constructor(private service: UniversiteService, private route: ActivatedRoute, private router: Router) {
  }


  ngOnInit(): void {

    this.service.AfficherUniversiteSpecifique(this.idUniv).subscribe(res => this.univ = res);
    console.log(this.univ)


    this.service.NombreDepartementDansUneUniversite(localStorage.getItem("id")).subscribe(data => {
      this.myobj = data
      console.log(data)
    })
    this.service.NombreEtudiantDansUneUniversite(localStorage.getItem("id")).subscribe(data => {
      this.myobj2 = data
    })



  }

}


