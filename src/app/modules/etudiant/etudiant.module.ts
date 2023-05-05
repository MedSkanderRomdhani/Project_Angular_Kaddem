import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtudiantRoutingModule } from './etudiant-routing.module';
import {EtudiantComponent} from "./etudiant/etudiant.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EtudiantComponent
  ],
  imports: [
    CommonModule,
    EtudiantRoutingModule,
    FormsModule
  ]
})
export class EtudiantModule { }
