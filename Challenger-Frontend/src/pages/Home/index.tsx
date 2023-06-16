import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { NavLink } from "react-router-dom";
import { fetchHeroes } from "../../redux/fetchHeroes";
import { Pagination, Grid, Box } from "@mui/material";
import { HeroBoxTypography, HeroGridBox } from "./styles";

interface HeroInterface {
  id: number;
  name: string;
  thumbnail: { extension: string; path: string };
}

interface HeroesInterface {
  total: number;
  results: HeroInterface[];
}

interface RootState {
  heroes: HeroesInterface;
}

export function Home() {
  const [numpages, setNumpages] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limite] = useState(12);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const heroes = useSelector((state: RootState) => state.heroes);

  const puxarHeroesCallback = useCallback(
    async function puxarHeroes() {
      await dispatch(fetchHeroes(offset, limite));

      if (!isNaN(heroes.total)) {
        const count = heroes.total;
        setNumpages(Math.ceil(count / limite));
      }
    },
    [dispatch, limite, offset, heroes.total]
  );

  useEffect(() => {
    puxarHeroesCallback();
  }, [puxarHeroesCallback, offset, limite]);

  if (!Array.isArray(heroes.results)) {
    return null;
  }

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
        {heroes.results.map((hero) => (
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
              <HeroBoxTypography className="HeroBoxTypography" variant="h3">
                {hero.name}
              </HeroBoxTypography>
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
