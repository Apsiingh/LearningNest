import {
  Controller,
  Get,
  Post,
  Req,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UserControllers {
  @Post('/profile')
  @HttpCode(300)
  getProfile(@Req() req: Request) {
    return {
      Name: 'Akhand!',
    };
  }

  @Get('/image')
  @HttpCode(HttpStatus.ACCEPTED)
  getImage(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    res.status(201);
    return {
      Name: 'Akhand',
      Roll: 'hello World',
    };
  }
}
