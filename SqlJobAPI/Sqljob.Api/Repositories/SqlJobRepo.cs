using System.Collections.Generic;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data.SqlClient;
using helloWebApi.Models;
using System;

public class SqlJobRepo
{
    private string _connectionString;
    public SqlJobRepo()
    {
        //connectionString = configuration.GetValue<string>("DBInfo:ConnectionString");
        //_connectionString = "Data Source=SVCPLMGSQL01.dswh.ds.adp.com;Initial Catalog=msdb;Integrated Security=True";
        _connectionString = "Data Source=c04rfolotm0.dslab.ad.adp.com;Initial Catalog=msdb;Integrated Security=True";
    }

    public SqlJobData GetCurrentRunningJobs()
    {
        string sql = string.Format(
            @"SELECT
                    ja.job_id as Id,
                    j.name AS  Name,
                    ja.start_execution_date as StartTime,
                    DATEDIFF( hh, ja.start_execution_date, getdate()) as RunningSinceHours
                    ,ISNULL(last_executed_step_id,0)+1 AS ExecutingStepId
                    ,Js.step_name as ExecutingStepName
                FROM	msdb.dbo.sysjobactivity ja 
                    LEFT JOIN msdb.dbo.sysjobhistory jh ON ja.job_history_id = jh.instance_id
                    JOIN msdb.dbo.sysjobs j ON ja.job_id = j.job_id
                    JOIN msdb.dbo.sysjobsteps js ON ja.job_id = js.job_id
                        AND ISNULL(ja.last_executed_step_id,0)+1 = js.step_id
                WHERE	ja.session_id = (SELECT TOP 1 session_id FROM msdb.dbo.syssessions ORDER BY agent_start_date DESC)
                        AND start_execution_date is not null
                        AND stop_execution_date is null;");

        using (var conn = new SqlConnection(_connectionString))
        {
            var jobs = conn.Query<SqlJob>(sql);
            return new SqlJobData { Jobs = jobs, ConnectionString = _connectionString };
        }
    }

    internal SqlStepsData GetById(string jobId)
    {
        string sql = string.Format(@"
                                SELECT 
                                    j.job_id JobId
	                                ,js.step_id as StepId
	                                ,js.step_name as StepName
	                                ,js.subsystem as StepType
	                                ,js.command as StepExecutable
	                                ,js.database_name as ExecuteOnDatabase
	                                ,js.last_run_outcome as LastStatus
	                                ,js.last_run_duration as LastRunDuration
	                                ,js.last_run_date as LastRunDate
	                                ,js.last_run_time as LastRunTime
                                FROM   dbo.sysjobs j
                                JOIN   dbo.sysjobsteps js
                                   ON  js.job_id = j.job_id 
                                JOIN   MASTER.dbo.sysservers s
                                   ON  s.srvid = j.originating_server_id
                                WHERE j.job_id = '{0}'
                                ORDER BY js.last_run_date desc
                                ", jobId);

        using (var conn = new SqlConnection(_connectionString))
        {
            var steps = conn.Query<SqlJobSteps>(sql);
            return new SqlStepsData
            {
                ConnectionString = _connectionString,
                AllSteps = steps
            };

        }
    }

    public IEnumerable<SqlStepsData> GetAllJobs()
    {
        string sql = string.Format(
            @"SELECT 
                js.Job_id as JobId,
                j.name as JobName, 
                j.enabled as IsJobEnabled
                ,js.step_id as StepId
                ,js.step_name as StepName
                ,js.subsystem as StepType
                ,js.command as StepExecutable
                ,js.database_name as ExecuteOnDatabase
                ,js.last_run_outcome as LastStatus
                ,js.last_run_duration as LastRunDuration
                ,js.last_run_date as LastRunDate
                ,js.last_run_time as LastRunTime
            FROM   dbo.sysjobs j
            JOIN   dbo.sysjobsteps js
            ON  js.job_id = j.job_id 
            JOIN   MASTER.dbo.sysservers s
            ON  s.srvid = j.originating_server_id;");

        using (var conn = new SqlConnection(_connectionString))
        {
            var steps = conn.Query<SqlJobSteps>(sql);

            IEnumerable<SqlStepsData> swj =
                from stepsWithJob in steps
                group stepsWithJob by
                new
                {
                    stepsWithJob.JobId,
                    stepsWithJob.JobName
                } into gsc
                select new SqlStepsData()
                {
                    Id = gsc.Key.JobId,
                    Name = gsc.Key.JobName,
                    AllSteps = gsc.ToList()
                };

            return swj;

        }
    }

    public SqlJobWithIdData GetAllJobNames()
    {
        string sql = string.Format(
            @"SELECT 
                js.Job_id as Id,
                j.name as Name
            FROM   dbo.sysjobs j
            JOIN   dbo.sysjobsteps js
            ON  js.job_id = j.job_id 
            JOIN   MASTER.dbo.sysservers s
            ON  s.srvid = j.originating_server_id
			WHERE Name not like 'async%'
			GROUP BY js.Job_id,  j.name
			ORDER BY j.name");

        using (var conn = new SqlConnection(_connectionString))
        {
            var steps = conn.Query<SqlJobWithId>(sql);
            return new SqlJobWithIdData
            {
                ConnectionString = _connectionString,
                Jobs = steps
            };

        }
    }
}