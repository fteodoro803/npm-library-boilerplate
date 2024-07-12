import { describe, it, expect } from "vitest"
import { foo } from "../src"

describe("foo function", () => {
  it('should return "foo"', () => {
    expect(foo()).toEqual("foo")
  })
})
