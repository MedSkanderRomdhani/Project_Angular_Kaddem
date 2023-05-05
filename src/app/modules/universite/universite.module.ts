import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteDetailsComponent } from './universite-details/universite-details.component';
import { UniversiteListComponent } from './universite-list/universite-list.component';
import { UniversiteFormComponent } from './universite-form/universite-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyChartComponent} from "./my-chart/my-chart.component";



@NgModule({
  declarations: [
    UniversiteDetailsComponent,
    UniversiteListComponent,
    UniversiteFormComponent,
MyChartComponent
  ],
    imports: [
        CommonModule,
        UniversiteRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class UniversiteModule { }
