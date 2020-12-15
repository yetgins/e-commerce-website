import { render,cleanup } from "@testing-library/react";
import React from "react";
import Products from '../Products';

afterEach(cleanup);

test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Products></Products>, div);
});
