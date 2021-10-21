import React from 'react';
import "./css/main.css"
import background from "../../main-background.jpg"
import it1 from "./images/it1.PNG"

const Main = () => {
    return (
        <div className={"main-container"}>
            <div>
                <img src={background} className={"main-background-img"}/>
            </div>
            <div className={"title-container"}>
                <div className={"title-div"}>
                    <div>
                        <p>형사소송의 A부터 Z까지,</p>
                        <p>프리미엄 법률서비스를</p>
                        <p>제공합니다.</p>
                        <p><span className={"main-company-name"}>법무법인 법승</span></p>
                    </div>
                </div>
            </div>
            <div className={"main-contents"}>
                <div>
                    <h2>업무 사례</h2>
                    <div className={"solution-info"}>
                        <div className={"news-content"}>
                            <div className={"news-company"}>무슨일보</div>
                            <div className={"news-title"}>
                                [법률] 명의신탁된 부동산 임의로 처분한 명의수탁자 법적 책임
                            </div>
                            <div className={"link"}> >>기사 링크 전문</div>
                        </div>
                        <div className={"news-content"}>
                            <div className={"news-company"}>무슨신문 </div>
                            <div className={"news-title"}>
                                [법률] 명의신탁된 부동산 임의로 처분한 명의수탁자 법적 책임
                            </div>
                            <div className={"link"}> >>기사 링크 전문</div>
                        </div>
                        <div className={"news-content"}>
                            <div className={"news-company"}>무슨무슨무슨일보</div>
                            <div className={"news-title"}>
                                [법률] 명의신탁된 부동산 임의로 처분한 명의수탁자 법적 책임
                            </div>
                            <div className={"link"}> >>기사 링크 전문</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"main-field-container"}>
                <div>
                    <h2 className={"main-field-title"}>업무 분야</h2>
                    <div>
                        <div className={"main-field-block"}>
                            <ul>
                                <li className={"it-li"}>IT</li>
                                <li className={"real-est-li"}>건설/부동산</li>
                                <li className={"education-li"}>교육/문화</li>
                                <li className={"labor-li"}>노동</li>
                                <li className={"bankrupt-li"}>회생/파산</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;