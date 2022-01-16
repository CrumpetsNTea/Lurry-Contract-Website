// Contains FAQ section components

import React, {useState} from 'react';


function QuestionList() {

  const [faqs, setFaqs] = useState([
    {
      question: "What are NFTs?",
      answer: "NFT's - short for Non-Fungible Tokens, are assets stored on the blockchain the ownership and authenticity of which is publically verifiable.",
      open: true
    },
    {
      question: "How can I mint a Floatie Lurry?",
      answer: "video",
      open: false
    },
    {
      question: "What can I do with my Floatie Lurry?",
      answer: "Simply put, anything. However if you're looking for a more, as Lurry would say (or quack) technical answer - once minted, you retain full ownership rights over your Floatie Lurry. Go ahead and talk to it about all those bugs you found in your code or show it off to your friends and family!",
      open: false
    }
  ]);

return (
  <div>
    <h1>FAQ Section </h1>
    <div className="faqs-container">
      {faqs.map((faq, i) => (
        <div>{faqs.question}<br></br>
        </div>
      ))}
    </div>

  </div>
)
}

export default QuestionList;