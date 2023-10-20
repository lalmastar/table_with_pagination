import React, { Component } from "react";

// components
import Datatable from "./DataTable";
import Loading from "./Loading";

// utilities
import makeData from "../utilities/makeData";

const data = makeData(200);

const columns = [
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  },
  {
    Header: "Age",
    accessor: "age"
  },
  {
    Header: "Visits",
    accessor: "visits"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Profile Progress",
    accessor: "progress"
  }
];

const initialState = {
  pageSize: 10,
  pageIndex: 0
};

class PeopleDataTable extends Component {
  // Loading must be handled here because DataTable MUST have data on load
  renderTable() {
    if (!data) {
      return <Loading />;
    } else {
      return (
        <Datatable data={data} columns={columns} initialState={initialState} />
      );
    }
  }

  render() {
    return <>{this.renderTable()}</>;
  }
}

export default PeopleDataTable;
