## Getting Started
Install all the dependencies of the application using "npm install" command
Run the development server:
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br/>

## Features
E-commerce shopping cart that fetch products from API and add them to the cart.<br/>
Initialized a centralized storage Redux for store management.<br/>
<b>Tech used:<b> Next.js, Redux, TailwindCSS, Git <br/>
<b>Npm Packages:<b> Toastify, react-icons <br/>
Challenges: 
 - Setting up the Redux store in Next.js as I am new to Next.js. Next.js has server components by default and settting up the redux is based on client side. That's why I learned to setup the redux in Next.js.
 - Implementation of local storage. It was working perfectly in the application but There was the issue that Next.js components are server-rendered by default. Components are pre-rendered into HTML on the server before being sent to the client. The window object is not available on the server.
 - Making Slider responsve
<br/>
