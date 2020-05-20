$(document).ready(function () {
    $("#homepage").fadeIn("100");
    let name = true;
    let project = false;

    const homepageAppear = function () {
        let w = window.innerWidth;
        if (w > 700){
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeIn("200");
            dragFunction = true;
        } else {
            $(".pic").css("transform", "rotateY(0deg)");
            $(".pic").fadeIn("200");
            $('.bottom').fadeOut("200");
            dragFunction = false;
        }

            //---------------background color change{
        $('.top').css({
            "background-color": "white",
            "box-shadow": "0px -1px 11px 12px white",
            "-webkit-transition": "1s ease-in 0s",
            "-moz-transition": "1s ease-in 0s",
            "-o-transition": "1s ease-in 0s",
            "transition": "1s ease-in 0s"
        }); 
        $('body').css({
            "background-color": "white",
            "-webkit-transition": "1s ease-in 0s",
            "-moz-transition": "1s ease-in 0s",
            "-o-transition": "1s ease-in 0s",
            "transition": "1s ease-in 0s"
        });
        $("#homepage").fadeIn("300");

    }

    //----------------------------------------------------------#about page turn
    let about = false;
    $(".about").click(function () {
        let w = window.innerWidth; 
        if (about == false) {
            //---------------hide homepage
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeOut("200");
            $("#homepage").fadeOut("300");
            $(".dragTitle").fadeOut("300");
            name = false;

            //---------------hide projects
            $("#project").css("transform", "rotateY(90deg)");
            $("#project").fadeOut("200");

            //---------------hide index
            if (index == true) {
                $("#index").slideToggle("200");
                $(".index").html("Index");
                index = false;
            }
            //---------------hide REAL index
            $("#projectindex").fadeOut("150");

            //---------------show about section
            $("#about")
                .delay("200")
                .slideToggle("200");
            $(".about").html("Back");
            about = true;
            //---------------background color change{

             /*   $('.top').css({
                    "background-color": "#c2e5b8",
                    "box-shadow": "0px -1px 11px 12px #c2e5b8",
                    "-webkit-transition": "1s linear 0s",
                    "-moz-transition": "1s linear 0s",
                    "-o-transition": "1s linear 0s",
                    "transition": "1s linear 0s"
                }); 
                $('body').css({
                    "background-color": "#c2e5b8",
                    "-webkit-transition": "1s linear 0s",
                    "-moz-transition": "1s linear 0s",
                    "-o-transition": "1s linear 0s",
                    "transition": "1s linear 0s"
                });*/

        } else {
            $("#about").slideToggle("200");
            homepageAppear();
            $(".about").html("About");
                        //---------------show REAL index
                        $("#projectindex").delay("300").fadeIn("200");
            about = false;
            name = true;
        }
    });

    //----------------------------------------------#index page turn
    let index = false;
    $(".index").click(function () {

    let w = window.innerWidth; 

        if (index == false) {
            //---------------hide homepage
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeOut("200");
            $(".dragTitle").fadeOut("300");
            $("#homepage").fadeOut("300");
            name = false;

            //---------------hide about
            if (about == true) {
                $("#about").slideToggle("200");
                $(".about").html("About");
                about = false;
            }

            //---------------hide projects
            $("#project").css("transform", "rotateY(90deg)");
            $("#project").fadeOut("200");

            //---------------show index section
            $("#index")
                .delay("200")
                .slideToggle("200");
            $(".index").html("Back");
            index = true;

                  //----------------background color change
           /* $('.top').css({
                "background-color": "#d0e6ff",
                "box-shadow": "0px -1px 11px 12px #d0e6ff",
                "-webkit-transition": "1s linear 0s",
                "-moz-transition": "1s linear 0s",
                "-o-transition": "1s linear 0s",
                "transition": "1s linear 0s"
            }); 
            $('body').css({
                "background-color": "#d0e6ff",
                "-webkit-transition": "1s linear 0s",
                "-moz-transition": "1s linear 0s",
                "-o-transition": "1s linear 0s",
                "transition": "1s linear 0s"
            });*/
        } else {
            $("#index").slideToggle("200");
            homepageAppear();
            $(".index").html("Index");
            index = false;
            name = true;


            //---------------bring back project, if applicable
            $("#project").css("transform", "rotateY(90deg)");
            $("#project")
                .delay("300")
                .fadeIn("200");
        }
    });

    //---------------------------------.name homepage turn
    $(".name").click(function () {

            let w = window.innerWidth; 

            $(".projectTitle").css("transform", "rotateY(90deg)");
            //---------------hide index
            if (index == true) {
                $("#index").slideToggle("200");
                $(".index").html("Index");
                index = false;
            }
            //---------------hide about
            if (about == true) {
                $("#about").slideToggle("200");
                $(".about").html("About");
                about = false;
            }
            //---------------bring back homepage
            $(".index").html("Index");

            $(document).delay(300).queue(function (next) {
                window.location.href = "index.html";
                next();
            });

            homepageAppear();
        
        return false;
            name = true;


    });

    //--------------------------------------------------------go to project pages
    //-----------------------------------------check whether clicking or dragging
    // (ONLY redirect to link if the user is CLICKING the image, not dragging it)
    var $body = $('body');
    $body.on('mousedown', function (evt) {
      $body.on('mouseup mousemove', function handler(evt) {
        if (evt.type === 'mouseup') {
          isDragging = false;
        } else {
          isDragging = true;
        }
        $body.off('mouseup mousemove', handler);
      });
    });

    $(".cyberotica").click(function () {
        //---------------hide homepage
        if (isDragging ==false){
            $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "cyberotica.html";
                next();
            });
        return false;
        }
        
    });

    $(".postcursor").click(function () {
        //---------------hide homepage
        if (isDragging ==false){
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "postcursor.html";
                next();
            });
        return false;
        }
    });
    $(".majorarcana").click(function () {
        if (isDragging ==false){
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "majorarcana.html";
                next();
            });
        return false;
        }
    });
    $(".reflections").click(function () {
        if (isDragging ==false){
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "reflections.html";
                next();
            });
        return false;
        }
    });
    $(".spiritmolecule").click(function () {
        if (isDragging ==false){
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "spiritmolecule.html";
                next();
            });
        return false;
        }
    });
    $(".soundscapes").click(function () {
        if (isDragging ==false){
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "foundsoundscapes.html";
                next();
            });
        return false;
        }
    });
    $(".discoveryourair").click(function () {
        if (isDragging ==false){
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "discoveryourair.html";
                next();
            });
        return false;
        }
    });
    $(".reconna").click(function () {
        if (isDragging ==false){
        //---------------hide homepage
        $(".pic").css("transform", "rotateY(90deg)");
        $(".about").css("transform", "rotateY(90deg)");
        $(".pic").fadeOut("200");
        $(document)
            .delay(200)
            .queue(function (next) {
                window.location.href = "reconnatypeface.html";
                next();
            });
        return false;
        }
    }); 

    //--------------document closing bracket—don't touch
});
