import React from 'react';
import './table.scss';

function Table({entries, editRow, deleteRow}) {
  return entries.length ? (
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
              <th>Edit</th>
                <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((row, idx) => (
            <tr key={idx}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{row.API}</td>
              <td>{row.Description}</td>
              <td>{row.Auth}</td>
              <td>{row.HTTPS ? 'yes' : 'no'}</td>
              <td>{row.Cors}</td>
              <td>{row.Link}</td>
              <td>{row.Category}</td>
              <td>{row.HTTPS}</td>
              <td onClick={() => editRow(idx, row)}>click</td>
              <td onClick={() => deleteRow(idx)}>click</td>
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