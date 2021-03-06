const quizData = [
  {
  question: "What is a mollusk?",
  a: "Donkey",
  b: "Almond",
  c: "fish",
  d: "crab",
  correct: "d",
  },
  {
  question: "What is XinFin?",
  a: "Ripple token",
  b: "Satoshi's brother",
  c: "Hybrid Blockchain",
  d: "JavaScript framework",
  correct: "c",
  },
  {
  question: "The wort is what stage of beer making?",
  a: "Beginning",
  b: "Middle",
  c: "End",
  d: "Not at all",
  correct: "a",
  },
  {
  question: "Finnish: Who let the doggs out...",
  a: "You",
  b: "Me",
  c: "A cat",
  d: "Who, who, who, who, who?",
  correct: "d",
  },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}


function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer

  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}


submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2>You answered correctly at ${score}
      /${quizData.length} questions<h2>

      <button onclick="location.reload()
      ">Reload</button>
      `
    }
  }
})
