import {Component, OnInit} from '@angular/core';
import {UniversiteService} from "../../../shared/services/universite.service";
import {Universite} from "../../../shared/models/universite";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {

  listUniv: Universite []
  form !: FormGroup;
  universite: Universite = new Universite();
  univmodif: Universite = new Universite();
  searchh : any ;

  constructor(private service: UniversiteService) {
  }

  ngOnInit(): void {

    this.getList();
    this.form = new FormGroup({
      nomUniv: new FormControl('', [Validators.required, Validators.minLength(5)]),
      adresse: new FormControl('', [Validators.required, Validators.minLength(5)])

    })
  }

  get nomUniv() {
    return this.form.controls["nomUniv"];
  }

  sendMyKey(idf: any) {
    localStorage.setItem("id", idf);
  }

  get adresse() {
    return this.form.controls["adresse"];
  }

  getList() {
    this.service.AfficherTousLesUniversite().subscribe(data => this.listUniv = data);
  }

  deleteUniv(u: Universite) {
    this.service.SupprimerUniversite(u).subscribe(() => this.service.AfficherTousLesUniversite().subscribe(data => this.listUniv = data));
  }


  getUniv(mu: Universite) {
    this.univmodif = mu;
    console.log(this.univmodif)
    // this.service.AfficherUniversiteSpecifique( this.universite.idUniv).subscribe(res=>this.universite=res)
    // console.log(this.universite)
    //}
  }

  editUniv() {
    console.log("bonjour")
    console.log(this.univmodif)
    this.service.ModifierUniversite(this.univmodif).subscribe(
      data => {
        console.log(data)
      }
    )
  }
  rechercher(event :any){
    if (event.target.value=="")
    {
      this.service.AfficherTousLesUniversite().subscribe(data => this.listUniv = data);
    }
    else
    {
      this.service.UniversiteParAdresse2(event.target.value).subscribe(res=>{
        this.listUniv=res;

      })
    }



  }



}
