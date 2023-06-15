import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk"; // Importe ThunkDispatch
import { AnyAction } from "redux"; // Importe AnyAction
import { NavLink } from "react-router-dom";
import { fetchHeroes } from "../../redux/fetchHeroes";
import { getCountHeroes } from "../../services/apiMarvel";
import { Pagination, Grid, Box } from "@mui/material";
import { MyTypography,HeroGridBox } from "./styles";
// import {blue} from '@mui/material/colors'
interface HeroInterface {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
}
interface RootState {
  heroes: HeroInterface[];
}

export function Home() {
  const [numpages, setNumpages] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limite] = useState(12);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const heroes = useSelector((state: RootState) => state.heroes);

  const paginacaoCallback = useCallback(
    async function paginacao() {
      const count = await getCountHeroes();
      setNumpages(Math.ceil(count / limite));
    },
    [limite]
  );

  useEffect(() => {
    dispatch(fetchHeroes(offset, limite));
    paginacaoCallback();
  }, [dispatch, paginacaoCallback, offset, limite]);

  return (
    <div>
      <Grid
        container
        sx={{
          gap: 10,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          paddingY: 6,
        }}
      >
        {heroes.map((hero) => (
          <NavLink to="/heroinfo" key={hero.id} state={{ id: hero.id }}>
            <HeroGridBox>
              <Box
                sx={{
                  width: "20rem",
                  height: "20rem",
                  borderRadius: 2,
                }}
                component="img"
                className="imagem"
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              />
              <MyTypography className="Mytypography" variant="h3">
                {hero.name}
              </MyTypography>
            </HeroGridBox>
          </NavLink>
        ))}
      </Grid>
      <Pagination
        boundaryCount={1}
        sx={{ display: "flex", justifyContent: "center", paddingBottom: 4 }}
        count={numpages}
        shape="rounded"
        variant="outlined"
        size="large"
        onChange={(_, value) => {
          setOffset(value * limite - limite);
        }}
      />
    </div>
  );
}