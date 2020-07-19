import React from "react";
import { Grid, Table } from "../../../Components/Core";
import { useSelector } from "react-redux";
const columns = [
  {
    title: "id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "desc",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "posted_by",
    dataIndex: "posted_by",
    key: "posted_by",
  },
  {
    title: "posting_date",
    dataIndex: "posting_date",
    key: "posting_date",
  },
  {
    title: "product_name",
    dataIndex: "product_name",
    key: "product_name",
  },

  {
    title: "product_price",
    dataIndex: "product_price",
    key: "product_price",
  },
  {
    title: "ImgUrls",
    dataIndex: "ImgUrls",
    key: "ImgUrls",
  },
];

export const ViewProduct = () => {
  const state = useSelector((state) => state.state);
  return (
    <Grid>
      <Table dataSource={dataSource} columns={columns} />
    </Grid>
  );
};
