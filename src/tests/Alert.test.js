import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an error message", () => {
    render(<Alert message="Error!" />);
    const errorMessage = screen.getByText("Error!");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders a success message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!" success />
    );
    expect(getByText(/Success/).textContent).toBe("Success!");
    expect(asFragment()).toMatchSnapshot();
  });
  it("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
