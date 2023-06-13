import { Link } from 'react-router-dom'
import '../pages/css/FirstImpression.css'


export default function FirstImpression(props) {
    return (
        <>
            <div className="firstImpressionContainer">
                <div className="firstImpressionLeftSectionContent">
                    <div className="liBitAboutMe">
                        <span className='hi'>Hii<hr /></span>
                        <span className='me'>I'm<span> Raj Nirala</span></span>
                        <span className='developer'>A Fullstack Developer</span>
                    </div>
                    <div className="firstImpressionLeftSectionBtns">
                        <Link type="button" to='/contact' className="btn bg-dark border-dark letsWorkBtn">Let's Work</Link>
                        <Link type="button" className="btncvBtn btn text-dark bg-outline-dark border-dark letsWorkBtn">Download CV</Link>
                    </div>
                </div>
                <div className="firstImpressionRightSectionContent">
                    <img src={require('../Asserts/images/rajnirala.png')} alt="raj nirala" /> 
                </div>
            </div>
        </>
    )
}