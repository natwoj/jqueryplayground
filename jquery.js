            $(document).ready(function() {
                $("button").addClass("animated shake");
             $(".well").addClass ("animated bounce");
             $("#target3").addClass ("animated fadeOut");
             $("#target1").css("backgroundColor","red");
             $("#target4").html("<em>#target4</em>")
             $("#target6").remove();
             $("#target2").appendTo("#right-well");
             $("#target5").clone().appendTo("#left-well");
             $("#target1").parent().css("backgroundColor","red");
             $("#right-well").children().css("color","orange");
             $(".target:nth-child(2)").addClass("animated bounce");
             $(".target:even").addClass("animated shake");
             $("body").addClass("animated hinge");
            });