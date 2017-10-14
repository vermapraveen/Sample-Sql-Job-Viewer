export class JobDetails {
    allSteps: StepDetails[];
    connectionString: string;
    name: string;
    id: number;
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