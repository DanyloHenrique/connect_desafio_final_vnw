import { Card } from '@/components/Card'
import styles from './section.module.scss'

export const Section = ({ title, itemList, labelButton }) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>

      <div className={styles.container__List}>
        {itemList.map(({ imgSrc, imgAlt, title, description }) => (
          <Card
            key={title}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
            description={description}
            handleClick={() => {}}
            labelButton={labelButton}
          />
        ))}
      </div>
    </section>
  )
}
