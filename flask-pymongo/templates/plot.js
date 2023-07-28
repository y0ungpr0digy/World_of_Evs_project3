// Initialized arrays
let category = []
let region = []
let powertrain = []
let year = []
let value = []
let unit = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  category.push(row.pair);
  region.push(row.region);
  powertrain.push(row.powertrain);
  year.push(row.year);
  value.push(row.value);
  unit.push(row.unit);
}
// Trace1 for the Sales Data
let trace1 = {
  x: region,
  y: value,
  text: "World",
  type: "bar"
};
// Trace 2 for the USA Data
let trace2 = {
  x: region=["USA"],
  y: value,
  text: region,
  name: "USA",
  type: "bar"
};
// Create data array
let data = [trace1, trace2];
// Apply a title to the layout
let layout = {
  title: "Sales by Region vs USA",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
