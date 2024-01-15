import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }
  
  

  return (
    <div className="App">
      <div>
        {cash}
      </div>
      <div
        style={{display:'flex'}}
      >
        <button onClick={() => addCash(Number(prompt()))}>
          add cash
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          get cash
        </button>
      </div>
    </div>
  );
}

export default App;
