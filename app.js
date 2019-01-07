var board = new Array(42).fill(0);

window.onload = function() {
    var b = document.getElementById("Board");
    
    var rows = document.getElementsByClassName("boardRow");

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            $(rows[i]).append('<div data-space='+(i*7+j)+' data-filled='+board[i*7+j]+' class="space col-sm-auto">Test</div>');     
        }
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
