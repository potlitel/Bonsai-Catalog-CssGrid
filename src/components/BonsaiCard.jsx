import styles from "../BonsaiCard.module.css";
export function BonsaiCard({ bonsai }) {
  return(
    <div className={styles.card}>
      <li className={styles.bonsaiCard}>
          <img className={styles.bonsaiImage} src={bonsai.imgPath} alt={bonsai.name} width={230} height={345}></img>
          <div className={styles.cardText}><h5>{bonsai.name}</h5></div>
      </li>
    </div>
  );
}
