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
              placeholder={key}
            />
          ) : (
            <div>
            <input
              type="checkbox"
              checked={fields[key]}
              id={`field-${key}`}
              onChange={e => {
                updateForm({[key]: e.target.checked});
              }}
            />
                <label htmlFor={`field-${key}`}>{key}</label>
            </div>
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
