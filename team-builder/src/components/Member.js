import React from "react";

const Member = props => {
    console.log(props);
    return (
        <div className="memberList">
            {props.memberList.map(item =>{
                return (
                    <div className="member" key ={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                        <p>{item.role}</p>
                    </div>
                )
            })}
        </div>
    )

};
export default Member;