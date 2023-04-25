import { ReactNode, memo } from 'react'
import styles from './styles/LaunchesList.module.css'

export const LaunchesList = memo(function LaunchesList(props: {children: ReactNode}) {
  return (
    <div className={styles.list}>
      {props.children}
    </div>
  )
})