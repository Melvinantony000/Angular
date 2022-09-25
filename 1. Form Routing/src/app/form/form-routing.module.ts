import { NgModule } from '@angular/core';
 
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FormCompComponent } from './form-comp/form-comp.component';
 

const routes: Routes = [
  {path: '',redirectTo: 'home',pathMatch:'full'},
  {path: 'details',component: DetailsComponent},
  {path: 'home', component: FormCompComponent} 
];

@NgModule({
  declarations: [], 
  imports: [
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class FormRoutingModule { }
