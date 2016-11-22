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
var common_1 = require('@angular/common');
var store_1 = require('@ngrx/store');
var books_effect_1 = require('../../effects/books.effect');
var BookListComponent = (function () {
    function BookListComponent(route, location, store) {
        this.route = route;
        this.location = location;
        this.store = store;
        this.books = store.select('booksReducer');
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) { return _this.store.dispatch({
            type: books_effect_1.FILTERBOOKSEFFECT,
            payload: params['category']
        }); });
    };
    BookListComponent.prototype.getBookDetails = function (book) {
        console.log(book);
    };
    BookListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bs-book-list',
            templateUrl: 'booklist.template.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, store_1.Store])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=booklist.component.js.map