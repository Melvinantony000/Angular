import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCompComponent } from './form-comp/form-comp.component';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    FormCompComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule
  ],
  exports: [
     FormCompComponent
  ]
})
export class FormModule { }
