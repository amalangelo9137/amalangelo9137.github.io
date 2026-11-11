/* Portfolio content. Add projects, subprojects, and part pages here. */
window.PORTFOLIO_DATA = {
  projects: [
    {
      id: "the-windroid-project",
      title: "The Windroid Project",
      category: "GAMES · SOFTWARE · EXPERIMENTS",
      status: "Ongoing",
      description: "A growing ecosystem of open-source games, software, simulations, and experiments — built around curiosity and the freedom to create.",
      image: "images/twp.png",
      theme: "twp",
      tags: ["Open source", "Games", "Software", "Experiments"],
      subprojects: [
        {
          id: "wdsim",
          title: "Windroid Simulator",
          description: "An enjoyable (maybe), simulation-driven sandbox game trying to capture life 1:1 as a game. Due to Unity floating-point limitations, this project is divided into two builds.",
          image: "images/wdsim.png",
          parts: [
            { title: "Windroid Sim. MICRO", description: "A lightweight simulation environment for learning and experimenting about fundamental forces.", partId: "wdsim-micro" },
            { title: "Windroid Sim. MACRO", description: "A real-life-like macro-scale simulation that aims to replicate complex real-world scenarios.", partId: "wdsim-macro" }
          ]
        },
        {
          id: "winos-dev",
          title: "WinOS-Dev",
          description: "A secure, desktop-plus-mobile OS project with standard containerized structures, focusing on porting Linux kernel concepts and Windows compatibility into clean, DWM-like workspaces.",
          image: "images/winos-dev.png",
          parts: [
            { title: "WinOS-EFI", description: "An EFI application acting as the startup for the WinOS system and Editor API.", partId: "winos-efi" },
            { title: "WinOS-Kernel", description: "A custom kernel designed for the WinOS operating system, which further runs the WinOS API.", partId: "winos-kernel" },
            { title: "WinOS-Editor", description: "An application designed to provide a seamless UI/UX development experience for the WinOS ecosystem and its kernel.", partId: "winos-editor" }
          ]
        },
        {
          id: "waroms",
          title: "Windroidify Android Custom ROMs",
          description: "A lightweight, heavily optimized Android Open Source Project (AOSP) effort, intended to maximize legacy-device lifespans and customization.",
          image: "images/waroms.png",
          status: "Not started",
          emptyMessage: "NOT STARTED",
          parts: []
        },
        {
          id: "wdpianochord",
          title: "Windroid Piano",
          description: "A modular synth-device and hardware collection with built-in synthesizers for easier, customizable music production.",
          image: "images/mobile.png",
          status: "Not started",
          emptyMessage: "NOT STARTED",
          parts: []
        }
      ]
    }
  ],
  parts: [
    {
      id: "wdsim-micro",
      theme: "twp",
      title: "Windroid Real Life Simulator 3D",
      subtitle: "The type of game no one wants to play, but is useful for educational purposes.",
      content: [
        { type: "feature", media: { type: "image", src: "/twp/wdsim/MICRO/images/sample.png", alt: "Windroid Sim MICRO preview", caption: "Windroid Sim — MICRO" }, title: "A particle-level sandbox", text: "Windroid Real Life Simulator is a simulation where you can build your own particle world. Discover the forces you rely on, and explore the structure of matter itself. **MICRO** aims to teach the user about space, particles, and the tiny forces that connect the whole universe together. It also aims to make *Physics* easier to learn for students." },
        { type: "text", runs: [{ type: "text", text: "This game currently has a somewhat working " }, { type: "strong", text: "Fundamental Force system" }, { type: "text", text: " with basic controls for both PC (keyboard + mouse) and mobile (touch) devices. Eventually, I am trying to add a container environment saving system, things like that." }] },
        { type: "callout", title: "Development status", variant: "info", runs: [{ type: "text", text: "The project is still in development. Features and systems may change as the simulation evolves." }] }
      ],
      downloadLinks: [
        { label: "Download — GitHub Releases", url: "https://github.com/amalangelo9137/Windroid-Real-Life-Simulator/releases" },
        { label: "Play on Game Jolt", url: "https://gamejolt.com/games/wdsimMICRO/1075586" }
      ]
    },
    {
      id: "wdsim-macro",
      theme: "twp",
      title: "Windroid Virtual Life Simulator 3D",
      subtitle: "The gamer friendly real life like experience",
      content: [
        { type: "feature", media: { type: "embed", src: "https://www.youtube-nocookie.com/embed/_pbD9caaxyk", title: "Windroid Sim MACRO gameplay video" }, title: "A gamer-friendly simulation", text: "Windroid Virtual Life Simulator aims to be a gamer friendly version of Windroid Sim. In this game, we get to explore a barren land and sustain our lives with the help of the **Pseudo Biological Framework** (nice name lol). Our mission is to find the Vision UI Module first, so we can access our health stats and enable alerts." },
        { type: "text", text: "This game is NOT allowed to contain anything from fantasies or our imagination (other than the Pseudo Biological Framework, because we are not literally in the sim. Without it, how are we supposed to move with WASD or our mouse?), to help maintain the 1:1 ratio." }
      ],
      downloadLinks: [
        { label: "Download — GitHub Releases", url: "https://github.com/amalangelo9137/Windroid-Virtual-Life-Simulator/releases" }
      ]
    },
    {
      id: "winos-efi",
      theme: "twp",
      title: "WinOS-EFI",
      subtitle: "The startup layer of WinOS.",
      content: [
        { type: "feature", media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS EFI and kernel preview" }, title: "The startup layer", text: "WinOS-EFI is the EFI application acting as the startup layer for the WinOS system. It prepares the environment and passes the required boot information to the kernel." },
        { type: "text", text: "It is part of WinOS-Dev. The related sub-projects live in the same repository and are available for contribution." }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    },
    {
      id: "winos-kernel",
      theme: "twp",
      title: "WinOS-Kernel",
      subtitle: "The core foundation of the WinOS operating system.",
      content: [
        { type: "feature", media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS kernel preview" }, title: "The core of WinOS", text: "WinOS-Kernel is a custom kernel designed for the WinOS operating system. It provides the foundational runtime and hardware-facing layer on which the WinOS API can run." },
        { type: "text", text: "It is part of WinOS-Dev. The related sub-projects live in the same repository and are available for contribution." }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    },
    {
      id: "winos-editor",
      theme: "twp",
      title: "WinOS-Editor",
      subtitle: "The editor application to create WinOS apps.",
      content: [
        { type: "feature", media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS Editor preview" }, title: "Build for the WinOS ecosystem", text: "WinOS-Editor is a powerful tool designed to help developers create and customize applications for the WinOS platform. With its intuitive interface and robust feature set, you can build system and user applications with ease." },
        { type: "text", text: "It is part of WinOS-Dev. The related sub-projects live in the same repository and are available for contribution." }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    }
  ]
};
