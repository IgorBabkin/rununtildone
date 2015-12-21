import Job from './job';
import DefaultDelayGenerator from './delayGenerator';

let delayGenerator = new DefaultDelayGenerator(5000);

let task = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};

let job = new Job(task, delayGenerator);
job.start();

new Promise(
    (resolve, reject) => {
        let job = new Job(task, delayGenerator);
        job.on('done', resolve);
        job.on('stop', reject);
        job.start();
    }
);



