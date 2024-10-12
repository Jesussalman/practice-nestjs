import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as morgan from "morgan";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use( morgan("dev") )
  const logger = new Logger("Main")

  app.useGlobalPipes( new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
  }) )

  const configService = new ConfigService()

  await app.listen(configService.get("PORT"));
  logger.log(`Server running on port: ${configService.get("PORT")}`)
  logger.log( `Server running on url: ${ await app.getUrl() }` )
}
bootstrap();
