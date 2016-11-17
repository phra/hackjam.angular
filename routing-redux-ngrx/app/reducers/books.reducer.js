"use strict";
exports.REFRESHBOOKS = 'REFRESHBOOKS';
exports.RESET = 'RESET';
exports.INIT = 'INIT';
exports.INITIAL_STATE = null;
exports.booksReducer = function (books, action) {
    if (books === void 0) { books = exports.INITIAL_STATE; }
    switch (action.type) {
        case exports.REFRESHBOOKS:
            return action.payload;
        case exports.INIT:
        case exports.RESET:
            return exports.INITIAL_STATE;
        default:
            return books;
    }
};
//# sourceMappingURL=books.reducer.js.map