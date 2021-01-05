import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ChapterModule } from './chapter/chapter.module';
import { JuzModule } from './juz/juz.module';
import { OptionModule } from './option/option.module';
import { TafsirModule } from './tafsir/tafsir.module';
import { VerseModule } from './verse/verse.module';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ChapterModule,
    OptionModule,
    VerseModule,
    JuzModule,
    TafsirModule,
    SearchModule,
  ],
})
export class AppModule {}
