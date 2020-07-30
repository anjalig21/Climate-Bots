var counter = 0
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (correct == 'true'){
    counter++
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    document.write(counter)
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is the greenhouse gas effect?',
    answers: [
      { text: "Process by which radiation from a planet's atmosphere warms the planet's surface to a temperature above what it would be without this atmosphere.'", correct: true },
      { text: "Process by which the sun is the only star responsible for the excessive heating of the atmosphere and causing disruption in the ozone layer.", correct: false }
    ]
  },
  {
    question: 'How long does it take for a plastic water bottle to degrade?',
    answers: [
      { text: '450 years', correct: true },
      { text: '150 years', correct: false },
      { text: '1 day', correct: false },
      { text: '1000 years', correct: false }
    ]
  },
  {
    question: 'How many animal species become extinct each day?',
    answers: [
      { text: '150', correct: true },
      { text: '10', correct: false },
      { text: '0', correct: false },
      { text: '5', correct: false }
    ]
  },
  {
    question: 'One roundtrip LA – New York flight produces more CO2 than the amount we can emit every year to keep our climate stable.',
    answers: [
      { text: 'True', correct: true },
      { text: 'False', correct: false }
    ]
  }
]