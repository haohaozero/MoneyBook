
window.onload = function () 
{
  //Load the table using google charts plugin
   google.charts.load('current', {'packages':['table']});
   google.charts.setOnLoadCallback(drawTable);
  //Load chart table end=--------------------------------------------------------------------------------
  drawPieChart();
  drawLineChart();

var type_Input = document.getElementById("Type");
var amount_Input = document.getElementById("Amount");
var category_Input = document.getElementById("Category");
var transactionDate_Input = document.getElementById("TransactionDate");
var goal_Input = document.getElementById("Goal");
var goalTime_Input = document.getElementById("GoalTime");
var submit_button =document.getElementById("Submit_BTN");
var plan_button = document.getElementById("Plan_BTN");


  submit_button.addEventListener("click",function(event)
  {
    console.log(amount_Input.value);
    console.log(type_Input.value);
    console.log(category_Input.value);
    console.log(transactionDate_Input.value);
    
  });
  plan_button.addEventListener("click",function(event)
  {
    var goal_value = goal_Input.value;
    var goalTime_value = goalTime_Input.value;
  })
      
}
function drawPieChart()
{
    var chart = new CanvasJS.Chart("piechart",
  {
    title:{ text: "Summary of Spends"},
    exportFileName: "Pie Chart",
    exportEnabled: true,
    animationEnabled: true,
    legend:
    {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },

    data: 
    [{       
      type: "pie",
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} {y}%",
      dataPoints: [
        {  y: 35, name: "Food", exploded: true},
        {  y: 20, name: "Commodity"},
        {  y: 18, name: "Clothes"},
        {  y: 15, name: "Luxury"},
        {  y: 5,  name: "Utility Fee"},
        {  y: 7,  name: "Others"}
      ]}],
    creditText:{text:""}
  });

  chart.render();

}
function drawLineChart()
{
  var linechart = new CanvasJS.Chart("linechart",
    {
      zoomEnabled: false,
                        animationEnabled: true,
      title:{text: "Income Vs Spends" },
      axisY2:
      {
        valueFormatString:"0.0 bn",
        maximum: 1.2,
        interval: .2,
        interlacedColor: "#F5F5F5",
        gridColor: "#D7D7D7",      
        tickColor: "#D7D7D7"                
      },
      theme: "theme2",
      toolTip:{shared: true},
      legend:
      {
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontSize: 15,
        fontFamily: "Lucida Sans Unicode"
      },
      data: 
      [
        {        
          type: "line",
          lineThickness:3,
          axisYType:"secondary",
          showInLegend: true,           
          name: "Income", 
          dataPoints: [
          { x: new Date(2001, 0), y: 0 },
          { x: new Date(2002, 0), y: 0.001 },
          { x: new Date(2003, 0), y: 0.01},
          { x: new Date(2004, 0), y: 0.05 },
          { x: new Date(2005, 0), y: 0.1 },
          { x: new Date(2006, 0), y: 0.15 },
          { x: new Date(2007, 0), y: 0.22 },
          { x: new Date(2008, 0), y: 0.38  },
          { x: new Date(2009, 0), y: 0.56 },
          { x: new Date(2010, 0), y: 0.77 },
          { x: new Date(2011, 0), y: 0.91 },
          { x: new Date(2012, 0), y: 0.94 }
          ]
        },
        {        
          type: "line",
          lineThickness:3,
          showInLegend: true,           
          name: "Spends",
          axisYType:"secondary",
          dataPoints: 
          [
            { x: new Date(2001, 00), y: 0.18 },
            { x: new Date(2002, 00), y: 0.2 },
            { x: new Date(2003, 0), y: 0.25},
            { x: new Date(2004, 0), y: 0.35 },
            { x: new Date(2005, 0), y: 0.42 },
            { x: new Date(2006, 0), y: 0.5 },
            { x: new Date(2007, 0), y: 0.58 },
            { x: new Date(2008, 0), y: 0.67  },
            { x: new Date(2009, 0), y: 0.78},
            { x: new Date(2010, 0), y: 0.88 },
            { x: new Date(2011, 0), y: 0.98 },
            { x: new Date(2012, 0), y: 1.04 }
          ]
        },
      ],
      legend: 
      {
            cursor:"pointer",
            itemclick : function(e)
            {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) 
              {
              e.dataSeries.visible = false;
              }
              else 
              {
                e.dataSeries.visible = true;
              }
              linechart.render();
            }
        }
    });

    linechart.render();

}
function drawTable() 
{
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Type');
        data.addColumn('number', 'Amount');
        data.addColumn('string', 'Category');
        data.addColumn('string', 'Date');
        data.addRows([
          ['Income',  {v: 10000, f: '$'+'10,000'}, 'Clothes','11/8/2017']
          
        ]);

        var table = new google.visualization.Table(document.getElementById('tablelist'));

        table.draw(data, {showRowNumber: true, width: '90%', height: '100%'});
}
