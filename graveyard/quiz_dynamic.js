// const quizData = [
//     {
//         question: "Go to the EEG Suite for 30 minutes",
//         options: [
//             "2 friends",
//             "10 friends"
//         ],
//         opt1: "SmGrp",
//         opt2: "LgGrp"
//     },
//     {
//         question: "Go to the Neuroscience conference with 3 friends",
//         options: [
//             "30 minutes", 
//             "480 minutes"
//         ],
//         opt1: "SmDur",
//         opt2: "LgDur"
//     },
//     {
//         question: "Go to the poster session for 90 minutes",
//         options: [
//             "11 friends",
//             "4 friends",
//         ],
//         opt1: "LgGrp",
//         opt2: "SmGrp"
//     },
// ];

// let currentQuestion = 0;
// let score = 0;
// let timeLeft = 30;
// let timerInterval;
// const questionEl = document.querySelector(".question");
// const optionsEl = document.querySelector(".options");
// const resultEl = document.querySelector(".result");
// const scoreEl = document.getElementById("score");
// const restartBtn = document.querySelector(".restart-btn");
// function loadQuestion() {
//     if (currentQuestion >= quizData.length) {
//         endQuiz();
//         return;
//     }
//     const currentQuiz = quizData[currentQuestion];
//     questionEl.textContent = currentQuiz.question;
//     optionsEl.innerHTML = "";
//     currentQuiz.options.forEach((option) => {
//         const button = document.createElement("button");
//         button.classList.add("option");
//         button.textContent = option;
//         button.onclick = () => checkAnswer(option);
//         optionsEl.appendChild(button);
//     });
// }
// // function checkAnswer(selectedOption) {
// //     if (selectedOption === quizData[currentQuestion].answer) {
// //         score++;
// //     }
// //     currentQuestion++;
// //     loadQuestion();
// // }
// // function startTimer() {
// //     timerInterval = setInterval(() => {
// //         timeLeft--;
// //         timerEl.textContent = timeLeft;

// //         if (timeLeft <= 0) {
// //             endQuiz();
// //         }
// //     }, 1000);
// // }

// document.getElementById("form1").onsubmit=function() {
//     //displays the response DOM element
//    document.getElementById("response").style.display = "block";

//    //resets the DOM element on submit
//    document.getElementById("answer").innerHTML = "";

//    SmGrp = document.querySelector('input[name = "age"]:checked').value;

//    LgGrp = document.querySelector('input[name = "activity"]:checked').value;

//    SmDur = document.querySelector('input[name = "genre"]:checked').value;
   
//    LgDur = document.querySelector('input[name = ""]:checked').value;

//    // initialize score variables
//    SmGrp = 0;
//    LgGrp = 0;
//    SmDur = 0;
//    LgDur = 0;

//    //function to calculate score for each question
//    function eachscore(x){
//    if(x == "SmGrp") { SmGrp = SmGrp + 1}
//    if(x == "LgGrp") { LgGrp = LgGrp + 1}
//    if(x == "SmDur") { SmDur = SmDur + 1}
//    if(x == "LgDur") { LgDur = LgDur + 1}
//    }
//    // for the above function, you could also change the 1 to a variable so you could give more points for certain questions

//    //call function for each question
//    eachscore(eval("SmDur"));
//    eachscore(eval("LgGrp"));
//    eachscore(eval("SmDur"));
//    eachscore(eval("LgDur"));

//    all = [butterfly, rabbit, sloth, swan, chameleon];

//  //get the max score  in the array
//  maxscore = Math.max.apply(Math,all);

//    // object holding scores and feedback
//     score = [{index:0, feedback: "Butterfly"},
//    {index:1, feedback: "Rabbit"},
//    {index:2, feedback: "Sloth"}
//    {index:3, feedback: "Swan"}
//    {index:4, feedback: "Chameleon"}];

//    //figure out which index # holds the max score
//  for(i=0; i<all.length; i++) {
//  if(all[i]==maxscore) {
//    //this gets one answer, the last one it encounters with a match
//    document.getElementById("answer").innerHTML = score[i].feedback;

//    //this version would allow for appending multiple answers; replace statement above
//    //document.getElementById("answer").innerHTML += scores[i].feedback + "; ";
//  }
//  }

// return false; // required to not refresh the page; just leave this here
//     }// end the submit function

// function endQuiz() {
//     questionEl.style.display = "none";
//     optionsEl.style.display = "none";
//     resultEl.style.display = "block";
//     scoreEl.textContent = score;
//     restartBtn.style.display = "block";
// }
// restartBtn.addEventListener("click", () => {
//     currentQuestion = 0;
//     score = 0;
//     questionEl.style.display = "block";
//     optionsEl.style.display = "block";
//     resultEl.style.display = "none";
//     restartBtn.style.display = "none";
//     loadQuestion();
// });
// loadQuestion();
// startTimer();


