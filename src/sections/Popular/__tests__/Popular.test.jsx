import { render, screen } from "@testing-library/react";
import { Popular } from "../Popular";
import { describe, expect, it } from "vitest";
import { testIds } from "../constants";

describe("The popular component", () => {
  it("The component should mount", () => {
    render(<Popular />);
    const action = screen.getByTestId(testIds.COMPONENT);
    expect(action).toBeInTheDocument();
  });
  it("The header should display the correct text", () => {
    render(<Popular />);
    const text = "Popular Postcodes";
    const action = screen.getByTestId(testIds.HEADER);
    expect(action).toHaveTextContent(text);
  });
  it("The subheader should display the correct text", () => {
    render(<Popular />);
    const text = "View All";
    const action = screen.getByTestId(testIds.SUBHEADER);
    expect(action).toHaveTextContent(text);
  });
  it("There should be 8 cards in the dom", () => {
    render(<Popular />);
    const action = screen.getByTestId(testIds.CARDS).children;
    expect(action.length).toBe(8);
  });
});
