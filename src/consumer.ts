import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";

@Processor('sync')
export class Consumer {
    @Process()
    async process(job: Job) {
        console.log(job.data.foo);
    }
}