import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom";
import { getHeroInfo } from "../../services/apiMarvel";
import {Button, Box,Typography,useTheme} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Grid from '@mui/material/Grid';
interface HeroInterface {
    id: number;
    name: string;
    comics:{available:number},
    series:{available:number},
    stories:{available:number},
    description:string,
    thumbnail: { extension: string; path: string };
  }

export function HeroInfo(){
    const theme = useTheme();
    const location = useLocation();
    const navigation = useNavigate();
    const [id] = useState(location.state?.id);
    const [hero,setHero]=useState<HeroInterface[]>([])
    
   const getHeroCallBack = useCallback(async function getHero(){
        const resposta = await getHeroInfo(id);
        setHero(resposta);
    }
    ,[id])
    useEffect(()=>{
        if(!isNaN(id)){
            getHeroCallBack();
        }else{
            navigation("/");
        }
        
    },[getHeroCallBack,id,navigation])
    
    return(
        <div>
            <NavLink to="/"><Button color={"secondary"} sx={{marginY:2}} variant="contained" startIcon={<ArrowBackIcon/>}>Voltar</Button></NavLink>
                {hero.map((item)=>{
                    return(
                        <Grid key={item.id} container>
                            <Grid sx={{textAlign:'center',alignItems:'flex-end'}} item xs={12} sm={9}><Box sx={{width:"100%",height:"100%",borderRadius:8,paddingX:2,paddingBottom:2}} component="img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/></Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography color={theme.palette.info.light} variant="h3">Nome:</Typography>
                                    <Typography sx={{marginBottom:2}} color={theme.palette.info.main} variant="h4">{item.name}</Typography>
                                    
                                    <Typography color={theme.palette.info.light} variant="h3">Comics:</Typography>
                                    <Typography sx={{marginBottom:2}} color={theme.palette.info.main} variant="h4">{item.comics.available} volumes</Typography>

                                    <Typography color={theme.palette.info.light} variant="h3">series:</Typography>
                                    <Typography sx={{marginBottom:2}} color={theme.palette.info.main} variant="h4">{item.series.available} series</Typography>

                                    <Typography color={theme.palette.info.light} variant="h3">stories:</Typography>
                                    <Typography sx={{marginBottom:2}} color={theme.palette.info.main} variant="h4">{item.stories.available} histórias</Typography>
                                </Grid>
                                <Grid item>
                                    {item.description!==""?(
                                        <>
                                            <Typography color={theme.palette.info.light} sx={{marginBottom:2}} variant="h3">Descrição:</Typography>
                                            <Typography variant="body1"  color={theme.palette.info.main}>{item.description}</Typography>
                                        </>
                                    ):(
                                        <>
                                            <Typography color={theme.palette.error.main} variant="h4">Sem Descrição </Typography>
                                        </>
                                    )}
                               
                            </Grid>
                        </Grid>
                    )
                })}
            
        </div>
    )
}