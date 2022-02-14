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
          setup=" I got my daughter a fridge for her birthday."
          punchline="I can't wait to see her face light up when she opens it"
        />
        <Joke
          setup="How did the hacker escape the police?"
          punchline="He just ransomware!"
        />
        <Joke
          setup="Why don't pirates travel on mountain roads?"
          punchline="Scurvy"
        />
        <Joke
          setup="Why do bees stay in the hive in the winter?"
          punchline="Swarm."
        />
        <Joke
          setup="What's the best thing about Switzerland?"
          punchline="I don't know, but the flag is a big plus!"
        />
        <Joke punchline="A SQL query walks into a bar, walks up to two tables, and asks – Can I join you?" />
      </main>

      <Footer />
    </React.Fragment>
  );
}
