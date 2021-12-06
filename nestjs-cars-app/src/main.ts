import { ValidationPipe } from '@nestjs/common';
import { NestFactory, BaseExceptionFilter } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.useGlobalFilters(new BaseExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  console.log('Process:', process.env.NODE_ENV);
  app.enableCors();
  await app.listen(process.env.PORT || 9000);
}
bootstrap();
