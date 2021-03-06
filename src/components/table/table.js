import React from 'react';
import TableHeader from './table-header';
import TableBody from './table-body';
import './table.scss';

function Table({
  currentShown,
  deleteRow,
  selectedIdx,
  selectRow,
  editRow,
  sortedBy,
  sort,
  loaded,
}) {
  return  (
    <div className="table-holder add-shadow">
      <table cellSpacing="0" cellPadding="0">
        <TableHeader sortedBy={sortedBy} sort={sort} />
        <TableBody
          currentShown={currentShown}
          selectedIdx={selectedIdx}
          selectRow={selectRow}
          deleteRow={deleteRow}
          editRow={editRow}
          loaded={loaded}
        />
      </table>
    </div>
  );
}

export default Table;
