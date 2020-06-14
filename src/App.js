import React, {useReducer, useEffect} from 'react';
import './App.scss';

const initialState = {loaded: false};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_LOADED':
      const {entries} = action.data;
      return {
        ...state,
        loaded: !state.loaded,
        entries,
      };
    case 'UPDATE_ROW':
      return {
        ...state,
      };
    case 'ADD_ROW':
      return {
        ...state,
      };
    case 'DELETE_ROW':
      return {
        ...state,
      };
    default:
      return {...state};
  }
}

function KlarityApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('%cstate', 'color: red;', state);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.publicapis.org/entries');
      const {entries} = await res.json();
      dispatch({type: 'TOGGLE_LOADED', data: {entries}});
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Here goes the assignment! Try creating core components for the
        assignment based on the mock design. And group it all togethet and build
        the dashboard.
      </header>
    </div>
  );
}

export default KlarityApp;
