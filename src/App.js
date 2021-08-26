import data from './data';
import Question from './Question';
import React, {useState} from "react";

function App() {
  const [questions] = useState(data);

  return (
    <main className='container'>
      <h1>Questions and answers about Login</h1>
      <div className='list'>
        {
          questions.map( q => 
            <Question key={q.id} title={q.title} info={q.info}/>)
        }
      </div>
    </main>
  );
}

export default App;
