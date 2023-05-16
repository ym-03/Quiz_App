const questions = [
  
  {
    question: "Which institution has developed an Artificial Intelligence-based tool -'PIVOT', that can predict cancer-causing genes?", 
    answers: [
      { text: "IIT Delhi", correct: false},
      { text: "IIT Kharagpur", correct: false},
      { text: "NIT Trichy", correct: false},
      { text: "IIT Madras", correct: true},
     ]
  },
  {
    question: " Which country's scientists created the world's fastest camera?", 
    answers: [
      { text: "Canada", correct: false},
      { text: "Italy", correct: false},
      { text: "Sweden", correct: true},
      { text: "Russia", correct: false},
     ]
  },
  {
    question: "Who appoints the Chief Justice of the Supreme Court of India ?", answers: [
      { text: "President", correct: true},
      { text: "Prime Minister", correct: false},
      { text: "Former Chief Justice", correct: false},
      { text: "Citizens of India", correct: false},
     ]
  },
  {
    question: "When was the first general election held in independent India ?", answers: [
           { text: "1947", correct: false},
           { text: "1949", correct: false},
           { text: "1951", correct: true},
           { text: "1952", correct: false},
          ]
  },
  { 
    question: "Which is the Highest Mountain in the World ?",
    answers: [
         { text: "Kanchenjunga", correct: false},
         { text: "K2", correct: false},
         { text: "Mount Everest", correct: true},
         { text: "Dhaulagiri", correct: false},
        ]
     },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while (answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  nextButton.addEventListener("click", nextQuestion);

  if (currentQuestionIndex === questions.length - 1) {
    nextButton.addEventListener("click", endQuiz);
  }
}

function nextQuestion(e) {
    currentQuestionIndex++;
    showQuestion();
}
  

function endQuiz() {
  const endScreen = document.getElementById("end-screen");
  const endMessage = document.getElementById("end-message");
  endScreen.style.display = "block";
  endMessage.innerHTML = "End!";
}


startQuiz();
