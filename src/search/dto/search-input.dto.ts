import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchInput {
  @Field()
  query: string;

  @Field({
    nullable: true,
    description: 'Results per page. s is also valid parameter.',
    defaultValue: 20,
  })
  size?: number;

  @Field({
    nullable: true,
    description: 'Page number, well for pagination.',
    defaultValue: 0,
  })
  page?: number;

  @Field({
    nullable: true,
    description:
      'ISO code of language, use this query params if you want to boost translations for specific language. For list of available language see listLanguages query',
  })
  language?: string;
}
