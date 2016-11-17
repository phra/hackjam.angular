
// Entry point of our application

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BookListComponent } from './components/book/booklist.component';
import { SideBarComponent } from './components/sidebar/sidebar.component';
import { AppService } from './services/app.service';
import { booksReducer, INITIAL_STATE as INITIAL_STATE_BOOKS } from './reducers/books.reducer';
import { categoriesReducer, INITIAL_STATE as INITIAL_STATE_CATEGORIES } from './reducers/categories.reducer';
import { BooksEffects } from './effects/books.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const appRoutes: Routes = [
  { path: ':category', component: BookListComponent },
  { path: '', component: BookListComponent, data: { category: INITIAL_STATE_CATEGORIES } },
  { path: '**', component: BookListComponent, data: { category: INITIAL_STATE_CATEGORIES } }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ booksReducer, categoriesReducer }),
    EffectsModule.runAfterBootstrap(BooksEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent,
    MenuComponent,
    SideBarComponent,
    BookListComponent,
  ],
  providers:[
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
