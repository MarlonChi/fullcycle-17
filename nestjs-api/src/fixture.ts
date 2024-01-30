import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const dataSource = app.get<DataSource>(getDataSourceToken());
  await dataSource.synchronize(true);

  const productRepo = dataSource.getRepository('Product');
  await productRepo.insert([
    {
      id: '9f87fac4-20cb-4c65-b7c7-f72a317889a3',
      name: 'Product 1',
      description: 'Product 1 description',
      image_url: 'https://via.placeholder.com/150',
      price: 100,
    },
    {
      id: '9f87fac4-20cb-4c65-b7c7-f72a317389a3',
      name: 'Product 2',
      description: 'Product 2 description',
      image_url: 'https://via.placeholder.com/150',
      price: 140,
    },
    {
      id: '9f87fac4-20cb-4c65-17c7-f72a317889a3',
      name: 'Product 3',
      description: 'Product 3 description',
      image_url: 'https://via.placeholder.com/150',
      price: 90,
    },
    {
      id: '9f872ac4-20cb-4c65-b7c7-f72a317889a3',
      name: 'Product 4',
      description: 'Product 4 description',
      image_url: 'https://via.placeholder.com/150',
      price: 112,
    },
    {
      id: '9f87fac4-20cb-4c65-42c7-f72a317889a3',
      name: 'Product 5',
      description: 'Product 5 description',
      image_url: 'https://via.placeholder.com/150',
      price: 400,
    },
    {
      id: '9f87fac4-20cb-4c65-b7c7-f72a332289a3',
      name: 'Product 6',
      description: 'Product 6 description',
      image_url: 'https://via.placeholder.com/150',
      price: 54,
    },
    {
      id: '9327fac4-20cb-4c65-b7c7-f72a317889a3',
      name: 'Product 7',
      description: 'Product 7 description',
      image_url: 'https://via.placeholder.com/150',
      price: 987,
    },
    {
      id: '9f87fac4-20cb-4c65-b7c7-f72a342589a3',
      name: 'Product 8',
      description: 'Product 8 description',
      image_url: 'https://via.placeholder.com/150',
      price: 1000,
    },
    {
      id: '9f87fac4-20cb-1234-b7c7-f72a317889a3',
      name: 'Product 9',
      description: 'Product 9 description',
      image_url: 'https://via.placeholder.com/150',
      price: 123,
    },
    {
      id: '9f87fac4-20cb-4c65-b7c7-f72a31788911',
      name: 'Product 10',
      description: 'Product 10 description',
      image_url: 'https://via.placeholder.com/150',
      price: 111,
    },
  ]);

  await app.close();
}
bootstrap();
