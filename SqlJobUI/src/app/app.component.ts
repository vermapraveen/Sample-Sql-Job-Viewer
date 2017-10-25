import { Component } from '@angular/core';
import { SqlJobComponent } from './sqlJob/commonComp/sqlJob.component';
import { SnippetComponent } from './snippet/snippet.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
  <a routerLink="/sqlJobs" routerLinkActive="active">Sql Jobs</a>
  <a routerLink="/snippet" routerLinkActive="active">Snippets</a>

  <router-outlet></router-outlet>
  </nav>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'This is main module';
}
