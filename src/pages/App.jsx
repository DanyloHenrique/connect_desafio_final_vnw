// import { Footer } from "@/components/Footer/Footer.jsx";
// import { Header } from "@/components/Header";

import { Button, Card, Footer, Header, StatsItems } from '@/components/'

import { DialogNav } from '@/components/Nav/DialogNav'

import styles from './home.module.scss'

import heroImg from '@/assets/hero_img.png'
import { LuEarth } from 'react-icons/lu'

export default function App() {
  return (
    <main className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__info}>
          <h1 className="display-md">Projetos Sociais que transformam</h1>
          <p className="body-md">
            Conectamos sua empresa com projetos sociais impactantes. <br />{' '}
            Juntos, criamos mudanças reais na comunidade.
          </p>
        </div>

        <Button isSecondary={true}>
          Enviar doação
          <LuEarth />
        </Button>

        <div className={styles.container__content__statsItemsList}>
          <StatsItems title={'500+'} text={'Empresas Voluntárias'} />
          <StatsItems title={'1.2K+'} text={'Projetos Realizados'} />
          <StatsItems title={'50K+'} text={'Vidas Impactadas'} />
        </div>
      </div>
      <img src={heroImg} alt="" className={styles.container__img} />
    </main>
  )
}
