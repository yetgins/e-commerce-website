import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import React from "react";
import ProductItem from "../ProductItem";
import StateProvider from "../../../contexts/StateProvider";
import reducer, { initialState } from "../../../actions/reducer";

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <ProductItem />
    </StateProvider>,
    div
  );
});
