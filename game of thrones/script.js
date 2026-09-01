/* =====================================================
   WESTEROS DATABASE
===================================================== */


/* ================= HOUSES ================= */

const houses = [

{
    name: "HOUSE STARK",
    symbol: "🐺",
    motto: "Winter Is Coming",
    region: "The North",

    image:
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",

    description:
    "An ancient house of the North known for honor, loyalty and the direwolf.",

    members:
    "Eddard Stark, Catelyn Stark, Robb Stark, Sansa Stark, Arya Stark, Bran Stark, Jon Snow"
},

{
    name: "HOUSE TARGARYEN",
    symbol: "🐉",
    motto: "Fire and Blood",
    region: "Dragonstone",

    image:
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",

    description:
    "The dragonlords who conquered Westeros and ruled the Seven Kingdoms.",

    members:
    "Daenerys Targaryen, Viserys Targaryen, Rhaegar Targaryen, Aegon Targaryen"
},

{
    name: "HOUSE LANNISTER",
    symbol: "🦁",
    motto: "Hear Me Roar",
    region: "The Westerlands",

    image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    description:
    "One of the richest and most powerful houses in Westeros.",

    members:
    "Tywin Lannister, Jaime Lannister, Cersei Lannister, Tyrion Lannister"
},

{
    name: "HOUSE BARATHEON",
    symbol: "🦌",
    motto: "Ours Is The Fury",
    region: "The Stormlands",

    image:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",

    description:
    "A warrior house famous for strength and fury.",

    members:
    "Robert Baratheon, Stannis Baratheon, Renly Baratheon, Gendry"
},

{
    name: "HOUSE GREYJOY",
    symbol: "🐙",
    motto: "We Do Not Sow",
    region: "The Iron Islands",

    image:
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80",

    description:
    "The Ironborn rulers of the Iron Islands.",

    members:
    "Balon Greyjoy, Theon Greyjoy, Yara Greyjoy, Euron Greyjoy"
},

{
    name: "HOUSE TYRELL",
    symbol: "🌹",
    motto: "Growing Strong",
    region: "The Reach",

    image:
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80",

    description:
    "A wealthy and influential house from the fertile Reach.",

    members:
    "Mace Tyrell, Olenna Tyrell, Margaery Tyrell, Loras Tyrell"
},

{
    name: "HOUSE MARTELL",
    symbol: "☀️",
    motto: "Unbowed, Unbent, Unbroken",
    region: "Dorne",

    image:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",

    description:
    "The ruling house of Dorne, famous for independence.",

    members:
    "Doran Martell, Oberyn Martell, Ellaria Sand, Trystane Martell"
},

{
    name: "HOUSE ARRYN",
    symbol: "🦅",
    motto: "As High As Honor",
    region: "The Vale",

    image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    description:
    "The ancient ruling family of the Vale.",

    members:
    "Jon Arryn, Lysa Arryn, Robin Arryn"
},

{
    name: "HOUSE TULLY",
    symbol: "🐟",
    motto: "Family, Duty, Honor",
    region: "The Riverlands",

    image:
    "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=1000&q=80",

    description:
    "The ruling house of the Riverlands.",

    members:
    "Hoster Tully, Catelyn Stark, Edmure Tully, Brynden Tully"
}

];


/* ================= CHARACTERS ================= */

const characters = [

{
    name: "Jon Snow",
    house: "Stark",
    role: "King in the North",

    image:
    "snow.jpg",

    description:
    "Jon Snow grows from a misunderstood young man into one of the central leaders of the war against the Army of the Dead."
},

{
    name: "Daenerys Targaryen",
    house: "Targaryen",
    role: "Mother of Dragons",

    image:
    "daenerys.jpg",

    description:
    "Daenerys begins her journey in exile and gradually builds an army, frees slaves and claims her destiny as a ruler."
},

{
    name: "Tyrion Lannister",
    house: "Lannister",
    role: "Hand of the King",

    image:
    "tyrion.jpg",

    description:
    "Tyrion survives political games through intelligence, strategy and his ability to understand people."
},

{
    name: "Cersei Lannister",
    house: "Lannister",
    role: "Queen",

    image:
    "cersei.jpg",

    description:
    "Cersei is one of the most politically powerful figures in Westeros."
},

{
    name: "Arya Stark",
    house: "Stark",
    role: "Assassin",

    image:
    "arya.jpg",

    description:
    "Arya transforms from a young noble girl into a highly skilled assassin."
},

{
    name: "Sansa Stark",
    house: "Stark",
    role: "Queen in the North",

    image:
    "sansa.jpg",

    description:
    "Sansa develops political intelligence and eventually becomes the ruler of an independent North."
},

{
    name: "Jaime Lannister",
    house: "Lannister",
    role: "Kingslayer",

    image:
    "jaime.jpg",

    description:
    "Jaime's story explores honor, loyalty, identity and redemption."
},

{
    name: "Theon Greyjoy",
    house: "Greyjoy",
    role: "Ironborn Prince",

    image:
    "theon.jpg",

    description:
    "Theon struggles between his Greyjoy origins and the Stark family that raised him."
},

{
    name: "Margaery Tyrell",
    house: "Tyrell",
    role: "Queen",

    image:
    "margaery.jpg",

    description:
    "Margaery is a politically intelligent noblewoman who understands the power of public influence."
},

{
    name: "Oberyn Martell",
    house: "Martell",
    role: "Prince of Dorne",

    image:
    "oberyn.jpg",

    description:
    "Oberyn is a skilled warrior driven by vengeance for his family."
}

];


