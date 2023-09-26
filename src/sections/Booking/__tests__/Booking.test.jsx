import { render, screen } from "@testing-library/react";
import { Booking } from "../Booking";
import { describe, expect, it } from "vitest";
import { testIds } from "../constants";

describe("Booking Component", () => {
  it("should render", () => {
    render(<Booking />);
    const action = screen.getByTestId(testIds.COMPONENT);
    expect(action).toBeInTheDocument();
  });
  it("The top section should have 2 children nodes", () => {
    render(<Booking />);
    const action = screen.getByTestId(testIds.TOP).children;
    expect(action.length).toBe(2);
  });
  it("The Bottom section should have 4 children nodes", () => {
    render(<Booking />);
    const action = screen.getByTestId(testIds.BOTTOM).children;
    expect(action.length).toBe(4);
  });
});
