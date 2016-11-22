import { Component, Output, EventEmitter } from '@angular/core';
import { AppState } from '../../types/appstate';
import { Store } from '@ngrx/store';
import { SEARCHBOOKS } from '../../reducers/books.reducer';


@Component({
    moduleId: module.id,
    selector: 'bs-sidebar',
    templateUrl: 'sidebar.template.html'
})
export class SideBarComponent {
    navClosed: boolean = true;

    constructor(private store: Store<AppState>) {
    }

    toggleSideBar(): void {
        this.navClosed = !this.navClosed;
    }

    search(searchTerm) {
        this.store.dispatch({
            type: SEARCHBOOKS,
            payload: searchTerm
        });
    }     
}