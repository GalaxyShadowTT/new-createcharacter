function createCharacter (name, role) {
    return {
        name: name,
        role: role,
        level: 1,
        skills: [
            "float"
        ],
        equipment: {
            weapon: "staf",
            armor: "leather",
            items: ["healing potion", "Map"]
        },
        description: "",
    }
}

function addItem(character, item){
    character.equipment.items.push(item)
}

function newSkill(character, skill) {
    character.skills.push(skill)
}

function levelUp(character){
    const poziomObecny = character.level
    character.level = poziomObecny + 1
}


function characterDescription(character, description){
    character.description = description
}




const myCharacter = createCharacter("Aiden", "Healer")


addItem(myCharacter, "stone pot")

newSkill(myCharacter, "regeneration")

levelUp(myCharacter)
levelUp(myCharacter)
levelUp(myCharacter)
levelUp(myCharacter)


characterDescription(myCharacter, "HAHSHAhhskha")

console.log(myCharacter)