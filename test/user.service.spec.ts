import { UserService } from 'src/user/user.service';
import { MokedUser } from './mokeduser';

describe('The UsersService', () => {
  let userService: UserService;
  let findOne: jest.Mock;

  describe('when getting a user login and password', () => {
    describe('and the user is matched', () => {
      it('should return the user', async () => {
        const user = await userService.getNewToken('login','password');
        expect(user).toEqual(MokedUser);
      })
    })
    describe('and the user is not matched', () => {
      beforeEach(() => {
        findOne.mockReturnValue(undefined);
      })
      it('should throw an error', async () => {
        await expect(userService.getNewToken('login','password')).rejects.toThrow();
      })
    })
  })
  
});