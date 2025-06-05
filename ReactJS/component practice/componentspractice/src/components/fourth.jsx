import './fourth.css'
import fourthimg from '../assets/images/fourth pic.png'
import listimg from '../assets/images/Group\ 25\ \(1\).png'
import listimg2 from '../assets/images/Group 26 (1).png'
import listimg3 from '../assets/images/Group 27.png'
const Fourth = () => {
    return(
    <div className='fourthmain'>
        {/* <div className="fourthsec1">
            <h1>Designing Your Dream in Three Simple Steps</h1>
       <ul>
        <li><h4>Start Project</h4>
        <p>Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience</p></li>
       </ul>
        </div> */}

    <div class="container">
        <h1>Designing Your Dream in <br/>Three Simple Steps</h1>

        <div class="step">
            <div class="icon">
                <img src={listimg } alt="Start Project"/>
            </div>
            <div class="content">
                <h2>Start Project</h2>
                <p>Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.</p>
            </div>
        </div>

        <div class="step">
            <div class="icon">
                <img src={listimg2} alt="Craft"/>
            </div>
            <div class="content">
                <h2>Craft</h2>
                <p>Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space.</p>
            </div>
        </div>

        <div class="step">
            <div class="icon">
                <img src={listimg3} alt="Execute"/>
            </div>
            <div class="content">
                <h2>Execute</h2>
                <p>Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space.</p>
            </div>
        </div>
    </div>
        <div className="fourthsec2">
            <img src={fourthimg} alt="" />
        </div>
    </div>)
}

export default Fourth