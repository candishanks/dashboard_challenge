updatePlots = (data, id) => {

  console.log(data)

  let sample = data.samples.filter(sample => sample.id === id)[0];

  console.log(sample)


  // Bubble Chart Data
  let x_bubble = sample.otu_ids; 
  let y_bubble = sample.sample_values; 
  let label_bubble = sample.otu_labels;
  console.log(x_bubble)
  console.log(y_bubble)


// Bubble chart
  var bubble_data = [{
    x: x_bubble,
    y: y_bubble,
    mode: 'markers',
    text: label_bubble,
    marker: {
      color: x_bubble,
      size: y_bubble
    }
  }];
  
  
  var bubble_layout = {
    title: 'OTU ID',
    showlegend: false,
  };
  
  Plotly.newPlot("bubble", bubble_data, bubble_layout);

// Bubble Chart End



// Bar Chart Data
// Slicing the top ten OTUs
  var bar_otu_ids = sample.otu_ids.slice(0, 10).map(x => `${x}`).reverse()
  let bar_otu_labels = sample.otu_labels.slice(0, 10).reverse(); 
  let bar_sample_values = sample.sample_values.slice(0, 10).reverse(); 



// Bar Chart
  var bar_data = [{
    x: bar_sample_values,
    y: bar_otu_ids,
    text: bar_otu_labels,
    type: "bar",
    orientation: "h",
  }];

  var bar_layout = {
    title: "Top Ten OTUs Found in the Individual",
    xaxis: { title: "Values" },
    yaxis: { title: ""}
  };


  Plotly.newPlot("bar", bar_data, bar_layout);
  // Bar Chart End
}

//  // Metadata Display
// updatePanel = (data, id) =>{
//   let metadata = data.metadata.filter(sample => sample.id === id)[0]
//   var panel = d3.select("#sample-metadata"), 

//   // pass in data being stored in metadata, using object entries to add each key and value pairs to the panel (similar to creating a table) panel.append.text
// }

// Updates plots upon selection in the drop down menu
handleChange = (data) => {
  let id = d3.event.target.value; 
  updatePlots(data, id)
  updatePanel(data, id)
}


// Pull in data & creating drop down 

d3.json("data/samples.json").then(data => {
  console.log(data);


  
    let mySelect = d3.select("#selDataset");
    
    data.names.forEach(element => {
      mySelect.append("option").attr("value", element).text(element);
      
    })

    // initial plots
    updatePlots(data, data.names[0])
    updatePanel(data, data.names[0])

    mySelect.on("change", () => handleChange(data))

})















