function navHidden () {
  return ''
}
function navShown () {
  return `<button type="button" id="back-btn" class="nav-btn">go back</button>
  <button type="button" id="submit-answer" class="nav-btn">go forth</button>`
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
    <input type="radio" id=${QUIZ.optionIndex} class="option" name='option' value="${QUIZ.optionText}">
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