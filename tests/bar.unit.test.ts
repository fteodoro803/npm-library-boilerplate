import { describe, it, expect } from "vitest"
import { bar } from "../src"

describe("bar function", () => {
  it('should return "bar"', () => {
    expect(bar()).toEqual("bar")
  })
})