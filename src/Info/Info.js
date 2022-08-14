import Chart from "./Chart";
import classes from "./Info.module.css";

function Info() {
  const width = `85%`;
  const height = `85%`;

  return (
    <div className={classes.info}>
      <div className={classes.infoChart}>
        <div className={classes.chart}>
          <p>Payroll Status This Month</p>
          <Chart />
        </div>
      </div>
      <div className={classes.infoContent}>
        <ul className={classes.content}>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              className={classes.icon}
            >
              <path d="M18,24H15V20.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V24H6V20.5A3.5,3.5,0,0,1,9.5,17h5A3.5,3.5,0,0,1,18,20.5Zm-6-8a3.5,3.5,0,1,0-3.5-3.5A3.5,3.5,0,0,0,12,16Zm6-9a3.5,3.5,0,1,0-3.5-3.5A3.5,3.5,0,0,0,18,7ZM6,7A3.5,3.5,0,1,0,2.5,3.5,3.5,3.5,0,0,0,6,7ZM8.8,8.031C8.7,8.022,8.6,8,8.5,8h-5A3.5,3.5,0,0,0,0,11.5V15H3V11.5a.5.5,0,0,1,.5-.5H6.712A5.5,5.5,0,0,1,8.8,8.031ZM20.5,8h-5c-.1,0-.2.022-.3.031A5.5,5.5,0,0,1,17.288,11H20.5a.5.5,0,0,1,.5.5V15h3V11.5A3.5,3.5,0,0,0,20.5,8Z" />
            </svg>
            <div className={classes.data}>
              <h1 className={classes.values}>3248</h1>
              <p>Total Workers</p>
            </div>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              viewBox="0 0 24 24"
              className={classes.icon}
            >
              <path d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v13A5.506,5.506,0,0,0,5.5,24h13A5.506,5.506,0,0,0,24,18.5V5.5A5.506,5.506,0,0,0,18.5,0ZM21,18.5A2.5,2.5,0,0,1,18.5,21H18V20A6,6,0,0,0,6,20v1H5.5A2.5,2.5,0,0,1,3,18.5V5.5A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5Z" />
              <circle cx="12" cy="8.5" r="3.5" />
            </svg>
            <div className={classes.data}>
              <h1 className={classes.values}>43</h1>
              <p>Consultants</p>
            </div>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width={width}
              height={height}
              className={classes.icon}
            >
              <path d="M3.017,13.5H14.455l-2.689,2.689,2.121,2.122,4.189-4.19a3,3,0,0,0,0-4.242l-4.2-4.2L11.753,7.8l2.7,2.7H3.017Z" />
              <path d="M20.5,0H3.5A3.528,3.528,0,0,0,0,3.552V7.9H3V3.552A.526.526,0,0,1,3.5,3h17a.526.526,0,0,1,.5.548v16.9a.526.526,0,0,1-.5.548H3.5a.526.526,0,0,1-.5-.548V16.1H0v4.352A3.528,3.528,0,0,0,3.5,24h17A3.528,3.528,0,0,0,24,20.448V3.552A3.528,3.528,0,0,0,20.5,0Z" />
            </svg>
            <div className={classes.data}>
              <h1 className={classes.values}>7584</h1>
              <p>Aadhar Operators</p>
            </div>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              viewBox="0 0 24 24"
              className={classes.icon}
            >
              <path d="M18.5,0H5.5A5.506,5.506,0,0,0,0,5.5v8A5.506,5.506,0,0,0,5.5,19h5v2H8a1.5,1.5,0,0,0,0,3h8a1.5,1.5,0,0,0,0-3H13.5V19h5A5.506,5.506,0,0,0,24,13.5v-8A5.506,5.506,0,0,0,18.5,0ZM5.5,3h13A2.5,2.5,0,0,1,21,5.5V13H3V5.5A2.5,2.5,0,0,1,5.5,3Z" />
            </svg>
            <div className={classes.data}>
              <h1 className={classes.values}>948</h1>
              <p>Other Operators</p>
            </div>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              viewBox="0 0 24 24"
              className={classes.icon}
            >
              <path d="M18.5,0H5.5A5.507,5.507,0,0,0,0,5.5v9A5.507,5.507,0,0,0,5.5,20H6.938l4.1,3.428a1.5,1.5,0,0,0,1.924,0L17.062,20H18.5A5.507,5.507,0,0,0,24,14.5v-9A5.507,5.507,0,0,0,18.5,0ZM21,14.5A2.5,2.5,0,0,1,18.5,17H16.517a1.5,1.5,0,0,0-.962.35L12,20.322,8.445,17.35A1.5,1.5,0,0,0,7.483,17H5.5A2.5,2.5,0,0,1,3,14.5v-9A2.5,2.5,0,0,1,5.5,3h13A2.5,2.5,0,0,1,21,5.5Z" />
              <path d="M7.5,9h3a1.5,1.5,0,0,0,0-3h-3a1.5,1.5,0,0,0,0,3Z" />
              <path d="M16.5,11h-9a1.5,1.5,0,0,0,0,3h9a1.5,1.5,0,0,0,0-3Z" />
            </svg>
            <div className={classes.data}>
              <h1 className={classes.values}>28</h1>
              <p>IT Staff</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Info;
