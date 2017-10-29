import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { JobDetails, StepDetails } from './../commonModels/jobDetails';

import { JobService } from './../commonServices/sqlJob.service';
import { Job } from './../commonModels/job';
@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {
  private _job = new Job();

  @Input()
  set job(job: Job) {
    if (job) {
      this.getJobDetails(job.id);
    }
  }
  get job(): Job { return this._job; }

  selectedStep: StepDetails;
  jobDetails: JobDetails;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    jobService.jobUpdate$.subscribe(x => this.getJobDetails(x));
  }

  goBack(): void {
    this.location.back();
  }

  getJobDetails(jobId: number): void {

    this.jobService.getJobSteps(jobId)
      .then(jobData => {
        this.jobDetails = jobData;
      });
  }

  onSelect(step: StepDetails): void {
    this.selectedStep = step;
  }

  save(): void {
    // this.jobService.update(this.job)
    //   .then(() => this.goBack());
  }
}
