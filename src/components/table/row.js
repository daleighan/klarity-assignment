import React from 'react';

function Row({idx, selectedIdx, row, selectRow, deleteRow, editRow}) {
  console.log(idx);
  return (
    <tr key={idx}>
      <td>
        <input
          type="checkbox"
          checked={idx === selectedIdx}
          onChange={() => selectRow(idx !== selectedIdx ? idx : null)}
        />
      </td>
      <td className="large-cell">{row.API}</td>
      <td className="large-cell">{row.Description}</td>
      <td>{row.Auth}</td>
      <td>
        {typeof row.Cors !== 'boolean' ? row.Cors : row.Cors ? 'yes' : 'no'}
      </td>
      <td className="large-cell">{row.Link}</td>
      <td>{row.Category}</td>
      <td>
        <button onClick={() => deleteRow(idx)}>
          <img
            className="row-icon"
            src={`/edit_row${idx % 2 === 0 ? '' : '_dark'}.png`}
            alt="delete"
          />
        </button>
      </td>
      <td>
        <button onClick={() => editRow(idx)}>
          <img
            className="row-icon"
            src={`/edit_row${idx % 2 === 0 ? '' : '_dark'}.png`}
            alt="edit"
          />
        </button>
      </td>
    </tr>
  );
}

export default Row;
