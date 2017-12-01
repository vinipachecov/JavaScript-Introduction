//  Quizz game


// (function (){

// function Question(question, answers, correct) {

//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// Question.prototype.displayQuestion = function(){
//     console.log(this.question);
//     // print the possible answers
//     this.answers.forEach(element => {
//         console.log(element);        
//     });
// }

// Question.prototype.checkAnswer = function (answer) {
//     if ( this.correct === answer){
//         console.log('Correct answer!!');
//     } else {
//         console.log('Wrong answer =/, try again!');
//     }
// }

// var question1 = new Question(
//     'Is JavaScript a nice programming language?',
//     ['Yes','No'],
//     0
// );

// var question2 = new Question(
//     'What is the name of this course\'s teacher?',
//     ['John','Mike','Jonas','Albert'],
//     2
// );

// var question3 = new Question(
//     'What does best describe coding?',
//     ['Boring','Hard','Fun','Tedious'],
//     2
// );

// var questions = [question1, question2, question3];

// // get random number between 0 and 2, for our random questions
// var n = Math.floor(Math.random() * questions.length);
// questions[n].displayQuestion();

// var userAnswer = parseInt(prompt('Please select the correct answer:'));

// questions[n].checkAnswer(userAnswer);

// })();


// Quizz 2.0

(function () {

    function Question(question, answers, correct) {

        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        // print the possible answers
        this.answers.forEach(element => {
            console.log(element);
        });
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        var sc;
        if (this.correct === answer) {
            console.log('Correct answer!!');
            sc = callback(true);
        } else {
            console.log('Wrong answer =/, try again!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function (score) {
        console.log('Your current score is ' + score);
        console.log('--------------------------------------');
    }

    var question1 = new Question(
        'Is JavaScript a nice programming language?', ['Yes', 'No'],
        0
    );

    var question2 = new Question(
        'What is the name of this course\'s teacher?', ['John', 'Mike', 'Jonas', 'Albert'],
        2
    );

    var question3 = new Question(
        'What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'],
        2
    );

    var questions = [question1, question2, question3];

    function score() {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion() {

        // get random number between 0 and 2, for our random questions
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();

        var userAnswer = prompt('Please select the correct answer:');

        if (userAnswer !== 'exit') {

            userAnswer = parseInt(userAnswer);
            questions[n].checkAnswer(userAnswer, keepScore);

            nextQuestion();

        }


    }

    nextQuestion();

})();