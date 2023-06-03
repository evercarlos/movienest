import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger('starting');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap().then(()=> {
  logger.verbose('successful connection');
}).catch((err) => {
  logger.verbose('error connection', err);
});
