import React, {useEffect, useReducer} from 'react';
import './dashboard.scss';
import dashboardReducer from './dashboardReducer';
import initialState from './initialState';
import Input from '../../components/input/input.js';
import Table from '../../components/table/table.js';

function Dashboard() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.publicapis.org/entries');
      const {entries} = await res.json();
      dispatch({type: 'ONLOAD', data: {entries: entries.slice(0, 10)}});
    }
    fetchData();
  }, []);
  
  const {formIsNew, inputForm, selectedIdx, entries} = state;
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: 'TOGGLE_INPUT',
            data: {
              formIsNew: true,
              updateObj: initialState.inputForm,
            },
          });
        }}>
        New
      </button>
      {selectedIdx ? (
        <button
          onClick={() =>
            dispatch({
              type: 'TOGGLE_INPUT',
              data: {formIsNew: false, updateObj: entries[selectedIdx]},
            })
          }>
          Edit
        </button>
      ) : (
        ''
      )}
      {!state.showInput ? (
        <div />
      ) : (
        <Input
          formIsNew={formIsNew}
          fields={inputForm}
          selectedIdx={selectedIdx}
          updateForm={updateObj =>
            dispatch({type: 'UPDATE_FORM', data: {updateObj}})
          }
          addRow={newRow => dispatch({type: 'ADD_ROW', data: {newRow}})}
          updateRow={(idx, updatedRow) =>
            dispatch({type: 'UPDATE_ROW', data: {idx, updatedRow}})
          }
        />
      )}
      <Table
        entries={entries}
        selectedIdx={selectedIdx}
        selectRow={selectedIdx =>
          dispatch({type: 'SELECT_ROW', data: {selectedIdx}})
        }
        editRow={(idx, item) =>
          dispatch({
            type: 'TOGGLE_INPUT',
            data: {formIsNew: false, updateObj: item, selectedIdx: idx},
          })
        }
        deleteRow={idx => dispatch({type: 'DELETE_ROW', data: {idx}})}
      />
    </div>
  );
}

export default Dashboard;
