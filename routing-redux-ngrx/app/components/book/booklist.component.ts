import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../mocks/books';
import { AppState } from '../../types/appstate';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
import { FILTERBOOKSEFFECT } from '../../effects/books.effect';

@Component({
    moduleId: module.id,
    selector: 'bs-book-list',
    templateUrl: 'booklist.template.html',
})
export class BookListComponent implements OnInit {
    //@Input() books;
    //@Input() navClosed;
    //private books: Book[];
    private books: Observable<Book[]>;
    private category: Observable<string>;

    constructor(private route: ActivatedRoute, private location: Location, private store: Store<AppState>) {
        this.books = store.select('booksReducer');
        this.category = store.select('categoryReducer');
    }

    ngOnInit(): void {
        //this.appService.getBooks().then(books => this.books = books);
        /*this.route.params
            .switchMap((params: Params) => this.appService.getBooks(params['category']))
            .subscribe((books: Book[]) => this.books = books);*/
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