
window.onload = function () 
{
  var chart = new CanvasJS.Chart("chartContainer",
  {
    title:{
      text: "Summary of Spends"
    },
    exportFileName: "Pie Chart",
    exportEnabled: true,
                animationEnabled: true,
    legend:{
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },

    data: [
    {       
      type: "pie",
      showInLegend: true,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} {y}%",
      dataPoints: [
        {  y: 35, name: "Foodh", exploded: true},
        {  y: 20, name: "Commodity"},
        {  y: 18, name: "Clothes"},
        {  y: 15, name: "Luxury"},
        {  y: 5,  name: "Utility Fee"},
        {  y: 7,  name: "Other"}
      ]
  }
  ],creditText:{
    text:""
  }
  });
  chart.render();

  var linechart = new CanvasJS.Chart("chartContainers",
    {
      zoomEnabled: false,
                        animationEnabled: true,
      title:{
        text: "Income Vs Spends"
      },
      axisY2:{
        valueFormatString:"0.0 bn",
        
        maximum: 1.2,
        interval: .2,
        interlacedColor: "#F5F5F5",
        gridColor: "#D7D7D7",      
        tickColor: "#D7D7D7"                
      },
                        theme: "theme2",
                        toolTip:{
                                shared: true
                        },
      legend:{
        verticalAlign: "bottom",
        horizontalAlign: "center",
        fontSize: 15,
        fontFamily: "Lucida Sans Unicode"

      },
      data: [
      {        
        type: "line",
        lineThickness:3,
        axisYType:"secondary",
        showInLegend: true,           
        name: "India", 
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
        name: "China",
        axisYType:"secondary",
        dataPoints: [
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
          legend: {
            cursor:"pointer",
            itemclick : function(e) {
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
              linechart.render();
            }
          }
        });

      linechart.render();
      
google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);
}
function drawTable() 
{
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Salary');
        data.addColumn('boolean', 'Full Time Employee');
        data.addRows([
          ['Mike',  {v: 10000, f: '$10,000'}, true],
          ['Jim',   {v:8000,   f: '$8,000'},  false],
          ['Alice', {v: 12500, f: '$12,500'}, true],
          ['Bob',   {v: 7000,  f: '$7,000'},  true]
        ]);

        var table = new google.visualization.Table(document.getElementById('table_div'));

        table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});

}