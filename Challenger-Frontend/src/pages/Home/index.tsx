import { useCallback, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk"; // Importe ThunkDispatch
import { AnyAction } from "redux"; // Importe AnyAction
import {NavLink} from 'react-router-dom'
import { HomeContainer } from "./styles";
import { fetchHeroes } from "../../redux/fetchHeroes";
import { getCountHeroes } from "../../services/apiMarvel";
import {Pagination} from '@mui/material'
interface HeroInterface {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
}
interface RootState {
  heroes: HeroInterface[];
}

export function Home() {
  const [numpages,setNumpages]=useState(0);
  const [offset,setOffset]=useState(0);
  const [limite,setlimite]=useState(2);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  const heroes = useSelector((state: RootState) => state.heroes);
  




  const paginacaoCallback=useCallback(async function paginacao(){
    const count = await getCountHeroes();
    setNumpages(Math.ceil(count/limite)-1);
  },[limite])


  useEffect(() => {
    dispatch(fetchHeroes(offset,limite));
    paginacaoCallback()
  }, [dispatch,paginacaoCallback,offset,limite]);

  return (
    <HomeContainer>
      {heroes.map((hero) => (
        <NavLink to="/heroinfo"key={hero.id}  state={{id:hero.id}}>
          <ul className="borda" >
            <li>Nome: {hero.name}</li>
            <img
              className="heroImage"
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            />
          </ul>
        </NavLink>
        ))}
        {/* {link.map((item)=>{
          return(
            <Button>{item}</Button>
          )
        })} */}
        <Pagination count={numpages}  shape="rounded" variant="outlined" size="large" onChange={(event, value) => { setOffset(value*limite) }}/>
    </HomeContainer>
  );
}
//state={{name:hero.name, path:hero.thumbnail.path, extension: hero.thumbnail.extension}}