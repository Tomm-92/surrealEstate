import React from "react";
import { render, screen } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("renders an error message", () => {
    const { getByText } = render(<Alert message="Error!" />);
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  it("renders an error message", () => {
    render(<Alert message="Error!" />);
    const errorMessage = screen.getByText("Error!");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders a success message", () => {
    const { getByText } = render(<Alert message="Success!" success />);
    expect(getByText(/Success/).textContent).toBe("Success!");
  });
});
