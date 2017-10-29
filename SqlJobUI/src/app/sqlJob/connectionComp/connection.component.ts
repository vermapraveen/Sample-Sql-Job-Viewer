import { Component, OnInit } from '@angular/core';
import { JobService } from './../commonServices/sqlJob.service';

@Component({
  selector: 'app-sqljob-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  isConnectionValid: Boolean;
  connectionString: String;

  constructor(private jobService: JobService) {}
  // constructor() {}
  ngOnInit() {}

  verify(): void {
    this.jobService
      .isValidConnectionString(this.connectionString)
      .then(validationData => {
        console.log('validationData: ' + validationData);
        this.isConnectionValid = validationData;
        console.log('isConnectionValid: ' + this.isConnectionValid);

      });
  }
}
