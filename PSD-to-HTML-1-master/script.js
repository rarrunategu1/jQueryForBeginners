
/*element selector
$("h3").css({border: "3px solid blue"});


class selector
$(".wrapper").css({border: "3px solid red"});

ID selector
$("#clients").css({border: "3px solid yellow"});*/

/* first and last 
$("header nav li:first").css({border: "2px solid red"});
$("header nav li:last").css({border: "2px solid red"});*/

/* first-child and last-child
$("#contact ul:first").css({border: "2px solid red"});
$("#contact ul:last").css({border: "2px solid red"});*/

/* even
$("header nav li:even").css({border: "2px solid blue"});*/

/* odd
$("header nav li:odd").css({border: "2px solid yellow"});*/

/* not
$("section:not('#contact')").css({border: "2px solid green"}); //This is saying that I want the css style change for  all the section that do not have the id of contact
*/

/*less than
$("#social-nav li:lt(3)").css({border: "2px solid blue"}); //this will get me the li in the social nav id that are less than 3(positional - zero based)*/

/*greater than
$("#social-nav li:gt(2)").css({border: "2px solid blue"});*/

/*atrribute filter
$("div[class]").css({border: "2px solid pink"}); //this will add the border to any div with a class*/
//you can even do this with $("img[alt]")

/*attribute with specific value
$("img[alt=quote]").css({border: "2px solid purple"}); //will pull the img with an alt attribute equal to quote*/

/*next
$("#contact-methods").next().css({border: "3px solid red"}); //grabs an element and gives us the next element in line in the html structure
*/
/*next
$("#social-nav").prev().css({border: "3px solid blue"}); //this one get the previous tag
*/
/*next
$(".banner-title").parent().css({border: "3px solid pink"}); //this one gets the parent of the banner title class.  use parents() and you'll get all the parents of that element
*/
/*next
$("#social-nav").children().css({border: "3px solid green"});  //this gets the children of the social-nav id
*/
/*next
$("#contact").find(".facebook").css({border: "3px solid purple"}); //this one is going into the ID and asking to find a facebook class and give that a border
*/
/*closest
$("#social-nav").closest(".wrapper").css({border: "3px solid orange"});//it goes up the DOM to find the nearest parent which has a wrapper class
*/
/*
$("#contact-methods").css({border: "2px solid red"}).next().css({border: "2px solid green"}).closest("section").css({border: "2px solid blue"});//you can put these on seperate lines per element to make it more readable
*/

//var tweet = "<div style='margin: 20px 0; padding: 16px; backround: #eee'>The big fight live: Ham vs Cheese:</div>";

//$("#tweets div").append(tweet);// adds the tweet variable to the #tweets div at the end of it
//$("#tweets div").prepend(tweet); // adds the tweet variable to the #tweets div at the beginning of it
//$("#tweets div p").before(tweet);
//$("#tweets div p").before(tweet);
//$("#tweets div").html(tweet); //replaces the tweets div with the tweet variable info
//$("#tweets div p").text(tweet); // this will actually replace the div p with the tweet variable completely.  YOu have to change the variable so that there is no code but only text in it for this feature

/*ADDING & CHANGING CONTENT

.append() adds content to bottom of element
.prepend() adds content to the top of element
.before() adds content before element
.after() adds content after element
.html() changes the whole html of the element
.text() changes the text of an element */

/*$("section").wrap("<div>"); //wraps every section tag individually in a div tag
$("section").unwrap(); //you don't need to put in the div tag because it'll just remove it's immediate parent element automatically
$("section").wrapAll("<div>"); //wraps all of the section together in one div
*/

/*
wrap() - wraps all matched elements individually
unwrap() - unwraps all matched elements
wrapAll() - wraps all elements combined with 1 single element
*/

//lets work it on a button
//create some variables:

/*var wrapper = "<div class='wrapper'>";
var button = $(".button");
var wrapped = true;

button[0].onclick = function(){
  if (wrapped){
    $("section").unwrap();
    wrapped = false;
    button.text("wrap");
  } else {
    $("section").wrapAll(wrapper);
    wrapped = true;
    button.text("unwrap");
  }
};
*/
//removing content

