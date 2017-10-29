using Newtonsoft.Json;

namespace Sqljob.Api.Models
{
    public class RequestModel
    {
        [JsonProperty("connectionString")]
        public string ConnectionString { get; set; }
    }
}
