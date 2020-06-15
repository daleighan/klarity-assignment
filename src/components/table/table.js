import React from 'react';
import './table.scss';

function Table({
  currentShown,
  deleteRow,
  selectedIdx,
  selectRow,
  editRow,
  sortedBy,
  sort,
}) {
  return currentShown.length ? (
    <div className="table-holder add-shadow">
      <table cellSpacing="0" cellPadding="0">
        <thead className="table-head">
          <tr>
            {[
              ['', 'small'],
              ['API', 'med', true],
              ['Description', 'large', true],
              ['Auth', 'small', true],
              ['Cors', 'small', true],
              ['Link', 'large', true],
              ['Category', 'small', true],
              ['Delete', 'icon'],
              ['Edit', 'icon'],
            ].map(([title, size, canSort], i) => {
              const isSelected = sortedBy === title;
              return (
                <th
                  key={i}
                  className={`cell ${size}-cell ${
                    isSelected ? 'sorted-by' : ''
                  }`}
                  onClick={() => (canSort ? sort(title) : (() => null)())}>
                  {title}
                  {canSort && (
                    <img
                      className="arrows"
                      src={`/arrows_${isSelected ? 'blue' : 'grey'}.png`}
                      alt="arrows"
                    />
                  )}
                </th>
              );
            })}
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
              <td className="large-cell">{row.Link}</td>
              <td>{row.Category}</td>
              <td>
                <button onClick={() => deleteRow(idx)}>
                  <img
                    className="row-icon"
                    src={`/edit_row${idx % 2 !== 0 ? '_dark' : ''}.png`}
                    alt="delete"
                  />
                </button>
              </td>
              <td>
                <button onClick={() => editRow(idx)}>
                  <img
                    className="row-icon"
                    src={`/edit_row${idx % 2 !== 0 ? '_dark' : ''}.png`}
                    alt="edit"
                  />
                </button>
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
