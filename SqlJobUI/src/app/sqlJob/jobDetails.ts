export class JobDetails {
    allSteps: StepDetails[];
    connectionString: string;
    jobName: string;
}

export class StepDetails {
    lastRunDuration: number;
    jobId: string;
    executeOnDatabase: string;
    lastRunDate: number;
    lastStatus: boolean;
    stepId: number;
    lastRunTime: number;
    stepExecutable: string;
    stepName: string;
    stepType: string;
}