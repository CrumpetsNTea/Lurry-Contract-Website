import $ from 'jquery';
import TruffleContract from "@truffle/contract";
import {web3, Web3} from "web3";



const ICO = () => {
  const App = { 
    web3Provider: null,
    contracts: {},
    account: '0x0',
    tokenPrice: 1000000000000000, // form 2_deploy_contracts migration
    tokensSold: 0, // keep track of # of tokens sold 
    tokensAvailable: 750000,
  
  
  
    init: function(){
      console.log("App initialized...")
      return App.initWeb3();
    },
     
    initWeb3: function(){
      if(typeof web3 !== 'undefined'){
        // if a web3 instance is already provided by Meta Mask
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
      } else {
        // specify default instance if no web3 instance provided
        // same host and port as ganache
        App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        web3 = new Web3(App.web3Provider);
      }
     
      return App.initContracts();
    },
  
    initContracts: function(){
      // don't have to specify /build b/c its referenced in the bs-config.json
      $.getJSON("LurryTokenSale.json", function(lurryTokenSale){
        // can use web3, but truffle interacts well w/ truffle framework 
        // truffle understands entire JSON file 
        App.contracts.lurryTokenSale = TruffleContract(lurryTokenSale);
        App.contracts.lurryTokenSale.setProvider(App.web3Provider);
        // get our contract and connect to it - that web3 knows about 
        App.contracts.lurryTokenSale.deployed().then(function(lurryTokenSale){
          console.log("Lurry Token Sale Address:", lurryTokenSale.address);
        });
        
      }).done(function(){
    
          $.getJSON("LurryToken.json", function(LurryToken){
            App.contracts.LurryToken = TruffleContract(LurryToken);
            App.contracts.LurryToken.setProvider(App.web3Provider);
            // get our contract and connect to it - that web3 knows about 
            App.contracts.LurryToken.deployed().then(function(LurryToken){
              console.log("Lurry Token Address:", LurryToken.address);
          });
  
          // listen for events - allows page to refresh when number of tokens sold increases
          App.listenForEvents();
          return App.render();
        });
      });
    },
  
  // listen for events emitted from the contract 
    listenForEvents: function(){
      App.contracts.lurryTokenSale.deployed().then(function(instance){
        instance.Sell({}, {
          fromBlock: 0,
          toBlock: 'latest',
        }).watch(function(error, event){
          console.log("event triggered", event);
          // when the sell even is triggered (upon successful sale) - re-render the page
          App.render();
  
        })
      })
  
    },
  
  
  
  // querying for the account address on the DOM 
    render: function(){
  
  
      // load account data
      web3.eth.getCoinbase(function(err, account){
        if(err === null) {
          App.account = account;
          console.log("account", account);
          $('#accountAddress').html("Logged in as:" + account);
        }
      })
  
      // fetch contracts data - similar to async pattern used in tests
      // load token sale contract
      App.contracts.lurryTokenSale.deployed().then(function(instance){
        let lurryTokenSaleInstance = instance;
        return lurryTokenSaleInstance.tokenPrice();
      }).then(function(tokenPrice){
        App.tokenPrice = tokenPrice;
        // put token price in the DOM - default price in wei
        // convert price to eth using web3 lib method .fromWei (price, unit to convert to)
        // $('.token-price').html(web3.fromWei(App.tokenPrice, "ether").toNumber());
        // let lurryTokenSaleInstance = instance;
        // let lurryToken = lurryTokenSaleInstance.tokensSold();
        // return lurryToken
  
      }).then(function(tokensSold){
        // set tokensSold to value from contract
        App.tokensSold = tokensSold.toNumber();
        // tokenSold.toNumber();
        // update tokens sold
        $('.tokens-sold').html(App.tokensSold);
        // update tokens available for sale 
        $('.tokens-available').html(App.tokensAvailable);
        // create % 
        let progressPercent = (Math.ceil(App.tokensSold) / App.tokensAvailable) * 100;
        // give loader values - css
        $('#progress').css('width', progressPercent + '%');
  
  
        // you have "x" number of tokens - load token contract to check the bal
        App.contracts.LurryToken.deployed().then(function(instance){
          let lurryTokenInstance = instance;
          return lurryTokenInstance.balanceOf(App.account);
        }).then(function(balance){
          $('.lurry-balance').html(balance.toNumber());
        })
      });
    },
  
  
  
    buyTokens: function(){
      let numberOfTokens = $('#numberOfTokens').val();
      App.contracts.lurryTokenSale.deployed().then(function(instance){
        return instance.buyTokens(numberOfTokens, {
          from: App.account,
          value: numberOfTokens * App.tokenPrice,
          gas: 500000 // gas limit 
        });
      }).then(function(result){
        console.log("Tokens bought...")
        $('form').trigger('reset') // reset the num of tokens 
      });
    }
  
  }
  
  $(function(){
    $(window).on('load', function(){
      App.init();
  
    })
  
  });


  return (
<div className="container" style={{width: "650px"}}>
<div className="row">
  <div className="col-lg-12">
    <h1 className="text-center">
      Lurry Token ICO Sale
    </h1>
    <hr />
    <br/>
    <br/>
  </div>
  <div id="loader">
    <div id="content" className="text-center">
    <p><h2>Welcome to the LURRY token sale!</h2><br/>
     <b>Token price is:</b>  <span className="token-price"></span> ETH <br/> <b>You currently have:</b> <span className="lurry-balance"></span>&nbsp;LURRY
    </p>
    <br/>
    {/* <form onSubmit={App.buyTokens}> */}
      <div className="form-group">
        <div className="input-group">
          <input id="numberOfTokens" className="form-control input-lg" type="number" name="number" value="1" min="1" pattern="[0-9]">
        </input>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary btn-lg">Buy $LURRY</button>
        </span>
        </div>
      </div>
    {/* </form> */}
    <br />
    <div className="progress">
      <div id="progress" className="progress-bar progress-bar-striped active" aria-valuemin="0" aria-valuemax="100">
      </div>
    </div>
    <br/>
    <p><span className="tokens-sold"></span> / <span className="tokens-available"></span> tokens sold </p>
    <hr />
    <p id="accountAddress"></p>
  </div>
</div>
</div>
</div>


  )
}

export default ICO;


