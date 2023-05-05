import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-enseignant-list',
  templateUrl: './enseignant-list.component.html',
  styleUrls: ['./enseignant-list.component.css']
})
export class EnseignantListComponent implements OnInit {

  list!: any;
  ens : Enseignant = new Enseignant();
  ens_modif : Enseignant = new Enseignant();
  form !: FormGroup;
  showUpdate=false;
  Binding:any
  constructor(private service: EnseignantService) { }

  ngOnInit(): void {
    this.listEn()
    console.log(this.list)
    this.form = new FormGroup({})

   
    }
    showUpdateForm(f:any){
      this.Binding=f;
      this.showUpdate=true;
    }
  
  listEn () {
  this.service.getAllEnseignant().subscribe(enseignants => {
    this.list = enseignants;
  })
  }

  deleteEnseignant(e:any) 
  {
    this.service.deleteEnseignant(e.idEns).subscribe((data) =>this.listEn()) 
  }

  getEnseignant(e:Enseignant){
    this.ens_modif=e;
    console.log(this.ens_modif)
    
  }
  ModiferEns( ){
    this.service.editEnseignant(this.ens_modif).subscribe(
      data=>{
        console.log(data);
      }
    )
  }

  add(e:Enseignant){
    this.list.push(e)
  }
}

