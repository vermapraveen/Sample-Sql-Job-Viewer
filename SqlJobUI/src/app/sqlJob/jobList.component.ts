import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from './job';
import { JobService } from './sqlJob.service';
import { JobData } from './jobData';

@Component({
  selector: 'sqlJob-List',
  templateUrl: './jobList.component.html',
  styleUrls: ['./jobList.component.css']
})
export class JobListComponent implements OnInit {
  allJobs: Job[];
  selectedJob: Job;

  constructor(
    private router: Router,
    private jobService: JobService) { }

  getAllJobs(): void {
    this.jobService.getAllJobs().then(allJobData => {
      this.allJobs = allJobData.jobs;

      if (this.allJobs.length > 0) {
        this.onSelect(this.allJobs[0]);
      }

    })
  }

  ngOnInit(): void {
    this.getAllJobs();
  }

  onSelect(selectedJob: Job): void {
    this.selectedJob = selectedJob;
    this.jobService.jobSelectionChangedTo(selectedJob.id);
    // this.router.navigate(['/sqlJobs/detail', selectedJob.id]);
  }

  gotoDetail(): void {
    this.router.navigate(['/sqlJobs/detail', this.selectedJob.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.jobService.create(name)
      .then(jobToAdd => {
        this.allJobs.push(jobToAdd);
        this.selectedJob = null;
      });
  }
}