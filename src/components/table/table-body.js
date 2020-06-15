import React from 'react';
import Row from './row';

function TableBody({currentShown, selectedIdx, selectRow, deleteRow, editRow}) {
  return (
    <tbody className="table-body">
      {currentShown.map((row, idx) => (
        <Row
          key={idx}
          selectedIdx={selectedIdx}
          row={row}
          selectRow={selectRow}
          deleteRow={deleteRow}
          editRow={editRow}
        />
      ))}
    </tbody>
  );
}

export default TableBody;
