import React, {useReducer, useEffect} from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/dashboard'

const initialState = {
  loaded: false,
  entries: [],
  showInput: false,
  inputForm: {
    isUpdate: false,
    API: '',
    Description: '',
    Auth: '',
    HTTPS: false,
    CORS: '',
    Link: '',
    Category: '',
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'ONLOAD': {
      const {entries} = action.data;
      return {
        ...state,
        loaded: !state.loaded,
        entries,
      };
    }
    case 'TOGGLE_INPUT': {
      return {
        ...state,
        showInput: !state.showInput,
      }
    }
    case 'UPDATE_FORM': {
      const {updateObj} = action.data;
      return {
        ...state,
        inputForm: {
          ...state.inputForm,
          ...updateObj,
        },
      };
    }
    case 'UPDATE_ROW': {
      const {idx, updatedRow} = action.data;
      const temp = [...state.entries];
      temp[idx] = updatedRow;
      return {
        ...state,
        entries: temp,
      };
    }
    case 'ADD_ROW': {
      const {newRow} = action.data;
      return {
        ...state,
        entries: [...state.entries, newRow],
      };
    }
    case 'DELETE_ROW': {
      const {idx} = action.data;
      const temp = [...state.entries];
      temp.splice(idx, 1);
      return {
        ...state,
      };
    }
    default: {
      return {...state};
    }
  }
}

function KlarityApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('%cstate', 'color: red;', state);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.publicapis.org/entries');
      const {entries} = await res.json();
      dispatch({type: 'ONLOAD', data: {entries}});
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
      <Dashboard />
    </div>
  );
}

export default KlarityApp;
