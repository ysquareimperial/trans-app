import React from 'react'
import useQuery from '../hooks/useQuery'

export default function ViewHistory() {
    const query = useQuery()
    const trip_id = query.get('trip_id')
  return (
    <div className='mt-5'>
      <h1>View History {trip_id}</h1>
    </div>
  )
}
