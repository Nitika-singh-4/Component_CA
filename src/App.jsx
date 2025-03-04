import React from "react";
import TeamMemberCard from "./component/teamMemberCard";

const App = () =>{
  return (
    <div className="flex justify-center items-center">
      <TeamMemberCard
      name= "John Doe"
      title="Software Engineer"
      />
    </div>
  )
}
export default App;