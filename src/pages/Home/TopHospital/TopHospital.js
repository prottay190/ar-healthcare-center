import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHospital, FaHospitalAlt, FaHospitalSymbol, FaHospitalUser, FaHome, FaGripHorizontal, FaMedrt } from 'react-icons/fa';
import './TopHospital.css'

const TopHospital = () => {
    return (
        <div className="m-5">
            <h2 className="top-title">Top Hospital in The City <FaMedrt style={{color: 'red', fontSize: '35px'}}/></h2>
            <Container className="m-5">
                <Row>
                    <Col>
                    <FaHospital style={{color: 'red', fontSize: '40px'}}/>
                    <div className="m-2">
                    <h3>Mymensingh Medical College Hospital (MMC)</h3>
                    <p>Mymensingh Medical College is a postgraduate government medical college conducting MBBS, BDS and postgraduate courses in 27 disciplines under Dhaka University and Bangabandhu Sheikh Mujib Medical University (BSMMU). Every year 197 students are admitted in MBBS and 52 in BDS courses of which 10% are foreign students and total of 138 students are admitted in different postgraduate courses.</p>
                    </div>
                    </Col>
                    <Col>
                       <FaHospitalAlt style={{color: 'red', fontSize: '40px'}}/>
                       <div className="m-2">
                           <h3>Community Based Medical College Bangladesh (CBMCB)</h3>
                           <p>The Community Health Foundation Bangladesh was established at Mymensingh in the year of 1994 by thirty eminent philanthropic persons of different profession and position under the leadership of late professor Dr. AIM Mafakhkharul Islam. He very often used to quote,“Journey of thousands miles begins with a single step"</p>
                       </div>
                    </Col>
                    <Col>
                    <FaHospitalSymbol style={{color: 'red', fontSize: '40px'}}/>
                    <div className="m-2">
                        <h3>Swadesh Hospital, Mymensingh</h3>
                        <p>Swadesh Hospital, Mymensingh Address: 71/F, Sarda Ghosh Road, Mymensingh – 2200 · Prof. Dr. M. · Dr. Gobinda Kanti Pal MBBS, BCS (Health), FCPS ( .Male Doctor. Dr. Gobinda Kanti Pal. MBBS, BCS (Health), FCPS (Medicine), MD (Cardiology) · Male</p>
                    </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                    <FaHospitalUser style={{color: 'red', fontSize: '40px'}}/>
                     <div className="m-3">
                         <h3>Nexus Hospital Mymensingh</h3>
                         <p>Nexus Hospital Mymensingh Doctors List, qualification, Google location and chamber time –. 29, Nexus Hospital Bulding, Shehora Bara Bari is one of the very first world class hospitals of Mymensingh,the city of Brahmaputra.Prof. Dr. Md. Saiful Haque Talukdar · Dr. Gobinda Kanti Pal · Dr. Jahir Uddin Mohammed Sharif · Dr. S.K. .</p>
                     </div>
                    </Col>
                    <Col>
                    <FaHome style={{color: 'red', fontSize: '40px'}}/>
                    <div className="m-3">
                        <h3>Popular Diagnostic Centre Ltd. </h3>
                        <p> Address: 171, Charpara, Mymensingh. · Hotline: 09613 787814, 09666 787814, · Email: info@populardiagnostic.com. Doctor List · Dr. Asaduzzaman Biddut · Dr. Beauty Saha · Dr. A.T.M. Sazzad Hossain · Prof. Dr. Md. Aminul Islam · Dr. Md.I tried and found phone is dead. these number collected from popular hospital website. Delete. Replies. Reply.</p>
                    </div>
                    </Col>
                    <Col>
                    <FaGripHorizontal style={{color: 'red', fontSize: '40px'}}/>
                     <div className="m-3">
                         <h3>Pranto Specialized Hospital Mymensingh</h3>
                         <p>Pranto Specialized Hospital Mymensingh Prof. Dr. Md. Nasir Uddin, Skin, Allergy & Sexual Diseases Specialist Dr. Md. Nazrul Islam, · Dr. Ganapati Aditya · Dr. Md. Anisur Rahman · Dr. Md. Ashraful Alam · Dr. Mohammad , I will share the names and contacts of the Pranto Specialized Hospital Mymensingh Doctor List. Many people are always look</p>
                     </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopHospital;