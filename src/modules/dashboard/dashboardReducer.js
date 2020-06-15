export default function (state, action) {
  switch (action.type) {
    case 'ONLOAD': {
      const {entries} = action.data;
      return {
        ...state,
        loaded: !state.loaded,
        entries,
        entriesUsed: 50,
        currentShown: entries.slice(0, 50),
      };
    }
    case 'MORE': {
      const {entries, entriesUsed, currentShown} = state;
      if (currentShown.length === entries.length) {
        return state;
      }
      return {
        ...state,
        entriesUsed: entriesUsed + 50,
        currentShown: [
          ...currentShown,
          ...entries.slice(entriesUsed, entriesUsed + 50),
        ],
      };
    }
    case 'TOGGLE_INPUT': {
      const {formIsNew, updateObj, shouldHide} = action.data;
      if (shouldHide) {
        return {
          ...state,
          showInput: false,
        };
      }
      return {
        ...state,
        formIsNew,
        showInput: true,
        inputForm: {
          ...updateObj,
        },
      };
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
    case 'SELECT_ROW': {
      const {selectedIdx} = action.data;
      const {currentShown, formIsNew, showInput} = state;
      return {
        ...state,
        selectedIdx,
        inputForm:
          selectedIdx !== null && !formIsNew
            ? currentShown[selectedIdx]
            : state.inputForm,
        showInput: selectedIdx === null && !formIsNew ? false : showInput,
      };
    }
    case 'UPDATE_ROW': {
      const {idx, updatedRow} = action.data;
      const {currentShown} = state;
      const temp = [...currentShown];
      temp[idx] = updatedRow;
      return {
        ...state,
        currentShown: temp,
      };
    }
    case 'ADD_ROW': {
      const {newRow} = action.data;
      const {currentShown} = state;
      return {
        ...state,
        showInput: false,
        currentShown: [newRow, ...currentShown],
      };
    }
    case 'DELETE_ROW': {
      const {idx} = action.data;
      const {currentShown} = state;
      const temp = [...currentShown];
      temp.splice(idx, 1);
      return {
        ...state,
        currentShown: temp,
      };
    }
    default: {
      return state;
    }
  }
}
