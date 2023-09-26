import { render, screen } from "@testing-library/react";
import { testIds } from "../constants";
import { describe, expect, it } from "vitest";
import { Note } from "../Note";

describe("The Notes section", () => {
  it("should render", () => {
    render(<Note />);
    const action = screen.getByTestId(testIds.COMPONENT);
    expect(action).toBeInTheDocument();
  });
  it("The header should render the correct text", () => {
    render(<Note />);
    const text = "Things to note:";
    const action = screen.getByTestId(testIds.HEADER);
    expect(action).toHaveTextContent(text);
  });
  it("The notes should be 7 in total", () => {
    render(<Note />);
    const action = screen.getAllByTestId(testIds.NOTES);
    expect(action.length).toBe(7);
  });
});
