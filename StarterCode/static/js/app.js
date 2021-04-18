
// Using D3 to import data
d3.json("data/samples.json").then(data => {
  console.log(data);

    // filter samples to element 940
  
    let mySelect = d3.select("#selDataset");
    
    data.names.forEach(element => {
      mySelect.append("option").attr("value", element).text(element);
      
    })

})


// Bar Chart
// * Use `sample_values` as the values for the bar chart.
// * Use `otu_ids` as the labels for the bar chart.
// * Use `otu_labels` as the hovertext for the chart.













// var trace1 = {
//     x: ,
//     y: ,
//     mode: 'markers',
//     marker: {
//       size: [40, 60, 80, 100]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('myDiv', data, layout);