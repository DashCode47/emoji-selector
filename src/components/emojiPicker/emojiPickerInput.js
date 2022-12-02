import { useRef } from "react";
import EmojiPicker from "./emojiPicker";
import Table from "./table";
import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInput() {
  const inputRef = useRef(null);
  return (
    <div className={styles.inputContainer}>
      <h2 className={styles.title}>Kruger Emojis App</h2>
      <input
        ref={inputRef}
        className={styles.in}
        placeholder="Say Something.."
      />
      <EmojiPicker ref={inputRef} />
      <Table />
    </div>
  );
}
