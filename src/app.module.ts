import { Module } from '@nestjs/common';
import { UserControllers } from './lec-4/users.controller';
import { AlbumsControllers } from './lec-4/albums.controllers';

@Module({
  controllers: [UserControllers,AlbumsControllers],
})
export class AppModule {}
