import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnseignantService } from 'src/app/shared/services/enseignant.service';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styleUrls: ['./update-enseignant.component.css']
})
export class UpdateEnseignantComponent implements OnInit {

  constructor(private service: EnseignantService, private _formBuilder: FormBuilder) { }

  @Input() enseignant: any
  form !: FormGroup;
  ngOnInit(): void {

    this.form = this._formBuilder.group({
      nomEns: ['', Validators.required],
      prenomEns: ['', Validators.required],
      fonction: ['', Validators.required],
      salaire: ['', Validators.required],
      dateRecrutement: ['', Validators.required],
    })
  }
  ModiferEns() {
    console.log(this.enseignant)
    this.service.editEnseignant(this.enseignant).subscribe(
      data => 
      this.enseignant = data
    )
  }
}
