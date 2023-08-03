import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { charactersActions } from "../redux/heroes/heroSlice";
import { Pagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

export const PaginationMarvel = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { fetchCharactersRequest } = charactersActions;
  const characters = useSelector((state) => state.characters);
  const count = Math.ceil(characters.total / characters.limit);

  function handlePageChange(event, value) {
    const calculatedOffset = value * characters.limit - characters.limit;
    setPage(value);
    dispatch(fetchCharactersRequest(calculatedOffset, characters.limit));
  }

  return (
    <>
      <Pagination
        boundaryCount={1}
        color="primary"
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "3px",
          padding: "2rem",
        }}
        shape="circular"
        size="medium"
        count={count}
        page={page}
        onChange={handlePageChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            sx={{
              color: "#ffffff",
              backgroundColor: "#000000",
              "&.Mui-selected": {
                background: "primary",
              },
            }}
            {...item}
          />
        )}
      />
    </>
  );
};
