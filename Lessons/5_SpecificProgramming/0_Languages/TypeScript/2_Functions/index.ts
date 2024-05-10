import { assert } from "chai";
import { describe, it } from "mocha";

// ========================================== Mission - Functions
// Make all of the "Reds" dissapear and pass all of the tests!
// 		1. You must identify which of the Functions must be created
// Functions
// 		1. Must have a data type for each argument
// 		2. Must have a return type
// 		3. Must use at least 2 different types of an anonymous function
//			3a. with a Rocket Constructor
//			3b. with a function keyword
// Write Functions here

// ========================================== Tests are here
describe("greet function", () => {
  it("should have the correct function name", () => {
    assert.equal(greet.name, "greet");
  });

  it("should accept a string argument for name", () => {
    const nameArg = greet
      .toString()
      .match(/function\s*\w+\s*\(\s*(\w+)\s*:\s*string\s*,?/);
    assert.isNotNull(nameArg);
    assert.equal(nameArg[1], "name");
  });

  it("should accept an optional number argument for age", () => {
    const ageArg = greet
      .toString()
      .match(
        /function\s*\w+\s*\(\s*\w+\s*:\s*string\s*,\s*(\w+)?\s*:\s*number\s*\)/
      );
    assert.isNotNull(ageArg);
    assert.equal(ageArg[1], "age");
  });

  it("should return a string", () => {
    const returnType = greet
      .toString()
      .match(
        /function\s*\w+\s*\(\s*\w+\s*:\s*string\s*,?\s*\w*?\s*:\s*number\s*\)?\s*:\s*(\w+)/
      );
    assert.isNotNull(returnType);
    assert.equal(returnType[1], "string");
  });

  it("should accept one required argument", () => {
    const requiredArgs = greet.length;
    assert.equal(requiredArgs, 1);
  });

  it("should accept one optional argument", () => {
    const totalArgs = greet
      .toString()
      .match(
        /function\s*\w+\s*\(\s*\w+\s*:\s*string\s*,?\s*\w*?\s*:\s*number?\s*\)/
      )![0]
      .split(",").length;
    assert.equal(totalArgs, 2);
  });

  it("should return the correct greeting when only name is provided", () => {
    const result = greet("Alice");
    assert.equal(result, "Hello, Alice!");
  });

  it("should return the correct greeting when both name and age are provided", () => {
    const result = greet("Bob", 25);
    assert.equal(result, "Hello, Bob! You are 25 years old.");
  });

  // Adding more test cases for expanded coverage
  it("should handle empty name with no age provided", () => {
    const result = greet("");
    assert.equal(result, "Hello, !");
  });

  it("should handle null as a name argument gracefully", () => {
    const result = greet(null as any); // Using 'any' to bypass TypeScript's type checking
    assert.equal(result, "Hello, null!");
  });

  it("should handle undefined age correctly", () => {
    const result = greet("Charlie", undefined);
    assert.equal(result, "Hello, Charlie!");
  });

  it("should handle negative age correctly", () => {
    const result = greet("Dave", -1);
    assert.equal(result, "Hello, Dave! You are -1 years old.");
  });

  it("should handle very large age correctly", () => {
    const result = greet("Eve", 1000);
    assert.equal(result, "Hello, Eve! You are 1000 years old.");
  });

  it("should handle zero age correctly", () => {
    const result = greet("Fay", 0);
    assert.equal(result, "Hello, Fay! You are 0 years old.");
  });

  it("should handle names with special characters", () => {
    const result = greet("Nañe", 30);
    assert.equal(result, "Hello, Nañe! You are 30 years old.");
  });

  it("should handle names with mixed case", () => {
    const result = greet("McLovin", 22);
    assert.equal(result, "Hello, McLovin! You are 22 years old.");
  });
});
