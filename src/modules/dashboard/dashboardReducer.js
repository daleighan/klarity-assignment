export default function (state, action) {
  switch (action.type) {
    case 'ONLOAD': {
      const {entries} = action.data;
      return {
        ...state,
        loaded: !state.loaded,
        entries,
      };
    }
    case 'SHOW_INPUT': {
      const {formIsNew, updateObj, selectedIdx} = action.data;
      return {
        ...state,
        formIsNew,
        showInput: true,
        selectedIdx: selectedIdx ? selectedIdx : state.selectedIdx,
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
      const {selectedIdx, initialForm} = action.data;
      const {entries} = state;
      if (selectedIdx) {
        return {
          ...state,
          selectedIdx,
          inputForm: state.formIsNew ? state.inputForm : entries[selectedIdx],
        };
      }
      return {
        ...state,
        selectedIdx,
        inputForm: initialForm,
        showInput:
          state.showInput && !state.formIsNew ? false : state.showInput,
      };
    }
    case 'UPDATE_ROW': {
      const {idx, updatedRow} = action.data;
      const temp = [...state.entries];
      temp[idx] = updatedRow;
      return {
        ...state,
        showInput: false,
        entries: temp,
      };
    }
    case 'ADD_ROW': {
      const {newRow} = action.data;
      return {
        ...state,
        showInput: false,
        entries: [...state.entries, newRow],
      };
    }
    case 'DELETE_ROW': {
      const {idx} = action.data;
      const temp = [...state.entries];
      temp.splice(idx, 1);
      return {
        ...state,
        entries: temp,
      };
    }
    default: {
      return {...state};
    }
  }
}
