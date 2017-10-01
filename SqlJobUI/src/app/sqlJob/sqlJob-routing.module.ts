import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SqlJobComponent } from './sqlJob.component';
import { DashboardComponent } from './dashboard.component';

import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
  {
    path: 'sqlJobs',
    component: SqlJobComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'allJobs',
        component: HeroesComponent,
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SqlJobRoutingModule { }