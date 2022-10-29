import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudPageComponent } from './crud-page.component';


const routes: Routes = [
  { path: '', component: CrudPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPageRoutingModule { }
