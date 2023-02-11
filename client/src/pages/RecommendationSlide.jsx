import { SwiperSlide } from "swiper/react";
import AutoSwiper from "../components/common/AutoSwiper";
import MediaItem from "../components/common/MediaItem";

const RecommendationSlide = ({ medias, mediaType }) => {
    return (
        <AutoSwiper>
            {medias.map((media, index) => (
                <SwiperSlide key={index}>
                    <MediaItem media={media} mediaType={mediaType} />
                </SwiperSlide>
            ))}
        </AutoSwiper>
    )
}

export default RecommendationSlide;