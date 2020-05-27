import '../styles/DataTable.css';
import DataBody from './DataBody';

import PropTypes from 'prop-types';
import React from 'react';

function DataTable({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataBody users={users} />
      </table>
    </div>
  );
}

DataTable.propTypes = {
  headings: PropTypes.array,
  users: PropTypes.array,
  handleSort: PropTypes.func
}

export default DataTable;
