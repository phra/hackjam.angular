"use strict";
exports.REFRESHBOOKS = 'REFRESHBOOKS';
exports.SEARCHBOOKS = 'SEARCHBOOKS';
exports.RESET = 'RESET';
exports.INIT = 'INIT';
;
exports.INITIAL_STATE = { books: null, filteredBooks: null };
exports.booksReducer = function (books, action) {
    if (books === void 0) { books = exports.INITIAL_STATE; }
    switch (action.type) {
        case exports.REFRESHBOOKS:
            return action.payload;
        case exports.SEARCHBOOKS:
            return Object.assign(Object.create(null), { books: books.books }, { filteredBooks: books.books.filter(function (book) { return book.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()); }) });
        case exports.INIT:
        case exports.RESET:
            return exports.INITIAL_STATE;
        default:
            return books;
    }
};
//# sourceMappingURL=books.reducer.js.map