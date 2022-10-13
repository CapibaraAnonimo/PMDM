import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PeopleListComponent} from "./components/people-list/people-list.component";
import {InicioComponent} from "./components/inicio/inicio.component";
import {SpeciesListComponent} from "./components/species-list/species-list.component";
import {PersonDetailsComponent} from "./components/person-details/person-details.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {
    path: 'personajes', children: [
      {path: '', component: PeopleListComponent},
      {path: ':id', component: PersonDetailsComponent}
    ]
  },
  {path: 'especies', component: SpeciesListComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
