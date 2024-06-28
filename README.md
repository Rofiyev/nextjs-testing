# Counter component

This project contains a simple Counter component built with NextJS. The component allows users to increment and decrement the calculated value displayed in the header.

## Contents

- [Description](#description)
- [Install](#install)
- [Usage](#usage)
- [Test](#test)
- [License](#license)

## Description

The Counter component is a simple component in NextJS that manages the count state. It contains two buttons to increase and decrease the number and a header to display the current number. In this case, we will test the state of our component by writing a test to the component we have created

## Installation

To set up the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Rofiyev/nextjs-testing.git
   cd nextjs-testing
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Preview

### app/page.tsx

```javascript
import Counter from "./components/Counter";

export default function Home() {
  return <Counter />;
}
```

### app/components/Counter.tsx

```javascript
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState < number > 0;

  const increment = () => setCount((prev: number) => prev + 1);
  const decrement = () => setCount((prev: number) => prev - 1);

  return (
    <div className="container p-10">
      <h2 className="text-4xl mb-2">{count}</h2>
      <div className="flex gap-2">
        <button className="bg-blue-500 py-2 px-4 rounded" onClick={increment}>
          Increment
        </button>
        <button className="bg-blue-500 py-2 px-4 rounded" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
```

## Testing File

### \_\_tests\_\_/counter.test.jsx

```javascript
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "@/components/Counter";

describe("Counter Component Testing", () => {
  it("Counter change check!", () => {
    render(<Counter />);

    const heading = screen.getByRole("heading", { name: "0" });
    const increment = screen.getByRole("button", { name: "Increment" });
    const decrement = screen.getByRole("button", { name: "Decrement" });

    fireEvent.click(increment);

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("1");

    fireEvent.click(decrement);
    expect(heading).toHaveTextContent("0");
  });
});
```

## Run Test FIle

To set up the project, follow these steps:

1. You will need to open a terminal:

   ```bash
   Ctrl + Shift + `
   ```

2. You have to write:

   ```bash
   npm run test
   ```

> You will then be able to see the result of the component test!

## Explanation

1. **Description**: Provides a brief overview of the `Counter` page functionality.
2. **Installation**: Steps to set up the project by cloning the repository, installing dependencies, and running the development server.
3. **Usage**: Instructions on how to use the `Counter` component in a Next.js application.
4. **Testing**: Details about the testing setup and how to run the tests.
5. **License**: Information about the project's license.

This `README.md` file should provide a comprehensive guide to understanding, setting up, and testing the `Counter` page in your Next.js project.
