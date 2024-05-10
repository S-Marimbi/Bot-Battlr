import React, { useState } from "react";

import SingleBot from "./SingleBot";

function BotCollection(props) {
  // Your code here
  const {bots,setClickedBot} = props;
  
return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
      
        {bots.map((bot) => {
          return (
            <div key = {bot.id} onClick={() => setClickedBot(bot)}>
           <SingleBot bot = {bot}/>;
           </div>
          );
   })}
      </div>
    </div>
  );
}

export default BotCollection;
