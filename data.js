/* Add entries here: projects -> subprojects -> parts. */
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
            { title: "Windroid Sim. MICRO", description: "A lightweight simulation environment for learning and experimenting about fundamental forces.", link: "twp/wdsim/MICRO/main.html" },
            { title: "Windroid Sim. MACRO", description: "A real-life-like macro-scale simulation that aims to replicate complex real-world scenarios.", link: "twp/wdsim/MACRO/main.html" }
          ]
        },
        {
          id: "winos-dev",
          title: "WinOS-Dev",
          description: "A secure, desktop-plus-mobile OS project with standard containerized structures, focusing on porting Linux kernel concepts and Windows compatibility into clean, DWM-like workspaces.",
          image: "images/winos-dev.png",
          parts: [
            { title: "WinOS-EFI", description: "An EFI application acting as the startup for the WinOS system and Editor API.", link: "twp/wosdev/efi-kernel/main.html" },
            { title: "WinOS-Kernel", description: "A custom kernel designed for the WinOS operating system, which further runs the WinOS API.", link: "twp/wosdev/efi-kernel/main.html" },
            { title: "WinOS-Editor", description: "An application designed to provide a seamless UI/UX development experience for the WinOS ecosystem and its kernel.", link: "twp/wosdev/editor/main.html" }
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
  ]
};
