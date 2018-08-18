
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




