// Contains FAQ section components

import React, {useState} from 'react';
import '../styles/QuestionList.css';


function QuestionList() {
  // set default state to questions and answers - set one card to open  
  const [faqs, setFaqs] = useState([
    {
      question: "What are NFTs?",
      answer: "NFT's - short for Non-Fungible Tokens, are assets stored on the blockchain the ownership and authenticity of which is publically verifiable.",
      open: true
    },
    {
      question: "How can I mint a Floatie Lurry?",
      answer: "First click on the 'Connect' button and sign the transaction with your Metamask. This first transaction will authenticate you. Next, click on the 'Mint' button when you are ready to mint a Floatie Lurry. A Metamask popup will appear prompting you to confirm the transaction. Once you are ready to proceed, click approve. The Floatie Lurry will be kept in your Metamask wallet and can be seen on the OpenSea testnet marketplace.",
      open: false
    },
    {
      question: "What can I do with my Floatie Lurry?",
      answer: "Simply put, anything. However if you're looking for a more, as Lurry would say (or quack) technical answer - once minted, you retain full ownership rights over your Floatie Lurry. Go ahead and talk to it about all those bugs you found in your code or show it off to your programming buddies!",
      open: false
    }
  ]);

return (
  <>

  <div className="faq-section">
    <h1>FAQ Section </h1>
    <div className="faqs-container">
      {faqs.map((faq, index) => (
        <div>
       {faq.question}<br/>
       </div>
      ))}
    </div>
  </div>
  <img src="/images/overlayv4.png" alt="chalkboard overlay" className="overlay"/>
  </>
)
}

export default QuestionList;