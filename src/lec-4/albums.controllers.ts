import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PassThrough } from 'stream';
import { Response, query } from 'express';
import { concatAll } from 'rxjs';

interface pictureParams {
  Age: number;
  name: String;
}

interface QueryParams {
  id: number;
  name: String;
}

@Controller('/albums')
export class AlbumsControllers {
  @Post('/photo')
  getPhoto() {
    return {
      photo1: 'cat',
      photo2: 'dog',
      photo3: 'Lion',
    };
  }

  @Get('/picture')
  getPicture(@Query() query: QueryParams) {
    console.log(query.name);
    console.log(query);
    return 'success';
  }
}
