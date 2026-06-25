const portfolioItems = [
    {
      title: 'Tweetr - Bird Soundscapes',
      synopsis: 'Listen to real birds from different parts of the world using eBird and Xeno-Canto',
      description: `
      This tool aims to be a fun way to explore areas where birds have been seen and trakced across the US and Canada.

Featuring data from eBird, Xeno-Canto, iNaturalist, Wikipedia, and the National Park System, users can drop a pin anywhere in the US, and get interesting data about birds in that area. Data available is mostly limited to eBird's system, hence why there is not much on other contintents for now.

The national parks markers are not required to use, and simply represent "hotspots" where users have tracked and sighted lots of different birds. Try clicking the national park closest to you, and see which birds have been sighted there.

Once loaded, up to eight birds will start to play their cries. They can be muted individually, to help identify specific cries. If more than 8 birds were available, then birds can be rotated out using the dice button, to introduce new species into the mix.

The panel along the right side shows "notable" (more rare) and most common bird sightings, along with the date(s) they were sighted, and approximate location. Clicking a bird reveals more information, and links their page on Wikipedia and eBird's website. You can also listen to a call directly from Xeno-Canto if one is available.

In the settings pane, you can exclude birds from showing up in the recordings. This is limited to loaded birds, so searching for a certain type may not show up if it is not currently loaded by an API.
      `,
      link: 'https://tweetr-soundscape-explorer.netlify.app/',
      previewImageLink: 'https://cpt-images.s3.us-east-2.amazonaws.com/tweetr/tweetr-main.png',
      repo: 'https://github.com/chri55/bird-soundscape-explorer',
      tags: ["JavaScript", "HTML", "CSS", "React", "Vite", "Leaflet", "APIs"],
      slug: 'tweetr',
      gifs: [
        {
          src: 'https://cpt-images.s3.us-east-2.amazonaws.com/tweetr/loading-a-park.gif',
          caption: 'Loading a National Park',
        },
        {
          src: 'https://cpt-images.s3.us-east-2.amazonaws.com/tweetr/details-pane.gif',
          caption: 'Bird Details Panel',
        }
      ]
    },
    {
      title: 'Game-Music Recommender',
      synopsis: 'Analyze Spotify music to recommend games, and vice versa',
      description: `Music and Game Recommendations using Spotify, LastFM, IGDB, and RAWG data.

      This project uses audio analysis endpoints (Reccobeats) similar to those that used to be on Spotify\'s API, to get major musical features like tone, speed, modality, and map them to IGDB\'s tags and genres to find games that the user might enjoy.

      Similarly, it can analyze a list of the user\'s favorite games and find music they might like on Spotify.

      In late 2025/early 2026, Spotify heavily limited their API access and search, so to circumvent this, we gather music popularity data from LastFM, and map the game keywords to their genres. Then, we return the Spotify results to the user so they can listen on their logged in account.
      `,
      link: 'https://game-music-rec-production.up.railway.app/games',
      previewImageLink: 'https://cpt-images.s3.us-east-2.amazonaws.com/game-music-rec/game-music-rec-main.png',
      repo: 'https://github.com/chri55/game-music-rec',
      tags: ["JavaScript", "HTML", "CSS", "React", "Vite", "APIs"],
      slug: 'game-music-rec',
      gifs: [
        {
          src: "https://cpt-images.s3.us-east-2.amazonaws.com/game-music-rec/album-to-games.gif",
          caption: 'Spotify Album to Games Recommendation',
        },
        {
          src: "https://cpt-images.s3.us-east-2.amazonaws.com/game-music-rec/listen-history-to-games.gif",
          caption: 'Spotify Listen History to Games Recommendation',
        },
        {
          src: "https://cpt-images.s3.us-east-2.amazonaws.com/game-music-rec/games-to-music-a.gif",
          caption: 'Games List to Music (Albums/Artists) Recommendation A',
        },
        {
          src: "https://cpt-images.s3.us-east-2.amazonaws.com/game-music-rec/games-to-music-b.gif",
          caption: 'Games List to Music (Albums/Artists) Recommendation B',
        }
      ],
    },
    {
    index: 0,
    title: "Pokopedia Favorites",
    synopsis: "A small tool to help your small friends",
    description: `
    While playing Pokemon Pokopia, I was frequently having to look up which furniture items were in which 'subcategory', on Serebii.

    I wanted a quickly searchable PWA to be able to type in exactly what was requested in game and pull up valid options. The data was sourced from Serebii through web scraping with Python, and loaded into the app via JSON.

    The app itself is a single page React app with lazy loading so as to be performant and quick to use.
    `,
    link: "https://clarfgg.github.io/pokopedia-favorites/",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/pokopedia-favorites.png",
    repo: "https://github.com/clarfgg/pokopedia-favorites",
    tags: ["JavaScript", "HTML", "CSS", "Python", "React"],
    slug: "pokopedia-favorites",
  },
  {
    index: 2,
    title: "Rutgers Camden ACM",
    synopsis: "Club website made during my time as Webmaster of the Rutgers ACM Camden Chapter.",
    description: `During my time at Rutgers Camden, I was the first Webmaster for our ACM chapter, which was only a year old.

    This is the RU-C ACM's very first chapter website, featuring dates for events, pictures taken at our club meetings, and achievements of our members.

    Currently only the test build is public.`,
    link: "https://acm-dev-website.ue.r.appspot.com/",
    repo: "https://github.com/rutgersacm/ruc-acm",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/ruc-acmDemo.png",
    tags: ["Python", "Flask", "HTML", "CSS", "Javascript", "Google Cloud Services"],
    slug: "rutgers-acm-site",
  },
    {
    index: 1,
    title: "Club 405",
    synopsis: "A summary of research around harassment of Virtual AI and Robotic Influencers on Instagram",
    description: `During my time at Rutgers University, I participated in a research project for the Digital Studies department in which we researched harassment of Virtual Influencers on Instagram.

    We focused the research around the account of a character called '@lilmiquela'.

    This account claims to be a real being that is robotic, not unlike Sofia the Robot, however it is simply a 3D model of a character created by a company called Brud. Because of the ambiguity of facts surrounding this account it gets a lot of harassment, and we were interested to see what kind of harassment was most common for a virtual being to receive.
    `,
    link: "https://chri55.github.io/club405/",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/club405Demo.png",
    repo: "https://github.com/chri55/club405",
    tags: ["JavaScript", "HTML", "CSS", "Python"],
    slug: "club-405",
  },
  {
    index: 3,
    title: "Algorithm Simulator",
    synopsis: "Research on distributed algorithms for mobile agents on a geometric field.",
    description: `I collaborated on this project during my time as a research assistant at the Rutgers University CCIB.

    The aim was to build an application to simulate and visualize search-and-evacuate algorithms for mobile agents in a known geometry.

    We started with simulations on a disk, and from there moved to other regular polygons and the 1-dimensional line.

    The original was written in Javascript with D3.js, and later we rewrote the backend to utilize Python for the data simulation.`,
    link: "https://chri55.github.io/BotAlgorithms/disk/circleShowcase.html",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/botAlgDemo.png",
    repo: "#",
    tags: ["JavaScript", "HTML", "CSS", "D3.js", "Python", "Django", "Amazon Web Services"],
    slug: "search-evacuate-simulator",
  },
  {
    index: 5,
    title: "Squid Bounce",
    synopsis: "Pixi.js minigame inspired by Splatoon.",
    description: `To help me learn JavaScript when I first began, I did this as a side project and used a fun little JS game engine called Pixi.js.

    Currently, it has infinite levels, increasing difficulty, and a point system based on how high you've gotten.

    In the future I hope to make some custom textures using pixel art for the lava that follows the player.

    I also plan to implement platforms that interact with the player differently, such as ice for sliding landings and conveyor belts to increase difficulty. Overall, I learned a lot about Pixi.js and JavaScript as a whole.
    `,
    link: "https://chri55.github.io/squid-bounce",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/squidBounceDemo.png",
    repo: "https://github.com/chri55/squid-bounce",
    tags: ["JavaScript", "HTML", "CSS", "Pixi.js"],
    slug: "squid-bounce",
  },
  {
    index: 6,
    title: "WebCalc",
    synopsis: "A vanilla JavaScript web calculator I made as a practice for The Odin Project.",
    description: `As part of the curriculum for The Odin Project, a series of courses about web development, I was asked to make a calculator in JavaScript using no libraries.

    I learned some very important lessons about how postfix notation is parsed and used in calculations.

    This currently support multi-operator expressions, decimal point numbers, and the 4 basic math functions.
    `,
    link: "https://chri55.github.io/webcalculator",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/webcalcDemo.png",
    repo: "https://github.com/chri55/webcalculator",
    tags: ["JavaScript", "HTML", "CSS"],
    slug: "web-calculator",
  },
  {
    index: 7,
    title: "Portfolio",
    synopsis: "This website. Built with React and Vite.",
    description: "My senior project in my Digital Studies curriculum was to create my own website, from getting and setting up my own URL to hosting the site itself. For my URL, I used Amazon Web Services Route 53 service to buy and manage the domain. This site is also hosted on Netlify. Originally built with Gatsby, it has been migrated to a modern React + Vite setup.",
    link: "https://github.com/chri55/portfolio-react",
    previewImageLink: "https://cpt-images.s3.us-east-2.amazonaws.com/portfolioDemo.png",
    repo: "https://github.com/chri55/portfolio-react",
    tags: ["JavaScript", "HTML", "CSS", "React", "Vite", "PostCSS"],
    slug: "portfolio-website",
  },
];

export default portfolioItems;
