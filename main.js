var windowHeight = $(window).height();
var navBarHeight = $("#navBar").height();

var codeContainerHeight = windowHeight - navBarHeight;

$(".codeContainer").height(codeContainerHeight + "px");