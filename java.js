// Random Color Generator

function GenerateRC() {
    Bbox = getbox()
}

function ResetRC() {
    resetbox()
}

function getbox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let boxId = `box-${i + 1}:${j + 1}`;
            Ccolor = generateHex()
            document.getElementById(boxId).style.backgroundColor = Ccolor;
        }
    }
}

function generateHex() {
    const zeroOrOne = Math.floor(Math.random() * 2);
    /*if (zeroOrOne === 0) {
        return "#ffffff0e";
    }

    else {
        */
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
    //}
}

function resetbox() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let boxId = `box-${i + 1}:${j + 1}`;
            document.getElementById(boxId).style.backgroundColor = "#ffffff0e";
        }
    }
}

// Random Block Generator
let blocksData = [];

fetch('json/Minecraft-Blocks/minecraft_blocks.json')
    .then(res => res.json())
    .then(data => { blocksData = data.minecraft_blocks; });

fetch('json/Minecraft-Blocks/amount.json')
    .then(res => res.json())
    .then(data => { amount = data.item; });

fetch('json/Minecraft-Blocks/blacklist_minecraft_blocks.json')
    .then(res => res.json())
    .then(data => { blacklist = data["minecraft-block-ids"]; });

function GenerateRB() {
    for (let i = 0; i < amount; i++) {
        const block = getRandomBlock();
        document.getElementById(`RandomBlock-Image${i}`).src = block.texture;
        document.getElementById(`Block-Title${i}`).textContent = block.name.replace(/_/g, ' ').toUpperCase();
    }
}

function getRandomBlock() {
    const randomId = Math.floor(Math.random() * 600);
    if (!blacklist.includes(randomId)) {
        return blocksData[randomId];
    }
    else {
        return getRandomBlock();
    }
}

function addBlockItem() {
    document.querySelector(`.RandomBlockItem${amount}`).style.visibility = "visible";
    document.querySelector(`.RandomBlockItem${amount}`).style.position = "relative";
    amount++;
    if (amount >= 4) {
        document.querySelector(".plus-icon").style.visibility = "hidden"; 
        document.querySelector(".plus-icon").style.position = "fixed"; 
        amount = 4;
    }
} 

function removeBlock() {
    if (amount > 1) {
        amount--;
        document.querySelector(`.RandomBlockItem${amount}`).style.visibility = "hidden";
        document.querySelector(`.RandomBlockItem${amount}`).style.position = "absolute";
        checkAmountBI();
    }
}

function checkAmountBI() {
    if (amount < 4) {
        document.querySelector(".plus-icon").style.visibility = "visible";
        document.querySelector(".plus-icon").style.position = "relative";
    }
}