// Contains FAQ section components

import React, {useState} from 'react';
import '../styles/QuestionList.css';
import FAQ from './FAQ.jsx';
import overlayv4 from '../images/overlayv4.png';


function QuestionList() {
  // set default state to questions and answers - set one card to open  
  const [faqs, setFaqs] = useState([
    {
      question: "What are NFTs?",
      answer: "Immutable assets that live on the blockchain.",
      open: true
    },
    {
      question: "How can I mint a Floatie Lurry?",
      answer: "Connect with metamask and click approve to mint a Floatie Lurry",
      open: false
    },
    {
      question: "What can I do with my Floatie Lurry?",
      answer: "Anything!",
      open: false
    },
    {
      question: "What is Metamask?",
      answer: "Metamask is a software wallet that lives on your chrome browser.",
      open: false
    },
    {
      question: "What is the mint price for a Floatie Lurry?",
      answer: "Just for today - it's free.",
      open: false
    }
  ]);

return (
  <div className="faq-container">

    <h1>FAQs</h1>
    <div className="faqs">
      {faqs.map((faq, i) => (
        <FAQ faq={faq} index={i}/>
      ))}
    </div>
  </div>
  );
}

export default QuestionList;