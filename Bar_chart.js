// var dataset = [ 5, 10, 20,30,40,50,60,70,80];

// //...............................
//Set the dimensions of the canvas
// var margin = {top: 20, right: 20, bottom: 30, left: 40},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

// // Set the scales for the x, y, and z axes
// var x = d3.scaleLinear().range([0, width]),
//     y = d3.scaleLinear().range([height, 0]),
//    z = d3.scaleOrdinal(d3.schemeCategory10);

// // Define the x, y, and z axes
// var xAxis = d3.axisBottom(x).ticks(7);
//     yAxis = d3.axisLeft(y).ticks(5);
//    zAxis = d3.axisTop(z).ticks(5);

// // Create the canvas and add the axes
// var svg = d3.select("body").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// svg.append("g")
//     .attr("class", "x axis")
//     .attr("transform", "translate(0," + height + ")")
//     .call(xAxis);

// svg.append("g")
//     .attr("class", "y axis")
//     .call(yAxis);

// svg.append("g")
//     .attr("class", "z axis")
//     .call(zAxis);





var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 22, 18, 15, 18, 10 ];//

 var gridMax = Math.sqrt(dataset.length);

 var content = d3.select("#chart");

 //create axis........
// content.selectAll("line").data()
console.log("after");
d3.csv("https://raw.githubusercontent.com/AhmadMobin/D3-Learning/main/prices.csv", function(d) {
  return {
    price: Number(d.price.trim().slice(1))
  }
}).then(function(data) {
  console.log(data)
});







  // we set attributes on our cubes to determine how they are rendered
  var x = 1;
  var y = 1;
  var z = 1;
  var m = 0;
 

// we use d3's enter/update/exit pattern to draw and bind our dom elements
 var myBars = content.selectAll("a-box.bar")
               .data(dataset)
               .enter()
               .append("a-box")
               .classed("bar", true)
               .attr(
                  "position", function(d,i) {
                    x=i % gridMax;
                    z=Math.floor(i/gridMax);
                    y=d/8;
                    m ++;
                    console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
                    return x + " " + y + " " + z;
                    })        
                .attr("height", function(d){return d/4;})
                .attr("width", function(d){return 0.9;})
                .attr("depth", function(d){return 0.9;})
                .attr("color", function(d){
                    var letters = '0123456789ABCDEF'.split('');
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                        color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;});

                   




