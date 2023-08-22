import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 处理请求头，验证token等
    if (!req.headers.authorization) {
        // throw new HttpException({code: HttpStatus.FORBIDDEN, message: 'token失效'}, HttpStatus.OK);
    }
    console.log('Request...');
    next();
  }
}