import { render } from "@testing-library/react";
import { Layout } from "..";
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe("Layout", () => {
  it("renders properly", () => {
    useRouter.mockImplementation(() => ({push: jest.fn(), query: {}}))
    render(<Layout>test</Layout>);
  });
});