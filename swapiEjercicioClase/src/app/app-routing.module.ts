import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from "./components/people-list/people-list.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {SpeciesListComponent} from "./components/species-list/species-list.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'personajes', component: PeopleListComponent},
  {path: 'especies', component: SpeciesListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
