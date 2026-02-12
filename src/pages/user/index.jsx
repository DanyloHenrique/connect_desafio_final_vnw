import { FiCalendar, FiMail, FiMapPin } from 'react-icons/fi'

import eu from '@/assets/eu.jpg'
import styles from './user.module.scss'

const UserPage = () => {
  return (
    <main className={styles.user}>
      <section className={styles.container}>
        <img src={eu} alt="Imagem de perfil" />
        <div className={styles.container__content}>
          <h2>Danylo Henrique</h2>
          <span>Voluntário Ativo</span>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <div className={styles.container__content__contact}>
            <p>
              <FiMapPin /> Rio de janeiro, RJ
            </p>
            <p>
              <FiMail /> danylohenrique2407@gmail.com
            </p>
            <p>
              <FiCalendar /> Membro desde janeiro 2026
            </p>
          </div>

          <div className={styles.container__tags}>
            <p>Educação</p>
            <p>Meio Ambiente</p>
            <p>Assistência Social</p>
            <p>Design</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UserPage
