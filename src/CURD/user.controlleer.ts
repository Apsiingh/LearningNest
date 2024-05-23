import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createUserDto } from 'src/UserDto';

const UserArr = [];

@Controller('/users')
export class UserController {
  // Adding user
  @Post()
  addUser(@Body() createUserDto: createUserDto) {
    UserArr.push(createUserDto);
    console.log('user created');
    return createUserDto;
  }

  // Returning all user
  @Get()
  getUsers() {
    return UserArr;
  }

  // Rerturning single User
  @Get(':roll')
  getUserByRoll(@Param('roll') roll: number) {
    return UserArr.find((user) => user.roll === +roll);
  }
  // Update user
  @Put(':roll')
  updateUserByRoll(
    @Param('roll') roll: number,
    @Body() updateUserDto: createUserDto,
  ) {
    const index = UserArr.findIndex((user) => user.roll === +roll);
    if (index !== -1) {
      UserArr[index] = updateUserDto;
      return 'User updated successfully';
    }
    return 'User not found';
  }
  // delete user
  @Delete(':roll')
  deleteUserByRoll(@Param('roll') roll: number) {
    const index = UserArr.findIndex((user) => user.roll === +roll);
    if (index !== -1) {
      console.log('user deleted');
      return UserArr.splice(index, 1);
    }
    return 'user not found';
  }
}
