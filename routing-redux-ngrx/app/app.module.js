// Entry point of our application
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var store_1 = require('@ngrx/store');
var effects_1 = require('@ngrx/effects');
var app_component_1 = require('./app.component');
var header_component_1 = require('./components/header/header.component');
var menu_component_1 = require('./components/menu/menu.component');
var booklist_component_1 = require('./components/book/booklist.component');
var sidebar_component_1 = require('./components/sidebar/sidebar.component');
var app_service_1 = require('./services/app.service');
var books_reducer_1 = require('./reducers/books.reducer');
var categories_reducer_1 = require('./reducers/categories.reducer');
var books_effect_1 = require('./effects/books.effect');
var store_devtools_1 = require('@ngrx/store-devtools');
var appRoutes = [
    { path: ':category', component: booklist_component_1.BookListComponent },
    { path: '', component: booklist_component_1.BookListComponent, data: { category: categories_reducer_1.INITIAL_STATE } },
    { path: '**', component: booklist_component_1.BookListComponent, data: { category: categories_reducer_1.INITIAL_STATE } }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(appRoutes),
                store_1.StoreModule.provideStore({ booksReducer: books_reducer_1.booksReducer, categoriesReducer: categories_reducer_1.categoriesReducer }),
                effects_1.EffectsModule.runAfterBootstrap(books_effect_1.BooksEffects),
                store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension()
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                menu_component_1.MenuComponent,
                sidebar_component_1.SideBarComponent,
                booklist_component_1.BookListComponent,
            ],
            providers: [
                app_service_1.AppService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map