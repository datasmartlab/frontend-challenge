import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./style.css";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards } from "swiper/modules";
export const CarousselInfos = ({infos,title}:any) =>{
    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}>
        <Typography textAlign={"center"} variant="h4" color={'white'} fontFamily={"Roboto"} sx={{
            margin: '0px 50px'
        }}>
            {title}
        </Typography>
        <Swiper
        effect={"cards"}
        modules={[Navigation, EffectCards]}
        className="mySwiper"
        style={{
          height: "150px",
          width: "150px",
          backgroundColor:"transparent",
        
        }}
      >
        {infos.map((comic, index) => (
          <SwiperSlide key={index} style={{
            backgroundColor:"black",
            border: "2px solid white",
            boxShadow: "  -1px 3px 4px rgba(0,0,0,0.75)"
            
          }}>
            <Typography color={'whitesmoke'}>{comic.name}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      </Box>
    )
}