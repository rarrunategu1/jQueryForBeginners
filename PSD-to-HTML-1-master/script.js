
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

var tweet = "<div style='margin: 20px 0; padding: 16px; backround: #eee'>The big fight live: Ham vs Cheese:</div>";

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