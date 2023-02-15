const planetsBtns = document.querySelectorAll(".planet-btn")
const mainDisplay = document.getElementById("main")

let planetsInfo =[]
let planetSelectedInfo =[]
let planetName = "Mercury"
let dataToShow

    fetch('./data.json')
    .then(response => response.json())
    .then(data => planetsInfo = data);

const displayInfo = (planetSelectedInfo) =>{

    mainDisplay.innerHTML =
    `
    <div class="img-container">
            <img src= ${planetSelectedInfo[0].images.planet} alt="${planetSelectedInfo[0].name}" class="planet-img" id="planetImg">
        </div>

        <div class="text-container">
            <h1 id="planetTitle">${planetSelectedInfo[0].name}</h1>
            <p id="planetContent">${planetSelectedInfo[0].overview.content}</p>
            <a href=${planetSelectedInfo[0].overview.source} id="planetSource">Source: <span>Wikipedia</span>  <img src="./assets/icon-source.svg" alt=""></a>
        </div>

        <div class="additional-characteristics-container">
        <div class="characteristic">
            <span class="char-title">rotation time</span>
            <span class="char-value">${planetSelectedInfo[0].rotation}</span>
        </div>
        <div class="characteristic">
            <span class="char-title">revolution time</span>
            <span class="char-value">${planetSelectedInfo[0].revolution}</span>
        </div>
        <div class="characteristic">
            <span class="char-title">radius</span>
            <span class="char-value">${planetSelectedInfo[0].radius}</span>
        </div>
        <div class="characteristic">
            <span class="char-title">average temp.</span>
            <span class="char-value">${planetSelectedInfo[0].temperature}</span>
        </div>
    </div>

    <div class="section-menu-big">
    <div id="overviewBig" class="section-btn-big selected">
        <p class="btn-number">01</p>
        <p class="btn-text">overview</p>
    </div>
    <div id="structureBig" class="section-btn-big">
        <p class="btn-number">02</p>
        <p class="btn-text">internal structure</p> 
    </div>
    <div id="geologyBig" class="section-btn-big">
        <p class="btn-number">03</p>
        <p class="btn-text">surface geology</p> </div>
    </div>

    `
    
}

const changeContent = (dataToShow)=>{
    const planetImg = document.getElementById("planetImg")
    const planetContent = document.getElementById("planetContent")
    const planetSource = document.getElementById("planetSource")

    if(dataToShow === "overview"){
        planetImg.src = planetSelectedInfo[0].images.planet
        planetContent.innerText = planetSelectedInfo[0].overview.content
        planetSource.href = planetSelectedInfo[0].overview.source
        document.getElementById("overviewBig").classList.add("selected")
        document.getElementById("structureBig").classList.remove("selected")
        document.getElementById("geologyBig").classList.remove("selected")
    }else if(dataToShow === "structure"){
        console.log("hola")
        planetImg.src = planetSelectedInfo[0].images.internal
        planetContent.innerText = planetSelectedInfo[0].structure.content
        planetSource.href = planetSelectedInfo[0].structure.source
        document.getElementById("overviewBig").classList.remove("selected")
        document.getElementById("structureBig").classList.add("selected")
        document.getElementById("geologyBig").classList.remove("selected")
    }else if(dataToShow === "geology"){
        planetImg.src = planetSelectedInfo[0].images.geology
        planetContent.innerText = planetSelectedInfo[0].geology.content
        planetSource.href = planetSelectedInfo[0].geology.source
        document.getElementById("overviewBig").classList.remove("selected")
        document.getElementById("structureBig").classList.remove("selected")
        document.getElementById("geologyBig").classList.add("selected")
        
    }
}

const changePlanetInfo = (e)=>{
    
    if(e.target.id == "mercuryBtn"){
        planetName = "Mercury"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "venusBtn"){
        planetName = "Venus"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "earthBtn"){
        planetName = "Earth"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "marsBtn"){
        planetName = "Mars"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "jupiterBtn"){
        planetName = "Jupiter"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "saturnBtn"){
        planetName = "Saturn"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "uranusBtn"){
        planetName = "Uranus"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "neptuneBtn"){
        planetName = "Neptune"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "overviewLittle" || e.target.id == "overviewBig" ){
        
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "structureLittle" || e.target.id == "structureBig" ){
        
        dataToShow ="structure"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "geologyLittle" || e.target.id == "geologyBig" ){
        
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        dataToShow ="geology"
        
    }

    displayInfo(planetSelectedInfo)
    changeContent(dataToShow)
}


document.addEventListener("click", changePlanetInfo)