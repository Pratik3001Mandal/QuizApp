import './App.css';
import {useState} from 'react';
import questions from './sampleData.json';

function App() {

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [result, setresult] = useState(false);
  const [score,setscore] = useState(0)

  const optionSelected = (isCorrect) => {
    if(isCorrect){
      setscore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setcurrentQuestion(nextQuestion);
    }else{
      setresult(true);
    }
  }

  const findPercentage = () => {
    return (score/questions.length)*100;
  }

  return (
    <div className="App">
      {!result ? <div className="quiz-container">
        <div className="question-number">
          <h3>Question of <span className="question-num-value"></span>  
              <span className="total-questions">{currentQuestion + 1}/{questions.length}</span>
          </h3>
        </div>
        <div className="question">
          {questions[currentQuestion].questionText}
        </div>
        <div className="options">
          {questions[currentQuestion].answerOptions.map((elem) => {
            return <div key={elem.id} className="option1" onClick={()=>optionSelected(elem.isCorrect)}>{elem.answerText}</div>
          })}
        </div>
      </div> :
      <div className="result-container quiz-over">
          <div className="box">
              <h1>{score > 3 ? "Good Job!" : "Better luck next time!"}<br />
                  You got <span className="correct-answers">{score}</span> out of
                  <span className="total-questions2"> {questions.length}</span> answers correct.
                  <br/>
                  That is <span className="percentage">{findPercentage()}%</span>
              </h1>
          </div>
      </div>}
    </div>
  );
}

export default App;
