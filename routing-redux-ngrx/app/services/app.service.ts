import { Injectable } from '@angular/core';
import { mockBooks } from '../mocks/books';
import { categories } from '../mocks/categories';
import { Category } from '../types/category';
import { Book } from '../types/book';

@Injectable()
export class AppService {
    getBooks(category = 'All'): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockBooks.filter(book => category === 'All' || book.category === category))
            }, 1000)
        });
    }

    getCategories(): Promise<Category[]>{
        return Promise.resolve(categories);
    }
}
