// Contains FAQ section components

import React, {useState} from 'react';
import '../styles/QuestionList.css';
import FAQ from './FAQ.jsx';


function QuestionList() {
  // set default state to questions and answers - set one card to open  
  const [faqs, setFaqs] = useState([
    {
      question: "What is Metamask?",
      answer: "Metamask is crypto wallet available as a Chrome browser extension. It is free to use and supports both mainnet (public blockchain), as well as testnet (testing environment) accounts.",
      open: false
    },
    {
      question: "What are NFTs?",
      answer: "NFTs (Non-Fungible Tokens) are digital assets which live on the blockchain.",
      open: false
    },
    {
      question: "How can I mint an NFT?",
      answer: "Connect with metamask and click 'Approve' to mint a Floatie Lurry. For a demonstration, check out our step-by-step guide in the section below!",
      open: false
    },
    {
      question: "What can I do with my Floatie Lurry?",
      answer: "Absolutely anything you want! Post-mint, as long as the NFT remains in your wallet, you are free to use it in any way you wish!",
      open: false
    },
    {
      question: "How do can I access the Secret Lurry Society discord?",
      answer: "To access the discord, simply click on the discord social icon (located in the top, right corner) and authenticate yourself using your MetaMask account once prompted.",
      open: false
    }
  ]);


  const toggleFAQ = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (index === i) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

return (
  <div className="faq-container">

    <h1>FAQs</h1>
    <div className="faqs">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
      ))}
    </div>
  </div>
  );
}

export default QuestionList;
