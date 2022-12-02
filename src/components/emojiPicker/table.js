import { data } from "./data";
import styles from "./emojiPicker.module.scss";

const Table = () => {
  return (
    <div className={styles.table}>
      <div className={styles.txt}>KeyWords</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 250,
          justifyContent: "space-around",
        }}
      >
        {data.map((item) => (
          <div className={styles.lineTable}>
            <div>{item.symbol}</div>
            <div style={{ color: "white", marginRight: 10 }}>=</div>
            <div style={{ color: "white" }}>{item.keywords}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
