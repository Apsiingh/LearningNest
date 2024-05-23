import { Module } from '@nestjs/common';
import { UserController } from './CURD/user.controlleer';

@Module({
  controllers: [UserController],
  
})
export class AppModule {}
