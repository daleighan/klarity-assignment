import React, {useReducer, useEffect} from 'react';
import './App.scss';

const initialState = {loaded: false};

function reducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_LOADED':
      return {
        ...state,
        loaded: !state.loaded,
      }
    default:
      return {...state}
  }
};

function KlarityApp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: 'TOGGLE_LOADED'})
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        Here goes the assignment!
        Try creating core components for the assignment based on the mock design. And group it all togethet and build the dashboard.
      </header>
    </div>
  );
}

export default KlarityApp;