//$(".button").empty(); //empties what's inside the button
/*$("#points-of-sale").empty();

$(".button").remove(); //removes the entire button
$("#contact img").remove(); //removes the entire image
*/
/*
.empty() - empties the inner HTML of an element
.remove() - removes the element completely*/

//CHANGING ATTRIBUTES

//$("#contact img").removeAttr("alt"); //removes the attribute
//$("#contact img").attr("alt", "location"); //changes the alt to location
//console.log($("#contact img").attr("alt")); //will read print out the alt attribute


/*
.removeAttr() removes an atttribute completely
.attr() can read or set any attribute */

//CONTROLLING CSS

//console.log($("#social-nav").css("position")); //Check css properties already given - you can remove console.log unless you want to see your result in the console
//console.log($("#social-nav").css("position", relative));  //changes the value of position to relative
//console.log($("#social-nav").css("position", relative).css("left", "100px").css("color", "red")); //this keeps changing css in a chaining method. you can go on and on

//if you're changing a lot of values, instead of making a long, hard to read chain, just pass through an object to the CSS method

/*$("#social-nav").css({
  "top": "-400px",
  "left": "150px",
  "opacity": "0.5",
  "border-top": "4px solid red" //notice how it looks like an object inside of css
}); */ 

//WORKING WITH CLASSES

//remove class
//$("header .wrapper").removeClass("wrapper"); //get the class of wrapper in the header tag and removes it

//add class
//$("header > div").addClass("wrapper"); //this means, get the div directly under the header and give it a class of wrapper.

//toggle class
//note - css file has .open{ height: auto : !important;
//note - index file has style = "height: 0; overflow: hidden"> on line 42 of js file
//now we want to click the button and toggle the classes

//grab the button
//var button = $("#lead-banner a");

//unwrap it by specifying which object you want in that array button[0]
/*button[0].onclick = function() {
 $("#points-of-sale").toggleClass("open");
return false; //stops the anchor tag from removing the button by default 
}; */

//BINDING EVENTS - OFF AND ON

//We'll bind some events to li tags so when someone clicks it, it will highlight
// grab the li tags and store into a var

/*var myLis = $("#points-of-sale li");
myLis.on("click", function() {
  $(this).css({"background": "pink"});
  myLis.off("click"); //unbinds the click so if you click one it turns pink but another one being clicked doesn't work
  
}); */

//EVENT HELPERS
/*jQuery allows us to turn this:
$("#lead-banner").on("click", function(){
  
}); into this: */
/*$("#lead-banner").click(function(){ //using .dblclick will give the alert on a double click
  alert("you clicked me");
  $("#lead-banner").off("dblclick"); //unbinds the doubleclick
});
*/
//Link to a list of events/event helpers - https://www.w3schools.com/jquery/jquery_ref_events.asp
 
//DOCUMENT READY FUNCTION

/* $(document).on("ready", function(){
  
});
  $(document).ready(function(){
  
});

  $(function(){
  
});

All three above functions are the same with $(function(){
  
}); as the shortest possible option */

/*$(function(){
  
});

//WINDOW ON LOAD EVENT

$(window).on("load", function(){ //will load the page after the images are ready
  
}) //shorthand would be $(window).load(function() */


//EVENTOBJECT
/*$(document).ready(function(){
  $("*").on("click", function(e){  // ("*") will grab every element on the page, e is the event object
   console.log(e.target); //brings back the target or element that I clicked.
   console.log("The event type is: " + e.type); //will print out what the event type is
   console.log("x co-ordinate of the event is: " + e.pageX); //gives the X coordinate of where you clicked in px form
   console.log("y co-ordinate of the event is: " + e.pageY); //gives y coordinate of where you clicked
   e.stopPropagation(); //will stop the event from bubbling up so that you get the event type of the first element only
  }); //
  });
  
  //X and Y coordinates are good for an interactive game, in case you want to check where the users clicked.
*/

//JQUERY ANIMATIONS

//built in low level animation
/*$(function(){
function complete() {
    alert("Animation complete");
}

$("section > h2").on("click", function(){
  $(this).animate({"width" : "500px", "height" : "100px"}, 1000, 
  "linear", complete);  //can only animate properties that have a numerical value.  font-family is not something you can change
 // the second parameter, 1000 is the timing it takes in it's animation.  The third parameter takes swing or linear which is about the velocity of the animation, throughtout the animation.
 //4th parameter is a function

});
});*/

