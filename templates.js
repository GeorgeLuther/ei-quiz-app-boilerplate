function navHidden () {
  return ''
}
function navShown () {
  return `<button type="button" id="back-btn" class="nav-btn">go back</button>
  <button type="button" id="next" class="nav-btn">go forth</button>`
}
function startScreen() {
    return `<form class="start-screen">
    <h2>Welcome to this quiz!</h2>
    <p>This quiz allows you to hone your understanding of esoteric or subjective musical knowledge. 
    This is a \'closed-notes\' quiz so please remove all musical materials from your desk and screen...
    We\'re watching you!</p>
    <div class="global-quiz-controls">
      <h3>Quiz Options:</h3>

      <div class="start-div total-questions-controls">
        <button type="button" id="minus-questions-btn">-</button>
        
        <label>
            Set the number of quiz questions:
        <input type="text" placeholder="default is 5 questions" name="total-questions-entry" id="total-questions-entry"></input>
        </label>

        <button type="button" id="plus-questions-btn">+</button>
      </div>
  
      <div class="start-div order-controls">
        <label for="randomize-questions-checkbox">randomize question order</label>
        <input type="checkbox" id="randomize-questions-checkbox" name="randomize-questions-checkbox">
  
        <label for="randomize-answers-checkbox">randomize answer order</label>
        <input type="checkbox" id="randomize-answers-checkbox" name="randomize-answers-checkbox">
      </div>
  
      <div class="start-div one-chance-controls">
        <p>In \'one chance mode\' you receive immediate feedback but the stakes are high! 
           When  you make a choice you must stick with it. Hone Your Tone will automatically move on to the next question.
        </p><p>There is no turning back!</p>
        <label for="one-chance-checkbox" class="one-chance-label">
            enable \'one chance\' mode
            <input type="checkbox" id="one-chance-checkbox"
            name="one-chance-checkbox">
        </label>
      </div>    
    </div>
    <button type="button" id="start-btn">Get Crackin'</button>
  </form>`
}
function questionScreen() {
    return `<form class="questionScreen">
    <div class="question-div progress-report">
      <p id="number-correct">Correct: ${QUIZ.numCorrect}<p>
      <p id="current-question">${QUIZ.currentQuestionNumber} / ${QUIZ.questionAmount}<p>
      <p id="number-incorrect">Incorrect: ${QUIZ.numIncorrect}</p>
    </div>

    <h2 id="current-question-text">${QUIZ.currentQuestionText}</h2>

    <div id="answer-radios">
      ${QUIZ.optionsString}    
    </div>

    <div class="question-div navigation">
      ${QUIZ.navigationString}
    </div>
  </form>`
}
function answerRadioEl() {
    return `<label for=${QUIZ.optionIndex} class="option-label">${QUIZ.optionText}
    <input type="radio" id=${QUIZ.optionIndex} class="option" name='option' value="${QUIZ.optionText}" required>
    </label>`
}
function feedbackScreen() {
  return `<section>
            <div class="question-div progress-report">
              <p id="number-correct">Correct: ${QUIZ.numCorrect}<p>
              <p id="current-question">${QUIZ.currentQuestionNumber} / ${QUIZ.questionAmount}<p>
              <p id="number-incorrect">Incorrect: ${QUIZ.numIncorrect}</p>
            </div>

            <h2 id="current-question-text">${QUIZ.currentQuestionText}</h2>

            <p class="feedback">
              ${QUIZ.feedbackText}
            </p>

            <div class="feedback-div navigation">
              <button type="button" id="next" class="nav-btn">next question</button>
            </div>
          </section>`
}

function completionScreen() {
  return `<section>
            <div class="completion-div progress-report">
              <p id="number-correct">Correct: ${QUIZ.numCorrect}<p>
              <p id="current-question">${QUIZ.currentQuestionNumber} / ${QUIZ.questionAmount}<p>
              <p id="number-incorrect">Incorrect: ${QUIZ.numIncorrect}</p>
            </div>

            <h2 class="completed-header">${QUIZ.completionHeader}</h2>

            <p class="feedback">
              You received a final score of ${QUIZ.score}% on this quiz. ${QUIZ.completionFeedback}
            </p>

            <div class="feedback-div navigation">
              <button type="button" id="restart-quiz" class="nav-btn">restart quiz</button>
              <button type="button" id="add-question" class="nav-btn">add a question</button>
            </div>
          </section>`
}

function addQuestionScreen() {
  return `<section>
            <h2>Add a Question</h2>
            <p>The 'Add a Question' screen is currently under development... 
            In future versions users will be able to add a question with up to 6 possible answers.
            This question will then be appended to the client's localStorage and will also be 
            sent as a form to the server or Formspree for review. 
          </p>
          </section>`
}