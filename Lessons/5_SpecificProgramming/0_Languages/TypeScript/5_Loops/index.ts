import { assert } from "chai";
import { describe, it } from "mocha";

// ========================================== Mission - Loops
// Make all of the "Reds" disappear and pass all of the tests!
//    1. You must use different types of loops
// Loops
//    1. Must use a for loop
//    2. Must use a while loop
//    3. Must use a do-while loop
// Write your code here

// Sum numbers using a for loop
function sumNumbersForLoop(max: number): number {
  let sum = 0;
  // Fill In Code here

  // ==========
  return sum;
}

// Find factorial using a while loop
function factorialWhileLoop(num: number): number {
  let result = 1;
  // Fill In Code here

  // ==========
  return result;
}

// Check presence of an element using a do-while loop
function containsElementDoWhileLoop(arr: number[], target: number): boolean {
  let index = 0;
  // Fill In Code here

  // ==========
  return false;
}

// ========================================== Tests are here
describe("Testing loops", () => {
  describe("sumNumbersForLoop function", () => {
    it("should calculate the sum of numbers up to 5", () => {
      assert.equal(
        sumNumbersForLoop(5),
        15,
        "Sum of numbers 1 through 5 should be 15"
      );
    });

    it("should return 0 for max 0", () => {
      assert.equal(
        sumNumbersForLoop(0),
        0,
        "Sum of numbers up to 0 should be 0"
      );
    });

    it("should return 1 for max 1", () => {
      assert.equal(
        sumNumbersForLoop(1),
        1,
        "Sum of numbers up to 1 should be 1"
      );
    });
  });

  describe("factorialWhileLoop function", () => {
    it("should calculate the factorial of 5", () => {
      assert.equal(factorialWhileLoop(5), 120, "Factorial of 5 should be 120");
    });

    it("should return 1 for factorial of 0", () => {
      assert.equal(factorialWhileLoop(0), 1, "Factorial of 0 should be 1");
    });

    it("should return 1 for factorial of 1", () => {
      assert.equal(factorialWhileLoop(1), 1, "Factorial of 1 should be 1");
    });
  });

  describe("containsElementDoWhileLoop function", () => {
    it("should return true if element is in the array", () => {
      assert.isTrue(
        containsElementDoWhileLoop([1, 2, 3, 4, 5], 3),
        "Array contains 3"
      );
    });

    it("should return false if element is not in the array", () => {
      assert.isFalse(
        containsElementDoWhileLoop([1, 2, 4, 5], 3),
        "Array does not contain 3"
      );
    });

    it("should return false for an empty array", () => {
      assert.isFalse(
        containsElementDoWhileLoop([], 1),
        "Empty array should not contain 1"
      );
    });
  });
});

describe("Extended Testing of loops", () => {
  describe("sumNumbersForLoop function extended", () => {
    it("should calculate the sum of numbers up to 10", () => {
      assert.equal(
        sumNumbersForLoop(10),
        55,
        "Sum of numbers 1 through 10 should be 55"
      );
    });

    it("should calculate the sum of numbers up to 100", () => {
      assert.equal(
        sumNumbersForLoop(100),
        5050,
        "Sum of numbers 1 through 100 should be 5050"
      );
    });

    it("should handle large numbers without performance degradation", () => {
      assert.equal(
        sumNumbersForLoop(1000),
        500500,
        "Sum of numbers 1 through 1000 should be 500500"
      );
    });
  });

  describe("factorialWhileLoop function extended", () => {
    it("should calculate the factorial of 10", () => {
      assert.equal(
        factorialWhileLoop(10),
        3628800,
        "Factorial of 10 should be 3628800"
      );
    });

    it("should handle factorial of 20", () => {
      assert.equal(
        factorialWhileLoop(20),
        2432902008176640000,
        "Factorial of 20 should be a large number"
      );
    });

    it("should return 1 for negative numbers (non-valid input)", () => {
      assert.equal(
        factorialWhileLoop(-5),
        1,
        "Factorial of negative numbers should be 1"
      );
    });
  });

  describe("containsElementDoWhileLoop function extended", () => {
    it("should return true if large numbers are contained in the array", () => {
      assert.isTrue(
        containsElementDoWhileLoop([1000, 2000, 3000], 3000),
        "Array should contain 3000"
      );
    });

    it("should return true for the first element in the array", () => {
      assert.isTrue(
        containsElementDoWhileLoop([1, 2, 3], 1),
        "Array contains 1 as the first element"
      );
    });

    // it("should return false when searching for a number in an array of strings (type safety)", () => {
    //   assert.isFalse(
    //     containsElementDoWhileLoop(["1", "2", "3"], 1),
    //     "Array of strings should not contain a number"
    //   );
    // });

    it("should return true for the last element checked in a do-while loop", () => {
      const bigArray = Array.from({ length: 1000 }, (_, i) => i + 1);
      assert.isTrue(
        containsElementDoWhileLoop(bigArray, 1000),
        "Array contains 1000 as the last element"
      );
    });
  });
});
