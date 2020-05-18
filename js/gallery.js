$(document).ready(function () {
    //---------------------------------shorten name on smaller window sizes

    const w = window.innerWidth;
    if (w >= 1000) {
        $(".name").html(
            "Mikki Janower<span class='dot'>&nbsp dot &nbsp</span>Work"
        );
    } else if (w < 1000) {
        $(".name").html("Mikki<span class='dot'>&nbsp dot &nbsp</span>Work");
    } else if (w < 700) {
        $(".name").html("Mikki");
    }

    //---------------------------------do the same thing on window resize
    $(window).resize(function () {
        const w = window.innerWidth;
        if (w >= 1000) {
            $(".name").html(
                "Mikki Janower<span class='dot'>&nbsp dot &nbsp</span>Work"
            );
        } else if (w >= 700) {
            $(".name").html(
                "Mikki<span class='dot'>&nbsp dot &nbsp</span>Work"
            );
        } else {
            $(".name").html("Mikki");
            $(".dot").html("");
        }
    });

    //-----------------------track mouse position on the page
    document.addEventListener("mousemove", function (event) {
        const w = window.innerWidth;
        const x = event.pageX;
        const y = event.pageY;

        //-------------------------photo 3D effect

        $(".pic").each(function () {
            //----------------find the coordinates of each pic individually

            let targetCoords = this.getBoundingClientRect();

            //----------------pinpoint the center of each pic individually

            let targetX = targetCoords.left + this.offsetWidth / 2;
            let targetY = targetCoords.top + this.offsetHeight / 2;

            //-----------change angle for X and Y to turn each pic as the mouse move

            let angleX = (targetY - y) / 30;
            let angleY = (targetX - x) / -30;

            //-----------transform each pic
            if (w >= 700) {
                this.style.transform =
                    "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";
            } else {
                this.style.transform = "rotateX(0deg) rotateY(0deg)";
            }
        });
        //---------------------------------end of mousemove function
    });

    //---------------------------------get rid of 'Janower'
    $(window).resize(function () {
        const w = window.innerWidth;
        if (w >= 1000) {
            $(".name").html(
                "Mikki Janower<span class='dot'>&nbsp dot &nbsp</span>Work"
            );
        } else if (w < 1000) {
            if (w > 700) {
                $(".name").html(
                    "Mikki<span class='dot'>&nbsp dot &nbsp</span>Work"
                );
            } else if (w < 700) {
                $(".name").html("Mikki");
            }
        }
    });

    //------------------------------------------------------------------no scrollbar unless necessary

    //------------------------------------------------------------------to fix media queries
    $(window).resize(function () {
        let width = window.innerWidth;
        $(".querytown").html("Width: " + width + " px");

        //.pic cyberotica label gets smaller
        if (width < 900) {
            $(".cyberotica .labelita").html("Cyberotica");
            if (width < 700) {
                $(".cyberotica .labelita").html(
                    "Cyberotica: Technology & Fetish in Contemporary Art"
                );
            }
        } else if (width >= 900) {
            $(".cyberotica .labelita").html(
                "Cyberotica: Technology & Fetish in Contemporary Art"
            );
        }
    });
    //--------------------document closing bracket, don't touch
});
