import allyList from './allyList.json';

// First 3 Digits - 0,1,2
function determineSeries(dna){
    const substr = parseInt(dna.substring(0,3));
    return substr;
}
// 3,4,5 Digits
function determineAlly(dna){
    //console.log('ALLY - ', dna.substring(3,6));
    // Version of EA
    const version = parseInt(dna.substring(18,19));
    console.log('version', version);
    //Ally
    const substr = parseInt(dna.substring(3,6));
    if(version){
        if(version === 1){
            switch(true){
                // JavaScript removes leading zeroes, in this case, the number will fall between 0 and 99.  eg: '007' ends up being 7 as a number
                case (0 <= substr && substr <= 99):
                    return allyList[0];
                case (100 <= substr && substr <= 199):
                    return allyList[1];
                case (200 <= substr && substr <= 299):
                    return allyList[2];
                case (300 <= substr && substr <= 399):
                    return allyList[3];
                case (400 <= substr && substr <= 499):
                    return allyList[4];
                case (500 <= substr && substr <= 599):
                    return allyList[5];
                case (600 <= substr && substr <= 699):
                    return allyList[6];
                case (700 <= substr && substr <= 799):
                    return allyList[7];
                case (800 <= substr && substr <= 899):
                    return allyList[8];
                case(900 <= substr && substr <= 996):
                    return allyList[9];
                // Titans
                case(997 === substr):
                    return allyList[10];
                case(998 === substr):
                    return allyList[11];
                case(999 === substr):
                    return allyList[12];
            }

        }
    }else{
        switch(true){
            // JavaScript removes leading zeroes, in this case, the number will fall between 0 and 99.  eg: '007' ends up being 7 as a number
            case (0 <= substr && substr <= 99):
                return allyList[0];
            case (100 <= substr && substr <= 199):
                return allyList[1];
            case (200 <= substr && substr <= 299):
                return allyList[2];
            case (300 <= substr && substr <= 399):
                return allyList[3];
            case (400 <= substr && substr <= 499):
                return allyList[4];
            case (500 <= substr && substr <= 599):
                return allyList[5];
            case (600 <= substr && substr <= 699):
                return allyList[6];
            case (700 <= substr && substr <= 799):
                return allyList[7];
            case (800 <= substr && substr <= 899):
                return allyList[8];
            case(900 <= substr && substr <= 999):
                return allyList[9];
        }

    }

}

// 6, 7, 8 Digits
function determineSkills(dna, character){
    //console.log('SKILLS', dna.substring(6,9));
    const skill = parseInt(dna.substring(6,9));
    
    const a = allyList.find((a)=>{
        return a.character === character;
    }).skills;
    console.log('A', a);
    const crackedSkills = [];
    switch(true){
        // JavaScript removes leading zeroes, in this case, the number will fall between 0 and 31.  eg: '077' ends up being 77 as a number
        // ONE Skill
        case (0 <= skill && skill <= 31):
            crackedSkills.push(a[0]);
            break;
        case (31 <= skill && skill <= 64):
            crackedSkills.push(a[1]);
            break;
        case (64 <= skill && skill <= 97):
            crackedSkills.push(a[2]);
            break;
        case (97 <= skill && skill <= 130):
            crackedSkills.push(a[3]);
            break;
        case (130 <= skill && skill <= 163):
            crackedSkills.push(a[4]);
            break;

        // TWO SKILLS
        case (163 < skill && skill <= 196):
            crackedSkills.push(a[0], a[1]);
            break;
        case (196 < skill && skill <= 229):
            crackedSkills.push(a[0], a[2]);
            break;
        case (229 < skill && skill <= 262):
            crackedSkills.push(a[0], a[3]);
            break;           
        case (262 < skill && skill <= 295):
            crackedSkills.push(a[0], a[4]);
            break;
        case(295 < skill && skill <= 328):
            crackedSkills.push(a[1], a[2]);
            break;
        case(328 < skill && skill <= 361):
            crackedSkills.push(a[1], a[3]);
            break;
        case(361 < skill && skill <= 394):
            crackedSkills.push(a[1], a[4]);
            break;
        case(394 < skill && skill <= 427):
            crackedSkills.push(a[2], a[3]);
            break;
        case(427 < skill && skill <= 460):
            crackedSkills.push(a[2], a[4]);
            break;
        case(460 < skill && skill <= 493):
            crackedSkills.push(a[3], a[4]);
            break;

        // THREE SKILLS
        case(493 < skill && skill <= 526):
            crackedSkills.push(a[0], a[1], a[2]);
            break;
        case(526 < skill && skill <= 559):
            crackedSkills.push(a[0], a[1], a[3]);
            break;
        case(559 < skill && skill <= 592):
            crackedSkills.push(a[0], a[1], a[4]);
            break;
        case(592 < skill && skill <= 625):
            crackedSkills.push(a[0], a[2], a[3]);
            break;
        case(625 < skill && skill <= 658):
            crackedSkills.push(a[0], a[2], a[4]);
            break;
        case(658 < skill && skill <= 691):
            crackedSkills.push(a[0], a[3], a[4]);
            break;
        case(691 < skill && skill <= 724):
            crackedSkills.push(a[1], a[2], a[3]);
            break;
        case(724 < skill && skill <= 757):
            crackedSkills.push(a[1], a[2], a[4]);
            break;
        case(757 < skill && skill <= 790):
            crackedSkills.push(a[1], a[3], a[4]);
            break;
        case(790 < skill && skill <= 823):
            crackedSkills.push(a[2], a[3], a[4]);
            break;

        // FOUR SKILLS
        case(823 < skill && skill <= 856):
            crackedSkills.push(a[0], a[1], a[2], a[3]);
            break;
        case(856 < skill && skill <= 889):
            crackedSkills.push(a[0], a[1], a[2], a[4]);
            break;
        case(889 < skill && skill <= 922):
            crackedSkills.push(a[0], a[1], a[3], a[4]);
            break;
        case(922 < skill && skill <= 955):
            crackedSkills.push(a[0], a[2], a[3], a[4]);
            break;
        case(955 < skill && skill <= 988):
            crackedSkills.push(a[1], a[2], a[3], a[4]);
            break;

        // FIVE SKILLS
        case(988 < skill && skill <= 999):
            crackedSkills.push(a[0], a[1], a[2], a[3], a[4]);
            break;
        default:
            console.log('DEF', crackedSkills);
            crackedSkills;
    }
    
    return crackedSkills;

}

