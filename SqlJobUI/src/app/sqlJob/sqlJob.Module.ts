import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SqlJobComponent } from './sqlJob.component';

import { DashboardComponent } from './dashboard.component';

import { JobDetailComponent } from './job-detail.component';
import { JobListComponent } from './jobList.component';
import { JobService } from './sqlJob.service';

import { SqlJobRoutingModule } from './sqlJob-routing.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        SqlJobRoutingModule,
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