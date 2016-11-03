
// Entry point of our application

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

// Components

import { BookListComponent } from './components/book/booklist.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Pipes

import { FilterBooksPipe } from './pipes/filter-books.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ], // Inject built-in modules
  declarations: [ AppComponent, BookListComponent, HeaderComponent, MenuComponent, SidebarComponent, FilterBooksPipe ], // Inject your own modules
  bootstrap:    [ AppComponent ] // Module you need to bootstrap
})
export class AppModule { }
