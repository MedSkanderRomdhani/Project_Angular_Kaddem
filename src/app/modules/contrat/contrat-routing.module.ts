import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContratListComponent} from "./contrat-list/contrat-list.component";
import {ContratDetailComponent} from "./contrat-detail/contrat-detail.component";
import {ContratFormComponent} from "./contrat-form/contrat-form.component";
import {CalculCAComponent} from "./calcul-ca/calcul-ca.component";
import {CalculCAEtudiantComponent} from "./calcul-caetudiant/calcul-caetudiant.component";

const routes: Routes = [
  // {
  //   path: '', component: ContratListComponent, children: [
  //     {path: 'details/:id', component: ContratDetailComponent}
  //   ]
  // }
  {path: '', component: ContratListComponent},
  {path: 'details/:id', component: ContratDetailComponent},
  {
    path: 'ajouter', component: ContratFormComponent
    // , children: [
    //   {
    //     path: ':id', component: ContratFormComponent
    //   }
    // ]
  },
  {path: 'ajouter/:id', component: ContratFormComponent},
  {path: 'calculca', component: CalculCAComponent},
  {path: 'calculcaetudiant', component: CalculCAEtudiantComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule {
}
