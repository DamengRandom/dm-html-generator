import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { GeneratorComponent } from '../../pages/generator/generator.component';
import { NotFoundComponent } from '../../pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'generator', component: GeneratorComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
