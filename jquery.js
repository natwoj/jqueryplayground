            $(document).ready(function() {
            $("button").addClass("animate__animated animate__bounce");
            $(".well").addClass ("animate__animated animate__bounce");
            $("#target3").addClass ("animate__fadeOut");
            $("#target1").css("backgroundColor","blue");
            $("#target4").html("<b>#target4</b>")
            $("#target2").appendTo("#right-well");
            $("#target5").clone().appendTo("#left-well");
            $("#target1").parent().css("backgroundColor","yellow");
            $("#right-well").children().css("color","orange");
            $(".target:nth-child(2)").addClass("animate__bounce");
            $(".target:even").addClass("animate__shake");
            $("body").addClass("animate__animated animate__hinge")
            });
