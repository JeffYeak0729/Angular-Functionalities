import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../../model/user.model";
import { State } from "../reducer/login.reducer";

export  interface AppState {
    selectUser: User
}

export const getUser = createFeatureSelector<State>('user')

export const isLoggedin = createSelector(
    getUser,
    (state: State) => {
        state.username
    }
)