import React, {useEffect, useState} from 'react';
import {List, Input} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import * as heroActions from '../../Store/Actions/heros';
import getHeroData from '../../utils/getHeroData';

import LoadThumbs from '../LoadThumbs';

import {Container, Hero} from './styles';
import './styles';


function Thumbs({heros, isLoading, getHero, handleLoading}){
    const [search, setSearch] = useState(null);
    
    useEffect(() => {
        const getData = async () => {
            if(search === '') setSearch(null);

            const response = await getHeroData(search);
            getHero(response.data.data.results)
            handleLoading(false)
        }
        getData();
    //eslint-disable-next-line
    }, [search])


    while(isLoading === true){
        return(
            <LoadThumbs/>
        )
    }

    return (
        <>
            <div className="background"></div>
            
            <Container> 
                <h2>Personagens Malvel</h2>
                <Input 
                    placeholder="Encontre seus heróis"
                    onChange={e => {setSearch(e.target.value)}}
                    color='secondary'
                    style={{
                        marginRight: '15px',
                    }}
                />

                <List>
                    {
                        heros.heros.map(hero => (
                            <Hero key={String(hero.id)}>
                                <div className="avatar-information">
                                    <img src={`${hero.thumbnail.path}/standard_amazing.${hero.thumbnail.extension}`} alt="Hero"/>
                                </div>
                                {hero.name}
                                <Link to='/Details' onClick={() => {
                                    localStorage.setItem('activeHero', hero.id);
                                }}>Ver detalhes</Link>
                            </Hero>
                        ))
                    }
                </List>
            </Container>
        </>
    )
}

const mapStateToProps = state => ({
    heros: state.heros,
    isLoading: state.heros.isLoading
})

const mapDispatchToProps = dispatch => ({
    getHero: (data) => dispatch(heroActions.getHero(data)),
    handleLoading: (isLoading) => dispatch(heroActions.handleLoading(isLoading)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbs);