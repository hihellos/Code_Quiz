// $(document).ready(function() {
// Game Questions
    var gameQuestions = [
        {
            question: "1. What is Chandler Bing’s middle name?",
            choices: ["Mark", "Muriel", "Marvin", "Melvin"],
            answer: "Muriel"
        }, 
        {
            question: "2. What instrument does Phoebe play?",
            choices: ["Saxophone", "Flute", "Drums", "Guitar"],
            answer: "Guitar"
        }, 
        {
            question: "3. What is Joey’s agent’s name?",
            choices: ["Elena", "Eunice", "Estelle", "Deborah"],
            answer: "Estelle"
        }, 
        {
            question: "4. How many times has Ross been married?",
            choices: ["3 times", "2 times", "1 time", "Never"],
            answer: "3 times"
        }, 
        {
            question: "5. What verb does Ross keep yelling when his friends are helping him move his new couch?",
            choices: ["Pivot!!", "Lift!!", "Turn!!", "Stop!!"],
            answer: "Pivot!!"
        }, 
        {
            question: "6. What color are the kitchen cabinets in Monica’s apartment?",
            choices: ["Purple", "Brown", "Black", "Blue"],
            answer: "Blue"
        }, 
        {
            question: "7. Which character tells his girlfriend he’s moving to Yemen?",
            choices: ["Joey", "Chandler", "Ross", "Mike"],
            answer: "Chandler"
        }, 
        {
            question: "8. Who gets stuck in a pair of leather pants?",
            choices: ["Joey", "Chandler", "Ross", "Mike"],
            answer: "Ross"
        }, 
        {
            question: "9. Which character says “could I be wearing any more clothes?",
            choices: ["Joey", "Chandler", "Ross", "Mike"],
            answer: "Joey"
        }, 
        {
            question: "10. How many pages was Rachel’s letter to Ross?",
            choices: ["15", "18", "5", "28"],
            answer: "18"
        }, 
        {
            question: "11. Janice’s ex-husband owns a company that sells what?",
            choices: ["TVs", "Boats", "RVs", "Mattresses"],
            answer: "Mattresses"
        }, 
        {
            question: "12. Which friend gets her identity stolen?",
            choices: ["Monica", "Rachel", "Phoebe", "Janice"],
            answer: "Monica"
        }, 
    ];

    // GIVEN I am taking a code quiz
    // WHEN I click the start button
    // THEN a timer starts and I am presented with a question
    var timeRemaining = 0; 

    function startTimer() {
        timeRemaining = 60;
        $("#count").text(timeRemaining);

        countdown = setInterval(function () {
            timeRemaining--;
            $("#count").text(timeRemaining);

            if (timeRemaining <= 0) {
                clearInterval(countdown);
                gameOver();
            }
        }, 1000);
    }
    
    console.log(timeRemaining);
    
    $("#start-time").on("click", function() {
        $("#welcome-container").hide();
        $("#timer-container").show();
        $("#question-container").show();

        startTimer();
    });
    // WHEN I answer a question
    // THEN I am presented with another question
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock
    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    // WHEN the game is over
    // THEN I can save my initials and score

    // Game Buttons
    // var startButton = 
    // var QuestionContainer = 
    // var question
    // var answerChoices 
    
 // Countdown Timer
   
    var correct = 0;
    var wrong = 0;

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




// });