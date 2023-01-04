import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerdidoComponent} from "./components/perdido/perdido.component";
import {EncontradoComponent} from "./components/encontrado/encontrado.component";
import {MatchComponent} from "./components/match/match.component";

const routes: Routes = [
  {path: "", component: EncontradoComponent},
  {path: "perdido", component: PerdidoComponent},
  {path: "encontrado", component: EncontradoComponent},
  {path: "matches", component: MatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
