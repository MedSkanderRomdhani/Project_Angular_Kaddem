import { Component, Input, OnInit } from '@angular/core';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { ServiceService } from '../../../shared/services/departement.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
@Input() id!:number;
Enseignants:Enseignant[]=[];
Fonction!:string;
val="select one"
  constructor(private myService:ServiceService) { }

  ngOnInit(): void {


  }
  MaxSalary(){
    this.myService.getEnseignantWithMaxSalaryByDepart(this.Fonction,this.id).subscribe(res=>this.Enseignants=res);
    console.log(this.Enseignants);
  }

}
