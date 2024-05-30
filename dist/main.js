"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
const passport = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.use(passport.initialize());
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.use(helmet_1.default.xssFilter());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('E-Commerce Nestjs REST API Documentation')
        .setDescription('The API E-Commerce Nestjs description')
        .setVersion('0.1')
        .addBearerAuth()
        .addGlobalParameters()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map