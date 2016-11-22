import { ActionReducer, Action } from '@ngrx/store';
import { Book } from '../types/book';

export const REFRESHBOOKS = 'REFRESHBOOKS';
export const SEARCHBOOKS = 'SEARCHBOOKS';
export const RESET = 'RESET';
export const INIT = 'INIT';
export interface ISTATE {
    books: Book[],
    filteredBooks: Book[]

};
export const INITIAL_STATE = {books: null, filteredBooks: null};

export const booksReducer: ActionReducer<ISTATE> = (books = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case REFRESHBOOKS:
            return action.payload;
        case SEARCHBOOKS:
            return Object.assign(Object.create(null), {books: books.books}, {filteredBooks: books.books.filter(book => book.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))});
        case INIT:
        case RESET:
            return INITIAL_STATE;
        default:
            return books;
    }
}