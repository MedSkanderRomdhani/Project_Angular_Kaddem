import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Etudiant } from 'src/app/shared/models/etudiant';
import { EtudiantService } from 'src/app/shared/services/etudiant.service';
import { ServiceService } from 'src/app/shared/services/departement.service';
import { Departement } from 'src/app/shared/models/departement';
import { timestamp } from 'rxjs';

@Component({
  selector: 'etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']

})
export class EtudiantComponent implements OnInit {
  public etudiant: Etudiant[]=[];
  public departements : Departement[]  = [];
  public editeetudiant! : Etudiant;
  public deleteEtudiant!: Etudiant;
  public assignEtudiant!: Etudiant;
  public op!: string;
  public nom!: string;
  public notification: Boolean = false;
  public messageNotif : string = '';
  constructor(private etudiantService:EtudiantService, private departementService:ServiceService ) { }

  ngOnInit(): void {
   this.getAll();
  }

  public getAll():void{
    this.etudiantService.getAll().subscribe(
      (Response:Etudiant[])=>{

        this.etudiant=Response;
      },
      (error:HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public getetudiantbyOption(){
    if(this.op!="GAMIX" && this.op != "NIDS" && this.op != "SE" && this.op!="SIM"){
      alert("option indiponible");
    }else{
      this.etudiantService.getetudiantbyOption(this.op).subscribe(
        (Response:Etudiant[])=>{
          this.etudiant=Response;
        },
        (error:HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }

  }
  public sortetudiantbynom(){
    this.etudiantService.sortetudiantbynom(this.nom).subscribe(
      (Response:Etudiant[])=>{
        this.etudiant=Response;
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }




  public onAddEtudiant(addForm: NgForm): void {
    document.getElementById('add-etudiant-form')?.click();

    this.etudiantService.saveEtudiant(addForm.value).subscribe(
      (Response: Etudiant) => {
        this.getAll();
        addForm.reset();
        this.notification=true;
        this.messageNotif='Etudiant Ajouter avec succées';
        setTimeout(function() {
            this.notification=false;
            location.reload();
        }, 5000);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      },
    );
  }

  public onUpdateEtudiant(etudiant: Etudiant): void {
    this.etudiantService.updateEtudiant(etudiant).subscribe(
      (Response: Etudiant) => {
        this.getAll();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }

  public onDeleteEtudiant(idEtudiant: number): void {
    this.etudiantService.deleteEtudiant(idEtudiant).subscribe(
      (Response: void) => {
        this.getAll();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    );
  }
  public onOpenModal(etudiant: Etudiant,mode:string):void{
    console.log("OpenModal: mode : "+mode)
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display= 'none';
    button.setAttribute('data-toggle','modal');
    if(mode === 'add'){
      button.setAttribute('data-target','#addEtudiantModal');
    }
    if(mode === 'edit'){
      this.editeetudiant = etudiant;
      button.setAttribute('data-target','#updateEtudiantModal');
    }
    if(mode === 'delete'){
      this.deleteEtudiant = etudiant;
      button.setAttribute('data-target','#deleteEtudiantModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onOpenModalAssign(etudiant: Etudiant):void{
    this.departementService.getAllDepartements().subscribe(
      (res)=>{
        this.departements = res;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    )
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type='button';
    button.style.display= 'none';
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#assignEtudiantModal');
    container?.appendChild(button);
    this.assignEtudiant = etudiant;
    button.click();
  }

  public assignEtudiantToDep(assignForm):void {
    document.getElementById('assign-etudiant-form')?.click();
    this.etudiantService.assignEtudiantToDepartement(assignForm.value.idDep, this.assignEtudiant.idEtudiant).subscribe(
      (Response: Etudiant) => {
        this.getAll();
        assignForm.reset();

        this.notification=true;
        this.messageNotif='Etudiant assigné au departement avec succées';
        setTimeout(function() {
            this.notification=false;
            location.reload();
        }, 5000);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        assignForm.reset();
      },
    );
  }
}
