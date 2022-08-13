import React, { useEffect, useState } from "react";
import HC5Card from "./HC5Card";
import HC6Card from "./HC6Card";
import HC1Card from "./HC1Card";
import HC9Card from "./HC9Card";
import HC3Card from "./HC3Card";
import FetchedData from "../FetchedData";

const AllCards = () => {

    const [HC9Data, setHC9Data] = useState();

    useEffect(() => {
        FetchedData().then((data) => {

          setHC9Data(data.HC9Cards);

        });
      }, []);

    return (
        <>
        <HC3Card />
        <HC5Card  />
        <HC6Card  />
        <HC9Card data={HC9Data}  />
        <HC1Card  />
          </>
    )
};

export default AllCards