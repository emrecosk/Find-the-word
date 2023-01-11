const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

const alphabet = "ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZ".split("")

const resetDiv = document.querySelector(".reset-div")
const lettersEl = document.querySelector(".letters")
const answerEl = document.querySelector(".answer")
const livesEl = document.querySelector(".lives")
const selectEl = document.querySelector(".select")
const topicsEl = document.querySelector("#topics")
const curtainEl = document.querySelector(".curtain")
const finalMessageEl = document.querySelector(".finalMessage")
const finalNewGameEl = document.querySelector(".finalNewGame")
const hintEl = document.querySelector(".hint")
const hintBtnEl = document.querySelector(".hintBtn")
const ladybugEl = document.querySelector(".ladybug")



let count = 10
let countVin = 0
let arr = []

//const resetDiv = document.createElement("div")
const resetBtn = document.createElement("button")
resetBtn.innerHTML = "New Game"
resetDiv.innerHTML = "FIND THE WORD"
resetBtn.classList.add("new-game")
resetDiv.classList.add("reset-div")
resetDiv.classList.add("header")
lettersEl.appendChild(resetDiv)


lettersEl.appendChild(selectEl)
resetDiv.appendChild(resetBtn)



for (let alp of alphabet) {
    const btn = document.createElement('button');
    btn.innerHTML = alp.toUpperCase()
    btn.classList.add("letter")
    lettersEl.appendChild(btn)

    btn.addEventListener("click", function(){
        arr.push(btn.innerHTML)
        checkCity()
        btn.disabled = true
        btn.classList.add("disable")
        if (!oneCity.split("").includes(btn.innerHTML )){
            --count
            updateLives()
            GameIsOver()
            remainingLadybug()
        } else if (oneCity.split("").includes(btn.innerHTML)){
            countVin++
            GameIsOver()
        }
        })

            function reset(){
            arr = []
            oneCity = randomCity()
            checkCity()
            btn.disabled = false
            btn.classList.remove("disable")
            curtainEl.style.display = "none"
            count = 10
            updateLives()
            remainingLadybug()
            }
        resetBtn.addEventListener("click", reset)
        topicsEl.addEventListener("change", reset)
        finalNewGameEl.addEventListener("click", reset)
}

const container = document.createElement("div")
lettersEl.appendChild(answerEl)
answerEl.appendChild(container)


for (let top of topicsAll){
    const selectionOptions = document.createElement("option")
    selectionOptions.innerHTML = top
    topicsEl.append(selectionOptions)
}

let topicsArr = []

function randomCity(){
    topicsArr = topics[topicsEl.value]
    return topicsArr[Math.floor(Math.random() * topicsArr.length)].toUpperCase("")
}

let oneCity = randomCity()

function checkCity(){
    container.innerHTML = oneCity+" " + oneCity.split("").map(x=> arr.includes(x) ? x : "_").join(" ")
        return container
}
checkCity()

answerEl.appendChild(livesEl)

function updateLives(){
    livesEl.innerHTML = `You have <span class="count">${count}</span> lives left`
}
updateLives()

function GameIsOver(){
    if (count <= 0){
        curtainEl.style.display = "block"
        
    //return  livesEl.innerHTML = `Game Over. Correct word was ${oneCity}`
    return  finalMessageEl.innerHTML = `Game Over. </br>Correct word was ${oneCity}`
    } else if(!container.innerHTML.includes("_")){
        curtainEl.style.display = "block"
        
        return finalMessageEl.innerHTML = `Congratulations. </br>You guessed the word ${oneCity}`
    }
}

function hint(){
    hintEl.style.display = "block"
    
    for (let  top of topicsArr){
        hintEl.innerHTML  += `<span class="clr" style="color:${randomColor()};top:${Math.floor(Math.random()*80)}px;left:${Math.floor(Math.random()*80)}px;right:${Math.floor(Math.random()*80)}px">${top} </span>`
    }

    setTimeout(() => {
        hintEl.style.display = "none"
        hintEl.innerHTML = ""
    }, 3000);
}

topicsEl.addEventListener("change", hint)
hintBtnEl.addEventListener("click", function(){
        hint()
        --count
        updateLives()
        remainingLadybug()
        GameIsOver()
})

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function remainingLadybug(){
    if (count > 0){
   return ladybugEl.innerHTML = `<img class="ladybug" src="${count}.png" alt="ladybug" width="800" height="100">`
} else {
    return ladybugEl.innerHTML = ""
}
}
