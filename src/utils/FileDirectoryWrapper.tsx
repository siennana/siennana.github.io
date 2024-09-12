import React, { ComponentType, useState } from 'react';

interface WithFileDirectoryProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

function withFileDirectory<P extends WithFileDirectoryProps>(WrappedComponent: ComponentType<P>) {
  return function WithFileDirectoryComponent(props: Omit<P, keyof WithFileDirectoryProps>) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
      <WrappedComponent
        {...(props as P)}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
}

export default withFileDirectory;
