export const handleToggleInput = function (
  dispatch,
  shouldHide,
  formIsNew,
  updateObj,
  selectedIdx,
) {
  console.log(dispatch);
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
