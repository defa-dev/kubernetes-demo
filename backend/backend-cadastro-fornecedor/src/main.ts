import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(
    'Olha o banco: ',
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017//?authSource=admin`,
  );
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 30000);
}
bootstrap();
