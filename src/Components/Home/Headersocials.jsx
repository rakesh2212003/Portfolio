import React from 'react'

import codechef from "../../Assets/codechef.png";
import codeforces from "../../Assets/codeforces.webp";
import hackerrank from "../../Assets/hackerrank.webp";
import leetcode from "../../Assets/leetcode.webp";
import linkedin from "../../Assets/linkedin.png";
import github from "../../Assets/github.png";

const Headersocials = () => {
    return (
        <div className="home_socials">
            <a href="https://www.codechef.com/users/rakesh2213" className="home_social-link" target='_blank'>
                <img className='home_social_img' src={ codechef }/>
            </a>
            <a href="https://codeforces.com/profile/rakesh2212003" className="home_social-link" target='_blank'>
                <img className='home_social_img' src={ codeforces }/>
            </a>
            <a href="https://www.hackerrank.com/rakesh2213?hr_r=1" className="home_social-link" target='_blank'>
                <img className='home_social_img' src={ hackerrank }/>
            </a>
            <a href="https://leetcode.com/rakesh2213/" className="home_social-link" target='_blank'>
                <img className='home_social_img' src={ leetcode }/>
            </a>
            <a href="https://www.linkedin.com/in/rakesh2213/" className="home_social-link" target='_blank'>
                <img className='home_social_img' src={ linkedin }/>
            </a>
            <a href="https://github.com/rakesh2212003" className="home_social-link" target='_blank'>
                <img className='home_social_img' src={ github }/>
            </a>
        </div>
    )
}

export default Headersocials