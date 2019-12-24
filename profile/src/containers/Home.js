import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="home">
            <div className="w-100">
                <h1 className="mb-0">Gyul
                    <span className="text-primary">Pwang</span>
                </h1>
                <div className="subheading mb-5">+82-10-4567-9327 ·
                    <Link href="mailto:name@email.com"> rbfla927@gmail.com</Link>
                </div>
                <p className="lead mb-5">
                    특이하고 새로운 아이템을 쇼핑하는 것을 좋아해 쇼핑 프로세스에 흥미를 느끼게 되었고, 
                    Java와의 만남은 커머스 개발의 길로 이끌었습니다. 
                    약 3년간 티커머스 업종에서 Frontend 및 Backend 개발을 진행하며 Full Stack 개발자로서의 경력을 쌓아왔습니다. 
                    변수나 함수명을 짓는 데 오랜 시간을 할애하는 편이며, 
                    틈나면 문서화하는 취미를 갖고 있습니다. 매일 아침 커피 한 잔과 로그 모니터링으로 하루를 시작합니다.
                </p>
                <div className="social-icons">
                    <Link href="https://www.linkedin.com/in/gyulpwang" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="https://github.com/gyulpwang" target="_blank">
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100003401716592" target="_blank">
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Home;