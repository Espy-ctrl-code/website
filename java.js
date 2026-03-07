
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

// Load blocks from JSON
fetch('json/Minecraft-Blocks/minecraft_blocks.json')
    .then(res => res.json())
    .then(data => { blocksData = data.minecraft_blocks; });

// Random Block Generator
function GenerateRB() {
    const block = getRandomBlock();
    document.getElementById("RandomBlock-Image").src = block.texture;
    document.getElementById("Block-Title").textContent = block.name;
}

function getRandomBlock() {
    const randomId = Math.floor(Math.random() * 600);
    return blocksData[randomId];
}