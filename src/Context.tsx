import { createContext, useState, type FC, type ReactNode } from "react";

interface ContextType {
  count: number;
  increament: () => void;
  decreament: () => void;
}

export const myContext = createContext<ContextType>({
  count: 0,
  increament: () => {},
  decreament: () => {},
});

interface MyProviderProp {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProp> = ({ children }) => {
  const [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }

  function decreament() {
    setCount(count - 1);
  }

  return (
    <myContext.Provider value={{ count, increament, decreament }}>
      {children}
    </myContext.Provider>
  );
};

export default MyProvider;
