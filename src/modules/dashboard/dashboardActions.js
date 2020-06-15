export const handleToggleInput = function (
  dispatch,
  shouldHide,
  formIsNew,
  updateObj,
  selectedIdx,
) {
  dispatch({
    type: 'TOGGLE_INPUT',
    data: {
      shouldHide,
      formIsNew,
      updateObj,
      selectedIdx,
    },
  });
};
