import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("AddProperty", () => {
  const validProps = {
    title: "Stub Title",
    type: "Stub Type",
    bathrooms: 2,
    bedrooms: 3,
    price: 100000,
    city: "Manchester",
    email: "M.Salah@gmail.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for the props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(getByText("Stub Title")).toHaveClass("property-title");
    expect(getByText("Stub Type")).toHaveClass("property-type");
    expect(getByText("2")).toHaveClass("property-bathrooms");
    expect(getByText("3")).toHaveClass("property-bedrooms");
    expect(getByText("100000")).toHaveClass("property-price");
    expect(getByText("M.Salah@gmail.com")).toHaveClass("property-email");
  });
});