/* ================= SEASONS ================= */

const seasons = {

1: {
    title: "SEASON 1 — WINTER IS COMING",

    summary:
    "The story begins in Westeros as political tensions rise around the Iron Throne. Eddard Stark travels south to serve King Robert Baratheon.",

    events: [

        ["THE KING ARRIVES",
        "Robert Baratheon visits Winterfell and asks Ned Stark to become Hand of the King."],

        ["THE SECRET",
        "Ned begins investigating the death of the previous Hand."],

        ["THE WALL",
        "Jon Snow joins the Night's Watch and discovers the dangers beyond the Wall."],

        ["THE IRON THRONE",
        "Political conspiracies surrounding the royal family begin to unfold."],

        ["THE NORTH REMEMBERS",
        "Ned Stark's decisions ignite a chain of events that changes Westeros forever."]

    ]
},

2: {
    title: "SEASON 2 — THE WAR OF FIVE KINGS",

    summary:
    "Following the death of King Robert, multiple kings claim power and Westeros descends into civil war.",

    events: [

        ["FIVE KINGS",
        "Different rulers fight for control of Westeros."],

        ["BLACKWATER",
        "King's Landing faces a massive naval assault."],

        ["THEON RETURNS",
        "Theon Greyjoy returns to the Iron Islands and makes a dangerous decision."],

        ["DAENERYS",
        "Daenerys continues building her power in Essos."]

    ]
},

3: {
    title: "SEASON 3 — THE RED WEDDING",

    summary:
        "The war becomes increasingly brutal as alliances shift and betrayals reshape the political landscape.",

    events: [

        ["ROB B'S CHOICE",
        "Robb Stark's political decisions create serious consequences."],

        ["DAENERYS RISES",
        "Daenerys gains soldiers and strengthens her claim."],

        ["THE RED WEDDING",
        "A devastating betrayal destroys the Stark military campaign."]

    ]
},

4: {
    title: "SEASON 4 — THE FALL OF KINGS",

    summary:
        "The political struggle intensifies as major characters face trials, revenge and shifting alliances.",

    events: [

        ["PURPLE WEDDING",
        "The royal wedding becomes a turning point."],

        ["TYRION'S TRIAL",
        "Tyrion faces a deadly political trial."],

        ["THE WALL",
        "The Night's Watch prepares for a major attack."],

        ["ARYA'S JOURNEY",
        "Arya begins a new stage of her journey."]

    ]
},

5: {
    title: "SEASON 5 — THE DANCE OF DRAGONS",

    summary:
        "The kingdoms become increasingly unstable while new threats rise in both Westeros and beyond the Wall.",

    events: [

        ["THE FAITH",
        "A powerful religious movement gains political influence."],

        ["HARDHOME",
        "Jon Snow encounters the terrifying scale of the Army of the Dead."],

        ["DAENERYS",
        "Daenerys struggles to rule Meereen."],

        ["THE NORTH",
        "The conflict around Winterfell becomes increasingly dangerous."]

    ]
},

6: {
    title: "SEASON 6 — THE WINDS OF WINTER",

    summary:
        "Long-running mysteries are revealed while the Stark family begins reclaiming its position in the North.",

    events: [

        ["JON RETURNS",
        "Jon Snow returns to the world of the living."],

        ["BATTLE OF THE BASTARDS",
        "Jon and his allies fight to reclaim Winterfell."],

        ["CERSEI'S REVENGE",
        "Cersei makes a devastating move against her enemies."],

        ["KING IN THE NORTH",
        "Jon Snow is proclaimed King in the North."],

        ["DAENERYS SAILS",
        "Daenerys finally sails toward Westeros."]

    ]
},

7: {
    title: "SEASON 7 — THE GREAT WAR",

    summary:
        "The surviving powers begin preparing for the greatest threat Westeros has ever faced.",

    events: [

        ["DAENERYS ARRIVES",
        "Daenerys finally reaches Westeros."],

        ["DRAGONSTONE",
        "The Targaryen queen establishes her base."],

        ["THE GREAT COUNCIL",
        "Major leaders attempt to unite against the Army of the Dead."],

        ["THE WALL FALLS",
        "The Night King breaches the Wall with an undead dragon."]

    ]
},

8: {
    title: "SEASON 8 — THE END",

    summary:
        "The final season brings the conflict between the living and the dead to its conclusion, followed by the final struggle for political power.",

    events: [

        ["WINTERFELL",
        "The living prepare for the arrival of the Army of the Dead."],

        ["THE LONG NIGHT",
        "The battle for humanity's survival reaches Winterfell."],

        ["THE IRON THRONE",
        "The struggle for King's Landing reaches its final stage."],

        ["THE NEW KING",
        "A new political order emerges in Westeros."],

        ["THE NORTH",
        "The North takes a new path."]

    ]
}

};


