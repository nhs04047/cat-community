import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('C.I.C')
    .setDescription('Cats Community docs')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const { PORT } = process.env;
  await app.listen(PORT);
}
bootstrap();
