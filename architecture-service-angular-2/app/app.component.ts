import { Component } from '@angular/core';
import { Book, mockBooks } from './mocks/books';
import { categories, Category } from './mocks/categories';

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  templateUrl: 'app.template.html'
})

export class AppComponent {
  books: Book[] = mockBooks;
  categories: Category[] = categories;
  searchTerm: string;
  selectedCategory: Category;
  title: string = "Bookstore by Hackages";

  clicked(): void {
    console.log('Will be implemented in the next section');
  }

  changeCategory(selectedCategory: Category): void {
    this.selectedCategory = selectedCategory;
    this.categories = this.categories.map(category => {
      if(category === selectedCategory) 
        category.selected = true;
      else  
        category.selected = false;
      return category;
    });
  }

  search(str: string): void {
    this.searchTerm = str;
  }
}
