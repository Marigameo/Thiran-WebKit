$(document).ready(function(){
	 $.ajax({
   url: "/projects/get_1st_yr_projects",
   contentType: "application/json",
   method: "GET",
   success: function(response) {
    console.log(response);
    console.log(response.length);

   	var tbl=$("<table/>").attr("id","mytable");
$("#div1").append(response);
for(var i=0;i<response.length;i++)
{
    var tr="<tr>";
    var td1="<td>"+response[i]["id"]+"</td>";
    var td2="<td>"+response[i]["name"]+"</td>";
    var td3="<td>"+response[i]["color"]+"</td></tr>";
    
   $("#mytable").append(tr+td1+td2+td3); 
  
}




 }
});


});