/* ================= BATTLES ================= */

const battles = [

{
    title: "BATTLE OF BLACKWATER",

    image:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",

    description:
    "A major battle fought for control of King's Landing."
},

{
    title: "RED WEDDING",

    image:
    "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1000&q=80",

    description:
    "A devastating betrayal that changed the course of the War of Five Kings."
},

{
    title: "BATTLE OF THE BASTARDS",

    image:
    "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1000&q=80",

    description:
    "Jon Snow and his allies fight to reclaim Winterfell."
},

{
    title: "BATTLE OF WINTERFELL",

    image:
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",

    description:
    "The living face the Army of the Dead in the battle for humanity."
},

{
    title: "FIELD OF FIRE",

    image:
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",

    description:
    "Dragons demonstrate their devastating power on the battlefield."
}

];


/* =====================================================
   RENDER HOUSES
===================================================== */

const houseContainer =
    document.getElementById(
        "houseContainer"
    );

houses.forEach((house,index) => {

    const card =
        document.createElement("div");

    card.className =
        "house-card";

    card.innerHTML = `

        <img src="${house.image}">

        <div class="house-info">

            <div class="house-symbol">
                ${house.symbol}
            </div>

            <h3>
                ${house.name}
            </h3>

            <p class="house-motto">
                "${house.motto}"
            </p>

            <p>
                ${house.region}
            </p>

            <p>
                ${house.description}
            </p>

        </div>
    `;

    card.addEventListener(
        "click",
        () => showHouse(house)
    );

    houseContainer.appendChild(card);

});


/* =====================================================
   HOUSE MODAL
===================================================== */

function showHouse(house) {

    const modal =
        document.getElementById("modal");

    const content =
        document.getElementById(
            "modalContent"
        );

    content.innerHTML = `

        <h2>
            ${house.symbol}
            ${house.name}
        </h2>

        <p>
            "${house.motto}"
        </p>

        <h3>
            REGION
        </h3>

        <p>
            ${house.region}
        </p>

        <h3>
            ABOUT THE HOUSE
        </h3>

        <p>
            ${house.description}
        </p>

        <h3>
            IMPORTANT MEMBERS
        </h3>

        <p>
            ${house.members}
        </p>

    `;

    modal.classList.add("show");

}


/* =====================================================
   CHARACTERS
===================================================== */

const characterContainer =
    document.getElementById(
        "characterContainer"
    );


function renderCharacters(
    selectedHouse = "all"
) {

    characterContainer.innerHTML = "";

    const filtered =
        selectedHouse === "all"

        ? characters

        : characters.filter(
            character =>
            character.house ===
            selectedHouse
        );


    filtered.forEach(character => {

        const card =
            document.createElement("div");

        card.className =
            "character-card";

        card.innerHTML = `

            <img src="${character.image}">

            <div class="character-info">

                <h3>
                    ${character.name}
                </h3>

                <span>
                    ${character.house}
                </span>

                <span>
                    ${character.role}
                </span>

            </div>

        `;

        card.addEventListener(
            "click",
            () => showCharacter(character)
        );

        characterContainer.appendChild(card);

    });

}


renderCharacters();


/* ================= CHARACTER FILTER ================= */

document
.querySelectorAll(".filter")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document
            .querySelectorAll(".filter")
            .forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            renderCharacters(
                button.dataset.house
            );

        }
    );

});


