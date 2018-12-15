$(document).ready(function(){
  $('.delete-post').on('click', function(e){
    $target = $(e.target);
    const id = $target.attr('data-id');
    $.ajax({
      type:'DELETE',
      url: '/forum/'+id,
      success: function(response){
        alert('Deleting Post');
        window.location.href='/forumhome';
      },
      error: function(err){
        console.log(err);
      }
    });
  });

  $('.upvote').on('click',function(){
     var id = $(this).data('id');
     // console.log(id);
    $.ajax({
      url:'/forum/addupvote/'+id,
      method:"POST"
    });
  });


$('.downvote').on('click',function(){
   var id = $(this).data('id');
   // console.log(id);
  $.ajax({
    url:'/forum/adddownvote/'+id,
    method:"POST"
  });
});
refresh();
});

function refresh(){
  $.ajax({
   url: "/forum/getvotes/",
   contentType: "application/json",
   method: "GET",
   success: function(response) {
     // console.log(response);
     $.each(response, function(index) {
  // console.log(response[index].likes);
  $(".upvote_cnt-" + response[index]._id).first().html( response[index].upvotes );
  $(".downvote_cnt-" + response[index]._id).first().html( response[index].downvotes );
});
   setTimeout(refresh, 500);
 }
});
}
