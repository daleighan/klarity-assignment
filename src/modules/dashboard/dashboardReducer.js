export default function (state, action) {
  switch (action.type) {
    case 'ONLOAD': {
      const {entries} = action.data;
      return {
        ...state,
        entries,
        entriesUsed: 20,
        currentShown: entries.slice(0, 20),
      };
    }
    case 'MORE': {
      const {entries, entriesUsed, currentShown} = state;
      if (currentShown.length === entries.length) {
        return state;
      }
      return {
        ...state,
        entriesUsed: entriesUsed + 5,
        currentShown: [
          ...currentShown,
          ...entries.slice(entriesUsed, entriesUsed + 5),
        ],
        sortedBy: '',
      };
    }
    case 'SORT': {
      const {sortedBy} = action.data;
      const newInOrder = sortedBy === state.sortedBy ? !state.inOrder : true;
      const multiplier = newInOrder ? 1 : -1;
      return {
        ...state,
        sortedBy,
        currentShown: state.currentShown.sort((a, b) => {
          if (a[sortedBy] < b[sortedBy]) {
            return -1 * multiplier;
          } else if (b[sortedBy] < a[sortedBy]) {
            return 1 * multiplier;
          }
          return 0;
        }),
        inOrder: newInOrder,
      };
    }
    case 'TOGGLE_INPUT': {
      const {formIsNew, updateObj, shouldHide, selectedIdx} = action.data;
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
        selectedIdx:
          selectedIdx !== null && selectedIdx !== undefined
            ? selectedIdx
            : state.selectedIdx,
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
    case 'ADD_ROW': {
      const {newRow} = action.data;
      const {currentShown} = state;
      return {
        ...state,
        showInput: false,
        currentShown: [newRow, ...currentShown],
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
    case 'DELETE_ROW': {
      const {idx} = action.data;
      const {currentShown, selectedIdx} = state;
      const temp = [...currentShown];
      temp.splice(idx, 1);
      return {
        ...state,
        currentShown: temp,
        selectedIdx:
          idx === selectedIdx
            ? null
            : selectedIdx > idx
            ? selectedIdx - 1
            : selectedIdx,
        showInput: idx === selectedIdx ? false : state.showInput,
      };
    }
    default: {
      return state;
    }
  }
}
