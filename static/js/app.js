// @TODO: Complete the following function that builds the metadata panel
 // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    // Use `.html("") to clear any existing metadata
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);



// var sampleData = d3.csv("DataSets/belly_button_metadata.csv", function(error, sampleData) {
//   if (error) return console.warn(error);
//   // forceData.forEach(function(data) {
    
//   }); 

  // console.log(sampleData)

function buildMetadata(data) {
  var url = "/metadata/<sample>" 
  d3.json(url).then(function(response) { 
    console.log(response);
    var data = response;
    d3.select("#sample-metadata") 
      .html("")
      .selectAll("tr")
      .data(data)
      .enter()
      .append("tr")
      .html(function(d) {
        Object.entries(d).forEach(function(key, value) {
          return `<td>${d.sample}</td><td>${d.ETHNICITY}</td><td>${d.GENDER}</td><td>${d.AGE}</td><td>${d.LOCATION}</td><td>${d.BBTYPE}</td><td>${d.WFREQ}</td>`
        });
      });
  });
};
      

  //     .forEach(function(data) {
  //       .
  //     })


  //   response.forEach(function(sampleMetadata) {
  //     var row = panel.append("tr")
  //     Object.entries(sampleMetadata).forEach(function([key, value]) {
  //     var cell = panel.append("td");
  //     cell.text(value);
  //     });
  //   });
  // });

  // d3.select("#sample-metadata")
  //   .html("")
  //   .selectAll("tr")
  //   .data(sampleData)
  //   .enter()
  //   .append("tr")
  //   .html(function(d) {
  //     data.forEach(function([key, value]) {
  //       Object.entries(sampleData)

  //     }
  //     return `<td>${d.date}</td><td>${d.low}</td><td>${d.high}</td>`;
    
  //   });
  // };


buildMetadata();


    // lifeData.forEach(function(data) {
    //   data.GENDER = +data.GENDER;
    //   data.AGE = +data.AGE;
    // });



// };


//   // @TODO: Use `d3.json` to fetch the sample data for the plots
// url = "/samples/<sample>" 
// d3.json(url).then(function(response) {

// }
//     // @TODO: Build a Bubble Chart using the sample data
//     var trace1 = {
//       type: "Bubble",
//       mode: "lines",
//       name: name,
//       x: <VARIABLE FOR DATA>,
//       y: <VARIABLE FOR DATA>,
//       line: {
//         color: "#17BECF"
//       }
//     };

//   var layout = {
//   height: 400,
//   width: 500
//   };


//   var data = [trace1];
// // display plot
//   Plotly.newPlot('plot', data, layout);

// };

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
// function buildCharts(sample) {


// };

// function init() {
//   // Grab a reference to the dropdown select element
//   var selector = d3.select("#selDataset");

//   // Use the list of sample names to populate the select options
//   d3.json("/names").then((sampleNames) => {
//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });

//     // Use the first sample from the list to build the initial plots
//     const firstSample = sampleNames[0];
//     buildCharts(firstSample);
//     buildMetadata(firstSample);
//   });
// }

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildCharts(newSample);
//   buildMetadata(newSample);
// }

// // Initialize the dashboard
// init();
