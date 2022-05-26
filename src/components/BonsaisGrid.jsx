import bonsais from "../data/data";
import { BonsaiCard } from "./BonsaiCard";
import styles from "../BonsaisGrid.module.css";
import { Link } from "react-router-dom"

export function BonsaisGrid() {
  //console.info(bonsais);
  return (
    <ul className={styles.bonsaisGrid}>
      {bonsais.map((bonsai) => {
        return (
          <Link to={`/bonsai/${bonsai.id}`} style={{ textDecoration: 'none' }}>
            <BonsaiCard key={bonsai.id} bonsai={bonsai}/>
          </Link>  
        );
      })}
    </ul>
  );
}
