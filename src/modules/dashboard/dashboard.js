import React, {useEffect, useReducer} from 'react';
import './dashboard.scss';
import dashboardReducer from './dashboardReducer';
import initialState from './initialState';
import Header from '../../components/header/header';
import MidDash from '../../components/mid-dash/mid-dash';
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
    loaded,
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
        document.body.offsetHeight - 50
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
      <Header search={term => dispatch({type: 'SEARCH', data: {term}})} />
      <MidDash
        handleToggleInput={handleToggleInput}
        showInput={showInput}
        formIsNew={formIsNew}
        initialState={initialState}
        selectedIdx={selectedIdx}
        currentShown={currentShown}
        inputForm={inputForm}
        dispatch={dispatch}
        updateForm={updateObj =>
          dispatch({type: 'UPDATE_FORM', data: {updateObj}})
        }
        addRow={newRow => dispatch({type: 'ADD_ROW', data: {newRow}})}
        updateRow={(idx, updatedRow) =>
          dispatch({type: 'UPDATE_ROW', data: {idx, updatedRow}})
        }
      />
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
        loaded={loaded}
      />
    </div>
  );
}

export default Dashboard;