//FADING ELEMENTS IN AND OUT
/*$(function(){
  $("section > h2").on("click", function(){
    $(this).animate({"opacity" : "0.5"});  // change opacity of h2 
  });
});*/

// instead of using the animate above we can use .fadeOut Method
/*$(function(){
  $("section > h2").on("click", function(){
    $(this).fadeOut(2000).fadeIn(500).fadeTo(1000, 0.2);  //will fade out and then fade in. the numbers are the time it takes to fade in or out.
  }); //fadeTo takes 2 parameters.  first is the time and 2nd is the opacity
});  

//if you fadeTo 200, 0.2 and chain another fadeTo 200, 0.8 and keep chaining those two over and over again it cause a flash look
*/

//HIDE AND SHOW ELEMENTS

/*$(function(){
  $("section > h2").on("click", function(){
    $(this).hide(1000).show(1000); // just adding hide(); will remove the element.
    //hide(1000); will hide it in 1 second by zooming it to the left and away
  });
});
*/
//toggle
/*
$(function(){
  $("img[alt=map]").on("click", function(){
    $("section > h2").toggle(1000); // //toggle(1000) of the h2 element also makes it disappear in the code above
    //this code will make the h2 button disappear when the map is clicked
  });
}); */

//SLIDING ELEMENTS
//they do not slide up or down,  they just hide thing in an upward or downward fashion

/*$(function(){
  $(".slide-button-up").on("click", function(){
    $("#lead-banner").slideUp(); //you can enter number in slide up or down for seconds to perform animation, the 2nd parameter can take a function
  });
});


$(function(){
  $(".slide-button-down").on("click", function(){
    $("#lead-banner").slideDown();
  });
}); 

$(function(){
  $(".slide-button-up").on("click", function(){
    $("#lead-banner").slideToggle(); //will do the opposite animation when clicked again.
  });
});
*/

//FADING ANIMATION ON A BLOCK WITH QUOTES
//We will grab the quote, fade it out and put a new one and fade that one and put another.


/*$(function(){
  
  var allQuotes = $("blockquote");
  var currentQuote = 0;
  
  function changeQuote(){
    $(allQuotes[currentQuote]).fadeOut(200, function(){
      
    
    if(currentQuote == allQuotes.length -1) {  //allQuotes.length-1 is to consider all quotes because it's based on position starting with 0
      currentQuote = 0;  //this will begin the quotes from the beginning when it's done going through all the quotes
    } else {
      currentQuote++; //this will continue going through the quotes till it's at the last one
    }
    $(allQuotes[currentQuote]).fadeIn(200);
    
  
  });
  }
  //to call it the regular javascript below will work.
  //quoteTimer has a setInterval to changeQuote every 3 seconds
  var quoteTimer = setInterval(changeQuote, 3000);
});
*/

//CLICK TO EXPAND ANIMATION EXAMPLE

/* <li>
                        <img src="images/cs-1.png" alt="web design">
                        <h3>Web Design</h3>
                        <p>quatis alique mos et aut occae cum, veliquaspit quo quam, si idem reprorisqui doluptatur accum si sunt ut officiisto enecab id et aut es et laboribusam endi rerum as minullorent officiatum non cuscium quuntem</p>
                    </li>
                    
*/

//Hide the p tags in the li element, and have an onclick function that shows and hides them.

/*$(function(){
  
  var items = $("#points-of-sale li");
  items.on("click", function(){  //this binds the items to the click event
  $(this).find("p").slideToggle(5000);
    
  })
}); */

//USING PLUGINS TO EXTEND JQUERYS USAGE

$(document).ready(function(){
  
  $(".rslides").responsiveSlides();
  
});



/*notes - research jQuery UI for:
datepickers
draggable elements
sortable elements
resizeable elements, and more

jQuery with AJAX
-communicates with a server and load data into a page without refreshing
  google maps
  traffic updates
  
jQuery Plugins
-Other great plugins available
-how to create your own plugins.

*/