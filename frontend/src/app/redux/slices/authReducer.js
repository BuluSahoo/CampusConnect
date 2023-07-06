import { createSlice } from "@reduxjs/toolkit";
import appConfig from "../../config/app.config";
import { AuthenticateService } from "../../services/user.service";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

const { setLoading, setData, setError } = authSlice.actions;
export default authSlice.reducer;

export const authenticateReduxService =
  (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const { data } = AuthenticateService({
        email,
        password,
      });
      dispatch(setLoading(false));
      dispatch(setData(data));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setError(error));
    }
  };

export const unAuthenticateReduxService = () => async (dispatch) => {
  dispatch(setData(null));
  window.location = appConfig.app.unAuthRoute;
};
