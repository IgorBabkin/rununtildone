"use strict";

import IGenerator from './IGenerator';

class DefaultDelayGenerator implements IGenerator {
    private delay: number;

    constructor(delay: number) {
        this.delay = delay;
    }

    next(): number {
        return this.delay;
    }

    reset(): void {

    }
}

export default DefaultDelayGenerator;
