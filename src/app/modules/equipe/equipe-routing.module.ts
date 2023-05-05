import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEquipeFormComponent } from './detail-equipe-form/detail-equipe-form.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { EquipeformComponent } from './equipeform/equipeform.component';
import { ListeequipeComponent } from './listeequipe/listeequipe.component';

const routes: Routes = [
  { path: '', component: ListeequipeComponent },
  {path:'ajouter',component:EquipeformComponent},
  {path:"update/:idEquipe", component:EquipeformComponent},
  {path:"edit/:idDetailEquipe",component:DetailEquipeFormComponent},
  {path:"detailEquipe",component:DetailEquipeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
