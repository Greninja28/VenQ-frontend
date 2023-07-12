import axios from "axios";
const URL = "https://venq-api.onrender.com"

export const signup = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "SIGNUP_REQUEST"
    });
    const { data } = await axios.post(`${URL}/auth/user/register`, {
      name, email, password
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    dispatch({
      type: "SIGNUP_SUCCESS",
      payload: {
        message: data.message,
        token: data.token // Include the token in the payload
      }
    });
  } catch (error) {
    dispatch({
      type: "SIGNUP_FAILURE",
      payload: error.response.data.message
    });
  }
};


export const verifyEmail = (email, otp) => async (dispatch) => {
  try {
    dispatch({
      type: "VERIFY_REQUEST"
    })

    const { data } = await axios.post(`${URL}/auth/user/verify`, {
      email, otp
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    dispatch({
      type: "VERIFY_SUCCESS",
      payload: data.message
    })

  } catch (error) {
    dispatch({
      type: 'VERIFY_FAILURE',
      payload: error.response.data
    })
  }
}