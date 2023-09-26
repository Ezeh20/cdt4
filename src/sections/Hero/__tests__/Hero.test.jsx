import { render, screen } from "@testing-library/react";
import { Hero } from "../Hero";
import { testIds } from "../constants";
import { describe, expect, it } from "vitest";
import { ModalContext } from "../../../context/ModalContext";

const setIsActive = true;
const value = { setIsActive };

describe("The Hero section", () => {
  it("The component should render", () => {
    render(
      <ModalContext.Provider value={value}>
        <Hero />
      </ModalContext.Provider>
    );
    const action = screen.getByTestId(testIds.COMPONENT);
    expect(action).toBeInTheDocument();
  });
  it("The geeting text should be correct", () => {
    render(
      <ModalContext.Provider value={value}>
        <Hero />
      </ModalContext.Provider>
    );
    const text = "HELLO";
    const action = screen.getByTestId(testIds.GREETING);
    expect(action).toHaveTextContent(text);
  });
  it("The  subText should be correct", () => {
    render(
      <ModalContext.Provider value={value}>
        <Hero />
      </ModalContext.Provider>
    );
    const text = "Do you want to check your Postcode?";
    const action = screen.getByTestId(testIds.SUBTEXT);
    expect(action).toHaveTextContent(text);
  });
});
