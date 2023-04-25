import { render } from "@testing-library/react";
import { LaunchCard } from "..";

describe("LaunchCard", () => {
  it("renders properly", () => {
    render(<LaunchCard
      id='test'
      missionName='test'
      launchDate={1}
      rocket='test'
      details='test'
    />);
  });
});