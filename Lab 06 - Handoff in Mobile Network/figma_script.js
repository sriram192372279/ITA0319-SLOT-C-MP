// ==============================================================================
// FIGMA 1-CLICK PROTOTYPE GENERATOR WITH LIVE PAGE CONNECTIONS & FLOW 1
// ==============================================================================
// HOW TO USE IN FIGMA:
// 1. Open Figma (desktop app or browser at https://www.figma.com) in any file.
// 2. Open Figma Console:
//    - In Chrome / Edge browser: Press F12 or Ctrl + Shift + J (Cmd + Option + J on Mac)
//    - In Figma Desktop: Plugins -> Development -> Open Console
// 3. Paste this entire script into the console and press Enter!
// 4. Figma will generate all 6 frames, wireframe art, and REAL NATIVE PROTOTYPE NOODLES.
// 5. Click the Play icon (▶) in Figma top-right to run Flow 1 with full page connections!
// ==============================================================================

(async function generateFigmaPrototype() {
  try {
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Medium" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    await figma.loadFontAsync({ family: "Inter", style: "Italic" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold Italic" });
  } catch (e) {
    console.warn("Using fallback fonts", e);
  }

  const helperText = (parent, text, x, y, size, color, style = "Regular", align = "LEFT", width = null) => {
    const t = figma.createText();
    try {
      t.fontName = { family: "Inter", style: style };
    } catch(err) {
      t.fontName = { family: "Inter", style: "Regular" };
    }
    t.characters = text;
    t.fontSize = size;
    t.x = x;
    t.y = y;
    t.fills = [{ type: 'SOLID', color: color }];
    t.textAlignHorizontal = align;
    if (width) {
      t.resize(width, t.height);
      t.textAutoResize = "HEIGHT";
    }
    parent.appendChild(t);
    return t;
  };

  const createNextButton = (parent, text = "Next page →") => {
    const frameBtn = figma.createFrame();
    frameBtn.name = "Next page button";
    frameBtn.fills = [];
    frameBtn.resize(110, 32);
    frameBtn.x = 230;
    frameBtn.y = 590;

    const t = figma.createText();
    t.fontName = { family: "Inter", style: "Bold Italic" };
    t.characters = text;
    t.fontSize = 14;
    t.fills = [{ type: 'SOLID', color: { r: 0.91, g: 0.12, b: 0.39 } }];
    t.x = 10;
    t.y = 6;
    frameBtn.appendChild(t);
    parent.appendChild(frameBtn);
    return frameBtn;
  };

  const linkPrototype = (sourceNode, destinationFrame) => {
    sourceNode.reactions = [
      {
        trigger: { type: "ON_CLICK" },
        actions: [
          {
            type: "NODE",
            destinationId: destinationFrame.id,
            navigation: "NAVIGATE",
            transition: {
              type: "DISSOLVE",
              duration: 0.3,
              easing: { type: "EASE_IN_AND_OUT" }
            }
          }
        ]
      }
    ];
  };

  // FRAME 1
  const f1 = figma.createFrame();
  f1.name = "Android Small - 1";
  f1.resize(360, 640);
  f1.x = 80;
  f1.y = 80;
  f1.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  f1.clipsContent = true;

  const illBox = figma.createFrame();
  illBox.name = "Illustration Box";
  illBox.resize(324, 185);
  illBox.x = 18;
  illBox.y = 55;
  illBox.cornerRadius = 6;
  illBox.fills = [{ type: 'SOLID', color: { r: 0.87, g: 0.84, b: 0.66 } }];
  illBox.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  illBox.strokeWeight = 1.5;

  helperText(illBox, "♥", 12, 10, 16, { r: 1, g: 0.32, b: 0.32 });
  const uiWin = figma.createFrame();
  uiWin.resize(276, 140);
  uiWin.x = 24;
  uiWin.y = 28;
  uiWin.cornerRadius = 4;
  uiWin.fills = [{ type: 'SOLID', color: { r: 0.92, g: 0.89, b: 0.79 } }];
  uiWin.strokes = [{ type: 'SOLID', color: { r: 0.2, g: 0.2, b: 0.2 } }];
  uiWin.strokeWeight = 1;
  illBox.appendChild(uiWin);
  f1.appendChild(illBox);

  const title1 = helperText(f1, "HANDOFF IN\nMOBILE\nNETWORK", 20, 360, 28, { r: 0, g: 0, b: 0 }, "Bold", "CENTER", 320);
  const f1Next = createNextButton(f1);

  // FRAME 2
  const f2 = figma.createFrame();
  f2.name = "Android Small - 2";
  f2.resize(360, 640);
  f2.x = 570;
  f2.y = 30;
  f2.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

  const backBtn = figma.createFrame();
  backBtn.name = "Back Button";
  backBtn.resize(26, 26);
  backBtn.cornerRadius = 13;
  backBtn.x = 20;
  backBtn.y = 24;
  backBtn.fills = [{ type: 'SOLID', color: { r: 0.09, g: 0.47, b: 0.95 } }];
  helperText(backBtn, "←", 6, 2, 16, { r: 1, g: 1, b: 1 }, "Bold");
  f2.appendChild(backBtn);

  helperText(f2, "Handoff:", 20, 38, 16, { r: 0.91, g: 0.12, b: 0.39 }, "Bold Italic", "CENTER", 320);
  helperText(f2, "Design handoff is the process of handing over a finished design for implementation. It involves transferring a designer's intent, knowledge, and specifications for a design and can include visual elements, user flows, interaction, animation, copy, responsive breakpoints, accessibility, and data validations.", 25, 75, 12, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);

  helperText(f2, "Execution:", 20, 290, 16, { r: 0.91, g: 0.12, b: 0.39 }, "Bold Italic", "CENTER", 320);
  helperText(f2, "Design handoff tools facilitate smoother transitions from design to development. These tools provide engineers with practical documentation, high-fidelity prototypes, and features to communicate and collaborate effectively.", 25, 325, 12, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);
  const f2Next = createNextButton(f2);

  // FRAME 4
  const f4 = figma.createFrame();
  f4.name = "Android Small - 4";
  f4.resize(360, 640);
  f4.x = 140;
  f4.y = 840;
  f4.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

  helperText(f4, "Why do we need handoff?", 20, 48, 16, { r: 0.85, g: 0.11, b: 0.38 }, "Bold Italic", "CENTER", 320);
  helperText(f4, "Mobile-Assisted handoff is generally used when a mobile phone helps a base station to transfer the call to another base station with better-improvised connectivity and more signal strength. This handoff is used in TDMA technique-based GSM devices.", 25, 90, 12.5, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);

  helperText(f4, "What is a handoff in UX?", 20, 310, 16, { r: 0.0, g: 0.66, b: 0.8 }, "Bold Italic", "CENTER", 320);
  helperText(f4, "The Design Handoff plays a vital role in UX projects, serving as a crucial step where designers transfer their work to the development team.", 25, 350, 12.5, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);
  const f4Next = createNextButton(f4);

  // FRAME 5
  const f5 = figma.createFrame();
  f5.name = "Android Small - 5";
  f5.resize(360, 640);
  f5.x = 610;
  f5.y = 780;
  f5.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

  helperText(f5, "Reasons for Handoff:", 20, 60, 16, { r: 0, g: 0, b: 0 }, "Bold", "CENTER", 320);
  helperText(f5, "Handoff is necessary when a mobile device is moving out of the coverage area of the current cell or when the quality of the connection degrades. The goal is to maintain a reliable and uninterrupted connection.", 25, 105, 12.5, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);

  helperText(f5, "Use styles to define the color, text and any effects applied to objects; or to define the structure and appearance of layout grids.", 25, 315, 12.5, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);
  const f5Next = createNextButton(f5);

  // FRAME 6
  const f6 = figma.createFrame();
  f6.name = "Android Small - 6";
  f6.resize(360, 640);
  f6.x = 1050;
  f6.y = 760;
  f6.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

  helperText(f6, "Handoff metrics", 20, 48, 16, { r: 0.85, g: 0.11, b: 0.38 }, "Bold Italic", "CENTER", 320);
  helperText(f6, "Handoff metrics in a mobile network are measurements and criteria used to determine when and how a handoff should occur. These metrics are crucial for maintaining seamless communication as mobile devices move within the network. Various factors and parameters are considered in making handoff decisions. Here are some key handoff metrics in a mobile network:", 25, 88, 12, { r: 0.13, g: 0.13, b: 0.13 }, "Italic", "CENTER", 310);

  helperText(f6, "Handoff Hysteresis\nSignal Strength\nSignal Quality\nDistance to Neighbouring Cells\nSpeed of Movement", 20, 325, 13, { r: 0.85, g: 0.11, b: 0.38 }, "Bold Italic", "CENTER", 320);
  const f6Next = createNextButton(f6);

  // FRAME 7
  const f7 = figma.createFrame();
  f7.name = "Android Small - 7";
  f7.resize(360, 640);
  f7.x = 1470;
  f7.y = 760;
  f7.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
  helperText(f7, "Thank you!!", 20, 300, 36, { r: 1, g: 0.08, b: 0.58 }, "Bold Italic", "CENTER", 320);

  // LIVE PROTOTYPE CONNECTIONS
  linkPrototype(f1Next, f4);
  linkPrototype(backBtn, f1);
  linkPrototype(f2Next, f4);
  linkPrototype(f4Next, f5);
  linkPrototype(f5Next, f6);
  linkPrototype(f6Next, f7);

  figma.currentPage.flowStartingPoints = [
    { nodeId: f1.id, name: "Flow 1" }
  ];

  figma.viewport.scrollAndZoomIntoView([f1, f2, f4, f5, f6, f7]);
  figma.notify("🚀 Flow 1 prototype generated with ALL page connections! Click Play (▶) in Figma to run.");
})();
