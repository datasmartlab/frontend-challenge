import React, { useEffect } from "react";
import { Topbar } from "../topbar/topbar";
import { useDispatch, useSelector } from "react-redux";
import { charactersActions } from "../../redux/heroes/heroSlice";
import { PaginationMarvel } from "../../page/paginationMarvel";
import "../../index.css";
import { CardMarvel } from "../card/cardMarvel";

export const Meister = () => {
  const { fetchCharactersRequest } = charactersActions;
  const item = useSelector((state) => state.characters.data);
  const dispatch = useDispatch();  

  useEffect(() => {
    dispatch(fetchCharactersRequest());
  }, [dispatch, fetchCharactersRequest]);  

  return (
    <>
      <div className="meister">
        <Topbar />
        <CardMarvel data={item} />
        <PaginationMarvel />
      </div>
    </>
  );
};
