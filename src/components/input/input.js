import React from 'react';
import './input.scss';

function Input({data}) {
  console.log('%cForm Data', 'color: green;', data);
  return <div>Input Component</div>;
}

export default Input;
