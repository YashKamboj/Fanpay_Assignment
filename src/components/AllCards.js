import React, { useEffect, useState } from "react";
import DisplayHC1Cards from "./HC1Card";
import HC3Card from "./HC3Card";
import HC5Card from "./HC5Card";
import HC6Card from "./HC6Card";
import HC9Card from "./HC9Card";
import FetchedData from "../FetchedData";

const AllCards = () => {
    const [HC1Data, setHC1Data] = useState();
    const [HC3Data, setHC3Data] = useState();
    const [HC5Data, setHC5Data] = useState();
    const [HC6Data, setHC6Data] = useState();
    const [HC9Data, setHC9Data] = useState();

    useEffect(() => {
        FetchedData().then((data) => {
          setHC1Data(data.HC1Cards);
          setHC3Data(data.HC3Cards);
          setHC5Data(data.HC5Cards);
          setHC6Data(data.HC6Cards);
          setHC9Data(data.HC9Cards);
        });
      }, []);

    return (
        <>
        <HC3Card data={HC3Data} />
        <HC5Card data={HC5Data} />
        <HC6Card data={HC6Data}  />
        <HC9Card data={HC9Data}  />
        <DisplayHC1Cards data={HC1Data}  />
          </>
    )
};

export default AllCards