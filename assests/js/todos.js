 //to check off a li
$("ul").on("click", "li", function(){
//if li is gray turn it black vice versa and cross oit check too
// if($(this).css(color)==="rgb(128,128,128)"){
// 	$(this).css({
// 		color:"black",
// 		textDecoration:"none"
// 		});
// 	}
// else{
// 	$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 	});
// 	}
$(this).toggleClass("complete");
 });
 //to delete a li
$("ul").on("click","span", function(event){
// to avoid bubble up to other elements{span-li-ul-id-body} we get an object event to use the methods
$(this).parent().fadeOut(500,function(){
	$(this).remove(); // working with the li with that span
});
event.stopPropagation();
});
//to add new
$("input=[type='text']").keypress(function(event){
 if(event.which===13){
 	var todoText=$(this).val(todoText);
 	$(this).val("");
 	$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText+ "</li>");
 }
 });

