const now = require("performance-now");
const { secretAlgorithm } = require("./processes");

const NUMBER_OF_TESTS = 10;

// Suppose we're benchmarking our algorithm
// We want to run it multiple time and figure our average running time
async function main() {
    try {
        let totalTime = 0;

        for (let i = 0; i < NUMBER_OF_TESTS; i++) {
            const start = now();
            await secretAlgorithm();
            const end = now();
            totalTime += (end-start);
        }

        console.log();

        console.log("Total Time: ", totalTime);
        console.log("Number of retries: ", NUMBER_OF_TESTS);
        console.log("Average Runnign Time: ", (totalTime/NUMBER_OF_TESTS).toFixed(3));
    } catch (error) {
        console.error("error", error);
    }
}

main();