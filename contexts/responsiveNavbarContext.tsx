import { createContext } from "react";

// Define the shape of the context value
interface MyContextValue {
  count: number;
  increment: () => void;
}

// Create a new context with the specified type
const MyContext = createContext<MyContextValue>({
  count: 0,
  increment: () => {},
});
