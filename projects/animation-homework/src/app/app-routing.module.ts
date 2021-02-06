import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sustainability',
    pathMatch: 'full'
  },
  {
    path: 'sustainability',
    loadChildren: () => import('./views/sustainability/sustainability.module').then(m=>m.SustainabilityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
