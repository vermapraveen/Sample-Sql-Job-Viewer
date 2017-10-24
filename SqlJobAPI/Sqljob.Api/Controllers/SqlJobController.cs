using System.Collections.Generic;
using helloWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace helloWebApi.Controllers
{
    public class SqlJobController : Controller
    {
        [Route("api/SqlJob/GetCurrentRunningJobs")]
        [HttpGet]
        public SqlJobData GetCurrentRunningJobs()
        {
            var jobRepo = new SqlJobRepo();
            return jobRepo.GetCurrentRunningJobs();
        }

        [Route("api/SqlJob/GetAll")]
        [HttpGet]
        public IEnumerable<SqlStepsData> GetAll()
        {
            var jobRepo = new SqlJobRepo();
            return jobRepo.GetAllJobs();
        }

        [Route("api/SqlJob/GetById/{id}")]
        [HttpGet]
        public SqlStepsData GetById(string id)
        {
            var jobRepo = new SqlJobRepo();
            return jobRepo.GetById(id.ToString());
        }

        [Route("api/SqlJob/GetAllJobs")]
        [HttpGet]
        public SqlJobWithIdData GetAllJobsName()
        {
            var jobRepo = new SqlJobRepo();
            return jobRepo.GetAllJobNames();
        }
    }
}