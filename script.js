$(document).ready(function() {
    var correct = 0;
    var wrong = 0;



// Countdown Timer
    $("#startTime").on("click", function() {
        var counter = 90;
        setInterval(function() {
            counter--;
            if (counter >= 0) {
                span = document.getElementById("count");
                span.innerHTML = counter;
            }
            if (counter === 0) {
                alert("Quiz(time) is over");
                clearInterval(counter);
            }
        }, 1000);
        console.log(counter)
    });
})