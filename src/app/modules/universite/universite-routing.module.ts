import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContratListComponent} from "../contrat/contrat-list/contrat-list.component";
import {ContratDetailComponent} from "../contrat/contrat-detail/contrat-detail.component";
import {UniversiteDetailsComponent} from "./universite-details/universite-details.component";
import {UniversiteListComponent} from "./universite-list/universite-list.component";
import {UniversiteFormComponent} from "./universite-form/universite-form.component";
import {MyChartComponent} from "./my-chart/my-chart.component";

const routes: Routes = [
  // {path: '', component: ContratListComponent},
  // {path: 'details/:id', component: ContratDetailComponent},


  {path : '' , component :UniversiteListComponent },
  {path : 'detailuniv/:idUniv', component : UniversiteDetailsComponent},
  {path : "AjouterUniv" , component : UniversiteFormComponent},
  // {path : "ModifierUniv/:idUniv" , component : UniversiteFormComponent}





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
