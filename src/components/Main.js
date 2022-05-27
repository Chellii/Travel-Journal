import React from "react"
import Trip from "./Trip"
import Data from "../Data"
import "../styles.css"

function Main() {
    const data = Data.map((item, i, Data) => {
        return (
            <Trip 
                key={item.id}
                item={item} 
            />
    )
})
  return (
    data.map((item, i, Data) => {
      return (
        <div className="main_container">
          {item}
          {(i < (Data.length - 1)) && <div className="span_line"></div>}
        </div>
      )
    })
  );
}

export default Main