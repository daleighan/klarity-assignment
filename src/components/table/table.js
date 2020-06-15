import React from 'react';
import './table.scss';

function Table({currentShown, deleteRow, selectedIdx, selectRow, editRow}) {
  return currentShown.length ? (
    <div>
      <table>
        <thead>
          <tr>
            <th />
            <th>API</th>
            <th>Description</th>
            <th>Auth</th>
            <th>HTTPS</th>
            <th>CORS</th>
            <th>Link</th>
            <th>Category</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentShown.map((row, idx) => (
            <tr key={idx}>
              <td>
                <input
                  type="checkbox"
                  checked={idx === selectedIdx}
                  onChange={() => selectRow(idx !== selectedIdx ? idx : null)}
                />
              </td>
              <td>{row.API}</td>
              <td>{row.Description}</td>
              <td>{row.Auth}</td>
              <td>{row.HTTPS ? 'yes' : 'no'}</td>
              <td>{typeof row.Cors !== 'boolean' ? row.Cors : row.Cors ? 'yes' : 'no'}</td>
              <td>{row.Link}</td>
              <td>{row.Category}</td>
              <td onClick={() => deleteRow(idx)}>click</td>
              <td
                onClick={() =>
                  editRow(
                    idx,
                  )
                }>
                click
              </td>
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
