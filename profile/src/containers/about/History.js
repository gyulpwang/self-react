import React from 'react';
import { Link } from 'react-router';
import '../../components/css/custom.css';

import icon_react from '../../components/img/history/edu/react.png';

import icon_ext_js from '../../components/img/history/cware/ext_js.png';
import icon_velocity from '../../components/img/history/cware/velocity.png';
import icon_jeus from '../../components/img/history/cware/jeus.png';
import icon_open_api from '../../components/img/history/cware/open_api.png';
import icon_plsql_developer from '../../components/img/history/cware/plsql_developer.png';
import icon_svn from '../../components/img/history/cware/svn.png';
import icon_git from '../../components/img/history/cware/git.png';
import icon_jenkins from '../../components/img/history/cware/jenkins.png';
import icon_secure_crt from '../../components/img/history/cware/secure_crt.png';
import icon_jira from '../../components/img/history/cware/jira.png';
import icon_redmine from '../../components/img/history/cware/redmine.png';
import icon_jennifer from '../../components/img/history/cware/jennifer.png';

import icon_java from '../../components/img/history/iibi/java.png';
import icon_jsp from '../../components/img/history/iibi/jsp.png';
import icon_javascript from '../../components/img/history/iibi/javascript.png';
import icon_jQuery from '../../components/img/history/iibi/jQuery.gif';
import icon_oracle from '../../components/img/history/iibi/oracle.png';
import icon_html5_n_css from '../../components/img/history/iibi/html5&css.jpg';
import icon_tomcat from '../../components/img/history/iibi/tomcat.jpg';
import icon_spring from '../../components/img/history/iibi/spring.png';
import icon_java_servlets from '../../components/img/history/iibi/java_servlets.png';
import icon_ajax from '../../components/img/history/iibi/ajax.png';
import icon_jstl from '../../components/img/history/iibi/jstl.png';
import icon_bootstrap from '../../components/img/history/iibi/bootstrap.jpg';
import icon_eclipse from '../../components/img/history/iibi/eclipse.jpg';
import icon_sql_developer from '../../components/img/history/iibi/sql_developer.jpg';
import icon_github from '../../components/img/history/iibi/github.png';
import icon_netbeans from '../../components/img/history/iibi/netbeans.png';
import icon_pingendo from '../../components/img/history/iibi/pingendo.png';
import icon_exerd from '../../components/img/history/iibi/exerd.jpg';
import icon_staruml from '../../components/img/history/iibi/staruml.png';

import icon_c from '../../components/img/history/sku/c.png';
import icon_cpp from '../../components/img/history/sku/c++.png';
import icon_csharp from '../../components/img/history/sku/c#.png';
import icon_mfc from '../../components/img/history/sku/mfc.png';
import icon_verilog from '../../components/img/history/sku/verilog.png';
import icon_visual_studio from '../../components/img/history/sku/visual_studio.png';
import icon_matlab from '../../components/img/history/sku/matlab.jpg';
import icon_avr_studio from '../../components/img/history/sku/avr_studio.png';
import icon_ubuntu from '../../components/img/history/sku/ubuntu.jpg';
import icon_cst from '../../components/img/history/sku/cst.jpg';
import icon_multisim from '../../components/img/history/sku/multisim.jpg';
import icon_smartspice from '../../components/img/history/sku/smartspice.jpg';
import icon_xilinx from '../../components/img/history/sku/xilinx.png';
import icon_robolab from '../../components/img/history/sku/robolab.png';
import icon_unity from '../../components/img/history/sku/unity.png';

import icon_html from '../../components/img/history/growth/html.jpg';
import icon_css from '../../components/img/history/growth/css.png';
import icon_notepad from '../../components/img/history/growth/notepad.jpg';
import icon_namo from '../../components/img/history/growth/namo.jpg';

const History = () => {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
                <h2 className="mb-5">History</h2>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div>{/* className="col-md-6 offset-md-3" */}
                            {/* <h4>Latest News</h4> */}
                            <ul className="timeline">
                                <li>
                                    <Link to="http://www.commerceware.co.kr/index.do" target="_blank">회사</Link>
                                    <span className="float-right main-color">2016.08 ~ </span>
                                    <p>웹 개발자로서의 시작. 선호하는 개발 종류와 스타일을 깨닫다. 커머스 개발에 매료되다.</p>
                                    <p>
                                        <img src={icon_ext_js} alt="ext_js" className="history-skill-icon"/>
                                        <img src={icon_velocity} alt="velocity" className="history-skill-icon"/>
                                        <img src={icon_jeus} alt="jeus" className="history-skill-icon"/>
                                        <img src={icon_open_api} alt="open_api" className="history-skill-icon"/>
                                        <img src={icon_plsql_developer} alt="plsql_developer" className="history-skill-icon"/>
                                        <img src={icon_svn} alt="svn" className="history-skill-icon"/>
                                        <img src={icon_git} alt="git" className="history-skill-icon"/>
                                        <img src={icon_jenkins} alt="jenkins" className="history-skill-icon"/>
                                        <img src={icon_secure_crt} alt="secure_crt" className="history-skill-icon"/>
                                        <img src={icon_jira} alt="jira" className="history-skill-icon"/>
                                        <img src={icon_redmine} alt="redmine" className="history-skill-icon"/>
                                        <img src={icon_jennifer} alt="jennifer" className="history-skill-icon"/>
                                        <img src={icon_react} alt="react" className="history-skill-icon"/>
                                    </p>
                                </li>
                                <li>
                                    <Link to="http://www.iibi.or.kr" target="_blank">교육원</Link>
                                    <span className="float-right main-color">2018.02 ~ 2018.08</span>
                                    <p>Java와의 첫 만남. 웹 개발에 빠져들다.</p>
                                    <p>
                                        <img src={icon_java} alt="java" className="history-skill-icon"/>
                                        <img src={icon_jsp} alt="jsp" className="history-skill-icon"/>
                                        <img src={icon_javascript} alt="javascript" className="history-skill-icon"/>
                                        <img src={icon_jQuery} alt="jQuery.gif" className="history-skill-icon"/>
                                        <img src={icon_oracle} alt="oracle" className="history-skill-icon"/>
                                        <img src={icon_html5_n_css} alt="html5&css" className="history-skill-icon"/>
                                        <img src={icon_tomcat} alt="tomcat" className="history-skill-icon"/>
                                        <img src={icon_spring} alt="spring" className="history-skill-icon"/>
                                        <img src={icon_java_servlets} alt="java_servlets" className="history-skill-icon"/>
                                        <img src={icon_ajax} alt="ajax" className="history-skill-icon"/>
                                        <img src={icon_jstl} alt="jstl" className="history-skill-icon"/>
                                        <img src={icon_bootstrap} alt="bootstrap" className="history-skill-icon"/>
                                        <img src={icon_eclipse} alt="eclipse" className="history-skill-icon"/>
                                        <img src={icon_sql_developer} alt="sql_developer" className="history-skill-icon"/>
                                        <img src={icon_github} alt="github" className="history-skill-icon"/>
                                        <img src={icon_netbeans} alt="netbeans" className="history-skill-icon"/>
                                        <img src={icon_pingendo} alt="pingendo" className="history-skill-icon"/>
                                        <img src={icon_exerd} alt="exerd" className="history-skill-icon"/>
                                        <img src={icon_staruml} alt="staruml.png" className="history-skill-icon"/>
                                    </p>
                                </li>
                                <li>
                                    <Link to="https://www.skuniv.ac.kr/" target="_blank">대학교</Link>
                                    <span className="float-right main-color">2012.03 ~ 2016.02</span>
                                    <p>전자공학 관련 하드웨어 언어를 주로 배우다. 프로그래밍에 눈 뜨다.</p>
                                    <p>
                                        <img src={icon_c} alt="C" className="history-skill-icon"/>
                                        <img src={icon_cpp} alt="C++" className="history-skill-icon"/>
                                        <img src={icon_csharp} alt="C#" className="history-skill-icon"/>
                                        <img src={icon_mfc} alt="MFC" className="history-skill-icon"/>
                                        <img src={icon_verilog} alt="Verilog" className="history-skill-icon"/>
                                        <img src={icon_visual_studio} alt="Visual Studio" className="history-skill-icon"/>
                                        <img src={icon_matlab} alt="MATLAB" className="history-skill-icon"/>
                                        <img src={icon_avr_studio} alt="AVR Studio" className="history-skill-icon"/>
                                        <img src={icon_ubuntu} alt="Ubuntu" className="history-skill-icon"/>
                                        <img src={icon_cst} alt="CST" className="history-skill-icon"/>
                                        <img src={icon_multisim} alt="Multisim" className="history-skill-icon"/>
                                        <img src={icon_smartspice} alt="SmartSpice" className="history-skill-icon"/>
                                        <img src={icon_xilinx} alt="Xilinx" className="history-skill-icon"/>
                                        <img src={icon_robolab} alt="robolab" className="history-skill-icon"/>
                                        <img src={icon_unity} alt="Unity" className="history-skill-icon"/>
                                    </p>
                                </li>
                                <li>
                                    <Link to="#" target="_blank">초중고</Link>
                                    <span className="float-right main-color">2000 ~ 2011</span>
                                    <p>초등학교에서 홈페이지 제작을 통해 처음 프로그래밍을 접하다.</p>
                                    <p>
                                        <img src={icon_html} alt="html" className="history-skill-icon"/>
                                        <img src={icon_css} alt="css" className="history-skill-icon"/>
                                        <img src={icon_notepad} alt="notepad" className="history-skill-icon"/>
                                        <img src={icon_namo} alt="namo" className="history-skill-icon"/>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;