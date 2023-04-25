import { memo, useCallback } from 'react'
import Image from 'next/image'
import { useCookies } from 'react-cookie'
import styles from './styles/LaunchCard.module.css'
import Link from 'next/link'

export const LaunchCard = memo(function LaunchCard(props: {
  id: string
  missionName: string
  launchDate: number
  rocket: string
  details: string
  link?: string
}) {
  const [cookies, setCookie, removeCookie] = useCookies()

  const add = useCallback(() => {
    if(!cookies[props.missionName]) {
      setCookie(props.missionName, props.id)
    } else {
      removeCookie(props.missionName)
    }
  }, [cookies, props.id, props.missionName, removeCookie, setCookie])

  const getDate = useCallback((timestamp: number) => {
    const launchDate = new Date(timestamp * 1000).toLocaleDateString('en-US', {month: 'short', day: '2-digit', year: 'numeric'})
    return launchDate
  }, [])

  return (
    <div className={styles.card}>
      <div className={styles.title_block}>
        <h2 className={styles.header}>{props.missionName}</h2>
        <Image
          alt='Star icon'
          className={!cookies[props.missionName] ? styles.star : styles.star_active}
          onClick={add}
          src={'/icons/star.svg'}
          height={20}
          width={20}
        />
      </div>

      <div className={styles.date_and_rocket}>
        <span>{getDate(props.launchDate)}</span>
        <span>{props.rocket}</span>
      </div>

      <div className={styles.details_block}>
      {props.details &&
      <>
        <span className={styles.details_block_title}>Details</span>
         <p className={styles.details_block_description}>{props.details}</p>
      </>}

      {props.link && <Link className={styles.link} href={props.link}>Press Kit</Link>}
      </div>
    </div>
  )
})