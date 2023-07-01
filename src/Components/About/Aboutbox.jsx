import React from 'react'

const Aboutbox = () => {
    return (
        <div className="about_boxes grid">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>
                <div>
                    <h3 className="about_title">10</h3>
                    <span className="about_subtitle">Project completed</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-cup"></i>
                <div>
                    <h3 className="about_title">5682</h3>
                    <span className="about_subtitle">Cup of coffee</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-people"></i>
                <div>
                    <h3 className="about_title">268</h3>
                    <span className="about_subtitle">Satisfied clients</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-badge"></i>
                <div>
                    <h3 className="about_title">45</h3>
                    <span className="about_subtitle">Nominees Winner</span>
                </div>
            </div>
        </div>
    )
}

export default Aboutbox
