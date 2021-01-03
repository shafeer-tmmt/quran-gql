import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VerseTafsirInput {
  @Field()
  chapter_id: number;

  @Field()
  verse_id: number;

  @Field({
    nullable: true,
    description: " Don't sepicify this field, to list all tafsirs of the verse",
  })
  tafsirs?: number;
}
