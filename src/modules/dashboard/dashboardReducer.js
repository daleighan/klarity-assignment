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
        selectedIdx,
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
    case 'UPDATE_ROW': {
      const {idx, updatedRow} = action.data;
      const temp = [...state.entries];
      temp[idx] = updatedRow;
      return {
        ...state,
        entries: temp,
      };
    }
    case 'ADD_ROW': {
      const {newRow} = action.data;
      return {
        ...state,
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