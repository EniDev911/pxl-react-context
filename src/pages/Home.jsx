import React from 'react'
import Gallery from '../components/Gallery';
import Paginate from '../components/Pagination';

const Home = () => {
    return (
        <>
            <h1 className='text-center'>People Pic</h1>
            <Paginate />
            <Gallery />
        </>
    )
}

export default Home;