import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/shared/models/equipe';
import { ServiceEquipeService } from 'src/app/shared/services/service-equipe.service';

@Component({
  selector: 'app-equipeform',
  templateUrl: './equipeform.component.html',
  styleUrls: ['./equipeform.component.css']
})
export class EquipeformComponent implements OnInit {
  urllink:string ="assets/images/1.jpg";
  equipe: Equipe = new Equipe();
  list: Equipe[];
  id: number;
  verif(f) {
    console.log(f.value);
  }
  constructor(private SE: ServiceEquipeService, private ac: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.ac.params.subscribe(params => { this.id = params['idEquipe'], console.log(this.id), this.getEquipe(this.id) })
  }
  addEquipe() {
    this.SE.addEquipe(this.equipe).subscribe((resp: any) => {
      console.log(resp)
      alert("add succecful")
    },
      errors => {
        console.log(errors);
      });
      this.router.navigate(['/equipe']);
  }
  getEquipe(id: number) {
    this.SE.getEquipe(id).subscribe(e => { this.equipe.idEquipe = e.idEquipe, this.equipe.nomEquipe = e.nomEquipe, this.equipe.niveau = e.niveau })
  }
  
 selectFiles (event){
  if(event. target. files){
     var reader = new FileReader()
     reader.readAsDataURL (event.target.files[0])
     reader.onload = (event : any)=>{
       this.urllink = event.target.result
     }
    }
  }
}
