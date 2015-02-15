$(document).ready(function() {

$("#openModal").click(function() {

$("#myModal").modal('show');

});

	$("#submit").click(function() {
        $('#boxAlert').html('');
		$('#emailAlert').html('');
		
		var text = $("#comment").val();
		var email = $("#email").val();
	
		if(text == "") {
	      $('#boxAlert').html('<div class="alert alert-danger" role="alert">You need to fill out the comment box above before submitting</div>');
		  
		   if(email != "") {
		
		   if(!validateEmail(email)) {
		    $('#emailAlert').html('<div class="alert alert-danger" role="alert">You need to enter a valid email address</div>');
			return;
		  }		

		}
		  return;
		}
		
		  
		  if(email != "") {
		
		   if(!validateEmail(email)) {
		      $('#emailAlert').html('<div class="alert alert-danger" role="alert">You need to enter a valid email address</div>');
			return;
		  }		

		}
		
		//send date to server
		
		// entry.784094184	test

// entry.203616030	email@email.com

// 

// window.open ('https://docs.google.com/forms/d/1QJSUpOCFLZiZgEggnthwhTTz8lI7icZQWze-dy4CoUU/formResponse?entry.784094184=TEST&entry.203616030=TEST#','_self',false)



		$.ajax({
                url: "https://docs.google.com/forms/d/1QJSUpOCFLZiZgEggnthwhTTz8lI7icZQWze-dy4CoUU/formResponse",
                data: {"entry.784094184" : text, "entry.203616030" : email},
                type: "POST",
                dataType: "xml",
                statusCode: {
                    0: function (){
 
                    
                    },
                    200: function (){
                     
                       
                    }
                }
            });
	
		$('#boxAlert').html('');
		$('#emailAlert').html('');
		$("#comment").val("");
		$("#email").val("");
		
		$("#myModal").modal('hide');
		
		if(email == "") {
		
		  $('#finalAlert').html('<div class="alert alert-success" role="alert">Thanks for the comment!!</div>');		

		} else {
		
		  $('#finalAlert').html('<div class="alert alert-success" role="alert">Thanks for the comment!! We will get back to you soon.</div>');		

		}
		
	});


 
});