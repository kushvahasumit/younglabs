import { useState } from "react";

export default function GreetMe() {
    // manage state for name
    const [name, setName] = useState("");
    // manage state for greeting
    const [greeting,setGreeting] = useState("");
    console.log(name);

    // fetching api function
    const fetchApi = async ()=> {
      try {
        const getData = await fetch("http://localhost:5000/api/greet?name=" + name)
        const myData = await getData.json()
        console.log(myData);
        setGreeting(myData.message)
      } catch (error) {
        console.log(error);
        setGreeting("Something Went Wrong...!")
      }
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-500 to-blue-500 p-6">
      {/* Heading */}
      <h1 className="text-white text-3xl font-bold mb-4">YoungLabs</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800 w-80 flex flex-col items-center">
        {/* input field */}
        <input type="text" placeholder="Your Name..." value={name} onChange={(e) => setName(e.target.value)} className="border-b-2 border-stone-600 mb-3 rounded-lg p-2 w-full" />
        {/*submit button */}
        <button onClick={fetchApi} className="p-2 mb-2 from-fuchsia-600 to-purple-600 bg-gradient-to-l hover:cursor-pointer w-full rounded-lg text-white font-semibold text-lg">
          Get Greeting...?
        </button>
        {/* display area */}
        {greeting && (
            <p className="mt-4 text-lg text-stone-800 font-semibold">{greeting}</p>
        )}
      </div>
    </div>
  );
}
