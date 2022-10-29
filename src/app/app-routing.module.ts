import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/Home-Page/home-page.module').then(m => m.HomePageModule) },
  { path: 'aluno', loadChildren: () => import('./pages/CRUD-Page/crud-page.module').then(m => m.CrudPageModule) },
  { path: 'professor', loadChildren: () => import('./pages/CRUD-Page/crud-page.module').then(m => m.CrudPageModule) },
  { path: 'curso', loadChildren: () => import('./pages/CRUD-Page/crud-page.module').then(m => m.CrudPageModule) },
  { path: 'notas', loadChildren: () => import('./pages/CRUD-Page/crud-page.module').then(m => m.CrudPageModule) },
  { path: 'disciplinas', loadChildren: () => import('./pages/CRUD-Page/crud-page.module').then(m => m.CrudPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
