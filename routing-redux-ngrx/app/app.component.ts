import { Component } from '@angular/core';
import { Book } from './types/book';
import { Category } from './types/category';
import { AppState } from './types/appstate';
import { AppService } from './services/app.service';

@Component({
  moduleId: module.id,
  selector: 'bookstore',
  templateUrl: 'app.template.html',
  providers: [ AppService ],
})
export class AppComponent {
  books: Book[];
  categories: Category[];
  navClosed: boolean = true;
  defaultState = new AppState();

  constructor(private appService: AppService){
    //this.changeCategory = this.changeCategory.bind(this);
  }

  getBookDetails(): void {
    console.log('Will be implemented in the next section');
  }

  public ngOnInit(){
    this.appService.getBooks().then((books) => {
      this.books = books;
      this.defaultState.books = books;
    });

    this.appService.getCategories().then(categories => {
      this.categories = categories;
      this.defaultState.categories = categories;
    });
  }

  /*changeCategory(selectedCategory: Category): void {
    this.categories = this.categories.map(category => {
      if(category === selectedCategory) 
        category.selected = true;
      else  
        category.selected = false;
      return category;
    });

    this.filterBooks(selectedCategory);
  }

  filterBooks(category: Category): void {
    if(category.name === "All") {
      this.books = this.defaultState.books;
      return;
    }
    this.books = this.defaultState.books.filter(book => book.category === category.name);
  }

  search(searchTerm: string): void {
    this.books = this.defaultState.books.filter(book => {
      searchTerm = searchTerm.toLowerCase();
      return book.title.toLowerCase().includes(searchTerm) ||
              book.category.toLocaleLowerCase().includes(searchTerm);
    });
  }

  toggleSidebar(open) {
    this.navClosed = open;
  }*/
}
