/* Portfolio content. Add projects, subprojects, and part pages here. */
window.PORTFOLIO_DATA = {
  projects: [
    {
      id: "the-windroid-project",
      title: "The Windroid Project",
      category: "SOFTWARE · HARDWARE",
      status: "Ongoing",
      description: "A project focused to give users a secure and maximally open source ecosystem, without unnecessary corporate greed.",
      image: "images/twp.png",
      theme: "twp",
      tags: ["Independent development", "Games", "Software", "Simulation", "Hardware"],
      subprojects: [
        {
          id: "wdsim",
          title: "Windroid Simulator",
          description: "A game designed to replicate real life as accurately as possible. Split to 2, because of digital precision issues.",
          image: "images/wdsim.png",
          status: "In development",
          parts: [
            { title: "Windroid Real Life Simulator", description: "The part of Windroid Sim. where the player sees the smallest possible energies. Mainly intended for Educational purposes", partId: "wdsimMICRO" },
            { title: "Windroid Virtual Life Simulator", description: "The part of Windroid Sim. where the player sees what macro beings like humans sees. Mainly structured like a game.", partId: "wdsimMACRO" }
          ]
        },
        {
          id: "winos-dev",
          title: "WinOS-Dev",
          description: "The first fully AI version of WinOS, where I tried to learn how OSes work.",
          image: "images/winos-dev.png",
          status: "Ended / Out of support",
          parts: [
            { title: "WinOS_Dev-Base", description: "The EFI implementation and kernel part which shows window applications made with WinOS_Dev-Editor", partId: "winos_dev-base" },
            { title: "WinOS_Dev-Editor", description: "The windows WPF app made for window application dev for WinOS-Dev.", partId: "winos_dev-editor" }
          ]
        },
        {
            id: "winos",
            title: "WinOS",
            description: "Nicknamed 'The OS for Winners', this is an OS focused on user security and customization.",
            image: "images/winos.png",
            status: "In Development",
            parts: [
                { title: "WinOS-EFI", description: "EFI Bootloader for WinOS.", partId: "winos-efi" },
                { title: "WinOS-Kernel", description: "The kernel part which contains framework APIs and framework loading logic.", partId: "winos-kernel" },
                { title: "WinOS-Editor", description: "The windows WPF app made for WinOS framework development.", partId: "winos-editor" },
                { title: "WinOS-Studio", description: "The windows WPF app made for compound applications with multiple frameworks.", partId: "winos-studio" },
                { title: "WinOS", description: "The WinOS System implementation from me, containing Windroid Security and more. CLOSED SOURCE.", partId: "winos" }
            ]
        },
        {
          id: "waroms",
          title: "Windroidify Android Custom ROMs",
          description: "A planned Android Open Source Project (AOSP) customization effort, with an emphasis on lightweight builds, useful customization, and extending support for older devices.",
          image: "images/waroms.png",
          status: "Not started",
          emptyMessage: "NOT STARTED",
          parts: []
        },
        {
          id: "wdpianochord",
          title: "Windroid Piano",
          description: "An experimental MIDI instrument project exploring custom keyboard hardware and a flexible synthesizer workflow. The current direction includes adapting existing keybeds and prototyping input electronics before expanding the feature set.",
          image: "images/mobile.png",
          status: "Prototype / exploration",
          emptyMessage: "IN EARLY DEVELOPMENT",
          parts: []
        }
      ]
    }
  ],
  parts: [
    {
      id: "wdsimMICRO",
      theme: "twp",
      title: "Windroid Real Life Simulator",
      subtitle: "Explore a world from the scale of particles.",
      content: [
          {
              type: "quote",
              text: "Windroid Sim. MICRO is a simulation where you build your own particle world. Discover the forces you rely on, and explore the structure of matter itself.",
              attribution: "Windroid Sim. MICRO Intro"
          },
          {
              type: "feature",
              media: { type: "image", src: "/twp/wdsim/MICRO/images/sample.png", alt: "Windroid Sim MICRO preview", caption: "Windroid Sim. MICRO" },
              title: "A particle-level sandbox",
              text: "Windroid Sim **MICRO** is the *small-scale side of the simulation project*. The idea is to *create a space where you can build and inspect a particle world*, *experiment with physical properties*, and *explore how fundamental interactions shape matter*. **The game was originally intended for educational purposes.**"
          },
        {
          type: "callout",
          title: "Current Status",
          variant: "info",
          text: "The **Fundamental Force system** and **basic PC and touch controls** are basically *complete*, leading to version **1.5.2-STABLE**. *Persistence and more in the future*."
        },
        {
          type: "callout",
          title: "Warning",
          variant: "warning",
          text: "The MICRO part is **paused** to regain my lost sanity."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/Windroid-Real-Life-Simulator",
      downloadLinks: [
        { label: "Game Jolt >", url: "https://gamejolt.com/games/wdsimMICRO/1075586" }
      ]
    },
    {
      id: "wdsimMACRO",
      theme: "twp",
      title: "Windroid Virtual Life Simulator",
      subtitle: "Explore a world from a 'human's perspective.",
      content: [
          {
              type: "quote",
              text: "Windroid Sim. MACRO is a game where you explore your own universe. Find the planets you like, and explore them.",
              attribution: "Windroid Sim. MACRO Intro"
          },
          {
              type: "feature",
              media: { type: "image", src: "/twp/wdsim/MACRO/images/sample.png", alt: "Windroid Sim MACRO preview", caption: "Windroid Sim. MACRO" },
              title: "A human-level sandbox",
              text: "Windroid Sim **MACRO** is the *macro-scale side of the simulation project*. The goal is to *create a space where you can build your own macro world*, *run virtual world experiments*, and *conserve and exploit the planet for your sustainability*."
          },
          {
              type: "embed",
              src: "https://www.youtube-nocookie.com/embed/_pbD9caaxyk?si=ljXwrIZdzP39jIE7n-picture",
              title: "Dev demo",
              caption: "Watch the project in action."
          },
        {
          type: "callout",
          title: "Current Status",
          variant: "info",
          text: "The game is an **Early Access**, or even a *prototype*."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/Windroid-Virtual-Life-Simulator"
    },
    {
      id: "winos_dev-base",
      theme: "twp",
      title: "WinOS_Dev-Base",
      subtitle: "A slop OS with basic window management and app window launching mechanisms.",
      content: [
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS EFI and kernel development preview" },
          title: "WinOS-Dev",
          text: "**WinOS-Dev** is a *fully AI made (Codex) project*, which is open for everyone. Its slop anyway."
        },
        {
          type: "callout",
          title: "Part of WinOS-Dev",
          variant: "info",
          text: "The project has *fully ended* and has been **archived**."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    },
    {
      id: "winos_dev-editor",
      theme: "twp",
      title: "WinOS_Dev-Base",
      subtitle: "A slop application to create windows for a slop OS.",
      content: [
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS Editor" },
          title: "WinOS-Dev Editor App",
          text: "**WinOS-Dev Editor** is slop made for **WinOS-Dev**'s window application development."
        },
        {
          type: "callout",
          title: "Part of WinOS-Dev",
          variant: "info",
          text: "The project has *fully ended* and has been **archived**."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    },
    {
      id: "winos-kernel",
      theme: "twp",
      title: "WinOS-Kernel",
      subtitle: "The low-level foundation of WinOS.",
      content: [
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS kernel development preview" },
          title: "The core system layer",
          text: "WinOS-Kernel is the custom C++ and assembly kernel at the centre of the WinOS project. It receives the boot configuration from WinOS-EFI and provides the foundation on which the operating system's own framework and user-space components can grow."
        },
        {
          type: "heading",
          level: 2,
          text: "A shared system interface"
        },
        {
          type: "text",
          text: "The current architecture uses a shared header for boot-time structures and common interfaces. The boot configuration carries framebuffer dimensions and address information, mouse state, font and asset references, and memory-map data into the kernel."
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS boot and kernel project preview" },
          title: "Build the foundation first",
          text: "The priority is a working base: boot reliably, establish the kernel's core responsibilities, and expose hardware-facing facilities through deliberate interfaces. Higher-level desktop features can build on that foundation later."
        },
        {
          type: "callout",
          title: "Development status",
          variant: "info",
          text: "WinOS-Kernel is an early-stage operating-system project. It is not yet a finished desktop or mobile operating system."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    },
    {
      id: "winos-editor",
      theme: "twp",
      title: "WinOS-Editor",
      subtitle: "The development environment for building the WinOS ecosystem.",
      content: [
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS Editor interface preview" },
          title: "A dedicated framework editor",
          text: "WinOS-Editor is a C# WPF application intended to become the development environment for WinOS frameworks and components. It is a tool for creating and managing the software that will run in the WinOS ecosystem — not the operating system's end-user desktop."
        },
        {
          type: "heading",
          level: 2,
          text: "The IDE taking shape"
        },
        {
          type: "list",
          items: [
            "A JSON-based .wdfp project format with project creation, saving, and opening.",
            "Project browsing and source-file tabs for working across a framework project.",
            "A code-structure browsing direction for namespaces, classes, functions, documentation, and parameters.",
            "Compiler detection built around a system-installed LLVM toolchain, avoiding a bundled compiler footprint."
          ]
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS Editor project workspace preview" },
          title: "An editor for the platform itself",
          text: "The longer-term goal is to make it possible to create frameworks and applications for WinOS from one focused environment. The editor and build workflow are still being developed; the current project is an early foundation, not a finished IDE."
        },
        {
          type: "callout",
          title: "Current focus",
          variant: "info",
          text: "The next major work is the main IDE experience and a complete build pipeline, including useful compiler diagnostics and build actions."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    }
  ]
};
