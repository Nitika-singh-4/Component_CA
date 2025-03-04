import React from "react";

const TeamMemberCard = ({name, title}) =>{

    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-xl p-5 border border-gray-500">
            <div className="mt-4 text-center">
                <h1 className="text-black-200 mt-4 ">{name}</h1>
                <p className="text-black-200 ">{title}</p>
            </div>
        </div>
    )
}
export default TeamMemberCard