"use strict";
exports.FILTER = 'FILTER';
exports.RESET = 'RESET';
exports.INITIAL_STATE = 'All';
exports.categoriesReducer = function (category, action) {
    if (category === void 0) { category = exports.INITIAL_STATE; }
    switch (action.type) {
        case exports.FILTER:
            return action.payload;
        case exports.RESET:
        default:
            return exports.INITIAL_STATE;
    }
};
//# sourceMappingURL=categories.reducer.js.map