import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders MissionsList without errors", () => {
    render(<Episodes episodes={[]} />);
  });