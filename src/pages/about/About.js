import React from 'react';
import "./css/about.css";
import headerImg from "./images/about-head.jpg"
import meeting1 from "./images/meeting1.jpg"
import meeting2 from "./images/meeting2.jpg"
import meeting3 from "./images/meeting3.jpg"
import SubHeader from "../../commons/componentes/SubHeader";
const About = () => {
    return (
        <div className={"about-container"}>
        <SubHeader title={"법인 소개"} subtitle={"introduction"}></SubHeader>
            <div className={"about-contents-container"} >
                <div className={"content-info-div"}>
                    <div className={"about-content-img"}>
                        <img src={meeting1} alt=""/>
                    </div>
                    <div className={"about-content-info"}>
                        <span className={"about-content-no"}>01.</span>
                        <p className={"about-content-title"}>사건진행은 변호사가 직접,</p>
                        <p className={"about-content-subtitle"}>태림은 사무장이 없습니다.</p>
                        <p className={"about-content-text"}>
                            법률상담과 사건수임계약은 사무장이 아닌 변호사와 직접하는 것이 원칙입니다. 법무법인 태림은 사무장 등 유사법조 직역자를 두지 않고 사건 처음부터 끝까지 변호사가 직접 검토하고 업무를 수행합니다. 아울러 의뢰인은 언제든지 다양한 채널을 통해 변호사와 커뮤니케이션을 할 수 있으며, 이를 통해 최선의 결과를 얻으실 수 있습니다.
                        </p>
                    </div>
                </div>
                <div className={"content-info-div"}>
                    <div className={"about-content-img"}>
                        <img src={meeting2} alt=""/>
                    </div>
                    <div className={"about-content-info"}>
                        <span className={"about-content-no"}>02.</span>
                        <p className={"about-content-title"}>사건진행은 변호사가 직접,</p>
                        <p className={"about-content-subtitle"}>태림은 사무장이 없습니다.</p>
                        <p className={"about-content-text"}>
                            법률상담과 사건수임계약은 사무장이 아닌 변호사와 직접하는 것이 원칙입니다. 법무법인 태림은 사무장 등 유사법조 직역자를 두지 않고 사건 처음부터 끝까지 변호사가 직접 검토하고 업무를 수행합니다. 아울러 의뢰인은 언제든지 다양한 채널을 통해 변호사와 커뮤니케이션을 할 수 있으며, 이를 통해 최선의 결과를 얻으실 수 있습니다.
                        </p>
                    </div>
                </div>
                <div className={"content-info-div"}>
                    <div className={"about-content-img"}>
                        <img src={meeting3} alt=""/>
                    </div>
                    <div className={"about-content-info"}>
                        <span className={"about-content-no"}>03.</span>
                        <p className={"about-content-title"}>사건진행은 변호사가 직접,</p>
                        <p className={"about-content-subtitle"}>태림은 사무장이 없습니다.</p>
                        <p className={"about-content-text"}>
                            법률상담과 사건수임계약은 사무장이 아닌 변호사와 직접하는 것이 원칙입니다. 법무법인 태림은 사무장 등 유사법조 직역자를 두지 않고 사건 처음부터 끝까지 변호사가 직접 검토하고 업무를 수행합니다. 아울러 의뢰인은 언제든지 다양한 채널을 통해 변호사와 커뮤니케이션을 할 수 있으며, 이를 통해 최선의 결과를 얻으실 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;