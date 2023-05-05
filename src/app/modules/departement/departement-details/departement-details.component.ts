import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departement } from 'src/app/shared/models/departement';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { ServiceService} from '../../../shared/services/departement.service';
@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.css']
})
export class DepartementDetailsComponent implements OnInit {
idDepart!:number;
Dept: Departement = new Departement();
Enseignant:Enseignant[]=[];
nbEtudiants:number=0;
nbEnseignants:number=0;
show:boolean=false;

salaireMoyen!:number;
  constructor(private myService:ServiceService,private route: ActivatedRoute, private router: Router) { }
  showForm(){
    this.show=true;
  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {

        this.idDepart= data['id']
        console.log(this.idDepart)

    });

      this.myService.getDepartementById(this.idDepart).subscribe(res=>this.Dept=res);
      console.log(this.Dept)

      this.myService.getNombreEtudiantByDepart(this.idDepart).subscribe(res=>{
        if(res!=null)
        this.nbEtudiants=res
      else
    this.nbEtudiants=0});
this.myService.getNombreEnseignantByDepart(this.idDepart).subscribe(res=>{
  if(res!=null)
  this.nbEnseignants=res
else
this.nbEnseignants=0});
this.myService.getChefDepart("CHEF_DEPARTEMENT",this.idDepart).subscribe(res=>this.Enseignant=res);

this.myService.getSalaireMoyenByDepart(this.idDepart).subscribe(res=>this.salaireMoyen=res);
  }



}
