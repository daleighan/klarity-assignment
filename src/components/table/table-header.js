import React from 'react';

const columns = [
  ['', 'tiny'],
  ['API', 'med', true],
  ['Description', 'large', true],
  ['Auth', 'small', true],
  ['Cors', 'small', true],
  ['Link', 'large', true],
  ['Category', 'small', true],
  ['Delete', 'icon'],
  ['Edit', 'icon'],
];

function TableHeader({sortedBy, sort}) {
  return (
    <thead className="table-head">
      <tr>
        {columns.map(([title, size, canSort], idx) => {
          const isSelected = title === sortedBy;
          return (
            <th
              key={idx}
              className={`cell ${size}-cell ${isSelected ? 'sorted-by' : ''}`}
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
  );
}

export default TableHeader;
