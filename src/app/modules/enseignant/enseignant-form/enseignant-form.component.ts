import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from 'src/app/shared/models/enseignant';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';
import { LowerThan } from '../../contrat/contrat-form/validateur';

@Component({
  selector: 'app-enseignant-form',
  templateUrl: './enseignant-form.component.html',
  styleUrls: ['./enseignant-form.component.css']
})
export class EnseignantFormComponent implements OnInit {
  myForm!: FormGroup;
  form !: FormGroup;
  enseignant: Enseignant = new Enseignant();
  id !: number;
  constructor(private service: EnseignantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.get('id'))}
    )
  }

  ajouterEnseignant() {
    this.service.addEnseignant(this.enseignant).subscribe(data=>console.log(data))
  }
  add(f:any){
    console.log(f)
    
  }
  

}
