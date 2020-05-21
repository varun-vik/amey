using Newtonsoft.Json;
using System.Collections.Generic;

namespace Dashboard.Models
{
    public partial class ApiDataModelMultiple
    {

        [JsonProperty("WSResponse")]
        public WsResponse1 WsResponse { get; set; }
    }
    public partial class ApiDataModelSingle
    {

        [JsonProperty("WSResponse")]
        public WsResponse2 WsResponse { get; set; }
    }

    public partial class WsResponse1
    {
        [JsonProperty("Row")]
        public List<Row> Row { get; set; }
    }

    public partial class WsResponse2
    {
        [JsonProperty("Row")]
        public Row Row { get; set; }
    }

    public partial class Row
    {
        [JsonProperty("Column")]
        public Column[] Column { get; set; }
    }

    public partial class Column
    {
        [JsonProperty("@name")]
        public string Name { get; set; }

        [JsonProperty("#text")]
        public string Text { get; set; }
    }
}