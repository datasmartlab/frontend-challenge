import React, {useEffect} from 'react';
import {List, Link} from '@material-ui/core';
import {connect} from 'react-redux';
import md5 from 'md5';
import api from  '../../services/api';

import * as heroActions from '../../Store/Actions/heros';

import {Container, Hero} from './styles';
import './styles';

const publicKey = '9e4f80bcd2d4a53abf1798ab7451767e';
const privateKey = 'dab38b7d7a751df582a3ccb558a2e998df2b2a0a';
const ts = Date.now();



function Thumbs({heros, getHero}){

    useEffect(() => {
        const getData = async () => {
            const response = await api.get(`/characters?ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}&limit=5`);

            await getHero(response.data.data.results);
        }

        getData();

    }, [getHero])


    async function teste(hero){
        // console.log(hero.thumbnail.path)
    }

    return (
        <Container> 
            <h2>Personagens Malvel</h2>

            <List>
                {
                    heros.heros.map(hero => (
                        <Hero key={String(hero.id)}>
                            <div className="avatar-information">
                                <img src={teste(hero)} alt=""/>
                                {hero.name}
                            </div>
                            
                            <Link onClick={() => teste(hero)}>Ver detalhes</Link>
                        </Hero>
                    ))
                }
                
            </List>
        </Container>
    )
}

const mapStateToProps = state => ({
    heros:  state.heros
})

const mapDispatchToProps = dispatch => ({
    getHero: (data) => dispatch(heroActions.getHero(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Thumbs);