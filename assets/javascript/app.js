$(document).ready(function() {

$("button.start").on("click", function() {
    $(".startScreen").hide();
    $("header, .instructions, .score, .timeRemaining, .questions").show();
});
    var numberCorrect = 0;
    var numberIncorrect = 0;
    var numberUnanswered = 0;

    //question and answer object
    var question1info = {
        question:"How many pairs of Uggs do you own?!",
        wrongAnswer1: "Two!",
        wrongAnswer2: "All the colors!",
        correctAnswer: "As many as my boyfriend buys me, duh!"    
    };

    var question2info = {
        question:"What time of day is appropriate for a PSL?!",
        wrongAnswer1: "At Brunch!",
        wrongAnswer2: "After the Club!",
        correctAnswer: "Anytime!"    
    };

    var question3info = {
        question:"Which way does Daylight Savings change during Fall?!",
        wrongAnswer1: "it Falls back, duh!",
        wrongAnswer2: "it Springs forward!",
        correctAnswer: "idk, my iPhone does it for me, duh!"    
    };

    function populateQuestion (DOMlocation, questionXinfo) {
        $(DOMlocation).html(questionXinfo);
    };

    function populateContent (DOMlocation, questionContent) {
        $(DOMlocation).append(questionContent);
    };

    function questionClickHandlers (DOMlocation, inputqX) {
        $(DOMlocation).on("click", "input", function () {
            console.log({Correct:$(this).attr("value")}); 
            $(inputqX).prop("disabled", true);
            });
    };

    function scoreKeeper () {
        $(".totalScore").html("Correct: "+ numberCorrect + ", ");
        $(".totalScore").append("Incorrect: " + numberIncorrect + ", ");
        $(".totalScore").append("Unanswered: " + numberUnanswered);
    };

    function unansweredChecker(questionBlock) {
         if ($(questionBlock).attr("value") === "unchecked") {
        numberUnanswered++;
        scoreKeeper();
        console.log("bananas");
        }
    }; 

    function attributeRemover(inputqX, questionBlock) {
        $(inputqX).on("click", function () {
            $(inputqX).each(function () {
                if ($("input.q1").is(":checked")) {
                    $(questionBlock).removeAttr("value");
                }
            });
        });
    };

    //Question 1
    populateQuestion(".question1", question1info.question);
    populateContent(".Q1wrongAnswer1", question1info.wrongAnswer1);
    populateContent(".Q1wrongAnswer2", question1info.wrongAnswer2);
    populateContent(".Q1correctAnswer", question1info.correctAnswer);
    //Question 1 click handler
    questionClickHandlers (".Q1questions", "input.q1");
    //Question 2
    populateQuestion(".question2", question2info.question);
    populateContent(".Q2wrongAnswer1", question2info.wrongAnswer1);
    populateContent(".Q2wrongAnswer2", question2info.wrongAnswer2);
    populateContent(".Q2correctAnswer", question2info.correctAnswer);
    //Question 2 click handler
    questionClickHandlers(".Q2questions", "input.q2");
    //Question 3
    populateQuestion(".question3", question3info.question);
    populateContent(".Q3wrongAnswer1", question3info.wrongAnswer1);
    populateContent(".Q3wrongAnswer2", question3info.wrongAnswer2);
    populateContent(".Q3correctAnswer", question3info.correctAnswer);
    //Question 3 click handler
    questionClickHandlers(".Q3questions", "input.q3");
    // function notChecked (questionBlock) {
    //     if ($(questionBlock.attr("value")) === "unchecked") {                
    //         numberUnanswered++;
    // }};

    // $(".Q1questions").on("click", "input", function () {
    //     console.log($(this).attr("value")); 
    //     $("input.q1").prop("disabled", true);
    //     });
    
    attributeRemover("input.q1", ".Q1questions")
    attributeRemover("input.q2", ".Q2questions")
    attributeRemover("input.q3", ".Q3questions")


    // $("input").on("click", function () {
    //     $("input.q1").each(function () {
    //         if ($("input.q1").is(":checked")) {
    //             $(".Q1questions").removeAttr("value");
    //         }
    //     });
    // });

    $(".submit").on("click", function(event) {        
        console.log({isChecked: $("input").is(":checked")});
        unansweredChecker(".Q1questions");
        unansweredChecker(".Q2questions");
        unansweredChecker(".Q3questions");        
        $(this).prop("disabled", true);
        // $("input.q1").each(function () {
        //     if ($("input.q1").is(":checked")) {
        //         $(".Q1questions").removeAttr("value");
        //     }
        // });
             // if 
                              
            //     scoreKeeper();
            //         // $(".totalScore").html("Correct: "+ numberCorrect + ", ");
            //         // $(".totalScore").append("Incorrect: " + numberIncorrect + ", ");
            //         // $(".totalScore").append("Unanswered: " + numberUnanswered);
            //    } 
         
        
        
            
        $("input.correct:checked").each(function (){ 
            // console.log({correctValue: $(".correct").is(":checked")});
            if ($(".correct").is(":checked")) {
                numberCorrect++;
                console.log({numberCorrect: numberCorrect});
                scoreKeeper();
                    // $(".totalScore").html("Correct: "+ numberCorrect + ", ");
                    // $(".totalScore").append("Incorrect: " + numberIncorrect + ", ");
                    // $(".totalScore").append("Unanswered: " + numberUnanswered);
            }     
        });

        $("input.answer:checked").each(function() {
            if ($("input.answer").is(":checked")) {
                numberIncorrect++;
                console.log({numberIncorrect: numberIncorrect});
                scoreKeeper();
                // $(".totalScore").html("Correct: "+ numberCorrect + ", ");
                // $(".totalScore").append("Incorrect: " + numberIncorrect + ", ");
                // $(".totalScore").append("Unanswered: " + numberUnanswered);             
            } 

            //  else if ($("input.q1:not(:checked)")) {
                // numberUnanswered++;
                // $(".totalScore").append("Unanswered: " + numberUnanswered);
            // }
        });


        // ($("input:not(:checked").each(function() {
        //     numberUnanswered++;
        //     console.log({numberIncorrect: numberIncorrect});
        //     $(".totalScore").html("Correct: "+ numberCorrect + ", ");
        //     $(".totalScore").append("Incorrect: " + numberIncorrect + ", ");
        //     $(".totalScore").append("Unanswered: " + numberUnanswered);
        // }));
   
    }); //close for Submit.on("click")








}); //close for document.ready