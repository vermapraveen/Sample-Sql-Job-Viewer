import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SnippetComponent } from './snippet.component';
import {  SnippetRoutingModule } from './snippet-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        SnippetRoutingModule,
    ],
    declarations: [
        SnippetComponent
    ],
    exports: [SnippetComponent],
    bootstrap: [SnippetComponent]
})
export class SnippetModule {
}