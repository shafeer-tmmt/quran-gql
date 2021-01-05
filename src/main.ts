import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Quran-GQL');

async function bootstrap() {
  logger.log('With the name of ALLAH');
  logger.log('All praise is to ALLAH');
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  console.log(configService.get<number>('PORT'));
  await app.listen(configService.get<number>('PORT')).then(() => {
    logger.log(`Server is listening in port: ${configService.get('PORT')}`);
  });
}
bootstrap();
