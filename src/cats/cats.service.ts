import { Injectable } from '@nestjs/common';
import { Cat, ListAllEntities } from './dto';

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];
  
    create(cat: Cat) {
      this.cats.push(cat);
    }
  
    findAll(query: ListAllEntities): Cat[] {
      return this.cats;
    }
  }