import { Expose, Transform } from 'class-transformer';

export class TimemapUriFormats {
  @Expose({ name: 'json_format' })
  @Transform(({ value }) => value ?? null)
  readonly jsonFormat: string;

  @Expose({ name: 'link_format' })
  @Transform(({ value }) => value ?? null)
  readonly linkFormat: string;
}
