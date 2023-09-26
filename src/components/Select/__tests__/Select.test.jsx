import { render, screen } from "@testing-library/react";
import { ModalContext } from "../../../context/ModalContext";
import { Select } from "../Select";
import { describe, expect, it } from "vitest";
import { testIds } from "../constants";
import { states } from "../../Extrude/internals/Search/constants";

const setIsActive = true;
const value = { setIsActive };

describe("The select component", () => {
  it("The component should not display it's dropdown items at first", () => {
    render(
      <ModalContext.Provider value={value}>
        <Select options={states} />
      </ModalContext.Provider>
    );
    const action = screen.queryByTestId(testIds.OPTIONS);
    expect(action).not.toBeInTheDocument();
  });
});
