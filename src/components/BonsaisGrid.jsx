import bonsais from "../data/data";
import { BonsaiCard } from "./BonsaiCard";
import styles from "../BonsaisGrid.module.css";

export function BonsaisGrid() {
  //console.info(bonsais);
  return (
    <ul className={styles.bonsaisGrid}>
      {bonsais.map((bonsai) => {
        return <BonsaiCard key={bonsai.id} bonsai={bonsai}/>;
      })}
    </ul>
  );
}
