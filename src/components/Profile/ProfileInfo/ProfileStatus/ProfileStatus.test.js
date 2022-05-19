import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("staus props should be in the state", () => {
    const component = create(<ProfileStatus status="dfg" />);
    const instance = component.getInstance();
    expect(instance.state.text).toBe("dfg");
  });
});