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

}
