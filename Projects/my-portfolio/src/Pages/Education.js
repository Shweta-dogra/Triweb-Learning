import "./Education.css";

function Education(){
    return <div>
        <h1>Education</h1>
        <div className="edu">
            
            <div className="education">
                <h2>Bachelor of Technology</h2>
                <h3>HPTU Hamirpur</h3>
                <p>(08/2015 - 06/2019)</p>
                <p>89%</p>
            </div>
            <div className="education">
                <h2>Senior Secondary</h2>
                <h3>JNV Silvassa D&NH</h3>
                <p>(04/2013 - 03/2015)</p>
                <p>77.4%</p>
            </div>
            
        </div>
        <h1>Certificates</h1>
        <div className="training">
            
            <div className="education">  
                <h3>Automation Engineer at AICTE (01/2019 - 06/2019)</h3>
                <ul className="list">
                    <li>Learned various skills and developed different projects based on PLC & HMI.</li>
                    <li>Worked on Seimens products & TIA portal</li>
                </ul>
            </div>

            <div className="education">
                <h3>Automation Engineer at Global Automation & Pneumatics (06/2018 - 08/2018)</h3>
                <ul className="list">
                    <li>Learned various skills and developed different projects based on PLC & HMI.</li>
                    <li>Worked on omron & Schenieder products</li>
                </ul>
            </div>

            <div className="education">
                <h3>National Power Training Institute (03/2017 - 03/2017)</h3>
                <ul className="list">
                    <li>Workshop on Hydro Power Plant Familiarization and Operation at NPTI HPTC Nangal.</li>
                </ul>
            </div>
        </div>
        
    </div>
}

export default Education;