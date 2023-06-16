import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getHeroInfo } from "../../services/apiMarvel";
import {Button, Box,Typography} from '@mui/material'
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
    const location = useLocation();
    const [id] = useState(location.state?.id);
    const [hero,setHero]=useState<HeroInterface[]>([])
    
   const getHeroCallBack =useCallback(async function getHero(){
        const resposta = await getHeroInfo(id);
        setHero(resposta);
    }
    ,[id])
    useEffect(()=>{
        getHeroCallBack();
    },[getHeroCallBack])
    
    return(
        <div>
            <NavLink to="/"><Button sx={{marginY:2, background:"none",border:"1px solid gray",":hover":{backgroundColor:"gray"}}} variant="contained" startIcon={<ArrowBackIcon/>}>Voltar</Button></NavLink>
                {hero.map((item)=>{
                    return(
                        <Grid key={item.id} container>
                            <Grid item xs ><Box sx={{width:"100%",height:"100%",borderRadius:8,paddingX:2,paddingBottom:2}} component="img" src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/></Grid>
                                <Grid item xs>
                                    <Typography color="white" variant="h3">Nome:</Typography>
                                    <Typography sx={{marginBottom:2}} color="gray" variant="h4">{item.name}</Typography>
                                    
                                    <Typography color="white" variant="h3">Comics:</Typography>
                                    <Typography sx={{marginBottom:2}} color="gray" variant="h4">{item.comics.available} volumes</Typography>

                                    <Typography color="white" variant="h3">series:</Typography>
                                    <Typography sx={{marginBottom:2}} color="gray" variant="h4">{item.series.available} series</Typography>

                                    <Typography color="white" variant="h3">stories:</Typography>
                                    <Typography sx={{marginBottom:2}} color="gray" variant="h4">{item.stories.available} histórias</Typography>
                                </Grid>
                            <Grid item xs={12} sx={{paddingLeft:2}}>
                                {item.description!==""?(
                                    <>
                                        <Typography color="white" sx={{marginBottom:2}} variant="h3">Descrição:</Typography>
                                        <Typography variant="body1"  color="gray">{item.description}</Typography>
                                    </>
                                ):(
                                    <>
                                        <Typography color="#f0141e" variant="h4">Sem Descrição </Typography>
                                    </>
                                )}
                                
                            </Grid>
                        </Grid>
                    )
                })}
            
        </div>
    )
}

//sx={{fontSize:"1.3rem"}}