import { Injectable, Inject } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { AppService } from '../services/app.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { REFRESHBOOKS } from '../reducers/books.reducer';

export const FILTERBOOKSEFFECT = 'FILTERBOOKSEFFECT';
export const FILTERBOOKSEFFECTFAILED = 'FILTERBOOKSEFFECTFAILED';

@Injectable()
export class BooksEffects {
  constructor(private actions$: Actions, private appService: AppService) {
  }

  @Effect() getBooks$ = this.actions$
      // Listen for the 'LOGIN' action
      .ofType(FILTERBOOKSEFFECT)
      .map(toPayload)
      .switchMap(payload => this.appService.getBooks(payload))
        // If successful, dispatch success action with result
        .map(books => ({ type: REFRESHBOOKS, payload: books }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: FILTERBOOKSEFFECTFAILED }));
}
