import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  render(<Button></Button>, div);
});

it("renders text1 correctly", () => {
  const { getByTestId } = render(<Button text="click me please"></Button>);

  expect(getByTestId("button")).toHaveTextContent("click me please");
});

it("renders text2 correctly", () => {
  const { getByTestId } = render(<Button text="save"></Button>);

  expect(getByTestId("button")).toHaveTextContent("save");
});

it("matches snapshot", () => {
  const tree = renderer.create(<Button text="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("calls height prop", () => {
  const { getByTestId } = render(<Button height="50px"></Button>);

  expect(getByTestId("button")).toHaveStyle("height: 50px");
});

it("calls width prop", () => {
  const { getByTestId } = render(<Button width="90%"></Button>);

  expect(getByTestId("button")).toHaveStyle("width: 90%");
});

it("calls background prop", () => {
  const { getByTestId } = render(<Button background="white"></Button>);

  expect(getByTestId("button")).toHaveStyle("background: white");
});

it("call background prop", () => {
  const { getByTestId } = render(<Button background=""></Button>);

  expect(getByTestId("button")).toHaveStyle("background: #f0c14b");
});

const onClick = jest.fn();
it("calls onClick prop on button click", () => {
  const { getByTestId } = render(<Button onClick={onClick}></Button>);

  fireEvent.click(getByTestId("button"));
  expect(onClick).toHaveBeenCalled();
});
