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
        {['API', 'Description', 'Category'].map((key, idx) => (
          <div key={idx}>
            <div>
              <input
                key={idx}
                type="text"
                value={fields[key]}
                onChange={e => updateForm({[key]: e.target.value})}
                placeholder={key}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="input-holder">
        {['Link', 'Cors', 'Auth'].map((key, idx) => (
          <div key={idx} className={key === 'Description' ? 'description' : ''}>
            <input
              key={idx}
              type="text"
              value={fields[key]}
              onChange={e => updateForm({[key]: e.target.value})}
              placeholder={key}
            />
          </div>
        ))}
      </div>
      <div>
        <button
          onClick={() =>
            formIsNew ? addRow(fields) : updateRow(selectedIdx, fields)
          }>
          {formIsNew ? 'Add' : 'Update'}
        </button>
      </div>
    </div>
  );
}

export default Input;
