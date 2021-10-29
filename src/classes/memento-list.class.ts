import { Type } from 'class-transformer';
import { Memento } from './memento.class';

export class MementosList {
  @Type(() => Memento)
  readonly next: Memento;

  @Type(() => Memento)
  readonly last: Memento;

  @Type(() => Memento)
  readonly prev: Memento;

  @Type(() => Memento)
  readonly first: Memento;

  @Type(() => Memento)
  readonly closest: Memento;

  @Type(() => Memento)
  readonly list: Memento[];
}
