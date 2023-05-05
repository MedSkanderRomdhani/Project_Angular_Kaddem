import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { EnseignantFormComponent } from './enseignant-form/enseignant-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';


@NgModule({
  declarations: [
    EnseignantListComponent,
    EnseignantFormComponent,
    UpdateEnseignantComponent
  ],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnseignantModule { }
