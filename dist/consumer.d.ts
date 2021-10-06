import { Job } from "bull";
export declare class Consumer {
    process(job: Job): Promise<void>;
}
