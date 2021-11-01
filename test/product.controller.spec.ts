import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ProductController } from 'src/product/product.controller';
import { ProductModule } from 'src/product/product.module';
import { ProductService } from 'src/product/product.service';
import * as request from 'supertest';

describe('ProductController', () => {
  let app: INestApplication;
  let productController: ProductController;
  let productService: ProductService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
      imports: [ProductModule],
    })
      .overrideProvider(productService)
      .useValue(productService)
      .compile();

    productService = moduleRef.get<ProductService>(ProductService);
    productController = moduleRef.get<ProductController>(ProductController);

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/getall', () => {
    return request(app.getHttpServer()).get('/getall').expect(200).expect({
      data: productService.getAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
