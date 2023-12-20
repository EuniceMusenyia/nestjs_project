// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class JobsService {
//   private counter = 0;

//   getTotalJobs(): string {
//     const response = 'Total Jobs : ' + this.counter;
//     return response;
//   }

//   postJob(): string {
//     this.counter++;
//     return 'Job Posted';
//   }

//   private totalJobs: number = 0;

//   getTotalJobs(): number {
//     return this.totalJobs;
//   }

//   increamentTotalJobs(): void {
//     this.totalJobs++;
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from '../shared/entity/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>,
  ) {}

  async getTotalJobs(): Promise<number> {
    return await this.jobRepository.count();
  }

  async postJob(jobData: {
    title: string;
    description: string;
  }): Promise<void> {
    const newJob = this.jobRepository.create(jobData);
    await this.jobRepository.save(newJob);
  }
}
