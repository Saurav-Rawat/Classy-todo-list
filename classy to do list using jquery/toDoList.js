 $("ul").on("click","li", function()
 	{
 		$(this).toggleClass("complete");
 	});
 $("ul").on("click","span",function(event)
 	{
 		$(this).parent().fadeOut("1000",function()
 			{
 				$(this).remove();
 			});
 		event.stopPropagation();
 	});
 $("input[type='text'").keypress(function(event)
 	{		if(event.which === 13)
 		{
 			var task= $(this).val();
 			$(this).val("");
 			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+task+"</li>");
 		}
 	});
 $(".fa-plus").click(function()
 {
 	$("input[type='text'").fadeToggle();
 });