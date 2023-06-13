import {Outlet} from 'react-router-dom'
import {Container}from '@mui/material'
import {Header} from '../../components/Header/index'

export function DefaultLayout(){
    return(
    <>
        <Header/>
        <Container>
            <Outlet/>
        </Container>
    </>
    )
}