"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3008;
app_1.app.listen(PORT, () => {
    console.log(`API sucessfully started at port ${PORT}`);
});
