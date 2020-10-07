export const RESET_STATE = "RESET_STATE";
export const resetStateAction = () => {
  return {
    type: "RESET_STATE",
    payload: true,
  };
};
