import { Component } from '@angular/core';

@Component({
  templateUrl: './sqlJob.component.html',
  styleUrls: [
    './sqlJob.component.css',
    './../../../../node_modules/font-awesome/css/font-awesome.min.css',
    './../../../../node_modules/primeng/resources/themes/omega/theme.css',
    './../../../../node_modules/primeng/resources/primeng.min.css'
  ]
})
export class SqlJobComponent {
  title = 'Welcome to SQL Jobs Module';
  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
  ];
}
