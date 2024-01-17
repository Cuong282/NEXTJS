"use client";

import useSWR from "swr";
import AppTable from "./components/app.table";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Home() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    });
console.log(data)

    if(!data){
      return <div>loading...</div>
    }
  return (
    <>
    {/* <div>{data?.length}</div> */}
      <AppTable
      blogs={data}
      />
    </>
  );
}
