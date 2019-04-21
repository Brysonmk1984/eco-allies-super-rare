import Web3 from "web3";
import contractJson from "../build/contracts/AllyCore.json";
import allyList from './allyList.json';
import { decodeAlly } from './crackDna';
import seedRandom from 'seedrandom';

const App = {
  web3: null,
  account: null,
  contract: null,

  getTokensFromBlockchain : function(dnaList){
    let arrayOfAllies = [];

    dnaList.forEach((a, i) =>{
      arrayOfAllies.push(this.generateLi(dnaList[i]));
    });

    const tokenList = document.getElementById('tokenList');
    
    arrayOfAllies.forEach((a) =>{
      tokenList.innerHTML += a;
    });


  },
  generateLi : function(dna){
    
    const ally = decodeAlly(dna);
    //console.log('ALLY DNA', dna, ally);
    let skillItems = '';
    
    if(ally.ultimate){
      skillItems += '<li class="ability-li"><em>'+ ally.ultimate +'</em></li>';
    }

    ally.skills.forEach((skill) =>{
      skillItems += '<li class="ability-li">'+ skill +'</li>';
    });
    
    const liTemplate = `
    <li class="token-li list-group-item">
    <div>
        <strong>${dna}</strong>
    </div>
    <div class="details-container">
      <strong class="token-details">Token Details: </strong>
      <div>
        <strong>${ally.basics.character}</strong> ${ally.color ? ` - <span>${ally.color} Variant</span>` : ''}
      </div>
      <div>
        <span>Series: ${ally.series}</span>
      </div>
      
      <div>
        <span>Alignment: ${ally.alignment}</span>
      </div>
      <div>
        <span>Sign: ${ally.sign}</span>
      </div>
      <div>
        <span>Badge: ${ally.badge}</span>
      </div>
      <div>
      <span>Power: ${ally.power}</span>
      </div>
      
      <ul class="ability-list">${skillItems}</ul>
    </div>
    </li>
  `;
  
    return liTemplate;
  },
  addAllyToBlockchain : function(){
    const tt = {
      chronoGuy : '00100099966699001000000',
      compostCreature : '00110099971499001000000',
      filterBot : '00120099979199001000000',
      theEmpath : '00130099927299001000000',
      boulderBro : '00140099900499001000000',
      naturalNinja : '00150099986699001000000',
      reuseBot : '00160099909099001000000',
      timberTerror : '00170099942299001000000',
      solarSprite : '00180099953399001000000',
      wildSpeaker : '00190099934099001000000'
    };

    const inputVal = document.getElementById("codeInput").value;
    let newAllyStr;
    if(inputVal){
      // Use the code placed in the input
      newAllyStr = inputVal;
    }else{
      // FIRST 3 DIGITS - Generate Series number
      const seriesStr = '001';
      // Generate random string to represent the new ally
      let rng = new seedRandom();
      // NEXT 11 Digits determine ally and attributes
      const num = Math.floor(rng()*100000000000);
      let strNum = num.toString();
      const uniqueBadge = '001';
      const cosmetic = '000';
      const reserveDigits = '000';
      let combinedStr = seriesStr + strNum + uniqueBadge + cosmetic + reserveDigits;
      newAllyStr = combinedStr;
    }

    if(newAllyStr.length === 23){
      const a = decodeAlly(newAllyStr);
      console.log('Ally to be added -', a.basics, a.series, a.skills, a.sign, a.alignment, a.badge, a.power, 'color -', a.color, 'ultimate -', a.ultimate );
  
      const confResult = confirm(`Are you sure you want to add ${newAllyStr} to the blockchain?`);
      if(confResult){console.log('acc', this.account);
        this.contract.methods.addToAllyArray(this.web3.utils.fromAscii(newAllyStr)).send({from: this.account, gasPrice : '4700000'})
        .then((data)=>{
          console.log('array length', data);
        });
      }
    }else{
      alert('Code not 23 characters!');
    }


  },
  addEventHandlers : function(){
    document.getElementById('add').addEventListener('click',() =>{
      this.addAllyToBlockchain();
    });
    document.getElementById('decode').addEventListener('click',() =>{
      const inputVal = document.getElementById("decodeInput").value;
      const ally = decodeAlly(inputVal);
      document.getElementById('dAlly').textContent = ally.basics.character;
      document.getElementById('dColor').textContent = ally.Color ? ally.color : 'NO COLOR';
      document.getElementById('dSeries').textContent = ally.series;
      document.getElementById('dBadge').textContent = ally.badge;
      document.getElementById('dSign').textContent = ally.sign;
      document.getElementById('dAlignment').textContent = ally.alignment;
      document.getElementById('dPower').textContent = ally.power;
      document.getElementById('dMatchingStone').textContent = `matching stone - ${ally.matchingStone}`;
      document.getElementById('dUltimate').textContent = ally.ultimate ? ally.ultimate : 'NO ULTIMATE';
      document.getElementById('dSkills').textContent = ally.skills;
    });
  },
  start: async function() {
    const { web3 } = this;
    this.addEventHandlers();
    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = contractJson.networks[networkId];
      this.contract = new web3.eth.Contract(
        contractJson.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
      //console.log('ACC',  this.account);

      this.contract.methods.getAllAllies().call({from : this.account})
      .then((allies) =>{
        //console.log('allies as byte32 hex', allies);
        const stringArray = allies.map((ally) =>{
          return web3.utils.toUtf8(ally);
        });
        //console.log('allies as string', stringArray);
        this.getTokensFromBlockchain(stringArray);
      });
         

    } catch (error) {
      console.error("Could not connect to contract or chain.", error);
    }
  },

};

window.App = App;

window.addEventListener("load", function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live",
    );
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(
      new Web3.providers.HttpProvider("http://127.0.0.1:9545"),
    );
 
  }

  App.start();
});
