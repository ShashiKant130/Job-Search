import React, { useEffect, useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalNumberOfPages = Math.floor(data?.data.length / 10);

  const onClickPagination = (pageNumber) => {
    if (pageNumber <= 0) {
      setCurrentPage(totalNumberOfPages);
    } else if (pageNumber > totalNumberOfPages) {
      setCurrentPage(1)
    } else {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    setJobsData((prevState) => {
      
    })
  },[currentPage])

  const jobsDatas = React.useMemo(() => {
    return data?.data.slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10);
  },[currentPage]);

  return (
    <Container className="my-4">
      
      {jobsDatas.map(job => {
        return <Job key={job.id} job={job} />
      })}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <div className='mb-3' onClick={() => onClickPagination(currentPage - 1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', padding: '4px', border: '1px solid black', userSelect: 'none'}}>
          {'Prev'}
        </div>
        {Array(totalNumberOfPages).fill(null).map((_, index) => {
          return <div onClick={() => onClickPagination(index+1)} className='mb-3' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', padding: '4px', border: '1px solid black', backgroundColor: (index + 1 === currentPage) ? '#D3D3D3' : '#fff'}}>
            {index + 1}
          </div>
        })}
        <div className='mb-3' onClick={() => onClickPagination(currentPage + 1)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '2.5rem', height: '2.5rem', padding: '4px', border: '1px solid black', userSelect: 'none'}}>
          {'Next'}
        </div>
      </div>

    </Container>
  )
}

export default App;
