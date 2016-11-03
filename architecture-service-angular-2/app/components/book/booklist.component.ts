import { Component, Input } from '@angular/core';
import { Book } from '../../mocks/books';
import { Category } from '../../mocks/categories';

@Component({
  moduleId: module.id,
  selector: 'book-list',
  templateUrl: 'booklist.template.html'
})

export class BookListComponent {
  @Input() books: Book[];
  @Input() searchTerm: string;
  @Input() selectedCategory: Category;
}
