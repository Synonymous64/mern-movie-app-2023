import React from 'react'
import HeroSlide from '../components/common/HeroSlide';
import tmbdConfigs from '../api/configs/tmdb.configs';

const HomePage = () => {
    return (
        <>
            <HeroSlide mediaType={tmbdConfigs.mediaType.movie} mediaCategory={tmbdConfigs.mediaCategory.popular} />
        </>
    )
}

export default HomePage;