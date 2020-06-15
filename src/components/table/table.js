import React from 'react';
import './table.scss';

function Table({currentShown, deleteRow, selectedIdx, selectRow, editRow}) {
  return currentShown.length ? (
    <div>
      <table cellSpacing="0" cellPadding="0">
        <thead className="table-head">
          <tr>
            <th />
            <th className="align-left">API</th>
            <th className="align-left">Description</th>
            <th>Auth</th>
            <th>CORS</th>
            <th>Link</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {currentShown.map((row, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="checkbox"
                  checked={idx === selectedIdx}
                  onChange={() => selectRow(idx !== selectedIdx ? idx : null)}
                />
              </td>
              <td className="align-left">{row.API}</td>
              <td className="align-left">{row.Description}</td>
              <td>{row.Auth}</td>
              <td>
                {typeof row.Cors !== 'boolean'
                  ? row.Cors
                  : row.Cors
                  ? 'yes'
                  : 'no'}
              </td>
              <td>
                <a href={row.Link}>here</a>
              </td>
              <td>{row.Category}</td>
              <td onClick={() => deleteRow(idx)}>click</td>
              <td onClick={() => editRow(idx)}>click</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Table;
