export const loginAction = () => {
  return (dispatch) => {
    dispatch({
      type: 'login',
      payload: true,
    });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    dispatch({
      type: 'logout',
      payload: false,
    });
  };
};
