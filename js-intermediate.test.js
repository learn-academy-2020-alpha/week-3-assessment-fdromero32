// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT TESTING
// Coding practical questions

// To run tests in this file add jest to the directory:
  // 1) running `npm -g install yarn` to add the ability to run yarn commands
  // 2) `yarn add jest`
  // 3) `yarn jest` to run the testing suite


// 1. Write the code that would make this test pass.

describe("multTwo", () => {
    test("returns an array with all the numbers multiplied by two", () => {
        expect(multTwo([3, 4, 5])).toEqual([6, 8, 10])
        expect(multTwo([23, -9, 0])).toEqual([46, -18, 0])
        expect(multTwo([4.5, -4.5, 12])).toEqual([9, -9, 24])
    })
})


// 2. Write the code that would make this test pass.

describe("greeter", () => {
  let person1 = "Snap"
  let person2 = "Crackle"
  let person3 = "Pop"
  test("greets a person by name", () => {
    expect(greeter(person1)).toEqual("Hello, Snap!")
    expect(greeter(person2)).toEqual("Hello, Crackle!")
    expect(greeter(person3)).toEqual("Hello, Pop!")
  })
})