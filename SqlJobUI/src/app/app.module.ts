import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SqlJobModule } from './sqlJob/sqlJob.Module';
import { SnippetModule } from './snippet/snippet.Module';

import { AppRoutingModule } from './app-routing.module';
import { ConnectionComponent } from './sqlJob/connectionComp/connection.component';
import { MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SqlJobModule,
    SnippetModule,
    MatGridListModule
  ],
  declarations: [AppComponent, ConnectionComponent],
  exports: [MatGridListModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
