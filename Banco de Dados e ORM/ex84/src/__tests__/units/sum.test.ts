import sum from "../.."

describe("unit test: sum function", () => {
    test("should be able to sum two numbers successfully", () => {
        const total = sum(2,2)

        expect(total).toBe(4)
    })
}) 