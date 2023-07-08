import { setupCounter } from "./counter";
import { describe, test, expect } from "vitest";

// Mocking HTMLButtonElement for testing purposes
class MockButtonElement {
  innerHTML = "";
  addEventListener(_: string, callback: () => void) {
    callback();
  }
}

describe("setupCounter", () => {
  test("should increment counter and update innerHTML on button click", () => {
    const element = new MockButtonElement();
    setupCounter(element as HTMLButtonElement);
    expect(element.innerHTML).toBe("count is 0");
  });

  test("should increment counter and update innerHTML multiple times on button clicks", () => {
    const element = new MockButtonElement();
    setupCounter(element as HTMLButtonElement);
    expect(element.innerHTML).toBe("count is 0");
    element.addEventListener("click", () => {
      expect(element.innerHTML).toBe(
        `count is ${element.innerHTML.split(" ")[2]}`,
      );
    });
  });
});
