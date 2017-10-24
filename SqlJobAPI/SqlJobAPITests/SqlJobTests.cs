using helloWebApi.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Newtonsoft.Json;
using System.Linq;
using System.Net.Http;
using Xunit;

namespace SqlJobAPITests
{
    public class SqlJobTests
    {
        [Fact]
        public async void ShouldAbleToGetAllSqlJobsWithSteps()
        {
            var builder = new WebHostBuilder()
                .UseContentRoot(@"C:\workarea\sqlJob2\sqljob\SqlJobAPI\Sqljob.Api")
                .UseStartup<Sqljob.Api.Startup>()
                .UseApplicationInsights();

            TestServer testServer = new TestServer(builder);
            HttpClient client = testServer.CreateClient();

            var response = await client.GetAsync("api/SqlJob/GetAll");
            // Fail the test if non-success result
            response.EnsureSuccessStatusCode();

            // Get the response as a string
            string allJobsString = await response.Content.ReadAsStringAsync();

            SqlStepsData sqlJobs = JsonConvert.DeserializeObject<SqlStepsData>(allJobsString);

            // Assert on correct content
            Assert.True(sqlJobs.AllSteps.Count() > 0);
        }


        [Fact]
        public async void ShouldAbleToGetAllSqlJobsNamesOnly()
        {
            var builder = new WebHostBuilder()
                .UseContentRoot(@"C:\workarea\sqlJob2\sqljob\SqlJobAPI\Sqljob.Api")
                .UseStartup<Sqljob.Api.Startup>()
                .UseApplicationInsights();

            TestServer testServer = new TestServer(builder);
            HttpClient client = testServer.CreateClient();

            var response = await client.GetAsync("api/SqlJob/GetAllJobs");
            // Fail the test if non-success result
            response.EnsureSuccessStatusCode();

            // Get the response as a string
            string allJobsString = await response.Content.ReadAsStringAsync();

            SqlJobWithIdData sqlJobs = JsonConvert.DeserializeObject<SqlJobWithIdData>(allJobsString);

            // Assert on correct content
            Assert.True(sqlJobs.Jobs.Count() > 0);
        }

        [Fact]
        public async void ShouldAbleToGetSingleSqlJobById()
        {
            string dmiJobId = "54DC4D41-43D4-44DC-AAE5-074C5EC83C19";
            var builder = new WebHostBuilder()
                .UseContentRoot(@"C:\workarea\sqlJob2\sqljob\SqlJobAPI\Sqljob.Api")
                .UseStartup<Sqljob.Api.Startup>()
                .UseApplicationInsights();

            TestServer testServer = new TestServer(builder);
            HttpClient client = testServer.CreateClient();

            var response = await client.GetAsync("api/SqlJob/GetById/" + dmiJobId);
            // Fail the test if non-success result
            response.EnsureSuccessStatusCode();

            // Get the response as a string
            string allJobsString = await response.Content.ReadAsStringAsync();

            SqlStepsData sqlJobs = JsonConvert.DeserializeObject<SqlStepsData>(allJobsString);

            // Assert on correct content
            Assert.True(sqlJobs.AllSteps.Count() == 9);
        }
    }
}
