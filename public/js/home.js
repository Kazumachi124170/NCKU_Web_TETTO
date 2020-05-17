$(document).ready(function() {
//  $('#ajax-form button[type="submit"]').click((event) => {
//    event.preventDefault()

  $.ajax({
    url:"https://luffy.ee.ncku.edu.tw:7575/recommend",
    type:'get',
    dataType: "json",
    contentType: "application/json",
    success: function(data){
        console.log(data.object[0]);
        // $("#post_img").attr("src",data.object[0].post_icon)
        // $("#user_img").attr("src",data.object[0].user_icon)
    }
  });

//    $.get('./login', {
//      username: $('#ajax-form input[name=userName]').val(),
//      password: $('#ajax-form input[name=passWord]').val(),
//    }, (data) => {
//      var obj=JSON.parse(data);
//      //console.log(obj);
//      if(obj.exist==true){
//        alert(obj.text);
//      }else{
//        alert(obj.text);
//      }
//    })

  })
});
