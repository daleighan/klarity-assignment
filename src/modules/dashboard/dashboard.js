import React, {useEffect, useReducer} from 'react';
import './dashboard.scss';
import dashboardReducer from './dashboardReducer';
import initialState from './initialState';
import Input from '../../components/input/input.js';
import Table from '../../components/table/table.js';

function Dashboard() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const {formIsNew, showInput, inputForm, selectedIdx, currentShown} = state;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.publicapis.org/entries');
      const {entries} = await res.json();
      dispatch({type: 'ONLOAD', data: {entries}});
    }
    fetchData();
    function handleScroll(e) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 5
      ) {
        dispatch({type: 'MORE'});
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListner('scroll', handleScroll);
  }, []);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: 'TOGGLE_INPUT',
            data: {
              shouldHide: showInput && formIsNew,
              formIsNew: true,
              updateObj: initialState.inputForm,
            },
          })
        }>
        New
      </button>
      {selectedIdx !== null ? (
        <button
          onClick={() =>
            dispatch({
              type: 'TOGGLE_INPUT',
              data: {
                shouldHide: showInput && !formIsNew,
                formIsNew: false,
                updateObj: currentShown[selectedIdx],
              },
            })
          }>
          Edit
        </button>
      ) : (
        ''
      )}
      {state.showInput && (
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
        currentShown={currentShown}
        selectedIdx={selectedIdx}
        selectRow={selectedIdx =>
          dispatch({type: 'SELECT_ROW', data: {selectedIdx}})
        }
        deleteRow={idx => dispatch({type: 'DELETE_ROW', data: {idx}})}
      />
    </div>
  );
}

export default Dashboard;
