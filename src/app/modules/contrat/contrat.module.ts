import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { ContratDetailComponent } from './contrat-detail/contrat-detail.component';
import { ContratFormComponent } from './contrat-form/contrat-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CalculCAComponent } from './calcul-ca/calcul-ca.component';
import { CalculCAEtudiantComponent } from './calcul-caetudiant/calcul-caetudiant.component';


@NgModule({
  declarations: [
    ContratListComponent,
    ContratDetailComponent,
    ContratFormComponent,
    CalculCAComponent,
    CalculCAEtudiantComponent
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContratModule { }
