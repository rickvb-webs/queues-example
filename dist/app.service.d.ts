import { Queue } from 'bull';
export declare class AppService {
    private readonly sync;
    constructor(sync: Queue);
    getHello(): string;
    private getDrone;
}
