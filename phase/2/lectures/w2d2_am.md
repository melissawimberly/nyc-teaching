# JQuery, The DOM, and Events 

## JQuery Selectors
*  Tags / IDs / Classes
*  Chaining
 
## Some Easy Methods
*  Iterating
*  Hide / Show with toggle
*  Adding/Removing Items

## Events / Callbacks
The On Method : Focus on the method def / compare to ruby 

    $(selector).on( event, callback )

Can be called on any of these [events](http://api.jquery.com/category/events/)

    ##### view.html    
    <div class="btn-container">
      <a id="logout" href="#" class="btn">logout</a>
    </div>

    #### application.js
    $(document).ready(function(){

      $('a#logout').on('click',callback); 

    });    

What is a callback?

* A function that is executed :How do we pass a function?: When the calling method chooses to do so.

Demo function creation / passing / execution

    var myCallback = function(){
      $('.btn-container').append( "<div class='hello'>Hello Squirrels 2015</div>" );
    };      

    myCallback(); 

    function myArgumentIsAFunction( theFunction ){
      theFunction(); 
    }

    myArgumentIsAFunction( myCallback ); 

We can save time by using an anonymous function for non logic heavy or complex actions.

    function myArgumentIsAnAnonymousFuncion( function(){
      $('.btn-container').append( "<div class='hello'>Hello Squirrels 2015</div>" );
    });

:When should we use a named function vs. an Anonymous function?:

Back to the example, When we click Logout; we want to remove all of the divs with the class='hello'

    ##### view.html    
    <div class="btn-container">
      <a id="logout" href="#" class="btn">logout</a>
    </div>

    #### application.js
    $(document).ready(function(){

      $('a#logout').on('click',function(){
        $('.hello').remove();
      }); 

    });    


:What might be good to put inside 'click' events?:
