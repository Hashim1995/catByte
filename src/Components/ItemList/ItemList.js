import Style from "./ItemList.module.scss";
import Grid from "@mui/material/Grid";
import Item from "../Item/Item";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
const ItemList = () => {
  // general data from redux store
  const data = useSelector((state) => state.data.value);

  return (
    <div className={Style.wrap}>
      <hr />
      <Grid container spacing={6} columns={24}>
        {data &&
          data.map((item) => (
            <Grid key={item.title} item lg={8} md={12} xs={24} xl={8}>
              <Item data={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ItemList;
