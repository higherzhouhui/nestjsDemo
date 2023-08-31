import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  ValidationPipe,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { APP_PIPE, APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guard/auth.guard';
// 引入数据库的及配置文件
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'nestDeom',
      entities: [__dirname + '/**/*.entity{.ts}'],
      synchronize: false, // 自动将实体类同步到数据库
      autoLoadEntities: true, // 自动加载实体
    }),
    MessagesModule,
  ],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    CatsService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        { path: 'cats', method: RequestMethod.POST },
        // 'cats/(.*)',
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
