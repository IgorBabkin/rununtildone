import { EventEmitter2 } from 'eventemitter2';
import IGenerator from "./IGenerator";

class Job {
    public isRunning: boolean;
    private timeoutId: number;
    private eventEmitter: EventEmitter2;

    constructor(private executeFn: Function, private delayGenerator: IGenerator) {
        this.eventEmitter = new EventEmitter2();
    }

    public on(event: string, listener: Function): void {
        this.eventEmitter.on(event, listener);
    }

    public once(event: string, listener: Function): void {
        this.eventEmitter.once(event, listener);
    }

    public start(): void {
        this.emit('start');
        this.isRunning = true;
        this.run();
    }

    public stop(): void {
        clearTimeout(this.timeoutId);
        this.reset();
        this.emit('stop');
    }

    private emit(event: string): void {
        this.eventEmitter.emit(event);
    }

    private reset(): void {
        this.delayGenerator.reset();
        this.isRunning = false;
    }

    private done(): void {
        this.reset();
        this.emit('done');
    }

    private run(): void {
        this.execute().then(this.done, this.retry);
    }

    private retry(): void {
        this.emit('retry');
        let delay = this.delayGenerator.next();
        this.runDefer(delay);
    }

    private runDefer(delay: number): void {
        this.timeoutId = setTimeout(this.run, delay);
    }

    private execute(): Promise<any> {
        this.emit('execute');
        return this.executeFn();
    }
}

export default Job;
