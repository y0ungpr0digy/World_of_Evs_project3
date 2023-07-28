let category1 = []
let region1 = []
let powertrain1 = []
let year1 = []
let value1 = []
let unit1 = []



// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  category1.push(row.pair);
  region1.push(row.region);
  powertrain1.push(row.powertrain);
  year1.push(row.year);
  value1.push(row.value);
  unit1.push(row.unit);
}



var trace4 = {
x: year1,
y: value1,
  mode: 'markers',
  type: 'scatter'
};

var trace5 = {
x: year1,
y: value1,
  mode: 'lines',
  type: 'scatter'
};

var trace6 = { x: year1, y: value1,
  mode: 'lines+markers',
  type: 'scatter'
};

let data1 = [trace4, trace5];

Plotly.newPlot('myDiv', data1);
