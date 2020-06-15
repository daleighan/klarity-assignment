import React from 'react';
import Input from '../input/input';
import './mid-dash.scss';

function MidDash({
  showInput,
  formIsNew,
  initialState,
  selectedIdx,
  currentShown,
  inputForm,
  dispatch,
}) {
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
    <div>
      <div>
        <button
          className="toggle-btn add-shadow"
          onClick={() =>
            handleToggleInput(
              showInput && formIsNew,
              true,
              initialState.inputForm,
            )
          }>
          <img src="/add_user.png" alt="add" />
        </button>
        {selectedIdx !== null ? (
          <button
            className="toggle-btn add-shadow"
            onClick={() =>
              handleToggleInput(
                showInput && !formIsNew,
                false,
                currentShown[selectedIdx],
                selectedIdx,
              )
            }>
            <img src="/edit_user.png" alt="add" />
          </button>
        ) : (
          ''
        )}
        {showInput && (
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
    </div>
  );
}

export default MidDash;
