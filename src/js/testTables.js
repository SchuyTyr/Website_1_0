import * as d3 from "d3";

let url = "https://www.schuylermeyer.com/src/files/TestWebxSheet.csv";
d3.csv(url, function(data) {

      console.log(data);
      /*var parsedCSV = d3.csv.parseRows(data);

      var container = d3.select("body")
          .append("table")

          .selectAll("tr")
              .data(parsedCSV).enter()
              .append("tr")

          .selectAll("td")
              .data(function(d) { return d; }).enter()
              .append("td")
              .text(function(d) { return d; });*/
  });
