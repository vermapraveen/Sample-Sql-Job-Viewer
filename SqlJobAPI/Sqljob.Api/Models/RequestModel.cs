using System;

namespace Sqljob.Api.Models
{
    public class RequestModel
    {
        public Guid JobId { get; set; }
        public string ConnectionString { get; set; }
    }
}
