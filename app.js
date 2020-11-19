// Questions etc are located in storage.js

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */


 //TO-DO: 
 // re: resetOptionOrder() 
 // figure out why $('#randomize-answers-checkbox').is(:checked) doesn't work on initialization if checked in string
 // add a history function for answer arrays instead of referencing initQuiz 


/********** LOGIC & GLOBAL FUNCTIONS **********/
//inclusive random generator with range
const rand=(min,max)=>{  
  min=Math.ceil(min) 
  max=Math.floor(max) 
  return Math.floor(Math.random()*(max-min+1))+min 
}

//give each question a random quizOrder position
let scrambleQuizOrder = () => {
  //create an array of slots to choose from, one for every quiz question
  let availableSlots = []
  //set slots in one-based... for referencing available quizOrder positions
  for (let i=1; i<=QUIZ.questions.length; i++) {
    availableSlots.push(i)
  }
  //iterate over quiz questions
  QUIZ.questions.forEach(question => {
    //pick random slot from those available
    let slotIndex = rand(0, availableSlots.length-1)
    //set quizOrder to new randomized position
    question.quizOrder = availableSlots[slotIndex]
    //remove slot, making it unavailable
    availableSlots.splice(slotIndex,1)
    console.log(question.quizOrder)
  })
}

//reset quizOrder to original template order
let resetQuizOrder = () => {
  QUIZ.questions.forEach((question, index) => {
    question.quizOrder = index+1
    console.log(question.quizOrder)
  })
}

//randomize the order of each question's answers array
let scrambleOptionOrder = () => {
  console.log(`before ${QUIZ.questions[1].answers}`)
  //Iterate through every question in QUIZ.questions
  QUIZ.questions.forEach(item => {
    //create an array of slots to choose from
    let answerSlots = []
    //make a slot for each index of answer option
    for (let i=0; i<item.answers.length; i++) {
        answerSlots.push(i)
    }
    //for every answer
    item.answers.forEach((option, index) => {
      //pick random new slot from those available
      let newIndex = rand(0, answerSlots.length-1)
      //remove option from answer array
      item.answers.splice(index, 1)
      //put question in new answer array position
      item.answers.splice(answerSlots[newIndex], 0, option)
      //remove slot, making it unavailable
      answerSlots.splice(answerSlots[newIndex], 1)
    })
  })
  console.log(`after ${QUIZ.questions[1].answers}`)
}

//reset the order of each question's answers array to match the initQuiz template
let resetOptionOrder = () => {
  console.log(`before ${QUIZ.questions[1].answers}`)
  QUIZ.questions.forEach((e, i) => {
    //for each question, copy the corresponding answers from initQuiz
    e.answers = initQuiz.questions[i].answers
  })
  console.log(`after ${QUIZ.questions[1].answers}`)
}

//For referencing properties of the currently displayed question
let currentQuestion = {}



/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

// Start Screen
function generateStartString() {
    console.log("`generateStartString` ran");
    return startScreen();
}

// Current Question
function generateQuestionString() {
  console.log("`generateQuestionString` ran")
  return questionScreen()
}
  function generateOptionsDivString(answers) {
    console.log("`generateOptionsDivString` ran");
    console.log("Iterating and joining radio button elements");
    const items = answers.map((item, index) => {
      QUIZ.optionText = item
      QUIZ.optionIndex = index
      return generateRadio(item)
      // console.log(`answer: ${item}`)
    });
    // console.log(items.join(""))
    return items.join("");
  }
  function generateRadio(item) {
    console.log("Generating radio button DOM element string");
    // console.log(answerRadioEl(item))
      return answerRadioEl(item)
  }

// Feedback Screen
function generateFeedbackString() {
  console.log("`generateFeedbackString` ran");
  return feedbackScreen()
}

// Completion Screen
function generateCompletionString() {
  console.log("`generateCompletionString` ran");
  return completionScreen()
}

// Add Question Screen
function generateAddQuestionString() {
  console.log("`generateAddQuestionString` ran");
  return addQuestionScreen();
}


// Confirm Completion Screen (submit to formspree)
    // Overall score
    // Start over
    // 
// Result Screen
// Add a Question?
// How you compared?

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

// Renders the appropriate page when the page loads.

