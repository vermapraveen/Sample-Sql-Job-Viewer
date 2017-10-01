import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { JobDetails, StepDetails } from './jobDetails';

import { HeroService } from './hero.service';
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: JobDetails;
  selectedStep: StepDetails;
  
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { console.log('HeroDetailComponent constructor') }

  ngOnInit(): void {
    console.log('HeroDetailComponent init')
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getJobSteps(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(step: StepDetails): void {
    this.selectedStep = step;
  }

  save(): void {
    // this.heroService.update(this.hero)
    //   .then(() => this.goBack());
  }
}