updatePlots = (data, id) => {
  let sample = data.samples.filter(sample => sample.otu_ids === id);

  // Bubble Chart Data
  let x_bubble = sample.otu_ids; 
  let y_bubble = sample.sample_values; 
  let label_bubble = sample.otu_labels;



// Bubble chart
  var trace1 = {
    x: x_bubble,
    y: y_bubble,
    mode: 'markers',
    marker: {
      color: [x_bubble],
      size: [y_bubble]
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'OTU ID',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data, layout);
// Bubble Chart End



// Bar Chart Data
// Slicing the top ten OTUs as they are already displayed in descending order

  var sliced = sample.otu_ids.slice(0, 10)
  let y_bar = sample.otu_lables; 
  let x_bar = sample.sample_values; 



// Bar Chart
  var trace2 = {
    x: x_bar,
    y: y_bar,
    type: "bar"
  };

  var data = [trace2];

  var layout = {
    title: "Top Ten OTUs Found in the Individual",
    xaxis: { title: "Values" },
    yaxis: { title: "OTU ID"}
  };


  Plotly.newPlot("bar", data, layout);
  // Bar Chart End



}



handleChange = (data) => {
  let id = d3.event.target.value; 
  updatePlots(data, id)
}



d3.json("data/samples.json").then(data => {
  console.log(data);
  
    let mySelect = d3.select("#selDataset");
    
    data.names.forEach(element => {
      mySelect.append("option").attr("value", element).text(element);
      
    })

    mySelect.on("change", () => handleChange(data))

})















