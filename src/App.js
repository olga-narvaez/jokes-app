import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Joke from "./Joke";
import "./style.css";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Joke
          setup="Do you know why Facebook went public?"
          punchline="They couldn’t figure out the privacy settings!"
        />
        <Joke
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Joke
          punchline="A computer is mightier than the pen, sword, and usually the programmer"
        />
        <Joke
          setup="Why did the programmer quit his job?"
          punchline="Because he didn't get arrays."
        />
        <Joke
          setup="0 is false and 1 is tre, right?"
          punchline="1"
        />
        <Joke
          setup="How do you tell HTML from HTML5?"
          punchline="- Try it out in Internet Explorer.If it doesn't work it's HTML5."
        />
        <Joke punchline="A SQL query walks into a bar, walks up to two tables, and asks – Can I join you?" />
      </main>

      <Footer />
    </React.Fragment>
  );
}
