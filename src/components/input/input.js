import React from 'react';
import './input.scss';

function Input({fields, updateForm}) {
  console.log('%cForm Data', 'color: green;', fields);
  return (
    <div>
      {Object.keys(fields).map((key, idx) => (
        <div key={idx}>
          {typeof fields[key] !== 'boolean' ? (
            <input
              key={idx}
              type="text"
              value={fields[key]}
              onChange={e => updateForm({[key]: e.target.value})}
            />
          ) : (
            <input
              type="checkbox"
              checked={fields[key]}
              onChange={e => {

                updateForm({[key]: e.target.checked});
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Input;
