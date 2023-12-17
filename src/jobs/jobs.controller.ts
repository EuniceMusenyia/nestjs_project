import { Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Get('totalJobs')
  getCounter(): string {
    return this.jobsService.getTotalJobs();
  }

  @Post('postJob')
  increamentCounter(): string {
    return this.jobsService.getTotalJobs();
  }

  //   @Get('totaljobs')
  //   getTotalJobs(): string {
  //     return this.jobsService.getTotalJobs();
  //   }

  //   @Post('postjob')
  //   postJob(): void {
  //     this.jobsService.increamentTotalJobs();
  //   }
}
