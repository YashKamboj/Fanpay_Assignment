import React, { useEffect, useState } from "react";
import HC5Card from "./HC5Card";
import HC6Card from "./HC6Card";
import HC1Card from "./HC1Card";
import HC9Card from "./HC9Card";
import HC3Card from "./HC3Card";
import FetchedData from "../FetchedData";

const AllCards = () => {

    return (
        <>
        <HC3Card />
        <HC5Card  />
        <HC6Card  />
        <HC9Card  />
        <HC1Card  />
          </>
    )
};

export default AllCards