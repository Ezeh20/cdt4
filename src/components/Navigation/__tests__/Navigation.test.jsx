import { render, screen } from "@testing-library/react";
import { Navigation } from "../Navigation";
import { describe, expect, it } from "vitest";
import { testIds } from "../constants";
const { COMPONENT, LINKS, SUBLINKS } = testIds;

describe("The navigation component", () => {
  it("The component should mount", () => {
    render(<Navigation />);
    const action = screen.getByTestId(COMPONENT);
    expect(action).toBeInTheDocument();
  });
  it("The navigation should have 4 links", () => {
    render(<Navigation />);
    const action = screen.getByTestId(LINKS);
    expect(action).toBeInTheDocument();
  });
  it("The sublinks should have a length of 2 nodes each", () => {
    render(<Navigation />);
    const action = screen.getAllByTestId(SUBLINKS);
    expect(action.length).toBe(4);
  });
});
