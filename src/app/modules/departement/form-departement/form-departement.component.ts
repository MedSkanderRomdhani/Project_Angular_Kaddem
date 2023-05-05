import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/shared/models/departement';
import { ServiceService } from '../../../shared/services/departement.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-form-departement',
  templateUrl: './form-departement.component.html',
  styleUrls: ['./form-departement.component.css']
})
export class FormDepartementComponent implements OnInit {
  nom!:string;
  myForm! :  FormGroup;
  form! :  FormGroup;

  list : Departement[] = [];
  depart: Departement = new Departement();
  idDepart!:number;
  departement: Departement = new Departement();

  constructor(private sservice:ServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
this.form=new FormGroup({
  nomDepartement: new FormControl('',[Validators.required, Validators.minLength(5)])});
  this.getAllDepartements();
  this.route.data.subscribe((data)=>{
    this.idDepart=data['idDepart'];

  })
    this.myForm=new FormGroup({
      nomDepart: new FormControl('',[Validators.required, Validators.minLength(5)])});
      this.getAllDepartements();
      this.route.data.subscribe((data)=>{
        this.idDepart=data['idDepart'];

      })
      }
getAllDepartements() {
  this.sservice.getAllDepartements().subscribe(data=>this.list=data)
}
get nomDepartement(){
  return this.form.controls["nomDepartement"];
}
  get nomDepart(){
     return this.myForm.controls["nomDepart"];
    }
onSubmit(){
  // this.depart.nomDepart=this.myForm.get("nomDepart")?.value;
  console.log(this.depart)
      this.sservice.addDepartement(this.depart).subscribe(()=>{


        this.getAllDepartements();

        });
        this.myForm.reset();
}
delete(d:Departement){
  console.log(d);
  this.sservice.deleteDepartement(d).subscribe(()=>this.sservice.getAllDepartements().subscribe(
    res=>this.list=res))

}
edit(d:Departement){
  this.sservice.editDepartement(d).subscribe(()=>{


      this.getAllDepartements();

      });
      this.form.reset();

}

afficher(id:number){
  this.departement.idDepart=id;
  this.sservice.getDepartementById(this.departement.idDepart).subscribe(res=>this.departement=res)

// this.depart.nomDepart="yosra"
}

search() {

  this.sservice.searchDepartementsByNomDepartContains(this.nom).subscribe(res=>this.list=res);
   this.nom="";
}
}
