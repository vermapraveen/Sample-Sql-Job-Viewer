import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { JobDetails, StepDetails } from './jobDetails';

import { JobService } from './sqlJob.service';
@Component({
  selector: 'job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: JobDetails;
  selectedStep: StepDetails;
  
  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.jobService.getJobSteps(+params.get('id')))
      .subscribe(job => this.job = job);
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(step: StepDetails): void {
    this.selectedStep = step;
  }

  save(): void {
    // this.jobService.update(this.job)
    //   .then(() => this.goBack());
  }
}