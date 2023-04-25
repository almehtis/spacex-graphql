import Head from 'next/head'
import { GET_LAUNCHES_LIST } from '@/common/queries/get-cards'
import { LaunchesList } from '@/common/LaunchesList'
import { LaunchCard } from '@/common/LaunchCard'
import { useQuery } from '@apollo/client'
import { useCallback } from 'react'
import { LaunchCardType } from '@/common/types/launch-card'
import styles from '../common/LaunchesList/styles/LaunchesList.module.css'

export default function Home() {
  const {data, loading, error, fetchMore} = useQuery(GET_LAUNCHES_LIST, {
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 2,
      offset: 0
    }
  })

  const fetch = useCallback(async () => {
    const currenPosts = data?.launches.length

    await fetchMore({
      variables: {
        limit: currenPosts + 10,
        offset: currenPosts,
      }
    })
  }, [data?.launches.length, fetchMore])

  return (
    <>
      <Head>
        <title>All Missions</title>
      </Head>

      <main className={`${styles.main}`}>
        <LaunchesList>
          {error && <span>Error while fetching data</span>}
          {data?.launches?.map((launch: LaunchCardType) => (
            <LaunchCard
              id={launch.id}
              key={launch.id}
              missionName={launch.mission_name}
              launchDate={launch.launch_date_unix}
              rocket={launch.rocket.rocket_name}
              details={launch.details}
              link={launch.links.presskit}
            />
          ))}

          <button disabled={loading} className={styles.button} onClick={fetch}>{loading ? "Loading..." : "More"}</button>
        </LaunchesList>
      </main>
    </>
  )
}
