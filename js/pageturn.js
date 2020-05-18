$(document).ready(function () {
    $("#homepage").fadeIn("100");
    let name = true;

    //----------------------------make top and bottom sections sticky
    $(window).scroll(function () {
        var sticky = $(".sticky"),
            scroll = $(window).scrollTop();

        if (scroll >= 0) sticky.addClass("fixed");
        else sticky.removeClass("fixed");
    });

    $(window).resize(function () {
        let w = window.innerWidth;
        if (w < 700) {
            $(".bottom").removeClass("sticky");
            $(".bottom").removeClass("fixed");
            $(".bottom").css({});
        }
    });

    //----------------------------------------------------------#about page turn
    let about = false;
    $(".about").click(function () {
        if (about == false) {
            //---------------hide homepage
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeOut("200");
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

            //---------------show about section
            $("#about")
                .delay("200")
                .slideToggle("200");
            $(".about").html("Back");
            about = true;
        } else {
            $("#about").slideToggle("200");
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeIn("200");
            $(".about").html("About");
            about = false;
            name = true;

            //---------------bring back project, if applicable
            $("#project").css("transform", "rotateY(90deg)");
            $("#project")
                .delay("300")
                .fadeIn("200");
        }
    });

    //----------------------------------------------#index page turn
    let index = false;
    $(".index").click(function () {
        if (index == false) {
            //---------------hide homepage
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeOut("200");
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
        } else {
            $("#index").slideToggle("200");
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeIn("200");
            $(".index").html("Index");
            index = false;
            name = true;

            //---------------bring back project, if applicable
            $("#project").css("transform", "rotateY(0deg)");
            $("#project")
                .delay("300")
                .fadeIn("200");
        }
    });

    //---------------------------------.name homepage turn
    $(".name").click(function () {
        if (name == false) {
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
            $(".pic").css("transform", "rotateY(90deg)");
            $(".pic").fadeIn("200");
        }
    });

    //--------------------------------------------------------go to project pages

    $(".cyberotica").click(function () {
        //---------------hide homepage
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
    });

    $(".postcursor").click(function () {
        //---------------hide homepage
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
    });
    $(".majorarcana").click(function () {
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
    });
    $(".reflections").click(function () {
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
    });
    $(".spiritmolecule").click(function () {
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
    });
    $(".soundscapes").click(function () {
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
    });
    $(".discoveryourair").click(function () {
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
    });
    $(".reconna").click(function () {
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
    });

    //--------------document closing bracket—don't touch
});
