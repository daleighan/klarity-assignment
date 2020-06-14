import React from 'react';
import './input.scss';

function Input({
  formIsNew,
  selectedIdx,
  fields,
  updateForm,
  addRow,
  updateRow,
}) {
  console.log(fields);
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
      <button
        onClick={() =>
          formIsNew ? addRow(fields) : updateRow(selectedIdx, fields)
        }>
        {formIsNew ? 'Add' : 'Update'}
      </button>
    </div>
  );
}

export default Input;
