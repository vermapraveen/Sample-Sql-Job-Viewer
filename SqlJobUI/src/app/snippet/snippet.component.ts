import { Component } from '@angular/core';

@Component({
  selector: 'snippetApp',
  template: `
  <h1>{{title}}</h1>
  <nav>

  </nav>
`,
styleUrls: ['./snippet.component.css'],
})
export class SnippetComponent {
  title = 'Snippet Module';
}