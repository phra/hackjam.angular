import { ActionReducer, Action } from '@ngrx/store';

export const FILTER = 'FILTER';
export const RESET = 'RESET';
export const INITIAL_STATE = 'All';

export const categoriesReducer: ActionReducer<string> = (category = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case FILTER:
            return action.payload;
        case RESET:
        default:
            return INITIAL_STATE;
    }
}