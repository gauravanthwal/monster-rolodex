import gify from '../../images/gify.png'
import git from '../../images/github.png'
const data = [
  {
    img: "https://gaurav-anthwal.netlify.app/images/blogify.png",
    title: "Bloging Site",
    desc: "A bloging website , users can read all articles without submitting their details and only registerd users can post a blog. users will be able to update their posts.",
    responsive: true,
    git: "https://github.com/gauravanthwal/node-Bloging-site2-v-1.0",
    url: "https://blogify-v-1.herokuapp.com/",
  },
  {
    img: git,
    title: "Github user finder App",
    desc: "This app searchs github users by their username. You can see all the public information about user like public repos and more. Built with Reactjs.",
    responsive: true,
    git: "https://github.com/gauravanthwal/react-github-profile-finder",
    url: "https://github-member-search.netlify.app/",
  },
  {
    img: "https://gaurav-anthwal.netlify.app/images/notes.png",
    title: "Note Keeping website",
    desc: "Note keeping website helps you to keep your Personal notes , only authenticated user can see or modify their notes.",
    responsive: true,
    git: "https://github.com/gauravanthwal/nodejs-noteKeeper-v-01",
    url: "https://notekeeper1.herokuapp.com/",
  },
  {
    img: "https://gaurav-anthwal.netlify.app/images/chat.png",
    title: "Chat App",
    desc: "Build with socket.io library a chat app can connect more than 2 user in a same chat room , users can communicate with each other in a chat room.",
    responsive: false,
    git: "https://github.com/gauravanthwal/chat-app-socket.io-1.0",
    url: "https://hangout-with-friends.herokuapp.com/",
  },
  {
    img: gify,
    title: "Gifs finder",
    desc: "This is a gif finder website where you can find any gif file just typing the category name of gif, Built with Reactjs. using gipphy api.",
    responsive: false,
    git: "https://github.com/gauravanthwal/react-gifs-website",
    url: "https://gifs-generator.netlify.app/",
  },
  {
    img: "https://gaurav-anthwal.netlify.app/images/weather.png",
    title: "Weather app",
    desc: "A simple weather app build with openweathermap api, which tell the current weather of your search result.",
    responsive: true,
    git: "no",
    url: "https://mausam-kendra.herokuapp.com/",
  },
];

export default data;