var windowHeight = $(window).height();
var navBarHeight = $("#navBar").height();

var codeContainerHeight = windowHeight - navBarHeight;

$(".codeContainer").height(codeContainerHeight + "px");

$(".toggleElement").click(function(){
    $(this).toggleClass("selected");
    
    var activeContainer = $(this).html();

    $("#"+activeContainer+"Container").toggle();
    
    var visibleContainer=$(".codeContainer").filter(function(){
        return($(this).css("display")!="none");   
    }).length;
    
    var containerWidth=100/visibleContainer;
    $(".codeContainer").css("width",containerWidth+"%");
});
