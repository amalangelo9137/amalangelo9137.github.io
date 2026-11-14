/* Portfolio content. Add projects, subprojects, and part pages here. */
window.PORTFOLIO_DATA = {
  projects: [
    {
      id: "the-windroid-project",
      title: "The Windroid Project",
      category: "SOFTWARE · HARDWARE",
      status: "Ongoing",
      description: "An independent software and hardware ecosystem built around open development, practical experimentation, and tools that put creators and users first.",
      image: "images/twp.png",
      theme: "twp",
      tags: ["Games", "Software", "Simulation", "Hardware"],
      subprojects: [
        {
          id: "wdsim",
          title: "Windroid Simulator",
          description: "A game designed to replicate real life as accurately as possible. Split to 2, because of digital precision issues.",
          image: "images/wdsim.png",
          status: "In development | Temporarily Closed Source",
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
          status: "Ended | Open Source (GPL-3.0), Archived",
          parts: [
            { title: "WinOS_Dev-Base", description: "The EFI implementation and kernel part which shows window applications made with WinOS_Dev-Editor", partId: "winos_dev-base" },
            { title: "WinOS_Dev-Editor", description: "The WPF app made for window application dev for WinOS-Dev.", partId: "winos_dev-editor" }
          ]
        },
        {
          id: "winos",
          title: "WinOS",
          description: "A custom operating-system project organized into four parts: the open-source base, framework development tools, application development tools, and the proprietary WinOS System.",
          image: "images/winos.png",
          status: "In development | 3 Open Source (MIT), 1 Closed Source (Proprietary)",
          parts: [
            { title: "WinOS-Base", description: "The open-source UEFI bootloader and kernel foundation. MIT licensed.", partId: "winos-base" },
            { title: "WinOS-Editor", description: "WinOS Framework Studio — the open-source framework development environment. MIT licensed.", partId: "winos-editor" },
            { title: "WinOS-Studio", description: "WinOS Application Studio — the planned open-source application development environment. MIT licensed.", partId: "winos-studio" },
            { title: "WinOS System", description: "The proprietary operating system and first-party framework layer. Closed source.", partId: "winos-overview" }
          ]
        },
        {
          id: "waroms",
          title: "Windroidify Android Custom ROMs",
          description: "A planned Android Open Source Project (AOSP) customization effort, with an emphasis on lightweight builds, useful customization, and extending support for older devices.",
          image: "",
          status: "Not Started",
          emptyMessage: "NOT STARTED GNG",
          parts: []
        },
        {
          id: "wdpianochord",
          title: "Windroid Piano",
          description: "An experimental MIDI instrument project exploring custom keyboard hardware and a flexible synthesizer workflow. The current direction includes adapting existing keybeds and prototyping input electronics before expanding the feature set.",
          image: "",
          status: "Not Started",
          emptyMessage: "NOT STARTED GNG",
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
      title: "WinOS_Dev-Editor",
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
      id: "winos-base",
      repoUrl: "https://github.com/amalangelo9137/WinOS",
      theme: "twp",
      title: "WinOS-Base",
      subtitle: "The open-source foundation for the WinOS ecosystem.",
      content: [
        {
          type: "quote",
          text: "A public foundation for booting, extending, and developing WinOS — separate from the proprietary operating system built on top of it.",
          attribution: "WinOS-Base"
        },
        {
          type: "embed",
          src: "https://www.youtube-nocookie.com/embed/9Ep3I33Q0NE?start=0",
          title: "WinOS-Base - current status",
          caption: "Current state of WinOS-Base."
        },
        {
          type: "heading",
          level: 2,
          text: "WinOS-Base contains;"
        },
        {
          type: "list",
          items: [
            { runs: [{ type: "strong", text: "WinOS-EFI: " }, { type: "text", text: "the UEFI bootloader. This is currently one of the most established components and is substantially implemented." }] },
            { runs: [{ type: "strong", text: "WinOS-Kernel: " }, { type: "text", text: "the low-level C++ and assembly foundation that receives the boot configuration from EFI, and runs the whole system." }] }
          ]
        },
        {
          type: "callout",
          title: "information",
          variant: "warning",
          text: "WinOS-Base does **NOT** include the *WinOS operating system implementation or its frameworks*. The WinOS system frameworks remain **proprietary and closed source** for *security reasons*. **They are maintained and distributed through a private server**."
        }
      ]
    },
    {
      id: "winos-studio",
      repoUrl: "https://github.com/amalangelo9137/WinOS",
      theme: "twp",
      title: "WinOS Application Studio",
      subtitle: "The planned application development environment for WinOS.",
      content: [
        {
          type: "feature",
          //media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS development environment preview" },
          title: "A dedicated application studio",
          text: "**WinOS Application Studio** (WinOS-Studio) is intended to provide a *dedicated environment for creating applications for WinOS*. It is separate from **WinOS Framework Studio**, which focuses on *building frameworks*."
        }
      ]
    },
    {
      id: "winos-overview",
      theme: "twp",
      title: "WinOS System",
      subtitle: "The OS for Winners.",
      content: [
        {
          type: "quote",
          text: "A ground-up operating system built on an open development foundation, with a proprietary system and framework layer.",
          attribution: "WinOS project direction"
        },
        {
          type: "callout",
          title: "Source & licensing",
          variant: "warning",
          text: "**CLOSED SOURCE · PROPRIETARY** — WinOS and its system frameworks are proprietary. All rights reserved. The OS implementation is maintained privately and is not published onto GitHub at all."
        },
        {
          type: "feature",
          //media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS development preview" },
          title: "The operating system itself",
          text: "**WinOS** is the *proprietary operating system built on top of* **WinOS-Base**. While the open-source base provides the *bootloader*, *kernel foundation*, and *development tools*, **WinOS** contains the *OS implementation*, *system components*, and *framework layer*."
        },
        {
          type: "text",
          text: "Frameworks required by user applications may get open sourced, but no guarantee."
        },
        {
          type: "callout",
          title: "Current Status",
          variant: "info",
          text: "WinOS is yet to be started. WinOS-Base first; WinOS afterward."
        }
      ]
    },
    {
      id: "winos-editor",
      repoUrl: "https://github.com/amalangelo9137/WinOS",
      theme: "twp",
      title: "WinOS Framework Studio",
      subtitle: "The framework development environment for the WinOS ecosystem.",
      content: [
        {
          type: "embed",
          src: "https://www.youtube-nocookie.com/embed/9Ep3I33Q0NE?start=480",
          title: "WinOS Framework Studio - Current status",
          caption: "WinOS-Editor - Current status"
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/winos/editor/images/winos-editor.png", alt: "WinOS Editor interface preview" },
          title: "A dedicated framework editor",
          text: "**WinOS Framework Studio** (WinOS-Editor) is a **C# WPF application** for *creating and managing frameworks for WinOS*. It focuses on *framework projects*, *source navigation*, and the *framework build workflow*; it is **different** from the *application-focused* **WinOS Application Studio**."
        },
        {
          type: "heading",
          level: 2,
          text: "The IDE itself;"
        },
        {
          type: "list",
          items: [
            "A JSON-based .wdfp project format with editor project creation, saving, and opening.",
            "Hierarchies to expose the current project trees, claases etc. full project wise and file wise.",
            "LLVM required, but externally installed to make the app lightweight."
          ]
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/winos/editor/images/winos-editor-openproj.png", alt: "WinOS Editor project workspace preview" },
          title: "An editor for the platform itself",
          text: "The **goal** is to provide a *dedicated environment for framework development*. **The editor is not yet a finished IDE**."
        }
      ],
    }
  ]
};
