import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Juz {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  juz_number?: number;

  //TODO: need to get array of object, instead of a single dynamic object
  // @Field(type => Object, { nullable: true })
  // verse_mapping?: object;
}

@ObjectType()
export class JuzResponse {
  @Field({ nullable: true })
  success: boolean;

  @Field({ nullable: true })
  message?: string;

  @Field(type => [Juz], { nullable: true })
  juzs?: Juz[];
}