// 9,10 Digits
function determineSign(dna){
    //console.log('SIGN', dna.substring(9,11));
    const substr = parseInt(dna.substring(9,11));

    switch(true){
        // JavaScript removes leading zeroes, in this case, the number will fall between 0 and 8. eg: '07' ends up being 7 as a number
        // Aries = 9
        case (0 <= substr && substr <= 8):
            return {value : 'Aries', modifier : 3};
        // Taurus = 9
        case (9 <= substr && substr <= 18):
            return {value : 'Taurus', modifier : 3};
        // Gemini = 8
        case (19 <= substr && substr <= 26):
            return {value : 'Gemini', modifier : 5};
        // Cancer = 7
        case (27 <= substr && substr <= 33):
            return {value : 'Cancer', modifier : 7};
        // Leo = 8
        case (34 <= substr && substr <= 41):
            return {value : 'Leo', modifier : 5};
        // Virgo = 10
        case (42 <= substr && substr <= 52):
            return {value : 'Virgo', modifier : 1};
        // Libra = 8
        case (53 <= substr && substr <= 60):
            return {value : 'Libra', modifier : 5};
        // Scorpio = 9
        case (61 <= substr && substr <= 70):
            return {value : 'Scorpio', modifier : 3};
        // Sagittarius = 8
        case (71 <= substr && substr <= 78):
            return {value : 'Sagittarius', modifier : 5};
        // Capricorn = 7
        case(79 <= substr && substr <= 85):
            return {value : 'Capricorn', modifier : 7};
        // Aquarius = 6
        case(86 <= substr && substr <= 91):
            return {value : 'Aquarius', modifier : 10};
        // Pisces = 8
        case(92 <= substr && substr <= 99):
            return {value : 'Pisces', modifier : 6};
    }


}

// 11th Digit
function determineAlignment(dna){
    //console.log('Alignment', dna.substring(11,12));
    const substr = parseInt(dna.substring(11,12));
    
    switch(true){
        
        // Lawful Good
        case (0 === substr):
            return {value : 'Lawful Good', modifier : 10};
        // Neutral Good
        case (1 === substr):
            return {value : 'Neutral Good', modifier : 8};
        // Chaotic Good
        case (2 === substr):
            return {value : 'Chaotic Good', modifier : 9};
        // Lawful Neutral
        case (3 === substr):
            return {value : 'Lawful Neutral', modifier : 9};
        // True Neutral
        case (4 === substr || 5 === substr):
            return {value : 'True Neutral', modifier : 10};
        // Chaotic Neutral
        case (6 === substr):
            return {value : 'Chaotic Neutral', modifier : 8};
        // Lawful Evil
        case (7 === substr):
            return {value : 'Lawful Evil', modifier : 8};
        // Neutral Evil
        case (8 === substr):
            return {value : 'Neutral Evil', modifier : 9};
        // Chaotic Evil
        case (9 === substr):
            return {value : 'Chaotic Evil', modifier : 10};
    }
}

