import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { DepartementRoutingModule } from './departement-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {FormDepartementComponent} from '../departement/form-departement/form-departement.component';
import { DepartementDetailsComponent} from '../departement/departement-details/departement-details.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

@NgModule({
    declarations: [
        FormDepartementComponent,
        DepartementDetailsComponent,
        EnseignantComponent,

    ],
    exports: [
        EnseignantComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DepartementRoutingModule
    ]
})
export class DepartementModule { }
