import { Component, OnInit } from '@angular/core';

import { Job } from './job';
import { JobService } from './sqlJob.service';
import { JobData } from './jobData';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', './sqlJob.component.css']
})
export class DashboardComponent implements OnInit {

  bookmarkedJobs: Job[] = [];
  
  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.jobService.getAllJobs()
      .then(allJobs => {
        this.bookmarkedJobs = allJobs.jobs.slice(0, 6)
      });
  }

  onSelect(selectedJob: Job): void {
    this.jobService.jobSelectionChangedTo(selectedJob.id);
    // this.router.navigate(['/sqlJobs/detail', selectedJob.id]);
  }

}