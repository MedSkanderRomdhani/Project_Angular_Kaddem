import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormDepartementComponent} from '../departement/form-departement/form-departement.component';
import { DepartementDetailsComponent} from '../departement/departement-details/departement-details.component';
const routes: Routes = [{path:"",component:FormDepartementComponent,children:[]},
{path:"departement-details/:id", component:DepartementDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
