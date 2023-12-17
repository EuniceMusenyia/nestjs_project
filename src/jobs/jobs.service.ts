import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private counter = 0;

  getTotalJobs(): string {
    const response = 'Total Jobs : ' + this.counter;
    return response;
  }

  postJob(): string {
    this.counter++;
    return 'Job Posted';
  }

  //   private totalJobs: number = 0;

  //   getTotalJobs(): number {
  //     return this.totalJobs;
  //   }

  //   increamentTotalJobs(): void {
  //     this.totalJobs++;
  //   }
}
