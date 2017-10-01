import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SqlJobComponent } from './sqlJob.component';

import { DashboardComponent } from './dashboard.component';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

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
        HeroDetailComponent,
        HeroesComponent,
        SqlJobComponent,        
    ],
    exports: [SqlJobComponent],
    providers: [HeroService],
    bootstrap: [SqlJobComponent]
})
export class SqlJobModule {
}