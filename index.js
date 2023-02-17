const planetsBtns = document.querySelectorAll(".planet-btn")
const mainDisplay = document.getElementById("main")
const selectedContentLittle = document.querySelectorAll(".section-btn")
const selectedContentBig = document.querySelectorAll(".section-btn-big")
const hamburgerIcon = document.getElementById("hamburgerIcon")
const planetMenu = document.getElementById("planetMenu")
const rootCss = document.querySelector(":root")

let isShowing = true
let planetsInfo =[]
let planetSelectedInfo =[]
let planetName = "Mercury"
let dataToShow

fetch('./data.json')
.then(response => response.json())
.then(data => planetsInfo = data);

const displayPlanetMenu = () =>{
    isShowing = !isShowing
    isShowing? planetMenu.classList.add("hidden") : planetMenu.classList.remove("hidden")
}

const removeSelectedPlanet = (planet) =>{
    planetsBtns.forEach(btn => {
        btn.classList.remove("selected")
    });
    document.getElementById(planet).classList.add("selected")
}
const removeSelectedContentLittle = ()=>{
    selectedContentLittle.forEach(btn => {
        btn.classList.remove("selected")
    });
}

const removeSelectedContentBig = ()=>{
    selectedContentBig.forEach(btn => {
        btn.classList.remove("selected")
    });
    
}


const displayInfo = (planetSelectedInfo) =>{

    mainDisplay.innerHTML =
    `
    <div class="img-container">
            <img src= ${planetSelectedInfo[0].images.planet} alt="${planetSelectedInfo[0].name}" class="planet-img" id="planetImg">
            <img src=${planetSelectedInfo[0].images.geology} alt="planet geology" class="second-img hidden" id="geologyImg">
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
    <div id="overviewBig" class="section-btn-big">
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
    const geologyImg = document.getElementById("geologyImg")
    rootCss.style.setProperty('--planet-color', planetSelectedInfo[0].color)
    if(dataToShow === "overview"){
        geologyImg.classList.add("hidden")
        planetImg.src = planetSelectedInfo[0].images.planet
        geologyImg.href = planetSelectedInfo[0].images.geology
        planetContent.innerText = planetSelectedInfo[0].overview.content
        planetSource.href = planetSelectedInfo[0].overview.source
        removeSelectedContentLittle()
        removeSelectedContentBig()
        document.getElementById("overviewBig").classList.add("selected")
        document.getElementById("overviewLittle").classList.add("selected")
        
        
    }else if(dataToShow === "structure"){
        geologyImg.classList.add("hidden")
        planetImg.src = planetSelectedInfo[0].images.internal
        planetContent.innerText = planetSelectedInfo[0].structure.content
        planetSource.href = planetSelectedInfo[0].structure.source
        removeSelectedContentLittle()
        removeSelectedContentBig()
        document.getElementById("structureBig").classList.add("selected")
        document.getElementById("structureLittle").classList.add("selected")

    }else if(dataToShow === "geology"){
        geologyImg.classList.remove("hidden")
        planetImg.src = planetSelectedInfo[0].images.planet
        planetContent.innerText = planetSelectedInfo[0].geology.content
        planetSource.href = planetSelectedInfo[0].geology.source
        removeSelectedContentLittle()
        removeSelectedContentBig()
        document.getElementById("geologyBig").classList.add("selected")
        document.getElementById("geologyLittle").classList.add("selected")
        
    }
}

const changePlanetInfo = (e)=>{
    
    if(e.target.id == "mercuryBtn" || e.target.id == "mercuryMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Mercury"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "venusBtn" || e.target.id == "venusMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Venus"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "earthBtn" || e.target.id == "earthMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Earth"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "marsBtn" || e.target.id == "marsMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Mars"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "jupiterBtn" || e.target.id == "jupiterMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Jupiter"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "saturnBtn" || e.target.id == "saturnMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Saturn"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "uranusBtn" || e.target.id == "uranusMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Uranus"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "neptuneBtn" || e.target.id == "neptuneMenuBtn"){
        planetMenu.classList.add("hidden")
        isShowing = !isShowing
        planetName = "Neptune"
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
        removeSelectedPlanet(e.target.id)
    }else if(e.target.id == "overviewLittle" || e.target.id == "overviewBig" ){
        
        dataToShow ="overview"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "structureLittle" || e.target.id == "structureBig" ){
        
        dataToShow ="structure"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }else if(e.target.id == "geologyLittle" || e.target.id == "geologyBig" ){
        dataToShow ="geology"
        planetSelectedInfo = planetsInfo.filter( planet => planet.name === planetName)
    }

    displayInfo(planetSelectedInfo)
    changeContent(dataToShow)
}


document.addEventListener("click", changePlanetInfo)
hamburgerIcon.addEventListener("click",displayPlanetMenu)