export const SHOW_NEXT = "SHOW_NEXT";
export const showNextAction = (action) => {
  return {
    type: "SHOW_NEXT",
    payload: action,
  };
};
