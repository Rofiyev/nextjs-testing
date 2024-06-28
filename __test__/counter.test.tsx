import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "@/app/components/Counter";

describe("Counter Component Testing", () => {
  it("Counter change check!", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", {
      name: "0",
    }) as HTMLHeadingElement;
    const increment = screen.getByRole("button", {
      name: "Increment",
    }) as HTMLButtonElement;
    const decrement = screen.getByRole("button", {
      name: "Decrement",
    }) as HTMLButtonElement;

    fireEvent.click(increment);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("1");

    fireEvent.click(decrement);
    expect(heading).toHaveTextContent("0");
  });
});
