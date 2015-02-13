$( document ).ready(function() {
    
    $("#submit").click(function() {
 

$('#modalBody').html("<iframe src='https://docs.google.com/forms/d/1QJSUpOCFLZiZgEggnthwhTTz8lI7icZQWze-dy4CoUU/viewform?embedded=true' width='750' height='700' frameborder='0' marginheight='0' marginwidth='0'>Loading...</iframe>");
    	$("#submitModal").modal("show");
    
    });
    
    $('#submitModal').on('hidden.bs.modal', function () {
 $('#modalBody').html("");

  		$(this).data('bs.modal', null);
})
    
    
});