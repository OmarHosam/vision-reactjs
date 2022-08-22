import React from 'react';
import './About.css';

function About() {
    return (
        <div className="aboutus-wrapper">
            <div className="aboutus-container">
                <div className="aboutus-title">
                    <h1>About Vision</h1>
                </div>
                <div className="aboutus-maps">
                    <div className="aboutus-map1">
                        <p>Head Office</p>
                        <iframe title="Keep in touch with us" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.73495403336676!2d31.19930253415428!3d30.040310912060967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846cb7e4db82b%3A0x13342fc7df827872!2s21%20El-Hussein%2C%20Ad%20Doqi%2C%20Dokki%2C%20Giza%20Governorate%203751043!5e0!3m2!1sen!2seg!4v1661033132678!5m2!1sen!2seg" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="aboutus-contact">
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i>  38 El Hussein st., El mohandeseen, Giza, Egypt</p>
                            <div className="aboutus-contact1-info">
                                <div><a href="tel:+201100887786"><i className="fa fa-mobile" aria-hidden="true"></i> +201100887786</a></div>
                                <div><a href="mailto:info@visionpcl.com"><i className="fa fa-envelope" aria-hidden="true"></i> info@visionpcl.com</a></div>
                                <div><a href="https://facebook.com/visionpcl" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutus-map2">
                        <p>Haram Branch</p>
                        <iframe title="Keep in touch with us" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215.93211896980694!2d31.200060543209784!3d30.010628461536506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847a13cb84c25%3A0xe4f4aab851284de8!2z2KrYqtiq!5e0!3m2!1sen!2seg!4v1660859899178!5m2!1sen!2seg" frameBorder="0" style={{ border: 0 }} loading="lazy" allowFullScreen></iframe>
                        <div className="aboutus-contact">
                            <p><i className="fa fa-map-marker" aria-hidden="true"></i> 38 El Sahab st., El Haram, Giza, Egypt</p>
                            <div className="aboutus-contact1-info">
                                <div><a href="tel:+201100887753"><i className="fa fa-mobile" aria-hidden="true"></i> +201100887753</a></div>
                                <div><a href="mailto:info@visionpcl.com"><i className="fa fa-envelope" aria-hidden="true"></i> info@visionpcl.com</a></div>
                                <div><a href="https://facebook.com/visionpcl" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;