import { render } from "@testing-library/react";
import { Header } from "..";
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe("Header", () => {
  it("renders properly", () => {
    useRouter.mockImplementation(() => ({push: jest.fn(), query: {}}))
    render(<Header />);
  });
});