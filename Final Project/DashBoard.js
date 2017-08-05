
window.onload = function () 
{
  
  //Load the table using google charts plugin
   google.charts.load('current', {'packages':['table']});
   google.charts.setOnLoadCallback(drawTable);
 
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
    //submit_IE();
    getTableInfo();
  
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
    
  })
 
function getTableInfo()
{
	var check = "0";
	var usernames ="John";
	var datas = {checker:check,username:usernames}

	$.ajax({
      url: "http://localhost/BackEnd.php",
      type: "GET",
      async: true,
      data: datas,
      dataType: "json",

      success: function(data)
      {
          $.each(data, function(i) 
           {
              console.log(data[i]);

    		});
          
      },
      error: function(e){
        console.log(e);
      }
    })


}
function submit_IE()
{
    var check = "1";
    var usernames = "John"
    
  //checker 1 means to insert transaction into database
    var datas = {checker:check,username:usernames,type: type_Input.value,category:category_Input.value,amount:amount_Input.value,date_of_spend: transactionDate_Input.value}
    $.ajax({
      url: "http://localhost/BackEnd.php",
      type: "POST",
      async: true,
      data: datas,
      dataType: "json",
      success: function(data)
      {
          var resultObj = JSON.parse(data);
         // console.log(resultObj);
           
          
      },
      error: function(e){
        console.log(e);
      }
    })
  }     
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
