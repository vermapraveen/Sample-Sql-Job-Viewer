import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { JobData } from './jobData';
import { JobDetails } from './jobDetails';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/jobData';
    private stepDetails = 'api/jobSteps';

    //private heroesUrl = 'http://localhost/Sqljob.Api/api/SqlJob/GetAllJobs';

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getHeroes(): Promise<JobData> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => {
                return response.json().data as JobData
            })
            .catch(this.handleError);
    }

    getJobSteps(id: number): Promise<JobDetails> {
        console.log("in getJobSteps")
        return this.http.get(this.stepDetails)
            .toPromise()
            .then(response => {
                console.log("response: " + response)
                return response.json().data as JobDetails
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getHeroesSlowly(): Promise<JobData> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }
}