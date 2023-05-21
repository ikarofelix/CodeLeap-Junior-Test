import { put, takeLatest } from "redux-saga/effects";

import { fetchMorePages, fetchPostsSuccess, fetchPostsFail } from "../posts-slice";

function* fetchPostsSaga() {
  try {
    const response = yield fetch("https://dev.codeleap.co.uk/careers/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield response.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFail(error));
  }
}

function* fetchMorePagesSaga({ payload }) {
  const nextPageLink = payload;
  try {
    const response = yield fetch(nextPageLink, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = yield response.json();
    yield put(fetchMorePages(data));
  } catch (error) {
    yield put(fetchPostsFail(error));
  }
}

function* addPostSaga({ payload }) {
  try {
    yield fetch("https://dev.codeleap.co.uk/careers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    yield fetchPostsSaga();
  } catch (error) {
    throw new Error(error);
  }
}

function* editPostSaga({ payload }) {
  const edit = { title: payload.titleText, content: payload.contentText };

  try {
    yield fetch(`https://dev.codeleap.co.uk/careers/${payload.id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edit),
    });
    yield fetchPostsSaga();
  } catch (error) {
    throw new Error(error);
  }
}

function* deletePostSaga({ payload }) {
  try {
    yield fetch(`https://dev.codeleap.co.uk/careers/${payload.id}/`, {
      method: "DELETE",
    });
    yield fetchPostsSaga();
  } catch (error) {
    throw new Error(error);
  }
}

export function* mySaga() {
  yield takeLatest("posts/fetchPostsStart", fetchPostsSaga);
  yield takeLatest("posts/infiniteRolling", fetchMorePagesSaga);
  yield takeLatest("posts/addPostStart", addPostSaga);
  yield takeLatest("posts/editPostStart", editPostSaga);
  yield takeLatest("posts/deletePostStart", deletePostSaga);
}
