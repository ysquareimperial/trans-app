import {
  LOADING,
  LOGIN,
  ERROR,
  LOGOUT,
  CREATING_USER,
  ERROR_CREATING_USER,
} from "./actionType";
import { apiURL, _postApi } from "./api";
const endpoint = "auth";

export function createUser(data = [], success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: CREATING_USER });
    _postApi(
      `/${endpoint}/users/create`,
      data,
      (result) => {
        if (result.errors) {
          let err = Object.values(result.errors);
          error(err[0]);
          dispatch({ type: ERROR_CREATING_USER, payload: err[0] });
        } else {
          dispatch({ type: CREATING_USER });
          success();
        }
      },
      (err) => {
        dispatch({ type: ERROR_CREATING_USER, payload: err });
      }
    );
  };
}

export function login({ email, password }, cb = (f) => f, error = (f) => f) {
  return async (dispatch) => {
    fetch(`${apiURL}/${endpoint}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        if (data.error) {
          error(data.error);
          dispatch({ type: ERROR, payload: data.error });
        } else {
          dispatch({ type: LOGIN, payload: data });
          localStorage.setItem("management_system", data.token);
          console.log(data.token)
          cb(data);
        }
      })
      .catch((err) => {
        error(err);
        dispatch({ type: ERROR, payload: err });
      });
  };
}

export function authLoading() {
  return (dispatch) => {
    dispatch({ type: LOADING });
  };
}

export function logout(callback = (f) => f) {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.removeItem("management_system");
    callback();
  };
}

export function initUser(callback = (f) => f, error = f => f) {
  return (dispatch) => {
    let token = localStorage.getItem("management_system");

    if (token) {
      verifyToken(token)
        .then((data) => {
          console.log(data);
          if (data.success) {
            dispatch({ type: LOGIN, payload: data });
            callback();
            console.log(data);
          } else {
            callback();
            localStorage.removeItem("management_system");
            console.log("Token expired");
            dispatch({ type: LOGOUT });
          }
        })
        .catch((err) => {
          // console.log(err, 'wjehjyewhjwjhhwhjwe')
          error();
          // localStorage.removeItem("management_system");
          console.log("Token is invalid");
          dispatch({ type: LOGOUT });
        });
    } else {
      error();
      dispatch({ type: LOGOUT });
    }
  };
}

async function verifyToken(token) {
  console.log(token)
  try {
    let response = await fetch(`${apiURL}/auth/verify-token`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export function signup(
  form,
  cb,
  error_cb = (f) => f,
  query_type = "new_admin"
) {
  return (dispatch) => {
    _postApi(
      `/api/auth/sign-up`,
      { ...form, query_type },
      (resp) => {
        if (resp.success) {
          let success_cb = (results) => {
            cb();
          };
          console.log("success------------------", resp);
          if (query_type === "new_admin") {
            dispatch(
              login({ phone: form.phone, password: form.password }, success_cb)
            );
          }
        } else {
          if (resp.status === 200) {
            // _customNotify("Successfully Created");
            dispatch(login({ phone: form.phone, password: form.password }, cb));
          } else {
            console.log("error", resp);
            //   _warningNotify(`Error: ${resp.msg}`);
            error_cb();
          }
        }
      },
      (err) => {
        console.log("err", err);
        alert("Error", "Unable to login at this time");
        error_cb();
      }
    );
  };
}

export function createNewUser(form, cb, error_cb = (f) => f) {
  return (dispatch) => {
    console.log(form, "====================form");
    // dispatch({ type: SIGN_UP_LOADING })
    // let success =

    _postApi(
      `/api/auth/sign-up`,
      { ...form, query_type: "new_admin" },
      (resp) => {
        if (resp.success) {
          console.log("success------------------", resp);
          let success_cb = (results) => {
            console.log("login success");
            // dispatch({ type: LOGIN, payload: results })
            cb();
            // dispatch({ type: SIGN_UP_LOADING })
          };
          dispatch(
            login({ phone: form.phone, password: form.password }, success_cb)
          );
        } else {
          console.log("error", resp);
          alert("Error", resp.msg);
          error_cb();
          // dispatch({ type: SIGN_UP_LOADING })
        }
      },
      (err) => {
        console.log("err", err);
        // dispatch({ type: SIGN_UP_LOADING })
        // dispatch({type: LOGIN_ERROR});
        alert("Error", "Unable to login at this time");
        error_cb();
      }
    );
  };
}
