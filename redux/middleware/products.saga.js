import { put, takeLatest, all } from "redux-saga/effects";
import * as actions from "../action";
import {networkRequest} from "../request"

function* fetchMockieeee() {
    try {
        const response = yield networkRequest({url:"https://jsonplaceholder.typicode.com/albums"});
        yield put(actions.FetchMockDataSuccess(response));
    } catch (error) {
        console.log("ERROR ", error);
        yield put(actions.FetchMockDataFailure());
    }
}

function* WatchersList() {
    yield takeLatest(actions.FetchMockData, fetchMockieeee);
}

export default function* mockData() {
    yield all([WatchersList()]);
}