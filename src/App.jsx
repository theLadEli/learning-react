import React from 'react';
import './css/main.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
    {
        emoji: "😀",
        name: "grinning face"
    },
    {
        emoji: "🎉",
        name: "party popper"
    },
    {
        emoji: "💃",
        name: "woman dancing"
    }
]

function App() {
    const greeting = "greeting";
    const displayAction = true;

    return (
        <div className="container">
            <h1 id={greeting}>Hello world</h1>
            {displayAction && <p>I am writing JSX</p>}
            
            <ul>
                {emojis.map(emoji => (
                    <li key={emoji.name}>
                        <button onClick={displayEmojiName}>
                            <span role='img' aria-label={emoji.name} id={emoji.name}>
                                {emoji.emoji}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default App;