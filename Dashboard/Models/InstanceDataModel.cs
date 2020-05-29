using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Dashboard.Models
{
    public partial class InstanceDataModel
    {
        [JsonProperty("Data")]
        public List<Datum> Data { get; set; }
    }

    public partial class Datum
    {
        [JsonProperty("eOffice Instances URL")]
        public string EOfficeInstancesUrl { get; set; }

        [JsonProperty("eOffice Instances IP Address")]
        public string EOfficeInstancesIpAddress { get; set; }

        [JsonProperty("Instance Name")]
        public string InstanceName { get; set; }
    }
}