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
      <div className="input-holder">
        {['API', 'Description', 'Link', 'Category'].map((key, idx) => (
          <div key={idx}>
            {typeof fields[key] !== 'boolean' ? (
              <div>
                <input
                  key={idx}
                  type="text"
                  value={fields[key]}
                  onChange={e => updateForm({[key]: e.target.value})}
                  placeholder={key}
                />
              </div>
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
      </div>
      <div className="input-holder">
        {['Description', 'Cors'].map((key, idx) => (
          <div className={key === 'Description' ? 'description' : ''}>
            <input
              key={idx}
              type="text"
              value={fields[key]}
              onChange={e => updateForm({[key]: e.target.value})}
              placeholder={key}
            />
          </div>
        ))}
        <div className="button-holder">
          <button
            onClick={() =>
              formIsNew ? addRow(fields) : updateRow(selectedIdx, fields)
            }>
            {formIsNew ? 'Add' : 'Update'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
