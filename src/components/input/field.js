import React from 'react';

function Field({field, fields, updateForm}) {
  return (
    <div className="field small-shadow">
      <input
        type="text"
        value={fields[field]}
        onChange={e => updateForm({[field]: e.target.value})}
        placeholder={field}
      />
    </div>
  );
}

export default Field;
