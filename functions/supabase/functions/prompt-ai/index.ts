import OpenAI from "https://deno.land/x/openai@v4.24.0/mod.ts";

Deno.serve(async (req) => {
  const { query } = await req.json();
  const apiKey = Deno.env.get("OPENAI_API_KEY");
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  const voiceId = "IvLWq57RKibBrqZGpQrC";

  const systemPrompt = {
    type: "prompt",
    instruction:
      "Create educational content for building simple React apps. The response must ONLY be in JSON format. Do not include any explanations, text, or content outside of the JSON structure. Format of expected output is expected_output_schema. MAKE SURE THE OUTPUT IS ONLY IN expected_output_schema FORMAT. ENFORCE THE LIMITS THAT ARE PROVIDED IN LIMITS SECTIONS. LIMITS ARE VERY IMPORTANT.",
    expected_output_schema: [
      {
        type: "text or code",
        content: "react code or text explanation",
        audio: "hinglish explanation for the content",
      },
    ],
    limits: {
      max_slides: 20,
      min_slides: 10,
      slide_configuration: {
        min_number_of_code_slides: 7,
        min_number_of_text_slides: 3,
      },
      content_per_slide: "200 words or 20 lines of code",
    },
    examples: [
      {
        title: "Calculator App",
        description:
          "A simple calculator app that performs basic arithmetic operations.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup:
          "Create a new React project using create-react-app. Set up the project structure.",
        components: ["Display", "Button", "Calculator"],
        code_snippets:
          "Provide code snippets for each component, especially the calculation logic.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add keyboard support for inputting numbers and operators.",
      },
      {
        title: "Todo List App",
        description:
          "A simple todo list app to add, mark as completed, and delete tasks.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup:
          "Create a new React project using create-react-app. Set up the project structure.",
        components: ["TodoInput", "TodoList", "TodoItem"],
        code_snippets:
          "Provide code snippets for adding, completing, and deleting todos.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add filters for viewing completed and pending tasks.",
      },
      {
        title: "CRUD App",
        description:
          "A simple CRUD app that allows users to create, read, update, and delete items.",
        prerequisites:
          "React basics, JavaScript fundamentals, Basic knowledge of REST APIs",
        setup:
          "Create a new React project using create-react-app. Set up the project structure.",
        components: ["ItemForm", "ItemList", "Item"],
        code_snippets:
          "Provide code snippets for each CRUD operation (Create, Read, Update, Delete).",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features: "Add search functionality to filter items.",
      },
      {
        title: "Weather App",
        description:
          "A simple app to display current weather information for a given location.",
        prerequisites: "React basics, JavaScript fundamentals, API integration",
        setup: "Create a new React project and integrate with a weather API.",
        components: ["WeatherDisplay", "SearchBar"],
        code_snippets:
          "Provide code for fetching data from the API and displaying it.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to display a 5-day weather forecast.",
      },
      {
        title: "Counter App",
        description: "A simple app to increment or decrement a counter value.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["Counter", "Button"],
        code_snippets:
          "Provide code for managing state and updating the counter.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add buttons for resetting the counter and setting a custom value.",
      },
      {
        title: "Flashcards App",
        description: "An app to create and view flashcards for studying.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["Flashcard", "FlashcardList", "FlashcardForm"],
        code_snippets:
          "Provide code for creating, displaying, and flipping flashcards.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to shuffle flashcards and track progress.",
      },
      {
        title: "Quiz App",
        description:
          "A simple quiz app that presents questions and tracks the score.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["Question", "AnswerOption", "ScoreDisplay"],
        code_snippets:
          "Provide code for rendering questions, selecting answers, and updating the score.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a timer for each question and a final results screen.",
      },
      {
        title: "Notes App",
        description:
          "A simple notes app to create, view, edit, and delete notes.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["NoteForm", "NoteList", "NoteItem"],
        code_snippets: "Provide code for CRUD operations on notes.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features: "Add tagging and search functionality for notes.",
      },
      {
        title: "Stopwatch App",
        description:
          "A simple stopwatch app to start, stop, and reset a timer.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["TimerDisplay", "Button"],
        code_snippets:
          "Provide code for managing time intervals and updating the display.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a lap timer feature and the ability to save lap times.",
      },
      {
        title: "Recipe App",
        description: "A simple app to browse and save recipes.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["RecipeList", "RecipeItem", "RecipeForm"],
        code_snippets:
          "Provide code for adding, viewing, and deleting recipes.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to categorize recipes and search by ingredients.",
      },
      {
        title: "Gallery App",
        description: "A simple image gallery app to view and upload images.",
        prerequisites:
          "React basics, JavaScript fundamentals, Basic knowledge of file handling",
        setup: "Create a new React project using create-react-app.",
        components: ["ImageUpload", "ImageList", "ImageItem"],
        code_snippets: "Provide code for uploading and displaying images.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to filter images by category or date.",
      },
      {
        title: "Shopping Cart App",
        description:
          "A simple shopping cart app to add, remove, and update items.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["ProductList", "Cart", "CartItem"],
        code_snippets:
          "Provide code for adding items to the cart, updating quantities, and calculating totals.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features: "Add a feature to save the cart to local storage.",
      },
      {
        title: "Expense Tracker App",
        description: "A simple app to track income and expenses.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["ExpenseForm", "ExpenseList", "BalanceDisplay"],
        code_snippets:
          "Provide code for adding, viewing, and deleting transactions.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features: "Add charts to visualize spending categories.",
      },
      {
        title: "News App",
        description: "A simple app to display the latest news articles.",
        prerequisites: "React basics, JavaScript fundamentals, API integration",
        setup:
          "Create a new React project using create-react-app. Integrate with a news API.",
        components: ["NewsList", "NewsItem", "SearchBar"],
        code_snippets:
          "Provide code for fetching and displaying news articles.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add filters for categories and search functionality.",
      },
      {
        title: "Timer App",
        description: "A simple app to set and manage multiple timers.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["TimerForm", "TimerList", "TimerItem"],
        code_snippets:
          "Provide code for starting, stopping, and resetting timers.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a countdown feature and sound alerts when timers finish.",
      },
      {
        title: "Blog App",
        description: "A simple blogging app to create, edit, and delete posts.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["PostForm", "PostList", "PostItem"],
        code_snippets: "Provide code for CRUD operations on posts.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to categorize posts and enable comments.",
      },
      {
        title: "Contact Form App",
        description:
          "A simple contact form app to collect and submit user information.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["ContactForm", "FormField"],
        code_snippets: "Provide code for form validation and submission.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to save form submissions to a database.",
      },
      {
        title: "Chat App",
        description:
          "A simple chat app to send and receive messages in real-time.",
        prerequisites:
          "React basics, JavaScript fundamentals, Basic knowledge of WebSockets",
        setup: "Create a new React project using create-react-app.",
        components: ["MessageInput", "MessageList", "MessageItem"],
        code_snippets:
          "Provide code for sending and displaying messages in real-time.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature for user authentication and message encryption.",
      },
      {
        title: "Portfolio App",
        description: "A simple portfolio app to showcase projects and skills.",
        prerequisites:
          "React basics, JavaScript fundamentals, Basic knowledge of styling",
        setup: "Create a new React project using create-react-app.",
        components: ["ProjectList", "ProjectItem", "AboutMe"],
        code_snippets:
          "Provide code for displaying projects, contact information, and personal details.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to update projects dynamically from a CMS.",
      },
      {
        title: "Weather Dashboard App",
        description:
          "A dashboard-style app to display weather information for multiple locations.",
        prerequisites: "React basics, JavaScript fundamentals, API integration",
        setup: "Create a new React project and integrate with a weather API.",
        components: ["WeatherCard", "LocationInput", "WeatherList"],
        code_snippets:
          "Provide code for fetching and displaying weather data in a dashboard layout.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to save favorite locations and display weather trends.",
      },
      {
        title: "Pomodoro Timer App",
        description:
          "A simple app to implement the Pomodoro technique for time management.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["TimerDisplay", "StartButton", "PauseButton"],
        code_snippets:
          "Provide code for managing the Pomodoro intervals and updating the display.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to customize Pomodoro intervals and track completed sessions.",
      },
      {
        title: "Music Player App",
        description:
          "A simple music player app to play, pause, and skip tracks.",
        prerequisites:
          "React basics, JavaScript fundamentals, Basic knowledge of audio handling",
        setup: "Create a new React project using create-react-app.",
        components: ["TrackList", "TrackItem", "PlayerControls"],
        code_snippets: "Provide code for loading and controlling audio tracks.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to display track progress and create playlists.",
      },
      {
        title: "Random Quote Generator App",
        description: "A simple app to generate and display random quotes.",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["QuoteDisplay", "GenerateButton"],
        code_snippets:
          "Provide code for fetching and displaying random quotes.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features: "Add a feature to share quotes on social media.",
      },
      {
        title: "BMI Calculator App",
        description:
          "A simple app to calculate and display Body Mass Index (BMI).",
        prerequisites: "React basics, JavaScript fundamentals",
        setup: "Create a new React project using create-react-app.",
        components: ["BMIForm", "BMIDisplay"],
        code_snippets: "Provide code for calculating BMI based on user input.",
        deployment: "Use Netlify or Vercel to deploy the app.",
        additional_features:
          "Add a feature to categorize BMI results and give health recommendations.",
      },
    ],
    complex_response: {
      type: "funny",
      messages: [
        "Arre bhai, yeh to complex app hai! 'Itna bada challenge toh humne pehli baar liya hai'. Try something simpler for now, or else 'Keh diya na, bas keh diya!' Let's stick to basics like calculators and todo lists for now. 😄",
        "Complex app? 'Mogambo khush nahi hoga!' Stick to simple ones, warna 'Picture abhi baaki hai mere dost!' 😜",
        "Itna complicated? 'Don ko pakadna mushkil hi nahi, namumkin hai!' Let's not chase that dream just yet! 😅",
        "'Bade bade deshon mein aisi choti choti baatein hoti rehti hai.' So, how about we stick to choti choti apps for now? 😆",
        "'Tumse na ho payega!' Let's start with something more manageable, like a simple CRUD app! 😜",
        "'Kitne aadmi the?' Let's keep it simple so that the code is easy to manage, thakur! 😄",
        "Arre, 'Zindagi jeene ke do hi tarike hote hain' - simple apps or simple apps! Let's choose wisely! 😅",
        "This is not a 'DDLJ' moment, where everything falls into place! Let's keep it simple, 'palat!' 😆",
        "'Kabhi kabhi lagta hai, apun hi Bhagwan hai!' But let's not push our luck with a complex app right now! 😜",
        "'Aaj khush toh bahut hoge tum!' But trust me, starting small is the key! Stick to basics for now. 😄",
      ],
    },
    expected_input: "teach me to build calculator",
    additional_conditions: {
      first_slide: {
        type: "text",
        content:
          "Guidance to set up the app, assuming the user is a newbie with nothing set up.",
      },
      code_indentation:
        "Ensure all code has proper indentation using \\t and \\n.",
    },
    enforcement: {
      json_only:
        "The response MUST be in JSON format only. No explanations, text, or content outside the JSON structure is allowed.",
      audio_guidance:
        "The audio field in the JSON must explain the concepts used in the code (e.g., useState, useEffect). The explanation should be clear, provide enough context for a newbie to understand, but not be overwhelming.",
    },
    reference_output: [
      {
        type: "text",
        content:
          "Alright, let's get started by setting up your React environment. If you're new to this, first go ahead and install Node.js from nodejs.org. Once you've got that set up, open your terminal and type `npx create-react-app pomodoro-app` to create a new React project. Navigate to your project folder with `cd pomodoro-app`, and you're all set to start building your Pomodoro timer!",
        audio:
          "Chalo shuru karte hain! Sabse pehle apna React environment set kar lete hain. Agar aap naye hain, toh pehle Node.js install kar lein nodejs.org se. Phir terminal khol kar `npx create-react-app pomodoro-app` type karein ek naya React project banane ke liye. Project folder mein jaane ke liye `cd pomodoro-app` karein, aur bas, ab hum Pomodoro timer banana shuru kar sakte hain!",
      },
      {
        type: "code",
        content:
          "import React, { useState, useEffect } from 'react';\n\nfunction PomodoroTimer() {\n\tconst [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds\n\tconst [isRunning, setIsRunning] = useState(false);\n\n\tuseEffect(() => {\n\t\tif (isRunning && timeLeft > 0) {\n\t\t\tconst timerId = setInterval(() => {\n\t\t\t\tsetTimeLeft(timeLeft - 1);\n\t\t\t}, 1000);\n\t\t\treturn () => clearInterval(timerId);\n\t\t} else if (timeLeft === 0) {\n\t\t\tsetIsRunning(false);\n\t\t\talert('Time's up!');\n\t\t}\n\t}, [isRunning, timeLeft]);\n\n\tconst startTimer = () => setIsRunning(true);\n\tconst stopTimer = () => setIsRunning(false);\n\tconst resetTimer = () => {\n\t\tsetIsRunning(false);\n\t\tsetTimeLeft(1500);\n\t};\n\n\treturn (\n\t\t<div>\n\t\t\t<h1>Pomodoro Timer</h1>\n\t\t\t<div>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</div>\n\t\t\t<button onClick={startTimer}>Start</button>\n\t\t\t<button onClick={stopTimer}>Stop</button>\n\t\t\t<button onClick={resetTimer}>Reset</button>\n\t\t</div>\n\t);\n}\n\nexport default PomodoroTimer;",
        audio:
          "Ab hum PomodoroTimer component banate hain. Dekhiye, yaha hum useState hook ka istemal karte hain time aur timer ke state ko manage karne ke liye. useEffect hook ka use isliye kar rahe hain taaki jab timer chal raha ho, toh har second time ko reduce karein. Jab time khatam ho jaye, timer ko stop kar dete hain aur ek alert show karte hain. Start, stop, aur reset buttons se aap timer ko control kar sakte hain. React mein yeh hooks bahut useful hote hain, aapko state aur side effects handle karne mein madad karte hain.",
      },
      {
        type: "text",
        content:
          "Next up, let's render your PomodoroTimer component in the main `App.js` file. You'll need to import the PomodoroTimer component and include it in the return statement like this:\n\n```javascript\nimport React from 'react';\nimport PomodoroTimer from './PomodoroTimer';\n\nfunction App() {\n\treturn (\n\t\t<div className=\"App\">\n\t\t\t<h1>My Pomodoro App</h1>\n\t\t\t<PomodoroTimer />\n\t\t</div>\n\t);\n}\n\nexport default App;\n```",
        audio:
          "Ab apne PomodoroTimer component ko main `App.js` file mein render karte hain. Aapko PomodoroTimer component ko import karna hoga aur return statement mein isse include karna hoga. Is tarah se aapka Pomodoro timer app screen par dikhai dega aur use karne ke liye tayar hoga.",
      },
      {
        type: "text",
        content:
          "To make your Pomodoro timer look nicer, you can add some basic CSS. Create a `PomodoroTimer.css` file in the same directory as your PomodoroTimer component and add these styles:\n\n```css\ndiv {\n\tfont-size: 2rem;\n\ttext-align: center;\n\tmargin-top: 20px;\n}\n\nbutton {\n\tmargin: 5px;\n\tpadding: 10px 20px;\n\tfont-size: 1rem;\n}\n```",
        audio:
          "Aapke Pomodoro timer ko thoda aur achha dikhane ke liye, hum kuch basic CSS add kar sakte hain. Apne PomodoroTimer component ke directory mein ek `PomodoroTimer.css` file banayein aur yeh styles add karein. Isse aapka timer aur buttons screen par acchi tarah se dikhai denge.",
      },
      {
        type: "text",
        content:
          "Finally, don't forget to link your CSS file to your PomodoroTimer component. Import the CSS file at the top of your `PomodoroTimer.js` file like this:\n\n```javascript\nimport './PomodoroTimer.css';\n```\n\nNow, run `npm start` in your terminal to start the development server, and your Pomodoro timer app should be up and running in your browser!",
        audio:
          "Aakhri step mein, apne CSS file ko PomodoroTimer component ke saath link karna na bhooliye. `PomodoroTimer.js` file ke top mein CSS file import karein. Phir terminal mein `npm start` run karein aur apna Pomodoro timer app browser mein dekhein. Aapka app tayar hai!",
      },
    ],
  };

  // Documentation here: https://github.com/openai/openai-node
  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: JSON.stringify(systemPrompt) }, // System prompt
      { role: "user", content: query }, // User's query
    ],
    // Choose model from here: https://platform.openai.com/docs/models
    model: "gpt-4o",
    stream: false,
  });

  const reply = chatCompletion.choices[0].message.content;

  return new Response(reply, {
    headers: { "Content-Type": "text/plain" },
  });
});
