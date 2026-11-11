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
            description: "Nicknamed “The OS for Winners”, WinOS is a ground-up operating-system project focused on a free, uncluttered, customizable computing experience. The priority is building a reliable base before expanding into higher-level apps and services.",
            image: "images/winos.png",
            status: "In Development",
            parts: [
                { title: "WinOS Overview", description: "An overview of the OS architecture, its boot-to-framework design, and the role of each component.", partId: "winos-overview" },
                { title: "WinOS-EFI", description: "The minimal UEFI entry point that prepares boot information and transfers control to the WinOS kernel.", partId: "winos-efi" },
                { title: "WinOS-Kernel", description: "The low-level C++ and assembly foundation that receives the boot configuration and will host the core system interfaces.", partId: "winos-kernel" },
                { title: "WinOS-Editor", description: "A C# WPF development environment for creating and building frameworks and components for WinOS.", partId: "winos-editor" }
            ]
        },
        {
          id: "waroms",
          title: "Windroidify Android Custom ROMs",
          description: "A planned Android Open Source Project (AOSP) customization effort, with an emphasis on lightweight builds, useful customization, and extending support for older devices.",
          image: "images/waroms.png",
          status: "Not started",
          emptyMessage: "NOT STARTED GNG",
          parts: []
        },
        {
          id: "wdpianochord",
          title: "Windroid Piano",
          description: "An experimental MIDI instrument project exploring custom keyboard hardware and a flexible synthesizer workflow. The current direction includes adapting existing keybeds and prototyping input electronics before expanding the feature set.",
          image: "images/mobile.png",
          status: "Prototype / exploration",
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
      id: "winos-overview",
      theme: "twp",
      title: "WinOS",
      subtitle: "The OS for Winners.",
      content: [
        {
          type: "quote",
          text: "A free, uncluttered operating system built from the ground up — with the tools and framework to shape the experience around its users.",
          attribution: "WinOS project direction"
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS development preview" },
          title: "An operating system, not just a desktop concept",
          text: "WinOS is an independent operating-system project. The current priority is the base platform: a clear boot path, a kernel with defined system responsibilities, and a framework layer that can support applications later. The goal is to keep the system free and uncluttered while leaving room for customization."
        },
        {
          type: "heading",
          level: 2,
          text: "How the pieces fit together"
        },
        {
          type: "list",
          items: [
            { runs: [{ type: "strong", text: "WinOS-EFI — " }, { type: "text", text: "the UEFI application that prepares boot information and hands control to the kernel." }] },
            { runs: [{ type: "strong", text: "WinOS-Kernel — " }, { type: "text", text: "the C++ and assembly core that receives the boot configuration and forms the low-level system foundation." }] },
            { runs: [{ type: "strong", text: "WinOS framework — " }, { type: "text", text: "the planned higher-level system layer. WinOS.Graphics is part of this framework, not a separate framework." }] },
            { runs: [{ type: "strong", text: "WinOS-Editor — " }, { type: "text", text: "the C# WPF development environment used to create and manage framework projects." }] }
          ]
        },
        {
          type: "heading",
          level: 2,
          text: "A framework-first user space"
        },
        {
          type: "text",
          text: "The longer-term architecture uses .wdll packages as compiled code clumps for frameworks and user applications, with .wdexe as the planned application format. This is a design direction for the ecosystem, not a claim that the full runtime or application environment is already complete."
        },
        {
          type: "callout",
          title: "Current scope",
          variant: "info",
          text: "WinOS is still in active early development. The focus is the boot and kernel foundation plus the tools needed to build the framework. A finished desktop, application ecosystem, and end-user Studio are not being presented as completed features."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    },
    {
      id: "winos-efi",
      theme: "twp",
      title: "WinOS-EFI",
      subtitle: "The small UEFI application that starts the WinOS boot process.",
      content: [
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS EFI and kernel development preview" },
          title: "A deliberately minimal boot stage",
          text: "WinOS-EFI is the UEFI-side entry point for the operating system. Its job is to establish the information the next stage needs and hand control over to WinOS-Kernel. The aim is to keep this layer focused on bootstrapping rather than turning it into the place where the operating system itself is implemented."
        },
        {
          type: "heading",
          level: 2,
          text: "Passing a shared boot configuration"
        },
        {
          type: "text",
          text: "The EFI application prepares a shared BOOT_CONFIG structure defined in Shared.h. The structure is designed to carry the kernel's base address, framebuffer and display information, mouse-state access, font and asset references, and memory-map details. This gives the kernel a consistent starting point instead of making it rediscover every boot-time resource."
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS boot-stage project preview" },
          title: "Keep the boundary clear",
          text: "The architecture separates the UEFI boot application from the C++ and assembly kernel. EFI handles the handoff; the kernel owns the continuing system implementation. That separation keeps the boot stage small and gives the kernel room to evolve."
        },
        {
          type: "callout",
          title: "Development status",
          variant: "info",
          text: "WinOS-EFI is part of an early-stage OS foundation. The boot interface and shared structures are being developed; this is not a claim that the complete operating system is ready."
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
          text: "WinOS-Editor is a C# WPF application for developing the WinOS ecosystem. It is the framework editor and IDE project — not the operating system's end-user desktop or a separate app-building Studio."
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
            "A project tree and source-file tabs for navigating framework projects.",
            "An IDE direction with framework and project hierarchies intended to expose namespaces, classes, functions, documentation, and parameters.",
            "LLVM detection using a system-installed toolchain, keeping the compiler out of the editor's bundled footprint."
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
          text: "The next major work is completing the IDE workflow: source navigation, useful compiler diagnostics, and reliable build actions using the detected LLVM toolchain."
        }
      ],
      repoUrl: "https://github.com/amalangelo9137/WinOS-Dev"
    }
  ]
};
