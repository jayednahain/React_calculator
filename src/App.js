import React from 'react';


function App() {
  return (
    <div className="Calculator">
      <div className="display">
        <span>(0)</span>0
      </div>
      <div className="operators">
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>*</button>

        <button>DEL</button>
      </div>
      <div className='digites'>
        <button>.</button>
        <button>=</button>
        <button>0</button>
      </div>
    </div>
  );
}

export default App;
