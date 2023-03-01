import { useState, useEffect } from "react";
const members = ["Chris", "Polly", "Reena The Cat Monster"];
function App() {
  const [name, setName] = useState("");
  function onFormSubmit(event) {
    event.preventDefault();
    setName(event.target.username.value.trim());
  }

  useEffect(() => {
    console.log(name);
    // if (members.includes(name)) {
    //   alert(`Welcome to the treehouse, ${name}!`);
    // } else {
    //   alert(`You're not cool enough!`);
    // }
  }, [name]);

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <label>
          Enter your name:
          <input name="username" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {name && members.includes(name) && (
        <div>
          <h1>Welcome to the treehouse, {name}!</h1>
          <p>Our members are:</p>
          <ul>
            {members.map((member) => (
              <li>{member}</li>
            ))}
          </ul>
        </div>
      )}
      {name && !members.includes(name) && (
        <h1>Go away, {name}, you're drunk!</h1>
      )}
    </div>
  );
}

export default App;
