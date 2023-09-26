import { describe, expect, it } from "vitest";
import { Faq } from "../Faq";
import { render, screen } from "@testing-library/react";
import { testIds } from "../constants";

describe("The Faq component", () => {
  it("should render", () => {
    render(<Faq />);
    const action = screen.getByTestId(testIds.COMPONENT);
    expect(action).toBeInTheDocument();
  });
  it("The heading text should have the correct text", () => {
    render(<Faq />);
    const label = "Frequently Asked Questions";
    const action = screen.getByTestId(testIds.HEADING);
    expect(action).toHaveTextContent(label);
  });
  it("The question and answer should be 6 in total", () => {
    render(<Faq />);
    const action = screen.getByTestId(testIds.QUESTION_ANSWER).children;
    expect(action.length).toBe(6);
  });
});
