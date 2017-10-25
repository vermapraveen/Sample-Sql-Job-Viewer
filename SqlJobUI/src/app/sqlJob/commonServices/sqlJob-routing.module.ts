import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SqlJobComponent } from './../commonComp/sqlJob.component';
import { DashboardComponent } from './../dashboardComp/dashboard.component';

import { JobListComponent } from './../listComp/jobList.component';
import { JobDetailComponent } from './../detailComp/job-detail.component';

const routes: Routes = [
  {
    path: 'sqlJobs',
    component: SqlJobComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'allJobs',
        component: JobListComponent,
      },
      {
        path: 'detail/:id',
        component: JobDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SqlJobRoutingModule { }
