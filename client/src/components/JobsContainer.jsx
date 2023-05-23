import { useAppContext } from '../context/context'
import { useEffect } from 'react'
import Loading from './Loading'
import Job from './Job'
import Wrapper from '../assets/wrappers/JobsContainer'
import PageBtnContainer from './PageBtnContainer'
import Alert from './Alert'

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    page,
    numOfPages,
    showAlert,
  } = useAppContext()

  useEffect(() => {
    getJobs()
  }, [page, search, searchStatus, searchType, sort])
  if (isLoading) {
    return <Loading center />
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{jobs.length > 1 && 's'} found
      </h5>
      <div className='jobs'>
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />
        })}
      </div>
      {/* pagination buttons */}
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  )
}
export default JobsContainer
