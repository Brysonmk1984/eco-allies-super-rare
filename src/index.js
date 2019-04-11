import Web3 from "web3";
import contractJson from "../build/contracts/AllyCore.json";
import allyList from './allyList.json';
import { decodeAlly } from './crackDna';
const App = {
  web3: null,
  account: null,
  contract: null,

  getTokensFromBlockchain : function(dnaList){

    const dummyList = ['6483902865410298'];
    let arrayOfAllies = [];
    
    //arrayOfAllies.push(this.generateLi(dnaList[0], '11/13/2019'));

    dnaList.forEach((a, i) =>{
      arrayOfAllies.push(this.generateLi(dnaList[i], '11/13/2019'));
    });

    const tokenList = document.getElementById('tokenList');
    
    arrayOfAllies.forEach((a) =>{
      tokenList.innerHTML += a;
    });


  },
  generateLi : function(dna, date){
    
    const ally = decodeAlly(dna);
    console.log('ALLY DNA', dna, ally);
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
        <strong>${date}</strong> - <strong>${dna}</strong>
    </div>
    <div class="details-container">
      <strong class="token-details">Token Details: </strong>
      <span>${ally.basics.character}</span> ${ally.color ? ' - <span>${ally.color}</span>' : ''}
      <ul class="ability-list">${skillItems}</ul>
    </div>
    </li>
  `;
  
    return liTemplate;
  },
  addAllyToBlockchain : function(){
    this.contract.methods.addToAllyArray(this.web3.utils.fromAscii("001151918583458400000000")).send({from: this.account, gasPrice : '4700000'})
    .then((data)=>{
      console.log('array length', data);

    });
  },
  addEventHandlers : function(){
    document.getElementById('add').addEventListener('click',() =>{
      this.addAllyToBlockchain("6483902865410298");
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
      console.log('ACC',  this.account);

      this.contract.methods.getAllAllies().call({from : this.account})
      .then((allies) =>{
        console.log('allies as byte32 hex', allies);
        const stringArray = allies.map((ally) =>{
          return web3.utils.toUtf8(ally);
        });
        console.log('allies as string', stringArray);
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
