import { assert } from "chai";
import { describe, it } from "mocha";

// ========================================== Mission - Conditionals
// Make all of the "Reds" disappear and pass all of the tests!
//    1. You must use different types of conditionals
// Conditionals
//    1. Must use at least 2 if statements
//    2. Must use at least 1 if-else statement
//    3. Must use at least 1 if-else if-else statement
//    4. Must use at least 1 switch statement
//    5. Must use at least 1 ternary operator
// Write your code here

// Simple if statement to check if a number is positive
function isPositive(num: number): boolean {}

// If-else statement to determine if a person can vote based on their age
function canVote(age: number): string {}

// If-else if statement to classify grades based on score
function classifyGrade(score: number): string {}

// If-else if-else statement to check the temperature and provide a description
function checkTemperature(temp: number): string {}

// Ternary operator to determine if a number is even or odd
function isEven(num: number): string {}

// ========================================== Tests are here
describe("Testing conditionals", () => {
  describe("isPositive function", () => {
    it("should return true for positive numbers", () => {
      assert.isTrue(isPositive(1), "1 is positive");
    });

    it("should return false for zero", () => {
      assert.isFalse(isPositive(0), "0 is not positive");
    });

    it("should return false for negative numbers", () => {
      assert.isFalse(isPositive(-1), "-1 is not positive");
    });
  });

  describe("canVote function", () => {
    it("should allow voting for ages 18 and above", () => {
      assert.equal(canVote(18), "Can vote");
    });

    it("should not allow voting for ages below 18", () => {
      assert.equal(canVote(17), "Cannot vote");
    });
  });

  describe("classifyGrade function", () => {
    it("should classify 90 as Excellent", () => {
      assert.equal(classifyGrade(90), "Excellent");
    });

    it("should classify 70 as Good", () => {
      assert.equal(classifyGrade(70), "Good");
    });

    it("should classify 69 as Needs Improvement", () => {
      assert.equal(classifyGrade(69), "Needs Improvement");
    });
  });

  describe("checkTemperature function", () => {
    it("should return Hot for temperatures above 30", () => {
      assert.equal(checkTemperature(31), "Hot");
    });

    it("should return Warm for temperatures between 21 and 30", () => {
      assert.equal(checkTemperature(25), "Warm");
    });

    it("should return Cold for temperatures 20 or below", () => {
      assert.equal(checkTemperature(20), "Cold");
    });
  });

  describe("isEven function", () => {
    it("should return Even for even numbers", () => {
      assert.equal(isEven(2), "Even");
    });

    it("should return Odd for odd numbers", () => {
      assert.equal(isEven(1), "Odd");
    });
  });
});

describe("Extended Testing of conditionals", () => {
  describe("isPositive function extended", () => {
    it("should return false for negative numbers (extreme value)", () => {
      assert.isFalse(isPositive(-1000), "-1000 is not positive");
    });

    it("should return true for positive numbers (large value)", () => {
      assert.isTrue(isPositive(1000), "1000 is positive");
    });
  });

  describe("canVote function extended", () => {
    it("should allow voting for ages exactly 18", () => {
      assert.equal(canVote(18), "Can vote", "18 should be allowed to vote");
    });

    it("should not allow voting for a very young age", () => {
      assert.equal(
        canVote(5),
        "Cannot vote",
        "5 should not be allowed to vote"
      );
    });

    it("should allow voting for older adults", () => {
      assert.equal(canVote(80), "Can vote", "80 should be allowed to vote");
    });
  });

  describe("classifyGrade function extended", () => {
    it("should classify 95 as Excellent (high boundary)", () => {
      assert.equal(
        classifyGrade(95),
        "Excellent",
        "95 should be classified as Excellent"
      );
    });

    it("should classify 71 as Good (low boundary for Good)", () => {
      assert.equal(
        classifyGrade(71),
        "Good",
        "71 should be classified as Good"
      );
    });

    it("should classify 89 as Good (high boundary for Good)", () => {
      assert.equal(
        classifyGrade(89),
        "Good",
        "89 should be classified as Good"
      );
    });
  });

  describe("checkTemperature function extended", () => {
    it("should return Hot for extremely high temperatures", () => {
      assert.equal(
        checkTemperature(50),
        "Hot",
        "50 degrees should be classified as Hot"
      );
    });

    it("should return Cold for freezing temperatures", () => {
      assert.equal(
        checkTemperature(-5),
        "Cold",
        "-5 degrees should be classified as Cold"
      );
    });

    it("should return Warm for mild temperatures", () => {
      assert.equal(
        checkTemperature(22),
        "Warm",
        "22 degrees should be classified as Warm"
      );
    });
  });

  describe("isEven function extended", () => {
    it("should return Even for zero", () => {
      assert.equal(isEven(0), "Even", "0 should be classified as Even");
    });

    it("should return Odd for very large odd number", () => {
      assert.equal(isEven(99999), "Odd", "99999 should be classified as Odd");
    });
  });
});
