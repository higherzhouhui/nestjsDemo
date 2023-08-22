import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (isNaN(value.pageNum)) {
        throw new BadRequestException('Validation failed');
    }
    if (isNaN(value.pageSize)) {
        throw new BadRequestException('Validation failed');
    }
    return value;
  }
}