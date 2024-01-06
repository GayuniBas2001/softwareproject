import { Button, Input, colors} from "@mui/material";
import './App.css';
const HomePage = () => {
    return(
        <div className="HomePage" >

        <div className="HomePage-ContentBG">
            <div className="HomePage-Description">
                <span style={{fontSize: 60, lineHeight: 1.2}}>Build with<br/>AgentSmiths<br/></span>
                <div className="HomePage-Description-Paragraph">
                Hey there, welcome to AgentSmiths!<br/>
                Creating your dream website is now a breeze with our friendly agents. 
                No more headaches with complicated codes or dull designs. 
                Let AgentSmiths craft a site for you that's not only responsive and 
                high-performing but also tailored to your unique style and needs. 
                Say goodbye to the hassle and hello to your amazing new website in just seconds!<br/>
                </div>
                <div className="HomePage-Description-Input">
                    <Input type="text" className="Input-Field" placeholder="Type your website's domain..."/>
                    <Button className="GetStarted" type="submit">Get Started &lt; &gt;</Button>
                </div>
            </div>
            <div className="HomePage-IntroImage">
                <img src="HomePageIntro.png" alt="Description of the image" class="HomePage-Image"/>
            </div>
        </div>

        <div className="HomePage-ContentBG">
            <div className="HomePage-Description">
                <span style={{fontSize: 60, lineHeight: 1.2}}>Build with<br/>AgentSmiths<br/></span>
                <div className="HomePage-Description-Paragraph">
                Hey there, welcome to AgentSmiths!<br/>
                Creating your dream website is now a breeze with our friendly agents. 
                No more headaches with complicated codes or dull designs. 
                Let AgentSmiths craft a site for you that's not only responsive and 
                high-performing but also tailored to your unique style and needs. 
                Say goodbye to the hassle and hello to your amazing new website in just seconds!<br/>
                </div>
                <div className="HomePage-Description-Input">
                    <Input type="text" className="Input-Field" placeholder="Type your website's domain..."/>
                    <Button className="GetStarted" type="submit">Get Started &lt; &gt;</Button>
                </div>
            </div>
            <div className="HomePage-IntroImage">
                <img src="HomePageIntro.png" alt="Description of the image" class="HomePage-Image"/>
            </div>
        </div>

        <div className="HomePage-ContentBG">
            <div className="HomePage-Description">
                <span style={{fontSize: 60, lineHeight: 1.2}}>Build with<br/>AgentSmiths<br/></span>
                <div className="HomePage-Description-Paragraph">
                Hey there, welcome to AgentSmiths!<br/>
                Creating your dream website is now a breeze with our friendly agents. 
                No more headaches with complicated codes or dull designs. 
                Let AgentSmiths craft a site for you that's not only responsive and 
                high-performing but also tailored to your unique style and needs. 
                Say goodbye to the hassle and hello to your amazing new website in just seconds!<br/>
                </div>
                <div className="HomePage-Description-Input">
                    <Input type="text" className="Input-Field" placeholder="Type your website's domain..."/>
                    <Button className="GetStarted" type="submit">Get Started &lt; &gt;</Button>
                </div>
            </div>
            <div className="HomePage-IntroImage">
                <img src="HomePageIntro.png" alt="Description of the image" class="HomePage-Image"/>
            </div>
        </div>

        </div>
    );
}

export default HomePage;