import React, { useState, useEffect } from "react";

let Hooks = function (props) {

  const [count, setCount] = useState(10);


  return (
    <button onClick={() => setCount(count + 12)}>
      {count}
    </button>
  )
}

export default Hooks;