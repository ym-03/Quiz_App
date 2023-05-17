const questions = [
  
  {
    question: "When was the first general election held in independent India ?", answers: [
           { text: "1947", correct: false},
           { text: "1949", correct: false},
           { text: "1951", correct: true},
           { text: "1952", correct: false},
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
    question: "Which is the Highest Mountain in the World ?",
    answers: [
         { text: "Kanchenjunga", correct: false},
         { text: "K2", correct: false},
         { text: "Mount Everest", correct: true},
         { text: "Dhaulagiri", correct: false},
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
      question: "Which institution has developed an Artificial Intelligence-based tool -'PIVOT', that can predict cancer-causing genes?", 
      answers: [
        { text: "IIT Delhi", correct: false},
        { text: "IIT Kharagpur", correct: false},
        { text: "NIT Trichy", correct: false},
        { text: "IIT Madras", correct: true},
       ]
    },
    {
      question: "Which city is known as the Silicon Valley of India?", 
      answers: [
        { text: "Chennai", correct: false},
        { text: "Bengaluru", correct: true},
        { text: "Hyderabad", correct: false},
        { text: "Pune", correct: false},
       ]
    },
    {
      question: "Which Indian e-commerce company was acquired by Walmart in 2018?", 
      answers: [
        { text: "Flipkart", correct: true},
        { text: "Amazon", correct: false},
        { text: "Nykaa", correct: false},
        { text: "Meesho", correct: false},
       ]
    },
    {
      question: "Which Indian city hosts the largest tech festival in Asia, called TechSparks?", 
      answers: [
        { text: "Delhi", correct: false},
        { text: "Mumbai", correct: false},
        { text: "Ahmedabad", correct: false},
        { text: "Bengaluru", correct: true},
       ]
    },
    { 
      question: "What is the most widely used programming language for web development?",
      answers: [
           { text: "C#", correct: false},
           { text: "Swift", correct: false},
           { text: "JavaScript", correct: true},
           { text: "Go", correct: false},
          ]
       },
       { 
         question: "What is the most popular version control system used by developers for tracking changes in code among them?",
         answers: [
              { text: "Git", correct: true},
              { text: "Darcs", correct: false},
              { text: "Bazaar", correct: false},
              { text: "Perforce", correct: false},
             ]
          },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
document.getElementById('score').innerHTML = score;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;

  if (questionNo <= questions.length){
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
  } else {
      questionElement.innerHTML = "Quiz Ended! <p><em> Thank you for attempting the quiz.</em></p>";
  }
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
    score++;
    document.getElementById('score').innerHTML = score;
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
}

function nextQuestion(e) {
    currentQuestionIndex++;

    showQuestion();
}

startQuiz();