// 12, 13 Digits
function determineColor(dna){
    //console.log('COLOR',dna, dna.substring(12,14));
    const substr = parseInt(dna.substring(12,14));
    console.log('!!!',substr);

    switch(true){
        
        // Diamond = 1
        case(0 === substr):
            return {value : 'Diamond', modifier : 10};
        // Amethyst 7
        // JavaScript removes leading zeroes, in this case, the number will fall between 1 and 7. eg: '07' ends up being 7 as a number
        case (1 <= substr && substr <= 7):
            return {value : 'Amethyst', modifier : 5};
        // Citrine = 7
        case (8 <= substr && substr <= 14):
            return {value : 'Citrine', modifier : 5};
        // Topaz = 7
        case (15 <= substr && substr <= 21):
            return {value : 'Topaz', modifier : 5};
        // Sapphire = 7
        case (22 <= substr && substr <= 28):
            return {value : 'Sapphire', modifier : 5};
        // Ruby = 7
        case (29 <= substr && substr <= 35):
            return {value : 'Ruby', modifier : 5};
        // Emerald = 7
        case (36 <= substr && substr <= 42):
            return {value : 'Emerald', modifier : 5};
        // Fire Opal = 4
        case (43 <= substr && substr <= 46):
            return {value : 'Fire Opal', modifier : 7};
        // Onyx = 3
        case (47 <= substr && substr <= 49):
            return {value : 'Onyx', modifier : 8};
        // Default Scheme = 50
        default:
            return { value : null, modifier : 2 }
    }

}

// 14, 15, 16 Digits
function determineBadges(dna){
    //console.log('badgenum',dna.substring(14,17));
    const substr = parseInt(dna.substring(14,17));
    
    switch(true){
        
        case (0 === substr):
            return {value : null, bonus : 0};
        case (1 === substr):
            return {value : 'Tectonic Ten', bonus : 10};
        case (2 === substr):
            return {value : 'Titans of Babylon', bonus : 1000};
        default:
            return {value : null, bonus : 0};

    }
}

function determineStoneSignMatch(stone, sign){
    //console.log(stone, sign);
    switch(sign){
        case ("Aries"):
            if(stone === 'Diamond'){
                return true;
                break;
            }
            return false;
        case ("Taurus"):
            if(stone === 'Emerald'){
                return true;
                break;
            }
            return false;
        case ("Gemini"):
            if(stone === 'Ruby'){
                return true;
                break;
            }
            return false;
        case ("Cancer"):
            if(stone === "Emerald"){
                return true;
                break;
            }
            return false;
        case ("Leo"):
            if(stone === 'Onyx'){
                return true;
                break;
            }
            return false;
        case ("Virgo"):
            if(stone === 'Sapphire'){
                return true;
                break;
            }
            return false;
        case ("Libra"):
            if(stone === 'Fire Opal'){
                return true;
                break;
            }
            return false;
        case ("Scorpio"):
            if(stone === 'Topaz'){
                return true;
                break;
            }
            return false;
        case ("Sagittarius"):
            if(stone === 'Citrine'){
                return true;
                break;
            }
            return false;
        case ("Capricorn"):
            if(stone === 'Ruby'){
                return true;
                break;
            }
            return false;
        case ("Aquarius"):
            if(stone === 'Amethyst'){
                return true;
                break;
            }
            return false;
        case ("Pisces"):
            if(stone === 'Amethyst'){
                return true;
                break;
            }
            return false;
        default:
            return false
    }
}

function determinePower(skillCount, sign, alignment, color, hasUltimate, matchingStone, badgeBonus){
    let powerDecimal = (skillCount * .4) + (sign * .1) + (alignment * .2) + (color * .3);
    let power = Math.floor(powerDecimal * 100) + (hasUltimate ? 100 : 0) + (matchingStone ? 150 : 0) + badgeBonus;
    return power;
    
}

function decodeAlly(dna, version){
    const series = determineSeries(dna);
    const basics =  determineAlly(dna, version);
    const color = determineColor(dna);
    const skills = determineSkills(dna, basics.character);
    const sign = determineSign(dna);
    const alignment = determineAlignment(dna);
    const badge = determineBadges(dna);
    const matchingStone = determineStoneSignMatch(color.value, sign.value);
    



    const hasUltimate = basics.alignment === alignment.value;
    const ally = {
        series,
        basics,
        skills : skills,
        sign : sign.value,
        alignment : alignment.value,
        badge : `${badge.value} Bonus: ${badge.bonus}`,
        color : color.value,
        ultimate : hasUltimate ? basics.ultimate : null,
        power : determinePower(skills.length, sign.modifier, alignment.modifier, color.modifier, hasUltimate, matchingStone, badge.bonus),
        matchingStone,
    };

    return ally;

}
export { decodeAlly };