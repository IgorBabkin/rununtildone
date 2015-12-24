"use strict";

interface IGenerator {
    next(): number;
    reset(): void;
}

export default IGenerator;
