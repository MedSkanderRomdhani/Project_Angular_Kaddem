import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyChartComponent} from "./modules/universite/my-chart/my-chart.component";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path: 'contrats', loadChildren: () => import('./modules/contrat/contrat.module').then(m => m.ContratModule)},
  {path: "departement",
    loadChildren: () => import('./modules/departement/departement.module').then(m =>m.DepartementModule)
  },
  {path:"home", component:HomeComponent},
  {path: 'universites', loadChildren: () => import('./modules/universite/universite.module').then(u => u.UniversiteModule)}
  ,{path : 'mychart' , component:MyChartComponent},
  {path: 'etudiants', loadChildren: () => import('./modules/etudiant/etudiant.module').then(m => m.EtudiantModule)},
  {path: 'enseignants', loadChildren: () => import('./modules/enseignant/enseignant.module').then(e => e.EnseignantModule)},
  {path: 'equipe', loadChildren: () => import('./modules/equipe/equipe.module').then(m => m.EquipeModule)},
  {path:'**',component:NotFoundComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