//renderCurrentScreen
  //if quizStarted !== 1, render quizStartPage
  // else load most recent unanswered question
  function renderCurrentScreen() {
    // render the appropriate screen in the DOM
    console.log('`renderCurrentScreen` ran');
    let currentScreenHTMLString = ''
    if (QUIZ.quizState === 0) {
      currentScreenHTMLString = generateStartString();
    } else if (QUIZ.quizState === 1) { 
      renderQuestionFields()
      currentScreenHTMLString = generateQuestionString(QUIZ);
      //renders the QUIZ variables to be referenced by HTML
    } else if (QUIZ.quizState === 2) {
      renderFeedbackText()
      currentScreenHTMLString = generateFeedbackString(QUIZ);
    } else if (QUIZ.quizState === 3) {
      renderCompletionText()
      currentScreenHTMLString = generateCompletionString(QUIZ);
    } else if (QUIZ.quizState === 4) {
      currentScreenHTMLString = generateAddQuestionString(QUIZ);
    }
    saveQuiz()
      // insert that HTML into the DOM
    $('main').html(currentScreenHTMLString);
    console.log(`HTML Screen injected: ${QUIZ.quizState}`);
  }
  function renderQuestionFields() {
    currentQuestion = QUIZ.questions.find(question => question.quizOrder === QUIZ.currentQuestionNumber)
    renderOptionsDiv()
    QUIZ.currentQuestionText = currentQuestion.question
    console.log('`renderQuestionFields` ran, currentQuestion set')
  }

  function renderOptionsDiv() {
    console.log('`renderOptionsDiv` ran')
    // iterate thru answer options and create a HTML string for each option
    const optionsDivString = generateOptionsDivString(currentQuestion.answers);
    console.log('`optionsDivString` created')
    // $('#answer-radios').html(optionsDivString);
    // insert that HTML into the questionsScreen HTML string
    QUIZ.optionsString = optionsDivString
    
  }
  function renderFeedbackText() {
    console.log(currentQuestion.userAnswer)
    console.log(currentQuestion.correctAnswer)
    if (currentQuestion.userAnswer === currentQuestion.correctAnswer) {
      QUIZ.numCorrect++
      QUIZ.score = Math.round((QUIZ.numCorrect / (QUIZ.numCorrect+QUIZ.numIncorrect))*100)
      QUIZ.feedbackText = `Yes! ${currentQuestion.correctAnswer} is the right choice! Your current score is ${QUIZ.score}.`
    } else {
      QUIZ.numIncorrect++
      QUIZ.score = Math.round((QUIZ.numCorrect / (QUIZ.numCorrect+QUIZ.numIncorrect))*100)
      QUIZ.feedbackText = `We regret to inform you that ${currentQuestion.userAnswer} is wrong. The correct answer is ${currentQuestion.correctAnswer}. Your current score is ${QUIZ.score}.`
    }
  }
  function renderCompletionText() {
    let passed = QUIZ.score >= 66
    passed ? QUIZ.completionHeader="CONGRATULATIONS!!!" : QUIZ.completionHeader="AWWW SHUCKS!!!"
    if (passed) {
      QUIZ.completionFeedback = 'You passed! Your cochlea are on fleek and your species is proud.'
    } else {
      QUIZ.completionFeedback = 'It\'s ok to fail sometimes, recognizing failure is a large part of success. Don\'t be too hard on yourself!'
    }
  }
  



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleQuizApp() {
  console.log('`handleQuizApp` ran')
//activate handling of inputs for start screen
    //controls the number of questions in the quiz
    decrementQuestionAmount()
    incrementQuestionAmount()
    setQuestionAmount()
    //controls the order of questions and answers
    handleQuizOrder()
    //toggles one-chance mode, which affects user experience going forward
    toggleOneChanceMode()
    handleOneChanceMode()
    //launches into the first quiz question.
    startQuiz() 
//activate handling of inputs for question screen
    //handles user answer selection
    handleOptionSelected()
    //handles clicking backward
    handleNavBackBtn()
//activate handling of input for feedback screen
    handleFeedbackAccept()
//activate handling of input for completion screen
    handleRestartQuiz()
    handleAddQuestion()
}
//START~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // AMOUNT
  function decrementQuestionAmount() {
    $('main').on('click', '#minus-questions-btn', function(e){
      console.log('`decrementQuestionAmount` ran')
      //could be a modularize into logic function and called here
      QUIZ.questionAmount > 5 ? QUIZ.questionAmount-- : QUIZ.questionAmount=5
      $('#total-questions-entry').val(`${QUIZ.questionAmount}`)
      console.log(`questionAmount set to ${QUIZ.questionAmount}`)
    })
  }
  function incrementQuestionAmount() {
    $('main').on('click', '#plus-questions-btn', function(e){
      console.log('`incrementQuestionAmount` ran')
      //could be a modularize into logic function and called here
      QUIZ.questionAmount < QUIZ.questions.length ? QUIZ.questionAmount++ : QUIZ.questionAmount = QUIZ.questions.length
      $('#total-questions-entry').val(`${QUIZ.questionAmount}`)
      console.log(`questionAmount set to ${QUIZ.questionAmount}`)
    })
  }
  function setQuestionAmount() {
    $('main').on('input', '#total-questions-entry', function(e){
      console.log('`setQuestionAmount` ran')
      console.log($('#total-questions-entry').val())
      if ($('#total-questions-entry').val() < 5) {
        QUIZ.questionAmount = 5
        $('#total-questions-entry').val(5)
      } else if ($('#total-questions-entry').val() >= QUIZ.questions.length) {
        QUIZ.questionAmount = QUIZ.questions.length
        $('#total-questions-entry').val(QUIZ.questions.length)
      } else {
        QUIZ.questionAmount = $('#total-questions-entry').val()
      }
      console.log(`questionAmount set to ${QUIZ.questionAmount}`)
    })
  }
  // ORDER
  function handleQuizOrder() {
    //Toggle question randomization
    $('main').on('change','#randomize-questions-checkbox', function(){
      if ($(this).is(':checked')) {
        scrambleQuizOrder()
        console.log(`questions order scrambled`)
      } else {
        resetQuizOrder()
        console.log(`questions order normal`)
      } 
    })
    //Toggle question answer array randomization
    $('main').on('change', '#randomize-answers-checkbox',function(){
      if ($(this).is(':checked')) {
        scrambleOptionOrder()
        console.log(`questions order scrambled`)
      } else {
        resetOptionOrder()
        console.log(`answer order returned for pre-existing questions`)
      } 
    })
  }
  //EXPERIENCE
  function toggleOneChanceMode() {
    $('main').on("change", "#one-chance-checkbox", function(){
        QUIZ.oneChanceMode = !QUIZ.oneChanceMode
        console.log(`one chance mode is ${QUIZ.oneChanceMode}`)
    })
  }
  //START QUIZ!!!!
  function startQuiz() {
    $('main').on('click', '#start-btn', function(e){
      console.log('It.Has.Begun. *Crackle-ackle-ackle-ack!!!*')
      //change quiz state
      QUIZ.quizState = 1
      //re-render
      renderCurrentScreen()
    })
  }

//QUESTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //activate handling of inputs for question screen
  function handleOneChanceMode() {
    console.log('`handleOneChanceMode` ran')
    if (QUIZ.oneChanceMode === true) {
      QUIZ.navigationString = navHidden()
    } else {
      QUIZ.navigationString = navShown()
    }
  }
  function handleOptionSelected() {
    $('main').on('click', '.option', function(e){
      let chosenAnswer = $("input[name='option']:checked").val()
      console.log(`\'handleOptionsSelected\' ran, ${chosenAnswer} selected`)
      if (QUIZ.oneChanceMode === true) {
        currentQuestion.userAnswer = chosenAnswer
        QUIZ.quizState = 2
        renderCurrentScreen()
      } else {
        currentQuestion.userAnswer = chosenAnswer
      }
    })
  }
  function handleNavBackBtn() {
    $('main').on('click', '#back-btn', function(e){
      console.log('REWINDING')
      QUIZ.currentQuestionNumber--
      QUIZ.quizState = 1
      renderCurrentScreen()
    })
  }

//FEEDBACK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function handleFeedbackAccept() {  
  $('main').on('click', '#next', function(e){
    if (QUIZ.currentQuestionNumber < QUIZ.questionAmount) {
        console.log('MOVING TO NEXT QUESTION')
        QUIZ.currentQuestionNumber++
        QUIZ.quizState = 1
        renderCurrentScreen()
    } else {
        console.log('MOVING TO COMPLETION SCREEN!')
        QUIZ.quizState = 3
        renderCurrentScreen()
    }
  })
}
//COMPLETION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function handleRestartQuiz() {
  $('main').on('click', '#restart-quiz', function(e){
    console.log('RESTARTING QUIZ')
    QUIZ.quizState= 0
    QUIZ.questionAmount= 5
    QUIZ.currentQuestionNumber= 1
    QUIZ.currentQuestionText= ''
    QUIZ.navigationString= ''
    QUIZ.optionsString= ''
    QUIZ.optionIndex= ''
    QUIZ.optionText= ''
    QUIZ.feedbackText= ''
    QUIZ.numCorrect= 0
    QUIZ.numIncorrect= 0
    QUIZ.score= 0
    QUIZ.completionHeader= ''
    QUIZ.completionFeedback=''
    renderCurrentScreen()
  })
}
function handleAddQuestion() {

}

//activate handling of inputs for question adding screen


// This function will be our callback when the page loads. It's responsible for
// initially rendering the quiz and activating our individual functions
// that handle user input on the start form, current-question form,
// confirm completion screen, and new question submission form.
function handleInit() {
  renderCurrentScreen()
  handleQuizApp()
}

$(handleInit);

