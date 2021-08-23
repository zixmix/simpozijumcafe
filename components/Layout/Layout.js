import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";

export default function Layout({childern})
{
    return(
        <div>
<>
<TopBar/>

    {childern}
</>
        </div>
    )
}