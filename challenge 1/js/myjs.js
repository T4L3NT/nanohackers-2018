 document.getElementById("myButton").onclick = function () {
        location.href = "test.html";
    };
function thankYou() {
	alert("Thank you for answering the survey!");
}
function goneImage(){
	$("img").hide();
}
function seeImage(){
	$("img").show();
}
$("#hide").click( () => {
	goneImage();
	});
$("#show").click( () => {
	seeImage();
	});