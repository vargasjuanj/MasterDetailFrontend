import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { PlatoComponent } from './components/plato/plato.component';

const routes: Routes = [
  { path: 'tabla', component: TablaComponent },
  { path: 'plato/:id', component: PlatoComponent },
  { path: '**', redirectTo: 'tabla', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
