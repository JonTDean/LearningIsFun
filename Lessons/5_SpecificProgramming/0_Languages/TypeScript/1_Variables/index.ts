import { assert } from "chai";
import { describe, it } from "mocha";

/**
 * Mission: Make all of the "Reds" disappear and pass all of the tests!
 * 1. You must identify which variables need to be created
 * 2. Variables must have a data type
 * 3. Use at least one const
 */

// ========================================== Tests are here
describe("Variables", () => {
  it("should have the correct variable name and value for name", () => {
    assert.equal(aName, "John Doe");
  });

  it("should have the correct variable name and value for age", () => {
    assert.equal(age, 25);
  });

  it("should have the correct variable name and value for isStudent", () => {
    assert.equal(isStudent, true);
  });

  it("should have the correct email address", () => {
    assert.equal(email, "john.doe@example.com");
  });

  it("should have the correct city", () => {
    assert.equal(city, "New York");
  });

  it("should have the correct country", () => {
    assert.equal(country, "USA");
  });

  it("should have the correct employment status", () => {
    assert.equal(employmentStatus, "Employed");
  });

  it("should have the correct marital status", () => {
    assert.equal(maritalStatus, "Single");
  });

  it("should have the correct height in centimeters", () => {
    assert.equal(heightInCm, 175);
  });

  it("should have the correct weight in kilograms", () => {
    assert.equal(weightInKg, 70);
  });

  it("should have the correct phone number", () => {
    assert.equal(phoneNumber, "+1234567890");
  });

  it("should have the correct online status", () => {
    assert.equal(isOnline, true);
  });

  it("should have the correct account balance", () => {
    assert.equal(accountBalance, 5000);
  });

  it("should have the correct last login date", () => {
    assert.deepEqual(lastLoginDate, new Date("2024-05-01"));
  });

  it("should have the correct birth year", () => {
    assert.equal(birthYear, 1990);
  });

  it("should have a valid driving license", () => {
    assert.equal(hasDrivingLicense, true);
  });

  it("should have the correct number of dependents", () => {
    assert.equal(numberOfDependents, 2);
  });

  it("should have the correct middle name", () => {
    assert.equal(middleName, "Albert");
  });

  it("should have the correct favorite color", () => {
    assert.equal(favoriteColor, "Blue");
  });

  it("should have a correctly formatted bio", () => {
    assert.equal(bio, "Passionate software developer and tech enthusiast.");
  });
});
