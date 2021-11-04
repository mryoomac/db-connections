import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from 'src/user/user.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import * as request from 'supertest';

describe('ProductController', () => {
  let app: INestApplication;
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [UserModule],
    })
      .overrideProvider(userService)
      .useValue(userService)
      .compile();

    userService = moduleRef.get<UserService>(UserService);
    userController = moduleRef.get<UserController>(UserController);

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/getall', () => {
    return request(app.getHttpServer()).get('/getall').expect(200).expect({
      data: userService.getAll(),
    });
  });

  //const mockedUser: User = {login:'Adam',password:'hash'};

  it('/login', () => {
    return request(app.getHttpServer())
      .post('/login')
      .expect(200)
      .expect({
        data: userService.getNewToken('Adam', 'hash'),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
