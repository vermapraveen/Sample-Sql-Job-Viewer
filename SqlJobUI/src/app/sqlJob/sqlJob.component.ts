import { Component } from '@angular/core';

@Component({
  template: `
  <h1>{{title}}</h1>
  <a routerLink="/sqlJobs/dashboard" routerLinkActive="active">Dashboard</a>
  <a routerLink="/sqlJobs/allJobs" routerLinkActive="active">All Jobs</a>
  <router-outlet></router-outlet>
`,
  styleUrls: ['./sqlJob.component.css'],
})
export class SqlJobComponent {
  title = 'Welcome to SQL Jobs Module';
}