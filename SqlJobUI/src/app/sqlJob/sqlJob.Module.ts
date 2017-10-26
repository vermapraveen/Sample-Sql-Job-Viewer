import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SqlJobComponent } from './commonComp/sqlJob.component';

import { DashboardComponent } from './dashboardComp/dashboard.component';

import { JobDetailComponent } from './detailComp/job-detail.component';
import { JobListComponent } from './listComp/jobList.component';
import { JobService } from './commonServices/sqlJob.service';

import { SqlJobRoutingModule } from './commonServices/sqlJob-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './commonServices/in-memory-data.service';
import { MatGridListModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        SqlJobRoutingModule,
        MatGridListModule,
    ],
    declarations: [
        DashboardComponent,
        JobDetailComponent,
        JobListComponent,
        SqlJobComponent,
    ],
    exports: [SqlJobComponent],
    providers: [JobService],
    bootstrap: [SqlJobComponent]
})
export class SqlJobModule {
}
