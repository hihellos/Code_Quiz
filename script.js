$(document).ready(function() {
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
    
    console.log(gameQuestions.length);
    console.log(JSON.stringify(gameQuestions[0].answer));
    console.log(gameQuestions[0].choices.length);
    
    function showQuestion() {
        $("#question-box").html(gameQuestions[0].question)

        for (i = 0; i < gameQuestions[0].choices.length; i++) {
            var answerBtn = $("<button>");
            
            answerBtn.addClass("answer-buttons");
            answerBtn.attr("data-answer", gameQuestions[0].choices[i]);
            answerBtn.text(gameQuestions[0].choices[i]);
            $("#answer-buttons").append(answerBtn);
        };
    }

    $("#start-time").on("click", function() {
        alert("I hope you like F*R*I*E*N*D*S!")
        
        $("#welcome-container").hide();
        $("#timer-container").show();
        $("#question-container").show();

        startTimer();
        showQuestion();
    });

    // WHEN I answer a question, check answer, if correct +1
    // THEN I am presented with another question
    
    var score = 0;
    var currentQuestion = 0

    $("#answer-buttons").on("click", function() {
    
        if (questions[currentQuestion].choices[i] == question[currentQuestion].answer) {
            score++
        }

        showNextQuestion();
    });

    console.log(score);
    // WHEN I answer a question incorrectly
    // THEN time is subtracted from the clock

    // function wrongAnswer() {
    //     timeRemaining -= 10; 
    //     nextQuestion(); 
    // }

    // WHEN all questions are answered or the timer reaches 0
    // THEN the game is over
    if (questionsRemaining === 0) {
        gameOver();
    }



    // WHEN the game is over
    // THEN I can save my initials and score


    function gameOver() {
        window.location.href="https://hihellos.github.io/Code_Quiz/highscores.html";

        // if new score is greater than 0, show input for initials and score, else hide
    };



});