/* =====================================================
   CHARACTER MODAL
===================================================== */

function showCharacter(character) {

    const modal =
        document.getElementById("modal");

    const content =
        document.getElementById(
            "modalContent"
        );

    content.innerHTML = `

        <h2>
            ${character.name}
        </h2>

        <p>
            ${character.house}
        </p>

        <h3>
            ROLE
        </h3>

        <p>
            ${character.role}
        </p>

        <h3>
            STORY
        </h3>

        <p>
            ${character.description}
        </p>

    `;

    modal.classList.add("show");

}


/* =====================================================
   MODAL CLOSE
===================================================== */

document
.getElementById("closeModal")
.addEventListener(
    "click",
    () => {

        document
        .getElementById("modal")
        .classList.remove("show");

    }
);


document
.getElementById("modal")
.addEventListener(
    "click",
    e => {

        if(e.target.id === "modal") {

            e.currentTarget
            .classList.remove("show");

        }

    }
);


/* =====================================================
   SEASONS
===================================================== */

const seasonContent =
    document.getElementById(
        "seasonContent"
    );


function showSeason(number) {

    const season =
        seasons[number];

    seasonContent.innerHTML = `

        <h3>
            ${season.title}
        </h3>

        <p>
            ${season.summary}
        </p>

        <div class="season-events">

            ${
                season.events.map(event => `

                    <div class="season-event">

                        <strong>
                            ${event[0]}
                        </strong>

                        <p>
                            ${event[1]}
                        </p>

                    </div>

                `).join("")
            }

        </div>

    `;

}


showSeason(1);


/* ================= SEASON BUTTONS ================= */

document
.querySelectorAll(".season-btn")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document
            .querySelectorAll(".season-btn")
            .forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            showSeason(
                button.dataset.season
            );

        }
    );

});


/* =====================================================
   BATTLES
===================================================== */

const battleContainer =
    document.getElementById(
        "battleContainer"
    );


battles.forEach(battle => {

    const card =
        document.createElement("div");

    card.className =
        "battle-card";

    card.innerHTML = `

        <img src="${battle.image}">

        <div class="battle-info">

            <h3>
                ${battle.title}
            </h3>

            <p>
                ${battle.description}
            </p>

        </div>

    `;

    battleContainer.appendChild(card);

});


/* =====================================================
   SNOW
===================================================== */

function createSnow() {

    const snow =
        document.createElement("span");

    snow.className =
        "snowflake";

    snow.style.left =
        Math.random() * 100 + "%";

    const size =
        Math.random() * 5 + 2;

    snow.style.width =
        size + "px";

    snow.style.height =
        size + "px";

    snow.style.opacity =
        Math.random();

    snow.style.animationDuration =
        Math.random() * 7 + 5 + "s";

    document.body.appendChild(snow);

    setTimeout(
        () => snow.remove(),
        13000
    );

}

setInterval(
    createSnow,
    100
);


/* =====================================================
   FIRE EMBERS
===================================================== */

function createEmber() {

    const ember =
        document.createElement("span");

    ember.className =
        "ember";

    ember.style.left =
        Math.random() * 100 + "%";

    ember.style.animationDuration =
        Math.random() * 5 + 4 + "s";

    document.body.appendChild(ember);

    setTimeout(
        () => ember.remove(),
        10000
    );

}

setInterval(
    createEmber,
    250
);


/* =====================================================
   DRAGON
===================================================== */

document
.getElementById("dragonBtn")
.addEventListener(
    "click",
    () => {

        const dragon =
            document.querySelector(
                ".dragon"
            );

        dragon.innerHTML =
            "🔥🐉🔥";

        dragon.style.transform =
            "scale(1.5)";

        setTimeout(
            () => {

                dragon.innerHTML =
                    "🐉";

                dragon.style.transform =
                    "";

            },
            3000
        );

    }
);


/* =====================================================
   LOADER
===================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                document
                .getElementById("loader")
                .classList.add("hide");

            },
            3000
        );

    }
);


/* =====================================================
   MOUSE PARALLAX
===================================================== */

document
.querySelector(".hero")
.addEventListener(
    "mousemove",
    e => {

        const x =
            (e.clientX /
            window.innerWidth - .5) * 20;

        const y =
            (e.clientY /
            window.innerHeight - .5) * 20;

        document
        .querySelector(".hero-content")
        .style.transform =
            `translate(${x}px,${y}px)`;

    }
);


/* =====================================================
   KEYBOARD
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        if(e.key === "Escape") {

            document
            .getElementById("modal")
            .classList.remove("show");

        }

    }
);