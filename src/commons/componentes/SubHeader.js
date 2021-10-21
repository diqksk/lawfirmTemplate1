import React from 'react';
import headerImg from "../../pages/about/images/about-head.jpg";

const SubHeader = ({title,subtitle}) => {
    return (
        <div className={"about-header"}>
            <img src={headerImg} alt=""/>
            <div className={"page-header-title"}>
                <p>- {subtitle}</p>
                <strong>{title}</strong>
            </div>
        </div>
    );
};

export default SubHeader;