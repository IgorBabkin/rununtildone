"use strict";

import DefaultDelayGenerator from "../lib/delayGenerator";
import { assert } from 'chai';
import Job from "../lib/job";

/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/assertion-error/assertion-error.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />


describe('Job', function() {
    describe('on', function () {
        let job = new Job(
            () => {
                return Promise.resolve();
            },
            new DefaultDelayGenerator(5000)
        );

        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        });
    });
});