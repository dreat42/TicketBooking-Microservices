"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const request_validator_error_1 = require("../errors/request-validator-error");
const express_validator_1 = require("express-validator");
const validateRequest = (req, res, next) => {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new request_validator_error_1.RequestValidatorError(errors.array());
    }
    next();
};
exports.validateRequest = validateRequest;
