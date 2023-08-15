"use strict"


/*fix closebutton Booking__model-form-pop-up*/
function BookingModelfixClose(){
    const elements = document.querySelectorAll(".booking__model-close");
    for(const element of elements){
        element.addEventListener("click", function(){
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;
            setTimeout(function(){
                window.scrollTo({top: scrollY, left: scrollX});
            }, 1 );
        } );
    }
}

if (document.readyState === "complete" || document.readyState === "interactive" ){
    setTimeout(BookingModelfixClose, 1);
}else{
    document.addEventListener("DOMContentLoaded", BookingModelfixClose, false);
}