import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
 
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'user_db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'users_services',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
