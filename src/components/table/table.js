import React from 'react';
import './table.scss';

function Table({currentShown, deleteRow, selectedIdx, selectRow, editRow}) {
  return currentShown.length ? (
    <div className="table-holder">
      <table cellSpacing="0" cellPadding="0">
        <thead className="table-head">
          <tr>
            <th className="small-cell"/>
            <th className="med-cell">API</th>
            <th className="large-cell">Description</th>
            <th className="small-cell">Auth</th>
            <th className="small-cell">CORS</th>
            <th className="large-cell">Link</th>
            <th className="small-cell">Category</th>
            <th className="small-cell">Delete</th>
            <th className="small-cell">Edit</th>
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
              <td className="large-cell">{row.API}</td>
              <td className="large-cell">{row.Description}</td>
              <td>{row.Auth}</td>
              <td>
                {typeof row.Cors !== 'boolean'
                  ? row.Cors
                  : row.Cors
                  ? 'yes'
                  : 'no'}
              </td>
              <td className="large-cell">
                {row.Link}
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
