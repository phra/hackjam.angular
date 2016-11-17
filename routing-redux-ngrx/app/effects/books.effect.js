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
var effects_1 = require('@ngrx/effects');
var app_service_1 = require('../services/app.service');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/of');
var books_reducer_1 = require('../reducers/books.reducer');
exports.FILTERBOOKSEFFECT = 'FILTERBOOKSEFFECT';
exports.FILTERBOOKSEFFECTFAILED = 'FILTERBOOKSEFFECTFAILED';
var BooksEffects = (function () {
    function BooksEffects(actions$, appService) {
        var _this = this;
        this.actions$ = actions$;
        this.appService = appService;
        this.getBooks$ = this.actions$
            .ofType(exports.FILTERBOOKSEFFECT)
            .map(effects_1.toPayload)
            .switchMap(function (payload) { return _this.appService.getBooks(payload); })
            .map(function (books) { return ({ type: books_reducer_1.REFRESHBOOKS, payload: books }); })
            .catch(function () { return Observable_1.Observable.of({ type: exports.FILTERBOOKSEFFECTFAILED }); });
    }
    __decorate([
        effects_1.Effect(), 
        __metadata('design:type', Object)
    ], BooksEffects.prototype, "getBooks$", void 0);
    BooksEffects = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [effects_1.Actions, app_service_1.AppService])
    ], BooksEffects);
    return BooksEffects;
}());
exports.BooksEffects = BooksEffects;
//# sourceMappingURL=books.effect.js.map