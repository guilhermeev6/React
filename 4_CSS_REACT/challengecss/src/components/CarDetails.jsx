import styles from './CarDetails.module.css'
const CarDetails = ({name, potence, km}) => {
  return (
    <>
      <div className={styles.card}>
        <ul className={styles.items}>
          <li><h1 className={styles.title}>{name}</h1></li>
          <li className={styles.li}>Potência:  {potence}</li>
          {km == 0 ? (
            <li className={styles.li}>O carro é NOVO!</li>
          ): (
            <li className={styles.li}>{km} Kilômetros rodados</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default CarDetails