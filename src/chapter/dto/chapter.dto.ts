import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Chapter {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  chapter_number?: number;

  @Field({ nullable: true })
  bismillah_pre?: boolean;

  @Field({ nullable: true })
  revelation_order?: number;

  @Field({ nullable: true })
  revelation_place?: string;

  @Field({ nullable: true })
  name_complex?: string;

  @Field({ nullable: true })
  name_arabic?: string;

  @Field({ nullable: true })
  verses_count?: number;

  @Field(type => [Number], { nullable: true })
  pages?: number[];

  @Field({ nullable: true })
  name_simple?: string;
}
