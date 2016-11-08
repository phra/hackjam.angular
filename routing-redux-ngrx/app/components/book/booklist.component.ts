import { Component, Input } from '@angular/core';
import { Book } from '../../mocks/books';

@Component({
    moduleId: module.id,
    selector: 'bs-book-list',
    templateUrl: 'booklist.template.html',
})
export class BookListComponent {
    @Input() books;
    @Input() navClosed;

    getBookDetails(book: Book): void {
        console.log(book);
    }
}