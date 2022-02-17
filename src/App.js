import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Joke from "./Joke";
import jokesData from "./jokesData";
import "./style.css";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    console.log(joke.punchline);
    return (
      <Joke setup={joke.setup} 
      punchline={joke.punchline} 
      isPun={joke.isPun} 
      upvotes={joke.upvotes}
      downvotes={joke.downvotes}  
      />
    );
  });
  console.log(jokeElements);
  return (
    <React.Fragment>
      <Header />
      <main>{jokeElements}</main>
      <Footer />
    </React.Fragment>
  );
}
{
  /* <Joke
setup="Do you know why Facebook went public?"
punchline="They couldn’t figure out the privacy settings!"
isPun={true}
upvotes={10}
downvotes={2}
comments={[{author: '', body:"", title: ""}]}
/>
<Joke
setup="How did the hacker escape the police?"
punchline="He just ransomware!"
isPun={false}
upvotes={5}
downvotes={3}
/>
<Joke
punchline="A computer is mightier than the pen, sword, and usually the programmer"
isPun={true}
upvotes={7}
downvotes={8}
/>
<Joke
setup="Why did the programmer quit his job?"
punchline="Because he didn't get arrays."
isPun={false}
upvotes={6}
downvotes={2}
/>
<Joke
setup="0 is false and 1 is tre, right?"
punchline="1"
isPun={false}
upvotes={2}
downvotes={2}
/>
<Joke
setup="How do you tell HTML from HTML5?"
punchline="- Try it out in Internet Explorer.If it doesn't work it's HTML5."
isPun={false}
upvotes={12}
downvotes={5}
/>
<Joke
punchline="A SQL query walks into a bar, walks up to two tables, and asks – Can I join you?"
isPun={true}
upvotes={4}
downvotes={2}
/> */
}
