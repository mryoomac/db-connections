import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from 'src/user/user.service';
import { MokedUser } from './mokeduser';

describe('The UsersService', () => {
  let userService: UserService;
  let mokeduser: MokedUser;
  let findOne: jest.Mock;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UserService,
      useClass: MokedUser,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, ApiServiceProvider],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('UserService - should be defined', () => {
    expect(userService).toBeDefined();
  });


  describe('when getting a user login and password', () => {
    describe('and the user is matched', () => {
      it('should return the user', async () => {
        const user = await userService.getNewToken('login','password');
        expect(user).toEqual(mokeduser);
      })
    })
    describe('and the user is not matched', () => {
      beforeEach(() => {
        findOne.mockReturnValue(mokeduser);
      })
      it('should throw an error', async () => {
        await expect(userService.getNewToken('login','password')).rejects.toThrow();
      })
    })
  })
  
});