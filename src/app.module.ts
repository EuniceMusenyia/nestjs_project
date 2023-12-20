import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobsModule } from './jobs/jobs.module';
import { CareerCardsModule } from './careerCards/careerCards.module';
import { Job } from './shared/entity/job.entity';

@Module({
  imports: [
    JobsModule,
    CareerCardsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'senyia',
      password: 'senyia',
      database: 'workbaydb',
      synchronize: true,
      entities: [Job],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
