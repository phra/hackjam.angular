import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../types/book';
import { AppState } from '../../types/appstate';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FILTERBOOKSEFFECT } from '../../effects/books.effect';

@Component({
    moduleId: module.id,
    selector: 'bs-book-list',
    templateUrl: 'booklist.template.html',
})
export class BookListComponent implements OnInit {
    private books: Observable<Book[]>;

    constructor(private route: ActivatedRoute, private location: Location, private store: Store<AppState>) {
        this.books = store.select('booksReducer');
    }

    ngOnInit(): void {
        this.route.params
        .subscribe((params: Params) => this.store.dispatch({
                type: FILTERBOOKSEFFECT,
                payload: params['category']
            })
        );
    }

    getBookDetails(book: Book): void {
        console.log(book);
    }
}