import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnseignantFormComponent } from './enseignant-form/enseignant-form.component';
import { EnseignantListComponent } from './enseignant-list/enseignant-list.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';

const routes: Routes = [
    
  {path: '', component: EnseignantListComponent},
  {path: 'ajouterEns', component: EnseignantFormComponent},
  {path:"up", component:UpdateEnseignantComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }
