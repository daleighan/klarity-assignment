import React, {useEffect, useReducer} from 'react';
import './dashboard.scss';
import dashboardReducer from './dashboardReducer';
import initialState from './initialState';
import Header from '../../components/header/header';
import MidDash from '../../components/mid-dash/mid-dash';
import Table from '../../components/table/table';
import debounce from '../../utils/debounce';

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

  async function fetchData() {
    const res = await fetch('https://api.publicapis.org/entries');
    const {entries} = await res.json();
    dispatch({type: 'ONLOAD', data: {entries}});
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleScroll(e) {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      dispatch({type: 'MORE'});
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function search(term) {
    dispatch({type: 'SEARCH', data: {term}});
  }

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

  function updateForm(updateObj) {
    dispatch({type: 'UPDATE_FORM', data: {updateObj}});
  }

  function addRow(newRow) {
    dispatch({type: 'ADD_ROW', data: {newRow}});
  }

  function updateRow(idx, updatedRow) {
    dispatch({type: 'UPDATE_ROW', data: {idx, updatedRow}});
  }

  function selectRow(selectedIdx) {
    dispatch({type: 'SELECT_ROW', data: {selectedIdx}});
  }

  function editRow(selectedIdx) {
    handleToggleInput(false, false, currentShown[selectedIdx], selectedIdx);
  }

  function deleteRow(idx) {
    dispatch({type: 'DELETE_ROW', data: {idx}});
  }

  function sort(sortedBy) {
    dispatch({type: 'SORT', data: {sortedBy}});
  }

  return (
    <div className="dash-holder">
      <Header search={debounce(search, 500)} />
      <MidDash
        handleToggleInput={handleToggleInput}
        showInput={showInput}
        formIsNew={formIsNew}
        initialState={initialState}
        selectedIdx={selectedIdx}
        currentShown={currentShown}
        inputForm={inputForm}
        dispatch={dispatch}
        updateForm={updateForm}
        addRow={addRow}
        updateRow={updateRow}
      />
      <Table
        currentShown={currentShown}
        selectedIdx={selectedIdx}
        selectRow={selectRow}
        editRow={editRow}
        sortedBy={sortedBy}
        sort={sort}
        deleteRow={deleteRow}
        loaded={loaded}
      />
    </div>
  );
}

export default Dashboard;
