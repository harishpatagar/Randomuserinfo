import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import '../usercard.css';

function CardSkeliton(){
    return(
<>


<div className="card">
<SkeletonTheme  highlightColor="#e8ffd1"/>

<Skeleton circle={true} height={100} width={100} />
    <h1><Skeleton/></h1>
    <h2><Skeleton/></h2>
    <h3><Skeleton/></h3>
</div>
</>
    )
}

export default CardSkeliton;