import React, {useEffect, useReducer} from 'react';
import './dashboard.scss';
import dashboardReducer from './dashboardReducer';
import initialState from './initialState';
import Input from '../../components/input/input.js';
import Table from '../../components/table/table.js';

function Dashboard() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  console.log('%cState:', 'color: red;', state);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.publicapis.org/entries');
      const {entries} = await res.json();
      dispatch({type: 'ONLOAD', data: {entries}});
    }
    fetchData();
  }, []);

  return (
    <div>
      {!state.showInput ? (
        <button
          onClick={() => {
            dispatch({
              type: 'TOGGLE_INPUT',
              data: {formIsNew: true},
            });
            dispatch({
              type: 'UPDATE_FORM',
              data: {updateObj: initialState.inputForm},
            });
          }}>
          New
        </button>
      ) : (
        <Input
          data={state.formData}
          updateForm={updateObj =>
            dispatch({type: 'UPDATE_FORM', data: {updateObj}})
          }
        />
      )}
      <Table />
    </div>
  );
}

export default Dashboard;
