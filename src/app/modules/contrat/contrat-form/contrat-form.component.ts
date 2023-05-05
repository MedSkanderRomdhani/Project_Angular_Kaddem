import {Component, OnInit} from '@angular/core';
import {ContratService} from "../../../shared/services/contrat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LowerThan} from "./validateur";
import {Contrat} from "../../../shared/models/contrat";
import {first} from "rxjs";

@Component({
  selector: 'app-contrat-form',
  templateUrl: './contrat-form.component.html',
  styleUrls: ['./contrat-form.component.css']
})
export class ContratFormComponent implements OnInit {
  form !: FormGroup;
  contrat: Contrat = new Contrat();
  id !: number;

  constructor(private service: ContratService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.id = Number(data.get('id'))
    });
    this.form = new FormGroup({
      archive: new FormControl('false', [Validators.required, Validators.pattern('true|false')]),
      dateDebutContrat: new FormControl('', Validators.required),
      dateFinContrat: new FormControl('', Validators.required),
      montantContrat: new FormControl('', Validators.required),
      specialite: new FormControl('', Validators.required)
    }, {
      validators: [LowerThan]
    });
    if (this.id != 0) {
      this.service.getContratById(this.id)
        .subscribe(x => {
          this.form.patchValue(x)
        });
    }
  }

  ajouterContrat() {
    if (this.id == 0) {
      this.service.addContrat(this.contrat).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/contrats']);
      });
    } else {
      this.contrat.idContrat = this.id;
      this.service.updateContrat(this.contrat).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/contrats']);
      });
    }
  }

}
