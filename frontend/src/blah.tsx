import styles from "./blah.module.css";

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img src="./logo192.png" alt="companyLogo"></img>
        </div>
        <div className="col-10 align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}

export default TopBanner;
