// #7 HTML5 local storage API
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}




localStorage.setItem("firstName", "Kitsudar");

localStorage.setItem("lastName", "Somchana");

localStorage.setItem("courseName", "ICT4510");

$('.button').click(function () {
	var first = localStorage.getItem("firstName");
	console.log(first);
	var last = localStorage.getItem("lastName");
	console.log(last);
	var course = localStorage.getItem("courseName");
	console.log(course);

	$("#name").append(first + " " + last + " " + course);
});


// #5  Display user's IP address
var ip;
$.ajax({
  type: "GET",  
  url: "https://httpbin.org/get",
  dataType: "json",
  context: document.body,
  async: true,
  success: function(res, stato) {
    ip = res.origin;
    myCallback();
  },
  error: function(res, stato) {
    alert("IP thing didn't work.");
  }
});

function myCallback(){
    // Do whatever you want with ip here.
    console.log(ip);
    $(".footerip").append(ip);
}


// #4 Ajax enabled contact form

 
$(document).ready(function() {
    $('form').submit(function(evt) {
      evt.preventDefault();
      var url = $(this).attr("action");
      var formData = $(this).serialize();
       $.ajax(
       {
       	url : "https://httpbin.org/post",
       	data : formData,
       	type: "POST",
       	success : function(response) {
       		var name = response.form.userName;
       		var email = response.form.email;
       		var message = response.form.message;

       		console.dir(response);
       		$('#ajaxform').hide();
       		$('.successmessage').html("<p>Thanks, "+name+" for contacting me! Your email is: " +email+" Your message: " +message+"</p>")
       		
       	}
       })
    }); 
  }); // end ready






