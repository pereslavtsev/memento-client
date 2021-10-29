import { Expose, Transform, Type } from 'class-transformer';
import { MementosList } from './memento-list.class';
import { TimemapUriFormats } from './timemap-uri-formats.class';

export class MementosResponse {
  @Type(() => MementosList)
  readonly mementos: MementosList;

  @Expose({ name: 'timegate_uri' })
  @Transform(({ value }) => value ?? null)
  readonly timegateUri: string;

  @Expose({ name: 'timemap_uri' })
  @Type(() => TimemapUriFormats)
  readonly timemapUri: TimemapUriFormats;

  @Expose({ name: 'original_uri' })
  @Transform(({ value }) => value ?? null)
  readonly originalUri: string;
}
