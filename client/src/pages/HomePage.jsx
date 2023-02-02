import React from 'react'
import HeroSlide from '../components/common/HeroSlide';
import tmbdConfigs from '../api/configs/tmdb.configs';
import { Box } from '@mui/material';
import uiConfigs from '../configs/ui.configs';
import Container from '../components/common/Container';
import MediaSlide from '../components/common/MediaSlide';
const HomePage = () => {
    return (
        <>
            <HeroSlide mediaType={tmbdConfigs.mediaType.movie} mediaCategory={tmbdConfigs.mediaCategory.popular} />
            <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
                <Container header="popular movies">
                    <MediaSlide mediaType={tmbdConfigs.mediaType.movie} mediaCategory={tmbdConfigs.mediaCategory.popular} />
                </Container>
                <Container header="popular series">
                    <MediaSlide mediaType={tmbdConfigs.mediaType.tv} mediaCategory={tmbdConfigs.mediaCategory.popular} />
                </Container>
                <Container header="top rated movies">
                    <MediaSlide mediaType={tmbdConfigs.mediaType.movie} mediaCategory={tmbdConfigs.mediaCategory.top_rated} />
                </Container>
                <Container header="top rated series">
                    <MediaSlide mediaType={tmbdConfigs.mediaType.tv} mediaCategory={tmbdConfigs.mediaCategory.top_rated} />
                </Container>
            </Box>
        </>
    )
}

export default HomePage;