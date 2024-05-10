import { assert } from "chai";
import { describe, it } from "mocha";

// ========================================== Mission - Operands
// Make all of the "Reds" disappear and pass all of the tests!
//    1. You must identify which of the operands must be used
// Operands
//    1. Must use at least 5 different logical operators
//    2. Must use at least 5 different boolean operators
//    3. Must use at least 5 different bitwise operators
// Write your code here

// Example usage of operands
describe("Logical Operators", () => {
  it("should return true when both operands are true", () => {
    assert.isTrue(bothTrueA && bothTrueB, "Expected true && true to be true");
  });

  it("should return false when first operand is true and second is false", () => {
    assert.isFalse(
      trueAndFalseA && trueAndFalseB,
      "Expected true && false to be false"
    );
  });

  it("should return false when first operand is false and second is true", () => {
    assert.isFalse(
      falseAndTrueA && falseAndTrueB,
      "Expected false && true to be false"
    );
  });

  it("should return false when both operands are false", () => {
    assert.isFalse(
      bothFalseA && bothFalseB,
      "Expected false && false to be false"
    );
  });

  it("should return true when any operand is true (OR operator)", () => {
    assert.isTrue(
      trueOrTrueA || trueOrTrueB,
      "Expected true || true to be true"
    );
  });

  it("should return true when first operand is true and second is false (OR operator)", () => {
    assert.isTrue(
      trueOrFalseA || trueOrFalseB,
      "Expected true || false to be true"
    );
  });

  it("should return true when first operand is false and second is true (OR operator)", () => {
    assert.isTrue(
      falseOrTrueA || falseOrTrueB,
      "Expected false || true to be true"
    );
  });

  it("should return false when both operands are false (OR operator)", () => {
    assert.isFalse(
      bothFalseOrA || bothFalseOrB,
      "Expected false || false to be false"
    );
  });

  it("should return false when negating true", () => {
    assert.isFalse(!notTrue, "Expected !true to be false");
  });

  it("should return true when negating false", () => {
    assert.isTrue(!notFalse, "Expected !false to be true");
  });
});

describe("Boolean Operators", () => {
  it("should return true for Boolean conversion of true", () => {
    assert.isTrue(Boolean(boolTrue), "Expected Boolean(true) to be true");
  });

  it("should return false for Boolean conversion of false", () => {
    assert.isFalse(Boolean(boolFalse), "Expected Boolean(false) to be false");
  });

  it("should return true for Boolean conversion of 1", () => {
    assert.isTrue(Boolean(boolOne), "Expected Boolean(1) to be true");
  });

  it("should return false for Boolean conversion of 0", () => {
    assert.isFalse(Boolean(boolZero), "Expected Boolean(0) to be false");
  });

  it("should return false for Boolean conversion of null", () => {
    assert.isFalse(Boolean(boolNull), "Expected Boolean(null) to be false");
  });

  it("should return false for Boolean conversion of undefined", () => {
    assert.isFalse(
      Boolean(boolUndefined),
      "Expected Boolean(undefined) to be false"
    );
  });

  it("should return false for Boolean conversion of NaN", () => {
    assert.isFalse(Boolean(boolNaN), "Expected Boolean(NaN) to be false");
  });

  it('should return true for Boolean conversion of "hello"', () => {
    assert.isTrue(Boolean(boolHello), 'Expected Boolean("hello") to be true');
  });

  it("should return false for Boolean conversion of an empty string", () => {
    assert.isFalse(Boolean(boolEmpty), 'Expected Boolean("") to be false');
  });
});

describe("Bitwise Operators", () => {
  it("should return 1 for 1 AND 1", () => {
    assert.equal(bitOneOne, 1, "Expected 1 & 1 to be 1");
  });

  it("should return 0 for 1 AND 0", () => {
    assert.equal(bitOneZero, 0, "Expected 1 & 0 to be 0");
  });

  it("should return 1 for 1 OR 0", () => {
    assert.equal(bitOrOneZero, 1, "Expected 1 | 0 to be 1");
  });

  it("should return 1 for 1 OR 1", () => {
    assert.equal(bitOrOneOne, 1, "Expected 1 | 1 to be 1");
  });

  it("should return 0 for 1 XOR 1", () => {
    assert.equal(bitXorOneOne, 0, "Expected 1 ^ 1 to be 0");
  });

  it("should return 1 for 1 XOR 0", () => {
    assert.equal(bitXorOneZero, 1, "Expected 1 ^ 0 to be 1");
  });

  it("should return -2 for NOT 1", () => {
    assert.equal(bitNotOne, -2, "Expected ~1 to be -2");
  });
});
