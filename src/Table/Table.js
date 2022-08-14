import classes from "./Table.module.css";

const data = [
  {
    name: "Astha",
    employees: 19,
    approved: 465,
    toAgency: "02-May",
    AmountToPay: "87,67,888",
    paid: "87,65,888",
    balance: "0",
    agencyToEmployee: "Delayed (17-May)",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Alagondi Enterprises",
    employees: 129,
    approved: 112,
    toAgency: "02-May",
    AmountToPay: "2,87,67,432",
    paid: "1,97,65,432",
    balance: "87,67,432",
    agencyToEmployee: "overdue",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Astha",
    employees: 19,
    approved: 465,
    toAgency: "02-May",
    AmountToPay: "87,67,888",
    paid: "87,65,888",
    balance: "0",
    agencyToEmployee: "Delayed (17-May)",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Alagondi Enterprises",
    employees: 129,
    approved: 112,
    toAgency: "02-May",
    AmountToPay: "2,87,67,432",
    paid: "1,97,65,432",
    balance: "87,67,432",
    agencyToEmployee: "overdue",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Astha",
    employees: 19,
    approved: 465,
    toAgency: "02-May",
    AmountToPay: "87,67,888",
    paid: "87,65,888",
    balance: "0",
    agencyToEmployee: "Delayed (17-May)",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Alagondi Enterprises",
    employees: 129,
    approved: 112,
    toAgency: "02-May",
    AmountToPay: "2,87,67,432",
    paid: "1,97,65,432",
    balance: "87,67,432",
    agencyToEmployee: "overdue",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Astha",
    employees: 19,
    approved: 465,
    toAgency: "02-May",
    AmountToPay: "87,67,888",
    paid: "87,65,888",
    balance: "0",
    agencyToEmployee: "Delayed (17-May)",
    aadhaar: "211/226",
    leave: "leave",
  },

  {
    name: "Alagondi Enterprises",
    employees: 129,
    approved: 112,
    toAgency: "02-May",
    AmountToPay: "2,87,67,432",
    paid: "1,97,65,432",
    balance: "87,67,432",
    agencyToEmployee: "overdue",
    aadhaar: "211/226",
    leave: "leave",
  },
];

function Table() {
  const width = `10%`;
  const height = `10%`;

  const delayed = `delayed`;
  const overdue = `overdue`;
  const tick = (
    <div className={classes.tick}>
      <h3>&#10003;</h3>
    </div>
  );

  return (
    <div className={classes.tableGrid}>
      <div className={classes.table}>
        <table>
          <tr className={classes.additionalHeader}>
            <th colspan="1" scope="colgroup" className={classes.active}>
              All agencies
              <br />
            </th>
            <th colspan="9" scope="colgroup">
              <td className={classes.dropDown}>
                <p>Month</p>
                <select>
                  <option value="January">January</option>
                  <option value="Feburary">Feburary</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                </select>

                <button className={classes.buttonAadhar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Layer_1"
                    data-name="Layer 1"
                    viewBox="0 0 24 24"
                    width={width}
                    height={height}
                  >
                    <path d="M8.5,22.437a1.5,1.5,0,0,1-.88-2.715c2.512-1.82,2.865-5.181,2.878-8.229A1.5,1.5,0,0,1,12,10h.006A1.5,1.5,0,0,1,13.5,11.507c-.01,2.3-.033,7.686-4.12,10.644A1.487,1.487,0,0,1,8.5,22.437Zm6.028.994A14,14,0,0,0,16.513,20.1a1.5,1.5,0,1,0-2.762-1.174A10.925,10.925,0,0,1,12.2,21.542a1.5,1.5,0,0,0,2.331,1.889Zm3.408-9.838C18,12.572,18,11.663,18,11a6,6,0,0,0-8-5.658A1.5,1.5,0,1,0,11,8.17,3,3,0,0,1,15,11c0,.659,0,1.479-.058,2.407A1.5,1.5,0,0,0,16.347,15q.046,0,.093,0A1.5,1.5,0,0,0,17.937,13.593ZM4.691,18.956a4.745,4.745,0,0,0,1.846-.618C8.978,16.873,8.99,13.771,9,11.506A1.5,1.5,0,0,0,7.505,10H7.5A1.5,1.5,0,0,0,6,11.494c-.009,2.385-.172,3.772-1,4.271a1.823,1.823,0,0,1-.686.216A1.5,1.5,0,0,0,4.5,18.969,1.4,1.4,0,0,0,4.691,18.956Zm16.028,4.172A28.7,28.7,0,0,0,23,11a10.946,10.946,0,0,0-.774-4.054,1.5,1.5,0,1,0-2.788,1.108A7.937,7.937,0,0,1,20,11a25.906,25.906,0,0,1-2.006,10.872,1.5,1.5,0,0,0,2.725,1.256ZM4,12.5V11A8,8,0,0,1,15.787,3.954a1.5,1.5,0,0,0,1.426-2.639A11,11,0,0,0,1,11v1.5a1.5,1.5,0,0,0,3,0Z" />
                  </svg>

                  <span>Import Aadhaar Report</span>
                </button>
                <button className={classes.buttonPayment}>
                  <span> Current Month Payments</span>
                </button>
              </td>
            </th>
          </tr>

          <tr className={classes.headerTable}>
            <th>Agency Name</th>
            <th>Employees</th>
            <th>Approved</th>
            <th>To Agency</th>
            <th>Amount to Pay</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Agency to Employee</th>
            <th>Aadhaar</th>
            <th>Leave</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key} className={classes.column}>
                <td>{val.name}</td>
                <td>{val.employees}</td>
                <td>{val.approved}</td>
                <td>{val.toAgency}</td>
                <td>{val.AmountToPay}</td>
                <td>{val.paid}</td>
                <td>{val.balance}</td>
                <td
                  className={
                    classes[
                      val.agencyToEmployee == "overdue" ? overdue : delayed
                    ]
                  }
                >
                  {val.agencyToEmployee}
                </td>
                <td>{val.aadhaar}</td>
                <td>{tick}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Table;
