import { Expose, Transform, Type } from 'class-transformer';
import { Memento } from './memento.class';

export class MementosList {
  @Type(() => Memento)
  @Expose({ name: 'next', groups: ['mementos'] })
  @Transform(({ value }) => value ?? null)
  readonly next: Memento;

  @Type(() => Memento)
  @Expose({ name: 'last', groups: ['mementos'] })
  @Transform(({ value }) => value ?? null)
  readonly last: Memento;

  @Type(() => Memento)
  @Expose({ name: 'prev', groups: ['mementos'] })
  @Transform(({ value }) => value ?? null)
  readonly prev: Memento;

  @Type(() => Memento)
  @Expose({ name: 'first', groups: ['mementos'] })
  @Transform(({ value }) => value ?? null)
  readonly first: Memento;

  @Type(() => Memento)
  @Expose({ name: 'closest', groups: ['mementos'] })
  @Transform(({ value }) => value ?? null)
  readonly closest: Memento;

  @Type(() => Memento)
  @Expose({ name: 'list', groups: ['timemap'] })
  @Transform(({ value }) => value ?? null)
  readonly list: Memento[];
}
