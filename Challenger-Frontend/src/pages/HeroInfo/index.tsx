import { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { getHeroInfo } from "../../services/apiMarvel";
import {Button} from '@mui/material'

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
        const resposta= await getHeroInfo(id);
        setHero(resposta);
        console.log(resposta)
    }
    ,[id])
    useEffect(()=>{
        getHeroCallBack();
    },[getHeroCallBack])
    
    return(
        <div>
            <img src=""/>
            {hero.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1>Nome:{item.name}</h1>
                        <h2>Numero de Comics: {item.comics.available}</h2>
                        <h2>Numero de series: {item.series.available}</h2>
                        <h2>Numero de stories: {item.stories.available}</h2>
                        <h2>Descrção:</h2>
                        <p>{item.description}</p>

                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
                    </div>
                )
            })}
            <NavLink to="/"><Button>Voltar</Button></NavLink>
        </div>
    )
}