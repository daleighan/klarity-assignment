export default function (state, action) {
  switch (action.type) {
    case 'ONLOAD': {
      const {entries} = action.data;
      return {
        ...state,
        loaded: !state.loaded,
        entries,
        currentShown: entries.slice(0, 50),
      };
    }
    case 'MORE': {
      const {entries, currentShown} = state;
      return {
        ...state,
        currentShown: entries.slice(0, currentShown.length + 50),
      }
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
      const {entries, formIsNew, showInput} = state;
      return {
        ...state,
        selectedIdx,
        inputForm:
          selectedIdx !== null && !formIsNew
            ? entries[selectedIdx]
            : state.inputForm,
        showInput: selectedIdx === null && !formIsNew ? false : showInput,
      };
    }
    case 'UPDATE_ROW': {
      const {idx, updatedRow} = action.data;
      const {entries} = state;
      const temp = [...entries];
      temp[idx] = updatedRow;
      return {
        ...state,
        entries: temp,
      };
    }
    case 'ADD_ROW': {
      const {newRow} = action.data;
      const {entries} = state;
      return {
        ...state,
        showInput: false,
        entries: [...entries, newRow],
      };
    }
    case 'DELETE_ROW': {
      const {idx} = action.data;
      const {entries} = state;
      const temp = [...entries];
      temp.splice(idx, 1);
      return {
        ...state,
        entries: temp,
      };
    }
    default: {
      return state;
    }
  }
}
