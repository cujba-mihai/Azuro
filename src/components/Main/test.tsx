import React from "react";

import { render, screen } from "utils/test-utils";

import Main from "./index";

describe("<Main />", () => {
  it("has 1 child", () => {
    render(<Main />);
    expect(screen.getByText(/Azuro/i));
  });
});
