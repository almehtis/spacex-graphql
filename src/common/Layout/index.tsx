import { ReactNode, memo } from 'react'
import { Header } from '../Header'
import styles from './styles/Layout.module.css'

export const Layout = memo(function Layout(props: {children: ReactNode}) {
  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
    </div>
  )
})