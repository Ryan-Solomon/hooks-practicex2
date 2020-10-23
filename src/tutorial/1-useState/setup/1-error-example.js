import React, { useEffect, useState } from 'react';

const ErrorExample = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const titleElement = window.document.querySelector('title');
    titleElement.textContent = 'New Title';
    setSize(window.innerWidth);
  }, [window.innerWidth]);

  return <React.Fragment>{size}</React.Fragment>;
};

export default ErrorExample;
