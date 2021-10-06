import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {

  constructor(@InjectQueue('sync') private readonly sync : Queue) {}

  getHello(): string {
    this.sync.add({
      foo: 'bar',
    });

    this.sync.add({
      foo: this.getDrone()
    });
    
    return 'Hello World!';
  }

  private getDrone() : string {
    return 'DJI Phantom 4 Pro';
  }
}
