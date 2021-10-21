import React from 'react';
import SubHeader from "../../commons/componentes/SubHeader";
import "./css/member.css"

const Members = () => {
    return (
        <div className={"member-container"}>
            <SubHeader title={"변호사 소개"} subtitle={"members"}></SubHeader>
        </div>
    );
};

export default Members;