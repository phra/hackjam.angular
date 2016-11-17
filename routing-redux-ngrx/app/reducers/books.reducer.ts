import { ActionReducer, Action } from '@ngrx/store';
import { Book } from '../types/book';

export const REFRESHBOOKS = 'REFRESHBOOKS';
export const RESET = 'RESET';
export const INIT = 'INIT';
export const INITIAL_STATE = null;

export const booksReducer: ActionReducer<string> = (books = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case REFRESHBOOKS:
            return action.payload;
        case INIT:
        case RESET:
            return INITIAL_STATE;
        default:
            return books;
    }
}