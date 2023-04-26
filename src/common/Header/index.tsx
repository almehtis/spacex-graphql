import { useEffect, useState } from 'react'
import { Tab } from '../Tab'
import styles from './styles/Header.module.css'
import { useCookies } from 'react-cookie'

export const Header = function Header() {
  const [bookmarks, setBookmarks] = useState(0)
  const [cookies] = useCookies()

  useEffect(() => {
    setBookmarks(Object.entries(cookies).length)
  }, [cookies])

  return (
    <div className={styles.header_block}>
      <h1 className={styles.header}>SpaceX Missions</h1>
      <div className={styles.tabs_block}>
        <Tab href='/' text='Show all' />
        <Tab href='/bookmarks' text={`Bookmarks ${bookmarks}`} />
      </div>
    </div>
  )
}