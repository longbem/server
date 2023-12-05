import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './modules/cats/cats.service';
import { CatsModule } from './modules/cats/cats.module';
import { ShareModule } from './share/share.module';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { JwtStrategy } from './modules/auth/strategies/jwt.strategy';
import { AboutModule } from './modules/about/about.module';

@Module({
  imports: [
    ShareModule,
    CatsModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    UserModule,
    AuthModule,
    AboutModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, CatsService, JwtStrategy],
  exports: [JwtStrategy],
})
export class AppModule {}
