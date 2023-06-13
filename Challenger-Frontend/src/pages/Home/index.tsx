import { useEffect } from "react";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes } from "../../redux/fetchHeroes";
import { ThunkDispatch } from "redux-thunk"; // Importe ThunkDispatch
import { AnyAction } from "redux"; // Importe AnyAction

interface HeroInterface {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
}

interface RootState {
  heroes: HeroInterface[];
}

export function Home() {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch(); // Atualize o tipo de dispatch
  const heroes = useSelector((state: RootState) => state.heroes);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <HomeContainer>
      <Header />

      {/* Renderize os heróis na tela */}
      {heroes.map((hero) => (
        <ul className="borda" key={hero.id}>
          <li>Nome: {hero.name}</li>
          <img
            className="heroImage"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          />
        </ul>
      ))}
    </HomeContainer>
  );
}
