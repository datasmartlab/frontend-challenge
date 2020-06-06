import React, {useEffect, useState} from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {FaArrowLeft} from 'react-icons/fa';

import getHeroByID from '../../utils/getHeroByID';
import {Container, Content} from './styles';

export default function Details(){
    const heroName = localStorage.getItem('activeHero');
    const [heros, setHeros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const response = await getHeroByID(heroName);
            setHeros(response.data.data.results);
            setLoading(false);
        }
        getData();
        //eslint-disable-next-line
    }, []);
    
    while(loading === true){
        return <div></div>
    }
    console.log(heros);   

    return (
        <>
            <div className="headerMarvel"></div>

            {
                heros.map(hero => (
                    <Container key={hero.id}>
                        <Link to="/">
                            <Button>
                                    <FaArrowLeft color="#fff" size={20}/>                                
                            </Button >
                        </Link>
                        
                        <img src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`} alt=""/>
                        <Content>
                            <h2>{hero.name}</h2>
                            <p>{hero.description}</p>
                        </Content>
                        <Content>
                            <div className="counter"><span>Histórias: </span><span className="count">{hero.stories.available}</span></div>
                            <div className="counter"><span>Séries: </span><span className="count">{hero.series.available}</span></div>
                            <div className="counter"><span>Quadrinhos: </span><span className="count">{hero.comics.available}</span></div>
                        </Content>
                    </Container>
                ))
            }
        </>
    )
}
