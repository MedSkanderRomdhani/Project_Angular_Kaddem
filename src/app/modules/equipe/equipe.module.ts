import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe-routing.module';
import { ListeequipeComponent } from './listeequipe/listeequipe.component';
import { EquipeformComponent } from './equipeform/equipeform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { DetailEquipeFormComponent } from './detail-equipe-form/detail-equipe-form.component';

@NgModule({
  declarations: [
    ListeequipeComponent,
    EquipeformComponent,
    EquipeformComponent,
    DetailEquipeComponent,
    DetailEquipeFormComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipeModule { }
