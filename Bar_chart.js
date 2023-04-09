
var dataset = [30,30,36,43,48,59,65,59,54,49,43,29,24,26,37,40,49,58,64,58,56,48,40,23,22,24,36,42,46,57,66,57,54,47,46,26,20,22,32,41,47,56,64,58,57,51,47,22,32,26,33,43,47,55,63,56,54,52,44,24,24,20,34,44,48,59,62,56,53,51,45,23,22,24,36,45,49,54,61,57,52,50,44,22,24,26,32,46,40,59,62,59,57,48,43,29,30,26,34,42,42,57,63,60,50,47,42,30,24,26,36,47,43,57,64,61,52,48,41,31];//
console.log("total length: "+ dataset.length);
 var gridMax =dataset.length/10; //parseInt(Math.sqrt(dataset.length));    //set gridmax value based on year or x co-ordinate
 console.log("total year:" + gridMax);
 var content = d3.select("#chart");

 //create axis........
// content.selectAll("line").data(),
// var data=d3.csv('https://raw.githubusercontent.com/bnk22gzq/Assignment---3-Practical/master/dataset.csv',
//   d3.autoType)
//   .then(function (data) {
//     console.log( data);
//     return data;
//   });


  // we set attributes on our cubes to determine how they are rendered
  var x = 1;
  var y = 1;
  var z = 1;
  var m = 0;
  var colorChangeCounter=0;
 
// Bar color
var letters = '0123456789ABCDEF'.split('');
var color="";
  

// we use d3's enter/update/exit pattern to draw and bind our dom elements
 var myBars = content.selectAll("a-box.bar")
               .data(dataset)
               .enter()
               .append("a-box")
               .classed("bar", true)
               .attr(
                  "position", function(d,i) {
                    x=(i % gridMax)-4.5;
                    z=(Math.floor(i/gridMax))-4.5;
                    y=d/14;
                    m ++;
                    console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z + " i: " + i);
                    return x + " " + y + " " + z;
                    })        
                .attr("height", function(d){return d/7;})
                .attr("width", function(d){return 0.9;})
                .attr("depth", function(d){return 0.9;})
                .attr("color", function(d){
                   
                    if(colorChangeCounter%gridMax==0 || colorChangeCounter==0)
                    {
                      color = '#';
                      for (var i = 0; i < 6; i++) 
                      {
                        color += letters[Math.floor(Math.random() * 16)];
                      }
                     
                    }
                    colorChangeCounter++;
                    return color;});



               
                    

                   




