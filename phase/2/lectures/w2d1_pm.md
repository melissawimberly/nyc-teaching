# Intro to AJAX
Week 2, Monday Lecture

## Ajax Intro
*  Asynchronouse JavaScript and XML
  *  Gives the ability for the client to communicate with the server in the background  *  XML is not really used anymore / traded for JSON.. So really AJAJ
*  Awesome Interaction / Allows for Highly Responsive Front End Apps
*  Web Crawlers (At this time) Do not execute JS. SEO constraint
*  Adds Testing Headaches
*  Adds Debugging Headaches

### Using XMLHttpRequest Object

    function onResponseReceived(){
      console.log( this.responseText ); 
    }

    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onload = onResponseReceived
    ajaxRequest.open("get", "/squirrles/get_all", true);
    ajaxRequest.send();


## Using JQuery

    $.ajax({
      type: "get",
      url:  "/squirrels/get_all",
      data: {},
      success: function(response){
        console.log(response);
      },
      error: function(){
        console.log( "Something Went Wrong" );
      }
    });
 
*  I will teach you the way to execute AJAX request with JQuery. Using a libary often decreases cross browser hiccups.
* Although this is a decreasing concern.

