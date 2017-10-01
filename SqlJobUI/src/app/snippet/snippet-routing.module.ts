import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnippetComponent } from './snippet.component';

const routes: Routes = [
  {
    path: 'snippet', 
    component: SnippetComponent,
    children: [
      {
        path: '',
        component: SnippetComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnippetRoutingModule { }