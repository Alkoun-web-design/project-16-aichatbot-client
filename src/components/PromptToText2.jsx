import React, {useState, useRef} from "react";
import { CopyIcon, EditIcon, GenerateIcon, } from "./Icons"
import Output from "./Output";
import Input from "./Input";
// import {micromark} from 'micromark'

export default function PromptToText2() {

  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const textareaRef = useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  }

  //Create Copy and Edit functions
  //Create Chat History
  //Parse MDX
  //Create mechanism for chatflow - inputs and outputs recorded
  //Edit input to jumpt to nect line, output to scale length to text length

  // const copyOutput = () => {
  //   console.log('copied')
  // }

  // const editInput = () => {
  //   console.log('edited')
  // }

  const promptingMistralAI = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setOutput('');

    try {
      const response = await fetch('http://localhost:4000/api/mistral', {
        method: 'POST', 
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({ data: inputValue }),      
      });
      
      setInputValue('')

      if(!response.ok) 
        throw new Error('Failed to submit');
        
      const parsedData = await response.json();
      setOutput(parsedData.content);
      // if (response.body) {
      //     const reader = response.body.getReader();
      //     const decoder = new TextDecoder();
      //     let done = false;
      
      //   while (!done) {
      //     const { value, done: streamDone } = await reader.read();
      //     done = streamDone;
      //     const chunk = decoder.decode(value, { stream: true });
      //     setOutput(prev => prev + chunk);
      //     // Auto-scroll textarea
      //     textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
      //   }
      // } else {
      //     // Fallback for non-streaming
      //     const data = await response.json();
      //     setOutput(data.reply);
      //   }
      } catch (err) {
        setOutput(`Error: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

  return (
    <section className="bg-gray-100 py-20 lg:py-[120px] dark:bg-dark h-screen w-screen">
      <div className="container">
        <div className="mx-auto w-full max-w-[970px] rounded-2xl bg-white p-8 dark:bg-dark-2">

          <Output
            textareaReference={textareaRef}
            output={output}
          />
          
          <Input
            handleInputChange={handleInputChange}
            promptingMistralAI={promptingMistralAI}
            isLoading={isLoading}
          />

        </div>
      </div>
    </section>
  );
}
