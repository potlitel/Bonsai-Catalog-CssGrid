import styles from "../BonsaiCard.module.css";
export function BonsaiCard({ bonsai }) {
  return(
    <li className={styles.bonsaiCard}>
        <img className={styles.bonsaiImage} src={bonsai.imgPath} alt={bonsai.name} width={230} height={345}></img>
        <div>{bonsai.name}</div>
    </li>
  );
}
