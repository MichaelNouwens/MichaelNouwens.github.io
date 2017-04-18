
// ---------------------------\\
//My Loader
// ---------------------------\\
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000); //a timer is activated to pause the display once a HTML page is ran
}

function showPage() {
    document.getElementById("loader").style.display = "none"; //displays nothing - runs my loader
    document.getElementById("myDiv").style.display = "block"; //displays the content of page - runs my container div

}

// ---------------------------\\
//Paralax mouse - background move display
// ---------------------------\\


var movementStrength, height, width, pageX, pageY, newvalueX, newvalueY;

$(document).ready(function () {
     movementStrength = 25; //how much the background moves
   height = movementStrength / $(window).height(); //same for height 
     width = movementStrength / $(window).width(); //same for width 
    $("body").mousemove(function (myE) {  //Targetting the body tag - once the mouse is moved this function runs - gave my function an argument
        pageX = myE.pageX - ($(window).width() / 2); //calculating the current x value
        pageY = myE.pageY - ($(window).height() / 2); //calculating the current y value
         newvalueX = width * pageX * -1 - 25; //calculating the new x value if you move the mouse
          newvalueY = height * pageY * -1 - 50; //calculating the new y value if you move the mouse
        $('body').css("background-position", newvalueX + "px          " + newvalueY + "px"); //applying the new x and y values to the body tag targetting the position of the background
    });
});


// ---------------------------\\
//My image slide show
// ---------------------------\\

function swapImages(){ //function is named swap images
    var $active = $('#myGallery .active'); //targetting myGallery id 
    var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery img:first'); //trinary operator 
    $active.fadeOut(function(){ //fading out the image
        $active.removeClass('active'); //active - removing the image to the next image
        $next.fadeIn().addClass('active'); //active - adding the new image 
    });
}


$(document).ready(function(){
    // Run our swapImages() function every 5secs
    setInterval('swapImages()', 5000);
})


//-----------------------\\


