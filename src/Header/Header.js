import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.headerName}>
        <h1>Payment Tracker</h1>
      </div>
      <div className={classes.headerProfile}>
        <div className={classes.wholeProfile}>
          <div className={classes.profilePic}>
            <h3>RG</h3>
          </div>
          <div className={classes.profileName}>
            <p>Rakesh Gowda</p>
          </div>
          <div className={classes.profileArrow}>
            <i className={`${classes.arrow} ${classes.down}`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
