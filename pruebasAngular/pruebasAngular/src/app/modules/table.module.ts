import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableMatComponent } from '../components/table-mat/table-mat.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TableMatComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    TableMatComponent,
    MatTableModule
  ]
})
export class TableModule { }
