"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
const mongoose = require("mongoose");
exports.TaskSchema = new mongoose.Schema({
    description: String,
    isCompleted: Boolean
});
//# sourceMappingURL=task.schema.js.map