import Header from "./Header/Header";
import Info from "./Info/Info";
import classes from "./Main.module.css";
import Navigation from "./Navigation/Navigation";
import Table from "./Table/Table";

function Main() {
  return (
    <section>
      <div className={classes.mainGrid}>
        <Navigation />
        <Header />
        <Info />
        <Table />
      </div>
    </section>
  );
}

export default Main;
