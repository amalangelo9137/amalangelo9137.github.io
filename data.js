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
          id: "winos-base",
          title: "WinOS-Base",
          description: "The open-source low-level foundation for WinOS, containing the UEFI bootloader and kernel. Licensed under MIT.",
          image: "images/winos.png",
          status: "Open source · MIT",
          parts: [
            { title: "WinOS-Base Overview", description: "The open-source foundation, its components, licensing, and current development status.", partId: "winos-base-overview" },
            { title: "WinOS-EFI", description: "The substantially implemented UEFI bootloader and handoff stage for starting the WinOS kernel.", partId: "winos-efi" },
            { title: "WinOS-Kernel", description: "The C++ and assembly kernel foundation shared with the proprietary WinOS System.", partId: "winos-kernel" }
          ]
        },
        {
          id: "winos-editor",
          title: "WinOS-Editor",
          description: "WinOS Framework Studio — the development environment for creating and managing frameworks for WinOS.",
          image: "images/winos.png",
          status: "Open source · MIT",
          parts: [
            { title: "WinOS Framework Studio", description: "The C# WPF framework development environment, project system, IDE, and build workflow.", partId: "winos-editor" }
          ]
        },
        {
          id: "winos-studio",
          title: "WinOS-Studio",
          description: "WinOS Application Studio — the planned environment for creating applications for WinOS.",
          image: "images/winos.png",
          status: "Open source · MIT",
          parts: [
            { title: "WinOS Application Studio", description: "The planned application development environment for the WinOS ecosystem.", partId: "winos-studio" }
          ]
        },
        {
          id: "winos-system",
          title: "WinOS System",
          description: "The proprietary operating system, including its system implementation and first-party frameworks such as WinOS.Graphics. Maintained and distributed through private infrastructure.",
          image: "images/winos.png",
          status: "Closed source · Proprietary",
          parts: [
            { title: "WinOS System", description: "The operating system, proprietary framework layer, licensing boundary, and development direction.", partId: "winos-overview" }
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
      id: "winos-base-overview",
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
          type: "callout",
          title: "Source & licensing",
          variant: "info",
          text: "**OPEN SOURCE · MIT LICENSE** — WinOS-Base is distributed under the MIT License. This covers the bootloader and kernel foundation in this component; it does not cover WinOS Framework Studio, WinOS Application Studio, or the proprietary WinOS System unless their own licensing notices explicitly say otherwise."
        },
        {
          type: "embed",
          src: "https://www.youtube-nocookie.com/embed/9Ep3I33Q0NE",
          title: "WinOS-Base — current development status",
          caption: "A look at the current state of WinOS-Base and its development."
        },
        {
          type: "heading",
          level: 2,
          text: "What belongs in WinOS-Base?"
        },
        {
          type: "list",
          items: [
            { runs: [{ type: "strong", text: "WinOS-EFI — " }, { type: "text", text: "the UEFI bootloader. This is currently one of the most established components and is substantially implemented." }] },
            { runs: [{ type: "strong", text: "WinOS-Kernel — " }, { type: "text", text: "the low-level C++ and assembly foundation that receives the boot configuration from EFI." }] }
          ]
        },
        {
          type: "heading",
          level: 2,
          text: "What stays proprietary?"
        },
        {
          type: "text",
          text: "WinOS-Base does **not** include the WinOS operating system implementation or its frameworks. The WinOS framework, **WinOS.Graphics**, and other first-party base/system frameworks remain proprietary and closed source. They are maintained and distributed through private infrastructure."
        },
        {
          type: "callout",
          title: "A clear boundary",
          variant: "info",
          text: "WinOS-Base is the open-source boot and kernel foundation. WinOS Framework Studio and WinOS Application Studio are separate open-source MIT-licensed tools. WinOS System and its frameworks remain proprietary; the MIT license does not grant rights to those closed-source components."
        }
      ]
    },
    {
      id: "winos-studio",
      theme: "twp",
      title: "WinOS Application Studio",
      subtitle: "The planned application development environment for WinOS.",
      content: [
        {
          type: "callout",
          title: "Source & licensing",
          variant: "info",
          text: "**OPEN SOURCE · MIT LICENSE** — WinOS Application Studio is part of the open-source WinOS development toolchain and is intended to be released under the MIT License."
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS development environment preview" },
          title: "A dedicated application studio",
          text: "**WinOS Application Studio** (project name: **WinOS-Studio**) is intended to provide a dedicated environment for creating applications for WinOS. It is separate from WinOS Framework Studio, which focuses on building frameworks."
        },
        {
          type: "callout",
          title: "Development status",
          variant: "info",
          text: "WinOS Application Studio is planned and is not presented as a completed application yet."
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
          text: "**CLOSED SOURCE · PROPRIETARY** — WinOS and its system frameworks are proprietary. All rights reserved. The OS implementation is maintained privately and is not published in a public GitHub repository."
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/efi-kernel/images/sample.png", alt: "WinOS development preview" },
          title: "The operating system itself",
          text: "WinOS is the proprietary operating system built on top of WinOS-Base. The open-source base provides the bootloader, kernel foundation, and development tools; WinOS contains the private OS implementation, system components, and framework layer."
        },
        {
          type: "heading",
          level: 2,
          text: "The framework layer"
        },
        {
          type: "text",
          text: "The WinOS framework and its bundled base frameworks are proprietary too. **WinOS.Graphics** is a component of the WinOS framework — not a separate open-source project. Other first-party frameworks follow the same proprietary licensing model unless explicitly stated otherwise."
        },
        {
          type: "heading",
          level: 2,
          text: "Designed around a framework-first user space"
        },
        {
          type: "text",
          text: "The planned architecture uses **.wdll** packages as compiled code packages for frameworks and user applications, with **.wdexe** as the planned application format. These formats describe the intended ecosystem; they should not be read as a claim that the complete runtime or application environment is already finished."
        },
        {
          type: "callout",
          title: "Development scope",
          variant: "info",
          text: "WinOS is in active development. The operating system, proprietary framework layer, desktop experience, and application ecosystem are being built on top of WinOS-Base. This page describes the intended architecture, not a finished OS release."
        }
      ]
    },
    {
      id: "winos-efi",
      theme: "twp",
      title: "WinOS-EFI",
      subtitle: "The small UEFI application that starts the WinOS boot process.",
      content: [
        {
          type: "callout",
          title: "Source & licensing",
          variant: "info",
          text: "**OPEN SOURCE · MIT LICENSE** — This component is part of WinOS-Base and is intended to be distributed under the MIT License."
        },
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
          text: "WinOS-EFI is one of the more established parts of the current foundation and is substantially implemented as the bootloader stage. Work on the wider WinOS platform continues; a functioning boot component does not mean the complete operating system is finished."
        }
      ],
    },
    {
      id: "winos-kernel",
      theme: "twp",
      title: "WinOS-Kernel",
      subtitle: "The low-level foundation of WinOS.",
      content: [
        {
          type: "callout",
          title: "Source & licensing",
          variant: "info",
          text: "**OPEN SOURCE · MIT LICENSE** — This component is part of WinOS-Base and is intended to be distributed under the MIT License."
        },
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
    },
    {
      id: "winos-editor",
      theme: "twp",
      title: "WinOS Framework Studio",
      subtitle: "The framework development environment in the WinOS ecosystem.",
      content: [
        {
          type: "callout",
          title: "Source & licensing",
          variant: "info",
          text: "**OPEN SOURCE · MIT LICENSE** — WinOS Framework Studio is an open-source development tool distributed under the MIT License."
        },
        {
          type: "feature",
          media: { type: "image", src: "/twp/wosdev/editor/images/sample.png", alt: "WinOS Editor interface preview" },
          title: "A dedicated framework editor",
          text: "**WinOS Framework Studio** (project name: **WinOS-Editor**) is a C# WPF application for creating and managing frameworks for WinOS. It focuses on framework projects, source navigation, and the framework build workflow; it is distinct from the application-focused WinOS Application Studio."
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
          text: "The goal is to provide a dedicated environment for framework development. The editor and build workflow are still being developed; the current project is an early foundation, not a finished IDE."
        },
        {
          type: "callout",
          title: "Current focus",
          variant: "info",
          text: "The next major work is completing the IDE workflow: source navigation, useful compiler diagnostics, and reliable build actions using the detected LLVM toolchain."
        }
      ],
    }
  ]
};
