
window.onload = function () 
{
  
  //Load the table using google charts plugin
   google.charts.load('current', {'packages':['table']});
   google.charts.setOnLoadCallback(drawTable);
   google.charts.load('current', {packages: ['corechart', 'line']});
   google.charts.setOnLoadCallback(drawLineChart);
  //Load chart table end=--------------------------------------------------------------------------------
  drawPieChart();
 

var type_Input = document.getElementById("Type");
var amount_Input = document.getElementById("Amount");
var category_Input = document.getElementById("Category");
var transactionDate_Input = document.getElementById("TransactionDate");
var goal_Input = document.getElementById("Goal");
var goalTime_Input = document.getElementById("GoalTime");
var submit_button =document.getElementById("Submit_BTN");
var plan_button = document.getElementById("Plan_BTN");
var profile_button = document.getElementById("Profile_BTN");
var Logout_button = document.getElementById("LogOut_BTN");
var planform = document.getElementById("MP_InputRetangle");

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
    
    location.href = "main_page.html";
  })
  Logout_button.addEventListener("click",function(event)
  {

        location.href = "main_page.html";
   

  })
  profile_button.addEventListener("click",function(event)
  {
    ajax_post();
  })
      
}
function ajax_post()
{
  // Create our XMLHttpRequest object
    $.ajax({
      url: "http://localhost/BackEnd.php",
      type: "GET",
      async: true,
      data:  "",
      success: function(data){
          var resultObj = JSON.parse(data);
          console.log(resultObj);
          
      }
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
  

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', 'Income');
      data.addColumn('number','Spends');
      data.addRows([
        ['0', 0, 1],   ['1', 10, 20],  ['2', 23, 25],  ['3', 17, 8],  ['4', 18, 20],  ['5', 9, 20],
        ['6', 11, 20],  ['7', 27, 10],  ['8', 33, 20],  ['9', 40, 18],  ['10', 32, 17], ['11', 35, 10],
        ['12', 30, 20]
      ]);
      
      
        

      var options = {
        hAxis: {
          title: 'Time'

        },
        vAxis: {
          title: 'Amount'

        },
        backgroundColor: '#FFFFFF',
       
      };

      var chart = new google.visualization.LineChart(document.getElementById('linechart'));
      chart.draw(data, options);

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
