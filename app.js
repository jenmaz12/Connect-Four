var board = new Array(42).fill(0);

window.onload = function() {
    var b = document.getElementById("Board");
    var rowOne = document.getElementById("rowOne");
    var rowTwo = document.getElementById("rowTwo");
    var rowThree = document.getElementById("rowThree");
    var rowFour = document.getElementById("rowFour");
    var rowFive = document.getElementById("rowFive");
    var rowSix = document.getElementById("rowSix");

    for (let i = 0; i < 7; i++) {
        $(rowOne).append('<div data-space='+i+' data-filled='+board[i]+' class="space col-sm-auto">Test</div>');     
    }
    for (let i=7; i < 14; i++) {
        $(rowTwo).append('<div data-space='+i+' data-filled='+board[i]+' class="space col-sm-auto">Test</div>');     
    }
    for (let i=14; i < 21; i++) {
        $(rowThree).append('<div data-space='+i+' data-filled='+board[i]+' class="space col-sm-auto">Test</div>');     
    }
    for (let i=21; i < 28; i++) {
        $(rowFour).append('<div data-space='+i+' data-filled='+board[i]+' class="space col-sm-auto">Test</div>');     
    }
    for (let i=28; i < 35; i++) {
        $(rowFive).append('<div data-space='+i+' data-filled='+board[i]+' class="space col-sm-auto">Test</div>');     
    }
    for (let i=35; i < 42; i++) {
        $(rowSix).append('<div data-space='+i+' data-filled='+board[i]+' class="space col-sm-auto">Test</div>');     
    }

    $(".space").on("click", function(){
        if ($(this).attr("data-filled")==0) {
            $(this).attr("data-filled",1);
            $(this).html("Filled");
            alert("You filled the space!")
        }
        else if ($(this).attr("data-filled")==1) {
            alert("You already filled this space. Please choose another.");
        }
        else {
            alert("The computer has filled this space already. Please choose another.");
        }
    })
};
