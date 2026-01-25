# Portfolio data configuration
# This file contains all the portfolio information that can be easily updated

PORTFOLIO_DATA = {
  name: "Azlan Ali Khan",
  title: "Cybersecurity Student, Hobbyist Game Developer",

  education: {
    institution: "FAST NUCES Islamabad",
    degree: "Cybersecurity - BSCY (2024-Ongoing)",
    description: "Currently studying cybersecurity, in my 4th semester, will be learning Computer Organization and the Assembly Language and Computer Networks this semester"
  },
  bio: "Studying CyberSecurity trying to learn Binary Exploitation, Web Exploitation, Reverse Engineering. Experience in Web Development and web technologies, and a personal hobby interest in Game Development",
  
  social_links: {
    linkedin: {
      url: "https://www.linkedin.com/in/azlan-ali-khan-b66968270/",
      icon: '💼',
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/linkedin.png",
    },
    github: {
      url: "https://github.com/slick-user",
      icon: '🐙',
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/github.png", 
    },
    itch_io: {
      url: "https://cluster.itch.io/",
      icon: '🎮',
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/itch.png", 
    },
    youtube: {
      url: "https://www.youtube.com/@tridra5714",
      icon: '📺',
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/youtube.png", 
    }, 
    instagram: {
      url: "https://www.instagram.com/azlan_claims_this_account_now/",
      icon: '🔗',
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/instagram.png", 
    }
  },
  
  skills: {
    languages: ["C++", "Ruby", "JavaScript", "Python", "Golang"], # Currently my main languages that I am writing in
    Secondary_Languages: ["C", "TypeScript", "PHP", "Lua", "R", "SQL", "HTML", "CSS", "GDScript"], # Languages that I have written in but are not frequently used at the current moment

    Technologies: {
      # I want to use Anime JS and Three JS with this website
      WebDev: ["Ruby on Rails", "HTMX", "React", "Express JS", "Node JS", "Bun", "Tailwind", "Bootstrap", "Flask", "Go Network Programming", "Python WebSockets"],
      GameDevelopent: ["Godot", "SDL", "OpenGL", "SFML", "Raylib", "Construct 2", "PyGame", "Game Maker"],
      Security: ["Burpsuite", "Pwndbg", "IDA", "Nmap", "Metasploit", "SQLMap", "John the Ripper", "Wireshark"],
      OtherTools: ["Git", "Docker", "Vercel", "Ollama"],
      OtherLibs: ["Go Network Programming", "ImGUI", "Tkinter", "Python WebSockets", "Pandas", "Matplotlib", "Numpy"],
      
      Testing: ["Jest", "Catch2"],
      OperatingSystems: ["Windows", "Linux (Parrot OS, Kali Linux, Void Linux, NixOS, Ubuntu)", "Armbian"],
      DataBases: ["MongoDB", "PostgreSQL"], #I am using Supabase which uses PostgreSQL 
      DataScience: ["Pandas", "Matplotlib", "Numpy"], #Was using them to check out NBA Related data and to visualize said data
    
    },
  }, 
 
  certifications: [
    {
      title: "Google CyberSecurity Professional Certificate",
      date: "19-10-2025",
      issuer: "Google",
      link: "https://coursera.org/share/4a9d809766248f2a822540bd36501315",
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/googleseccert.png"
      # Having the link seems alright but we also just want an image to keep things simple
    },
  ],
  projects: [
    # Need a something in place of GIFS like something like a set of images
    {
      # I need to clean this up, the DB data has been messed with I need to fix it
      title: "Fast Transport",
      description: "Was my Fundamentals of Software Engineering Project where I single wrote a Bus Transport Website",
      link: "https://github.com/slick-user/FSE-Final-Project",
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/UTBS%20Landing%20Page.png",
      gif: "",
    },
    # Separate my Toy Projects with more serious ones that matter more
    {
      title: "Space Shifters",
      description: "Video Game My brother and I made in 2019",
      link: "https://cluster.itch.io/space-shifters",
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/spaceshifters.png", 
      gif: "",
    },
    {
      # Lets Implement LAN Multiplayer support to this one
      title: "DSA Xonix Game",
      description: "My DataStructures Course Project that I worked on with my friend Sameer Hussain", #Same thing here
      link: "https://github.com/slick-user/DSA-Project",
      img: "", 
      gif: "",
    },
    {
      # I wonder if I can clean this up a bit so it looks a little bit nicer
      title: "OSIM",
      description: "Organizational Simulation and Internal Management System. My OOP Course Project again that I worked on with my friend Sameer Hussain",
      link: "https://github.com/slick-user/OOP-Semester-Project",
      img: "https://knaboexruuzzhyzurvuq.supabase.co/storage/v1/object/public/portfolioimages/OSIM.PNG",
      gif: "",
    },
    {
      # This is a long term project that is pretty close to completion I can spend the odd day on this but that is about it
      title: "Flicky SDL",
      description: "Remake of the Original Classic Arcade Game Flicky in SDL3 and on the way I write my own Game Engine and Tooling",
      link: "https://github.com/slick-user/Flicky_SDL",
      img: "",
      gif: "",
    },
    {
      # This is a Software that I feel like is a must develop I NEED to give my time to this (finish ASAP) 
      title: "LAN-BT AudioAmplifier",
      description: "Audio Syncing, Amplification, Distributed Audio Playback Application that I am working on with my brother",
      link: "https://github.com/Yhoqw/LAN-BT_AudioAmplifier",
      img: "",
      gif: "",
    },
    {
      title: "Open GL 3D Adventure",
      description: "Some experiments with OpenGL",
      link: "https://github.com/slick-user/OpenGL-Graphics-Programming-Adventures",
      img: "",
      gif: "https://github.com/user-attachments/assets/65f8bcd4-05fa-450b-ac42-3247d0bb036d",
    },
    {
      title: "PF Project",
      description: "My PF project",
      link: "",
      img: "",
      gif: "",
    },

    #{
      # I won't showcase this here I might show it somewhere else in the website
      #title: "Drive and Gun",
      #description: "A very old game I made in 2018 in Construct 2",
      #link: "https://cluster.itch.io/drive-n-gun",
      #img: "",
      #gif: "",
    #},
  ],
}.freeze
