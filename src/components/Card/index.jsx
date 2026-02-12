import { Button } from '@/components/Button'

import styles from './card.module.scss'

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  handleClick,
  labelButton,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__containerImage}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className={styles.card__info}>
        <h3>{title}</h3>

        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          <div className={styles.card__info__description}>
            <p>
              <span>Atividade:</span> {description.activity}
            </p>
            <p>
              <span>Impacto:</span> {description.impact}
            </p>
          </div>
        )}
      </div>

      <div className={styles.card__containerButton}>
        <Button handleClick={handleClick}>{labelButton}</Button>
      </div>
    </article>
  )
}
