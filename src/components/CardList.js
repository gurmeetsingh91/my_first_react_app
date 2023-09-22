import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

    const cardComponent = robots.map((user,i) => {
        return <Card key={user.email} name={user.name} id={user.id}></Card>
    })

    return(
        <div>
           {cardComponent}
        </div>
    )



};


export default CardList;