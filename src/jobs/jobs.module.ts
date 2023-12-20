// import { Module } from '@nestjs/common';
// import { JobsController } from './jobs.controller';
// import {  } from './jobs.service';

// @Module({
//   controllers: [JobsController],
//   providers: [JobsService],
// })
// export class JobsModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';

import { Job } from '../shared/entity/job.entity';

@Module({
  controllers: [JobsController],
  providers: [JobsService],
  imports: [TypeOrmModule.forFeature([Job])],
})
export class JobsModule {}
