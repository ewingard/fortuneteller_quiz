const quizData = [
    {
        quesNum: "I",
        question: "Go to the EEG Suite for 120 minutes",
        options: [
            "2 friends",
            "10 friends"
        ],
        opt1: "SmGrp", //config 1
        opt2: "LgGrp"
    },
    {
        quesNum: "II",
        question: "Go to the Neuroscience conference with 4 friends",
        options: [
            "30 minutes",
            "480 minutes"
        ],
        opt1: "SmDur", // config 1
        opt2: "LgDur"
    },
    {
        quesNum: "III", 
        question: "Go to the poster session for 90 minutes",
        options: [
            "11 friends",
            "4 friends"
        ],
        opt1: "LgGrp", // config 2
        opt2: "SmGrp"
    },
    {
        quesNum: "IV",
        question: "Go to the B-RAD Lab with 12 friends",
        options: [
            "540 minutes",
            "10 minutes"
        ],
        opt1: "LgDur", // config 2
        opt2: "SmDur",
    },
    {
        quesNum: "V",
        question: "Go to Chicago for 4 days",
        options: [
            "4 friends",
            "20 friends"],
        opt1: "SmGrp", //config 1
        opt2: "LgGrp"
    },
    {
        quesNum: "VI",
        question: "Go to Comic Sans for 60 minutes", 
        options: [
            "11 friends",
            "3 friends"],
        opt1: "LgGrp", // config 2
        opt2: "SmGrp"
    },
    {
        quesNum: "VII",
        question: "Go to the Symposium for 75 minutes", //Q7
        options: ["10 friends",
        "2 friends"],
        opt1: "LgGrp", //config 2
        opt2: "SmGrp"
    },
    {
        quesNum: "VIII",
        question: "Go to the SANS Social with 1 friend", //Q8
        options: ["360 minutes",
        "30 minutes"],
        opt1: "SmDur", //config 1
        opt2: "LgDur"
    }
];

// 4 of each config, counterbalancing Opt1/Opt2.

let currentQuestion = 0;
let score = { SmGrp: 0, LgGrp: 0, SmDur: 0, LgDur: 0 };
const fortunes = {
    Sloth: { SmGrp: 1, LgGrp: 0, SmDur: 1, LgDur: 0 },
    Butterfly: { SmGrp: 0, LgGrp: 1, SmDur: 0, LgDur: 1 },
    Rabbit: { SmGrp: 0, LgGrp: 1, SmDur: 1, LgDur: 0 },
    Swan: { SmGrp: 1, LgGrp: 0, SmDur: 0, LgDur: 1 },
    Chameleon: { SmGrp: 0, LgGrp: 0, SmDur: 0, LgDur: 0 }  // Special case: requires equal scores
};

const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const resultEl = document.querySelector(".result");
const scoreEl = document.getElementById("fortune");
const learnBtn = document.querySelector(".learn-btn");

function loadQuestion() {
    if (currentQuestion >= quizData.length) {
        endQuiz();
        return;
    }

    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = ""; // Clear previous options

    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.onclick = () => updateScore(currentQuiz[`opt${index + 1}`]);
        optionsEl.appendChild(button);
    });
}

function updateScore(option) {
    score[option]++;

    // Move to the next question
    currentQuestion++;
    loadQuestion();
}

function calculateFortune() {
    let maxScore = -1;
    let selectedFortune = "";

    // First, check if all scores are equal (for Chameleon fortune)
    const allScoresEqual = 
        score.SmGrp === score.LgGrp && 
        score.SmGrp === score.SmDur && 
        score.SmGrp === score.LgDur;

    if (allScoresEqual) {
        selectedFortune = "Chameleon";  // If all scores are equal, assign Chameleon
    } else {
        // If not all scores are equal, proceed with normal fortune calculation
        for (let fortune in fortunes) {
            let scoreSum = 0;
            for (let key in score) {
                scoreSum += score[key] * fortunes[fortune][key];
            }
            if (scoreSum > maxScore) {
                maxScore = scoreSum;
                selectedFortune = fortune;
            }
        }
    }

    return selectedFortune;
}

const fortuneLinks = {
    Sloth: "https://www.b-radlab.com/sloth.html",
    Butterfly: "https://www.b-radlab.com/butterfly.html",
    Rabbit: "https://www.b-radlab.com/rabbit.html",
    Swan: "https://www.b-radlab.com/swan.html",
    Chameleon: "https://www.b-radlab.com/chameleon.html"
};


function endQuiz() {
    const fortune = calculateFortune();
    questionEl.style.display = "none";
    optionsEl.style.display = "none";

    // Show result button
    resultEl.style.display = "block";
    scoreEl.textContent = calculateFortune();
    learnBtn.style.display = "block";

    learnBtn.onclick = () => {
        window.open(fortuneLinks[fortune], "_blank");
    };    
}

loadQuestion();

document.addEventListener('DOMContentLoaded', function () {
    const introVideo = document.getElementById('intro-video');
    const videoContainer = document.getElementById('video-container');
    const quizContainer = document.querySelector('.quiz-container');
    const overlay = document.getElementById('overlay'); // Just in case you're using this

    if (!introVideo) {
        console.error("intro-video not found!");
        return;
    }

    introVideo.addEventListener('ended', function () {
        // Hide the video container
        videoContainer.style.display = 'none';

        // Show the quiz container
        quizContainer.style.display = 'block';

        // Optional: hide overlay if it exists
        if (overlay) {
            overlay.classList.add('hidden');
        }
    });
});
