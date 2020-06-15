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
  handleToggleInput,
  updateForm,
  addRow,
  updateRow,
}) {
  return (
    <div className="mid-dash">
      <div>
        <div className="mid-dash-upper">
          <div>
            <div>
              <div className="selector small-shadow">
                <div className="inner-selector">Class Selector</div>
              </div>
              <button
                className="toggle-btn small-shadow"
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
                  className="toggle-btn small-shadow"
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
            </div>
          </div>
          <div>
            <button className="toggle-btn small-shadow">
              <img src="/printer.png" alt="add" />
            </button>
            <button className="toggle-btn small-shadow">
              <img src="/paper.png" alt="add" />
            </button>
          </div>
        </div>
        {showInput && (
          <Input
            formIsNew={formIsNew}
            fields={inputForm}
            selectedIdx={selectedIdx}
            updateForm={updateForm}
            addRow={addRow}
            updateRow={updateRow}
          />
        )}
      </div>
    </div>
  );
}

export default MidDash;
