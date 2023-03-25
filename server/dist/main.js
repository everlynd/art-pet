"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./pipes/validation.pipe");
const mysql = require("mysql2");
async function start() {
    const PORT = process.env.PORT || 1234;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(PORT, () => console.log(`Server is running on PORT - ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map