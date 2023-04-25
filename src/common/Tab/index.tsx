import { memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './styles/Tab.module.css'

export const Tab = memo(function Tab(props: {
  href: string
  text: string
}) {
  const router = useRouter()

  return (
    <Link href={props.href}>
      <div className={router.pathname === props.href ? styles.tab : styles.tab_inactive}>
        <span>{props.text}</span>
      </div>
    </Link>
  )
})