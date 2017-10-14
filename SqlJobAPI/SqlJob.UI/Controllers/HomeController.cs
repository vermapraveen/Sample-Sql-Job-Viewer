using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SqlJob.UI.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Net.Http.Headers;
using SqlJob.UI.Models;

namespace SqlJob.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                string response = client.GetStringAsync("http://localhost/Sqljob.Api/api/SqlJob/GetAll").Result;
                //string stringData = response.Content.ReadAsStringAsync().Result;
                SqlStepsData data = JsonConvert.DeserializeObject<SqlStepsData>(response);
                return View(data);
            }
        }

        public IActionResult CurrentlyExecutingJobs()
        {
            ViewData["Message"] = "";

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                string response = client.GetStringAsync("http://localhost/Sqljob.Api/api/SqlJob/GetCurrentRunningJobs").Result;
                //string stringData = response.Content.ReadAsStringAsync().Result;
                SqlJobData data = JsonConvert.DeserializeObject<SqlJobData>(response);
                return View(data);
            }
        }

        public IActionResult JobWithSteps()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult GetAllJobs()
        {
            ViewData["Message"] = "Currently all jobs deployed to PROD";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
