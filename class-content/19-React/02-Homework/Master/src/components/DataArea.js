import '../styles/DataArea.css';
import API from '../utils/API';
import DataTable from './DataTable';
import Nav from './Nav';

import React from 'react';

export default class DataArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      query: '',
      users: [{}],
      order: 'descend',
      filteredUsers: [{}],
      headings: [
        { name: 'Image', width: '10%' },
        { name: 'Name', width: '10%' },
        { name: 'Phone', width: '20%' },
        { name: 'Email', width: '20%' },
        { name: 'DOB', width: '10%' }
      ],

      handleSort: heading => {
        if (this.state.order === 'descend') {
          this.setState({
            order: 'ascend'
          });
        } else {
          this.setState({
            order: 'descend'
          });
        }

        const compareFnc = (a, b) => {
          if (this.state.order === 'ascend') {
            // account for missing values
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            }
            // numerically
            else if (heading === 'name') {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return a[heading] - b[heading];
            }
          } else {
            // account for missing values
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            }
            // numerically
            else if (heading === 'name') {
              return b[heading].first.localeCompare(a[heading].first);
            } else {
              return b[heading] - a[heading];
            }
          }
        };
        const sortedUsers = this.state.filteredUsers.sort(compareFnc);
        this.setState({ filteredUsers: sortedUsers });
      },
      handleSearchChange: event => {
        const query = event.target.value;
        this.filterUsers(this.state.startDate, this.state.endDate, query);
      },
      handleDateChange: (event) => {
        const date = new Date(event.target.value);
        const isStartDate = event.target.dataset.dateType === `start`;
        const startDate = isStartDate ? date : this.state.startDate;
        const endDate = isStartDate ? this.state.endDate : date;

        this.filterUsers(startDate, endDate, this.state.query);
      }
    };
  }

  filterUsers = (startDate, endDate, query) => {
    const updatedState = { ...this.state };

    updatedState.startDate = startDate;
    updatedState.endDate = endDate;
    updatedState.query = query;

    const filteredUsers = this.state.users.filter(user => {
      const userDate = new Date(user.dob.date);

      let values = Object.values(user)
        .join('')
        .toLowerCase();

      return (
        userDate >= updatedState.startDate &&
        userDate <= updatedState.endDate &&
        values.indexOf(query.toLowerCase()) !== -1);
    });
    updatedState.filteredUsers = filteredUsers;
    this.setState(updatedState)
  }

  componentDidMount() {
    API.getUsers().then(results => {
      this.setState({
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }

  render() {
    return (
      <>
        <Nav handleDateChange={this.state.handleDateChange} handleSearchChange={this.state.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.state.headings}
            users={this.state.filteredUsers}
            handleSort={this.state.handleSort}
          />
        </div>
      </>
    );
  }
}
