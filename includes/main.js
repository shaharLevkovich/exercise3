

function getRandomOpacity() {
    return Math.random();
}

(function() {
    var side=document.getElementById("sideSquare");
    var addSquare=document.getElementById("squared");
    var square = 4;

    for (var i = 0; i < square; i++) {
        createSquare(side);
        console.log("square" + i);
    }

    var count = 0;
    var toAdd=3;
    var addHeight = 250;
    document.getElementById("button").addEventListener("click", add);

    function add() {
        count++;
        if (count > 8 && count%4==1) {
            document.getElementById("squared").style.height = (toAdd * addHeight) + "px";
            toAdd++;
        }
        createSquare(addSquare);
    }

    function createSquare(parent) {
        var newSquare = document.createElement("article");
        parent.appendChild(newSquare);
        var opp = getRandomOpacity();
        newSquare.style.height = "250px";
        newSquare.style.width = "250px";
        newSquare.style.backgroundColor = "black";
        newSquare.style.cssFloat = "left";
        newSquare.style.position = "relative";
        newSquare.style.opacity = opp;

        newSquare.onmouseover = function makeWhite() {
            newSquare.style.opacity = "1.0";
            newSquare.style.backgroundColor = "#ffffff";
        };
        newSquare.onmouseout = function returnColor() {
            newSquare.style.opacity = opp;
            newSquare.style.backgroundColor = "#111111";
        };
    }

})();