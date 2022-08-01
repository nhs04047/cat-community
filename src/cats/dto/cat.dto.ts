import { Cat } from './../cats.schema';
import { PickType } from '@nestjs/swagger';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {}
