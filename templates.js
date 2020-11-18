function StartScreen(item) {
    return `<form>
    <h2>Welcome to this quiz!</h2>
    <p>This quiz allows you to hone your understanding of esoteric or subjective musical knowledge. 
    This is a 'closed-notes' quiz so please remove all musical materials from your desk and screen...
    We're watching you!</p>
    <div class="global-quiz-controls">
      <h3>Quiz Options:</h3>

      <div class="start-div total-questions-controls">
        <button type="button" class="minus-questions-button js-minus-questions-button">
          <span class="button-label">-</span>
        </button>
        
        <input type="text" placeholder="number of questions" name="total-questions-entry" class="total-questions-entry js-total-questions-entry"></input>
        
        <button type="button" class="plus-questions-button js-plus-questions-button">
          <span class="button-label">+</span>
        </button>
      </div>
  
      <div class="start-div order-controls">
        <label for="randomize-questions-checkbox">randomize question order</label>
        <input type="checkbox" id="randomize-questions-checkbox" name="randomize-questions-checkbox">
  
        <label for="randomize-answers-checkbox">randomize answer order</label>
        <input type="checkbox" id="randomize-answers-checkbox" name="randomize-answers-checkbox" 
            checked>
      </div>
  
      <div class="start-div one-chance-controls">
        <p>In 'one chance mode you receive immediate feedback but the stakes are high! 
           When  you make a choice you must stick with it. Hone Your Tone will automatically move on to the next question.
          There is no turning back!
        </p>
        <label for="one-chance-checkbox" class="one-chance-label">
            enable one chance mode?
            <input type="checkbox" id="js-one-chance-checkbox"
            name="one-chance-checkbox">
        </label>
      </div>    
    </div>
    <button type="submit" class="start-quiz submit-btn">Get Crackin'</button>
  </form>`
}