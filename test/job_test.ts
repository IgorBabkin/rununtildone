import Job from "../lib/job";
import DefaultDelayGenerator from "../lib/delayGenerator";
import { expect } from 'chai';

describe('Job', () => {
    it('Scenario 1', (done) => {
        let fn = () => new Promise((resolve) => {
            setTimeout(resolve.bind(null, 'yo'), 500);
        });

        let job = new Job(fn, new DefaultDelayGenerator(500));
        let doJob = (job) => {
            return new Promise((resolve, reject) => {
                job.once('stop', reject);
                job.once('done', resolve);
                job.start();
            });
        };

        let testResult = (msg) => {
            expect(msg).to.equal('yo');
            done();
        };

        doJob(job).then(testResult);
    });

    it('Scenario 2', (done) => {
        let createFn = (count:number = 0) => () => {
            return (count++ < 2) ? Promise.reject(count) : Promise.resolve(count);
        };

        let createDelayGenerator = (delay:number) => new DefaultDelayGenerator(delay);

        let job = new Job(createFn(), createDelayGenerator(200));
        let doJob = (job) => {
            return new Promise((resolve, reject) => {
                job.once('stop', reject);
                job.once('done', resolve);
                job.start();
            });
        };

        let testResult = (count) => {
            expect(count).to.equal(3);
            done();
        };

        doJob(job).then(testResult);
    });
});