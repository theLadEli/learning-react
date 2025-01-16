import Sammy from '../img/sammy.jpg'
import "../css/main.css"

export default function Welcome() {
    return (
        <>
            <div className="wrapper">
                <h1>Welcome to the App</h1>
                <p>This is a basic React.js application.</p>
                <img src={Sammy} alt="Sammy image" width={200} height={200} />
            </div>
        </>
    )
}