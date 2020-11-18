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

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateStartString() {
      console.log("`generateStartString` ran");
      handleStartScreenOptions()
      return StartScreen();
    }

// Current Question
    // what question are we on?
    // provide answer
    // confirm answer
    // go back

// Question Feedback
    // was I right?
    // what was the right answer?
    // why
    // move on button

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
    let currentScreenString = ''
    if (QUIZ.quizState === 0) {
      currentScreenString = generateStartString();
    } else if (QUIZ.quizState === 1) { 
      currentScreenString = generateQuestionString(QUIZ);
    } else if (QUIZ.quizState === 2) {
      currentScreenString = generateCompletionString(QUIZ);
    } else if (QUIZ.quizState === 3) {
      currentScreenString = generateNewQuestionString(QUIZ);
    }
    saveQuiz()
      // insert that HTML into the DOM
    $('main').html(currentScreenString);
    console.log('HTML injected');
  }




/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

//activate handling of inputs for start screen
function handleStartScreenOptions() {
    console.log('`handleStartScreenOptions` ran')
      //controls the number of questions in the quiz
      decrementQuestionAmount()
      incrementQuestionAmount()
      setQuestionAmount()
      // //controls the order of questions and answers
      // toggleQuestionOrder()
      // toggleAnswerOrder()
}
function decrementQuestionAmount() {
  console.log('`decrementQuestionAmount` ran')
  $('.total-questions-controls').on('click','.js-minus-questions-button', function(e){
    // e.preventDefault()
    //could be a modularize into logic function and called here
    // QUIZ.questionAmount > 5 ? QUIZ.questionAmount-- : QUIZ.questionAmount=5
    console.log('decrementing')
  })
}
function incrementQuestionAmount() {
  console.log('`decrementQuestionAmount` ran')
  const curAmt = QUIZ.questionAmount
  const qLen = QUIZ.questions.length
  $('.js-plus-questions-button').on('click', function(e){
    // e.preventDefault()
    //could be a modularize into logic function and called here
    curAmt < qLen? curAmt++ : curAmt = qLen
  })
}
function setQuestionAmount() {
  console.log('`setQuestionAmount` ran')
  $('.js-total-questions-entry').on('change', function(e){
    e.preventDefault()
    console.log(this.text)
    // if ()
  })
}
//activate handling of inputs for question screen

//activates handling of inputs for feedback screen

//activates handling of inputs for completion screen

//activate handling of inputs for question adding screen


// This function will be our callback when the page loads. It's responsible for
// initially rendering the quiz and activating our individual functions
// that handle user input on the start form, current-question form,
// confirm completion screen, and new question submission form.
function handleInit() {
  renderCurrentScreen()
  //global buttons like back/forth
}
// when the page loads, call `renderInit` to initalize everything.


$(handleInit);

