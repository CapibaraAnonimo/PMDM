import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PerdidoComponent} from "./components/perdido/perdido.component";
import {EncontradoComponent} from "./components/encontrado/encontrado.component";

const routes: Routes = [
  {path: "", component: EncontradoComponent},
  {path: "perdido", component: PerdidoComponent},
  {path: "encontrado", component: EncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
