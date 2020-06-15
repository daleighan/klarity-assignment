import React, {useEffect, useReducer} from 'react';
import './dashboard.scss';
import dashboardReducer from './dashboardReducer';
import initialState from './initialState';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import Table from '../../components/table/table';

function Dashboard() {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const {
    formIsNew,
    showInput,
    inputForm,
    selectedIdx,
    currentShown,
    sortedBy,
  } = state;

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.publicapis.org/entries');
      const {entries} = await res.json();
      dispatch({type: 'ONLOAD', data: {entries}});
    }
    fetchData();
  }, []);

  useEffect(() => {
    function handleScroll(e) {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 15
      ) {
        dispatch({type: 'MORE'});
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleToggleInput(shouldHide, formIsNew, updateObj, selectedIdx) {
    dispatch({
      type: 'TOGGLE_INPUT',
      data: {
        shouldHide,
        formIsNew,
        updateObj,
        selectedIdx,
      },
    });
  }
  return (
    <div className="dash-holder">
      <Header />
      <div>
        <button
          className="toggle-btn"
          onClick={() =>
            handleToggleInput(
              showInput && formIsNew,
              true,
              initialState.inputForm,
            )
          }>
          Create New
        </button>
        {selectedIdx !== null ? (
          <button
            className="toggle-btn"
            onClick={() =>
              handleToggleInput(
                showInput && !formIsNew,
                false,
                currentShown[selectedIdx],
                selectedIdx,
              )
            }>
            Edit Selected
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
      </div>
      <Table
        currentShown={currentShown}
        selectedIdx={selectedIdx}
        selectRow={(selectedIdx, openEditor) => {
          dispatch({type: 'SELECT_ROW', data: {selectedIdx}});
        }}
        editRow={selectedIdx =>
          handleToggleInput(
            false,
            false,
            currentShown[selectedIdx],
            selectedIdx,
          )
        }
        sortedBy={sortedBy}
        sort={sortedBy => dispatch({type: 'SORT', data: {sortedBy}})}
        deleteRow={idx => dispatch({type: 'DELETE_ROW', data: {idx}})}
      />
    </div>
  );
}

export default Dashboard;
