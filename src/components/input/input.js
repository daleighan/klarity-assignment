import React from 'react';
import Field from './field';
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
        {['API', 'Description', 'Category', 'Link', 'Cors', 'Auth'].map(
          (key, idx) => (
            <Field
              key={idx}
              field={key}
              fields={fields}
              updateForm={updateForm}
            />
          ),
        )}
        <div>
          <button
            className="submit-btn small-shadow"
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
