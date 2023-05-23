import { useEffect } from 'react'
import { useAppContext } from '../../context/context'
import { StatsContainer, ChartsContainer, Loading } from '../../components'

function Stats() {
  const { showStats, isLoading, monthlyApplications } = useAppContext()

  useEffect(() => {
    showStats()
  }, [])
  if (isLoading) {
    return <Loading center />
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}
export default Stats
