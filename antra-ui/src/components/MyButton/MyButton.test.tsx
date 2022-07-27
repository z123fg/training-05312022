import { queryByText, findByText, render, screen, fireEvent, waitFor } from "@testing-library/react"
import React from "react"
import MyButton from "./MyButton"


//react testing library, enzyme
//test suite

//unit test
//behavior test, integration test, end to end(e2e) test: cypress, headless browser
//code coverage
describe("MyButton test cases", () => {
  test("snapshot test for MyButton", () => {
    const view = render(<MyButton>SUBMIT</MyButton>);
    expect(view.asFragment()).toMatchSnapshot();
  });

  test("MyButton component should be rendered", () => {
    render(<MyButton>SUBMIT</MyButton>);
    const buttonEl = screen.queryByText("SUBMIT");
    expect(buttonEl).toBeInTheDocument();
  });

  test("MyButton should change its color based on color props", async () => {
    const { rerender } = render(<MyButton color="primary">SUBMIT</MyButton>);
    let buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-primary-contained");
    rerender(<MyButton color="secondary">SUBMIT</MyButton>);
    buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-secondary-contained");
    rerender(<MyButton color="default">SUBMIT</MyButton>);
    buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-default-contained");
  })


  test("MyButton should change its variant based on variant props", async () => {
    const { rerender } = render(<MyButton variant="contained">SUBMIT</MyButton>);
    let buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-primary-contained");
    rerender(<MyButton variant="outlined">SUBMIT</MyButton>);
    buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-primary-outlined");
    rerender(<MyButton variant="text">SUBMIT</MyButton>);
    buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-primary-text");
  })

  test("MyButton should change its size based on size props", async () => {
    const { rerender } = render(<MyButton size="medium">SUBMIT</MyButton>);
    let buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-medium");
    rerender(<MyButton size="small">SUBMIT</MyButton>);
    buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-small");
    rerender(<MyButton size="large">SUBMIT</MyButton>);
    buttonEl = await screen.findByRole("button");
    expect(buttonEl).toHaveClass("btn-large");
  })

  test("MyButton should be disabled if the disabled props is true, should invoke onClick when it is not disabled", async () => {
    const mockClickHandler = jest.fn();
    const { rerender } = render(<MyButton onClick={mockClickHandler}>SUBMIT</MyButton>);
    let buttonEl = await screen.findByRole("button");
    fireEvent.click(buttonEl);
    expect(mockClickHandler).toBeCalledTimes(1);
    rerender(<MyButton onClick={mockClickHandler} disabled>SUBMIT</MyButton>);
    fireEvent.click(buttonEl);
    expect(mockClickHandler).toBeCalledTimes(1);
  });

  test("MyButton should have rippple animation on click", async () => {
    render(<MyButton>SUBMIT</MyButton>);
    let buttonEl = await screen.findByRole("button");
    let rippleEls = screen.queryAllByTestId("ripple-element");
    expect(rippleEls).toHaveLength(0);
    fireEvent.click(buttonEl);
    rippleEls = screen.queryAllByTestId("ripple-element");
    expect(rippleEls).toHaveLength(1);
    fireEvent.click(buttonEl);
    rippleEls = screen.queryAllByTestId("ripple-element");
    expect(rippleEls).toHaveLength(2);

    rippleEls.forEach(rippleEl => {
      fireEvent.animationEnd(rippleEl);
    });
    rippleEls = screen.queryAllByTestId("ripple-element");
    expect(rippleEls).toHaveLength(0);
  });
})