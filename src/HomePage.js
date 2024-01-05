const HomePage = () => {
    return(
        <div className="HomePage-ContentBG">
            <div className="HomePage-Description">
                <span style={{fontSize: 50}}>Build with<br/></span>
                <span style={{fontSize: 60}}>AgentSmiths<br/></span>
                <div style={{fontSize: 16, lineHeight:2, marginTop:20}}>
                Hey there, welcome to AgentSmiths! 
                Creating your dream website is now a breeze with our friendly agents. 
                No more headaches with complicated codes or dull designs. 
                Let AgentSmiths craft a site for you that's not only responsive and 
                high-performing but also tailored to your unique style and needs. 
                Say goodbye to the hassle and hello to your amazing new website in just seconds!<br/>
                </div>
            </div>
            <div className="HomePage-IntroImage">
                <img src="HomePageIntro2.png" alt="Description of the image" class="HomePage-Image"/>
            </div>
        </div>
    );
}

export default HomePage;