$(document).ready(function(){
  $('#test_teams').click(function(){
    $.ajax({
    url:'/projects/getprojects/',
    method:"GET",
    success:function(response){

      response.forEach(function(project){
          $("#teamname").formSelect();
if($("#teamname option[value='"+project.teamname+"']").length == 0 ){
  $('#teamname').append(

      '<option value='+project.teamname+'>'+project.teamname+'</option>\
      ');

}


    $("#teamname").formSelect();

        console.log(project.teamname);
      });
    }
  });
  })
});
