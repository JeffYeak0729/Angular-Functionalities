import { state } from "@angular/animations";
import { createReducer, Action, on } from "@ngrx/store";
import authAction from "../action/auth.action";

export interface State {
    username: string,
    password: string
}

export const initialState: State = {
    username: '',
    password: ''
}



export const loginReducer = createReducer(
    initialState,
    on(authAction.saveAccount, state => ({...state, username: state.username, password: state.password}))
)