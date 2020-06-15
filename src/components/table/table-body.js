import React from 'react';
import Row from './row';

function TableBody({currentShown, selectedIdx, selectRow, deleteRow, editRow}) {
  return (
    <tbody className="table-body">
      {currentShown.length ? (
        currentShown.map((row, idx) => (
          <Row
            key={idx}
            idx={idx}
            selectedIdx={selectedIdx}
            row={row}
            selectRow={selectRow}
            deleteRow={deleteRow}
            editRow={editRow}
          />
        ))
      ) : (
        <tr>
          <td colSpan="9" className="text-center">Loading...</td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;
