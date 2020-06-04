import React, {useEffect} from 'react';
import {List, Link} from '@material-ui/core';
import {connect} from 'react-redux';

import * as heroActions from '../../Store/Actions/heros';
import getApiData from '../../utils/getApiData';

import LoadThumbs from '../LoadThumbs';

import {Container, Hero} from './styles';
import './styles';


function Thumbs({heros, isLoading, getHero, handleLoading}){
    
    useEffect(() => {
        const getData = async () => {
            const response = await getApiData();
            getHero(response.data.data.results)
            handleLoading(false)
        }
        getData();
    //eslint-disable-next-line
    }, [])

    function teste(){
        console.log(heros)
    }

    while(isLoading === true){
        return(
            <LoadThumbs/>
        )
    }

    return (
        <Container> 
            <h2>Personagens Malvel</h2>

            <List>
                {
                    heros.heros.map(hero => (
                        <Hero key={String(hero.id)}>
                            <div className="avatar-information">
                                <img src={`${hero.thumbnail.path}/standard_amazing.${hero.thumbnail.extension}`} alt="Hero"/>
                            </div>
                            {hero.name}
                            <Link onClick={() => teste()}>Ver detalhes</Link>
                        </Hero>
                    ))
                }
            </List>
        </Container>
    )
}

const mapStateToProps = state => ({
    heros: state.heros,
    isLoading: state.heros.isLoading
})

const mapDispatchToProps = dispatch => ({
    getHero: (data) => dispatch(heroActions.getHero(data)),
    handleLoading: (isLoading) => dispatch(heroActions.handleLoading(isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbs);