import React from "react";
import {FaFacebookF} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import avatar from '../images/avatar.jpg'
function Profile(){
    return(
        <div className="wrapperProfile">
            <div className="top-profile">
                <h2 className="wow animate__animated animate__swing">Profile</h2>
                <span className="wow animate__animated animate__rotateInUpRight">I'm a student of VKU</span>
            </div>
            <div className="content-profile">
                <div className="wow animate__animated animate__backInLeft left-content">
                    <h3>About me</h3>
                    <p>I'm 4th year student at Vietnam Korea University of Information
                        and Communication Technology.I want to look for a internship
                        job about React-Native, React-JS or NodeJS to get experiences,
                        improve myself and wish approach with enterprise
                        environment.
                    </p>
                </div>
                <div className="center-content">
                    <img src={avatar} className="avatar"/>
                </div>
                <div className="wow animate__animated animate__bounceInRight right-content">
                    <h3>Details</h3>
                    <h4>Name:</h4>
                    <p>Nguyễn Văn Chiến</p>
                    <h4>Age:</h4>
                    <p>22 years</p>
                    <h4>Location:</h4>
                    <p>Hoa Quy, Ngu Hanh Son, Da Nang, Viet Nam</p>
                    <div className="gruop-social">
                        <a  className="icon" href="https://www.facebook.com/ken.navi.1/" target="_blank">
                        <FaFacebookF/>
                        </a>
                        <a className="icon" href="https://github.com/nvchien2811" target="_blank">
                        <BsGithub/>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;