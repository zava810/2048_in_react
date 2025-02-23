import { GameContext } from "@/context/game-context";
import styles from "@/styles/score.module.css";
import { useContext } from "react";
import FontPicker from "@/components/lifonts/lifp";

export default function Score() {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      Score
      <div>{score}</div>
      <FontPicker />
    </div>
  );
}
