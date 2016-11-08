import { Injectable } from '@angular/core';
import { mockBooks } from '../mocks/books';
import { categories } from '../mocks/categories';
import { Category } from '../types/category';
import { Book } from '../types/book';

@Injectable()
export class AppService {
    getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockBooks)
            }, 1000)
        });
    }

    getCategories(): Promise<Category[]>{
        return Promise.resolve(categories);
    }
}
