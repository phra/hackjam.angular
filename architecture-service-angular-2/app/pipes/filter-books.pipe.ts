import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../mocks/books';
import { Category  } from '../mocks/categories';

@Pipe({ name: 'filterBooks' })
export class FilterBooksPipe implements PipeTransform {
  transform(allBooks: Book[], category: Category, searchTerm: string) {
    return allBooks.filter(book => 
        (!category || book.category === category.name)
        && (!searchTerm
            || book.title.toLowerCase().includes(searchTerm)
            || book.title.toLocaleLowerCase().includes(searchTerm)));
  }
}
