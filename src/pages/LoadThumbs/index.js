import React from 'react';

import {List} from '@material-ui/core';
import {Container, Hero} from './styles';

import './styles';


export default function LoadThumbs(){
    return (
        <Container> 
            <h2>Personagens Malvel</h2>

            <List>
                <Hero>
                    <div className="avatar-information">
                        <div className="img"></div>
                    </div>
                    <div className="content">
                        <div className="name"></div>
                        <div className="details"></div>
                    </div>
                </Hero>

                <Hero>
                    <div className="avatar-information">
                        <div className="img"></div>
                    </div>
                </Hero> 
                
                <Hero>
                    <div className="avatar-information">
                        <div className="img"></div>
                    </div>
                </Hero> 
                
                <Hero>
                    <div className="avatar-information">
                        <div className="img"></div>
                    </div>
                </Hero>   

                <Hero>
                    <div className="avatar-information">
                        <div className="img"></div>
                    </div>
                </Hero>                
            </List>
        </Container>
    )
}