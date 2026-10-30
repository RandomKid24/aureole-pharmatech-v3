import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as k from "/Users/ady/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/ady/.claude/skills/anatomy/kit/lathe.mjs";
import { kitScript } from "/Users/ady/.claude/skills/anatomy/scripts/inline-kit.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const theme = process.argv.includes("--light") ? "light" : "dark";
// one figure per product: humidity chambers have steam generators and %RH, cold chambers and BOD incubators are temperature only
const product = (process.argv.find((a) => a.startsWith("--product=")) ?? "--product=humidity").split("=")[1];
const VARIANTS = {
  humidity: { file: "walk-in-stability-chamber", title: "Walk-in stability chamber", humid: true, setpoints: [{ t: 25, rh: 60 }, { t: 30, rh: 65 }, { t: 30, rh: 75 }, { t: 40, rh: 75 }], blue: [0], blueLabel: "Refrigerant line at 25 °C, 60 %RH" },
  cold: { file: "walk-in-cold-chamber", title: "Walk-in cold chamber", humid: false, setpoints: [{ t: 2 }, { t: 4 }, { t: 6 }, { t: 8 }], blue: [0, 1, 2, 3], blueLabel: "Refrigerant line (compressor cooling the room)" },
  bod: { file: "walk-in-bod-incubator", title: "Walk-in BOD incubator", humid: false, setpoints: [{ t: 10 }, { t: 25 }, { t: 37 }, { t: 60 }], blue: [0, 1], blueLabel: "Refrigerant line while the room is being cooled" },
};
const V = VARIANTS[product];

// 1 world unit = 15 mm
const WIDTH = 860;
const HEIGHT = 560;
const T = 5.33; // 80 mm PUF wall
const H = 160; // 2400 mm room
const CUT = 22;
const RX = 190; // room interior along x (2850 mm)
const RY = 128; // room interior along y (1920 mm)
const FLOOR = { x: -14, y: -12, w: RX + 8 + 14, d: RY + 24, r: 2 };
const FLOOR_T = 10;
const FOOT_H = 5;
const OPEN = [44, 104];
const APRON = { x: RX + 8, y: OPEN[0] - 16, w: 66, d: 52, r: 2 };
const DOOR_H = 118;

// utility: 300 mm deep, 1800 mm tall, behind the left wall, cut open at y = UY1
const UX0 = -25.3;
const UX1 = -T;
const UY0 = 44; // utility is 660 mm wide
const UY1 = 88;
const YC = 66; // plane the utility is cut at in Fig 2 (between the two blowers)
const H2 = 132; // wall height shown in the Fig 2 section
const UH = 120;
const BLOWER = [-21, 55, 108.8]; // x of back face, y, z centre (second blower sits at y = 77, off the cut)
const BLOWER_W = 12;
const BLOWER_R = 9.2;
const GRILLS = { y0: 50, y1: 82, top: [106, 109.5, 113, 116.5], bottom: [10, 13.5, 17, 20.5] };
const HEATER_Z = [70, 77, 84];
const HEATER_X = [-19, -11];
const COIL = { x: -22, y: 46, w: 15, d: 20, r: 1 };
const MANIFOLD = [-17, 24]; // x, z
const HOLES = Array.from({ length: 9 }, (_, i) => 47 + i * 2.1);

// outside the room: control panel, two boilers, steam line
const PFX = -17.3; // face of the control panel, facing the back; it hangs on the wall
const PANEL = { x: PFX, y: 12, w: 12, d: 22, r: 1.2 };
const PANEL_Z = [56, 112];
const GAUGES = [[17.5, 98], [28.5, 98]]; // [y, z] on the panel door
const GAUGE_R = 4.2;
const BUTTONS = [15, 19.5, 24, 28.5].map((y) => [y, 84]);
// duty boiler on the left of the cabinet, standby on the right, each with its own water tank
const BOILERS = [
  { x: -26, y: 26, w: 18, d: 14, r: 2, name: "DUTY", label: "STEAM GENERATOR A" },
  { x: -26, y: 96, w: 18, d: 14, r: 2, name: "STANDBY", label: "STEAM GENERATOR B" },
];
const BOILER_H = 12;
const TANKS = [
  { x: -17, y: 13, w: 18, d: 14, h: BOILER_H, boiler: BOILERS[0] }, // both tanks are the size of a boiler
  { x: -17, y: 125, w: 18, d: 14, h: BOILER_H, boiler: BOILERS[1] },
];
const STEAM_X = -17;
const STEAM_Z = 24;

// ICH Q1A(R2) storage conditions, all inside the chamber range (20-60 C, 40-95 %RH)
const SETPOINTS = V.setpoints.map((p) => ({ rh: 0, ...p }));
const T_RANGE = [20, 60];
const RH_RANGE = [40, 95];

const RACKS = [
  { x: 24, y: 8, w: 46, d: 26, r: 1 },
  { x: 80, y: 8, w: 46, d: 26, r: 1 },
  { x: 136, y: 8, w: 46, d: 26, r: 1 },
];
const SHELVES = [8, 32, 56, 80, 104]; // five trays per rack
const RACK_H = 118;

const FLOOR2 = { x: -132, y: -8, w: 168, d: 144, r: 2 };
const BACK_X = RX + 8; // the back view shows the whole room, same length as the front view
const CX = -160; // compressor units stand this far behind the chamber
const FLOOR3 = { x: CX - 14, y: -36, w: BACK_X - (CX - 14) + 6, d: RY + 28 + 36, r: 2 };
const P1 = k.fitProjection(
  [...k.boxCorners(FLOOR, -FLOOR_T - FOOT_H, 0), ...k.boxCorners(APRON, -FLOOR_T, 0), [RX + 74, OPEN[0], DOOR_H], [0, -8, H], [RX + 8, RY, H]],
  860, 520, { pad: 22, azimuth: 40, elevation: 32 },
);
const P3 = k.fitProjection(
  [...k.boxCorners(FLOOR3, -FLOOR_T - FOOT_H, 0), ...k.boxCorners(FLOOR3, H + 6, H + 6)],
  860, 560, { pad: 22, azimuth: 218, elevation: 30 },
);
let P = P1;
const use = (projection) => { P = projection; };
const at = (point) => k.iso(point, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const poly = (points, closed = false) => k.pathOf(k.pointsAt(points, P), closed);
const rectY = (x0, x1, y, z0, z1) => poly([[x0, y, z0], [x1, y, z0], [x1, y, z1], [x0, y, z1]], true);
const rectX = (x, y0, y1, z0, z1) => poly([[x, y0, z0], [x, y1, z0], [x, y1, z1], [x, y0, z1]], true);
// rounded rectangle on a door face; at3(a, z) maps a position across the door and a height to a 3D point
const roundRect = (at3, a0, a1, z0, z1, r, n = 6) => {
  const pts = [];
  const corner = (ca, cz, from) => { for (let i = 0; i <= n; i++) { const t = from + (i / n) * (Math.PI / 2); pts.push(at3(ca + Math.cos(t) * r, cz + Math.sin(t) * r)); } };
  corner(a1 - r, z1 - r, 0); corner(a0 + r, z1 - r, Math.PI / 2); corner(a0 + r, z0 + r, Math.PI); corner(a1 - r, z0 + r, Math.PI * 1.5);
  return poly(pts, true);
};
// tall narrow viewing slot with a plain frame, as on the real door (about 19 % of the door width, 12 to 91 of 118 high)
const SLOT = { z0: 12, z1: 91, half: 5.7, r: 3 };
const slotSvg = (at3, mid) => [
  L(roundRect(at3, mid - SLOT.half, mid + SLOT.half, SLOT.z0, SLOT.z1, SLOT.r), { tone: "mid" }),
  L(roundRect(at3, mid - SLOT.half + 1.1, mid + SLOT.half - 1.1, SLOT.z0 + 1.1, SLOT.z1 - 1.1, SLOT.r - 0.8), { tone: "lo" }),
  L(k.segment(at3(mid - 3, 60), at3(mid + 3, 78), P) + k.segment(at3(mid - 3, 44), at3(mid + 3, 62), P), { tone: "faint" }),
].join("");
const depth = (x, y, z = 0) => k.depthOf([x, y, z], P);
const byDepth = (items, key) => [...items].sort((a, b) => key(a) - key(b));
const slab = (plan, z, h, style, steps = 3, bevel = 0.5) => S(k.slabOf(plan, z, h, P, steps, bevel), style);
const post = (x, y, r, z, h, style, steps = 20) => S(k.cylinder(x, y, r, z, h, P, steps), style);
const screws = (points, z, size = 0.45, tone = "mid") => D(points.map(([x, y]) => at([x, y, z])), { size, tone });
const alongY = (x, y0, y1, z, r, style) => S(G.disc(0, y1 - y0, r, G.frameAlong([x, y0, z], [0, 1, 0]), P), style);
const alongX = (x0, x1, y, z, r, style) => S(G.disc(0, x1 - x0, r, G.frameAlong([x0, y, z], [1, 0, 0]), P), style);
const hot = (id, html) => `<g class="hot" data-info="${id}">${html}</g>`;
const ball = (c, r, style) => S(G.sphereOf(c, r, P), style);

// ---------- floors ----------
function floorOf(plan, xs, ys) {
  const out = [`<path class="iso-halo" d="${k.haloOf(plan, -FLOOR_T - FOOT_H, FLOOR_T, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(plan, 16), ([a, b]) => depth(a, b))) {
    out.push(post(x, y, 7, -FLOOR_T - FOOT_H, 1.6, { tone: "lo" }, 28));
    out.push(post(x, y, 5.4, -FLOOR_T - FOOT_H + 1.6, FOOT_H - 1.6, { tone: "mid" }, 28));
  }
  out.push(slab(plan, -FLOOR_T, FLOOR_T, { tone: "mid" }, 6, 1));
  const edge = k.insetPlan(plan, 4);
  out.push(L(k.planOutline(edge, 0, P, 4), { tone: "lo" }));
  for (const y of ys) out.push(L(k.lineOnTop([edge.x, y], [edge.x + edge.w, y], 0, P), { tone: "faint" }));
  for (const x of xs) out.push(L(k.lineOnTop([x, edge.y], [x, edge.y + edge.d], 0, P), { tone: "faint" }));
  return out.join("");
}
function doorApron() {
  const out = [slab(APRON, -FLOOR_T, FLOOR_T, { tone: "mid" }, 6, 1)];
  out.push(L(k.planOutline(k.insetPlan(APRON, 4), 0, P, 4), { tone: "lo" }));
  out.push(screws(k.corners(APRON, 8), 0));
  return out.join("");
}
function drain() {
  const grate = { x: 150, y: 96, w: 16, d: 16, r: 2 };
  const out = [slab(grate, 0, 0.8, { tone: "lo", crease: "none" }, 3, 0)];
  for (let i = 0; i < 5; i++) out.push(L(k.planOutline({ x: grate.x + 2.4 + i * 2.6, y: grate.y + 3, w: 1.2, d: 10, r: 0.5 }, 0.8, P, 2), { tone: "faint" }));
  return out.join("");
}

// ---------- back wall (y = 0), Fig 1 only ----------
function backWall() {
  const out = [];
  const W1 = { x: -T, y: -T, w: RX + 8 + T, d: T, r: 0 };
  const seams = [43, 86, 129, 172];
  const jointLines = seams.map((x) => L(k.rise([x, 0], 0, H, P), { tone: "faint" })).join("");
  out.push(S(k.slabOf(W1, 0, H, P, 2, 0.8), { tone: "mid", inner: jointLines }));
  out.push(D(seams.flatMap((x) => [30, 130].map((z) => at([x, 0, z]))), { size: 0.7, tone: "lo" }));
  out.push(L(k.planOutline(k.insetPlan(W1, 1.4), H, P, 2), { tone: "faint" }));
  out.push(slab({ x: 0, y: 0, w: RX, d: 3.2, r: 0 }, 0, 6, { tone: "lo", crease: "none" }, 2, 0));
  const plate = { x: 60, y: 0, w: 32, d: 1, r: 0.6 };
  out.push(slab(plate, 96, 16, { tone: "hi", crease: "none" }, 2, 0));
  out.push(screws([[62, 1], [90, 1]], 109, 0.4, "lo"));
  [102, 106, 110].forEach((z, i) => out.push(L(k.segment([64, 1, z], [88 - i * 6, 1, z], P), { tone: "faint", free: true })));
  return out.join("");
}

// ---------- left wall: the two grills ----------
// full = whole wall as seen from inside (Fig 1); otherwise cut at YC through the grills (Fig 2)
function leftWall(full) {
  const wall = [];
  const top = full ? H : H2;
  const yEnd = full ? RY : YC;
  const gEnd = full ? GRILLS.y1 : YC;
  const jointY = full ? [25, 105] : [25];
  const pieces = [[{ x: -T, y: 0, w: T, d: GRILLS.y0, r: 0 }, 0, top]];
  const gp = { x: -T, y: GRILLS.y0, w: T, d: gEnd - GRILLS.y0, r: 0 };
  pieces.push([gp, 0, 8], [gp, 24, 80], [gp, 120, top - 120]);
  if (full) pieces.push([{ x: -T, y: GRILLS.y1, w: T, d: yEnd - GRILLS.y1, r: 0 }, 0, top]);
  // recess plates behind the openings, so the gaps read as openings into the utility
  for (const [z0, z1] of [[8, 24], [104, 120]]) wall.push(slab({ x: -T, y: GRILLS.y0, w: 0.8, d: gEnd - GRILLS.y0, r: 0 }, z0, z1 - z0, { tone: "lo", crease: "none" }, 2, 0));
  pieces.forEach(([plan, z, h], i) => {
    const inner = i === 0 || (full && i === 4) ? jointY.filter((y) => (i === 0 ? y < GRILLS.y0 : y > GRILLS.y1)).map((y) => L(k.rise([0, y], z, z + h, P), { tone: "faint" })).join("") : "";
    wall.push(S(k.slabOf(plan, z, h, P, 2, 0.6), { tone: "mid", inner }));
    if (!full && i > 0) wall.push(L(k.segment([-0.5, YC, z], [-0.5, YC, z + h], P) + k.segment([-T + 0.5, YC, z], [-T + 0.5, YC, z + h], P), { tone: "lo" }));
  });
  if (!full) wall.push(L(k.segment([-0.5, YC, 0], [-0.5, YC, top], P) + k.segment([-T + 0.5, YC, 0], [-T + 0.5, YC, top], P), { tone: "lo" }));
  wall.push(D(jointY.flatMap((y) => [30, 130].filter(() => (full || y < YC) && (y < GRILLS.y0 || y > GRILLS.y1)).map((z) => at([0, y, z]))), { size: 0.7, tone: "lo" }));
  // louvre slats and the frame rails round each opening, on the room face
  const grill = (slats, z0, z1) => [
    ...slats.map((z) => slab({ x: -3, y: GRILLS.y0, w: 3.4, d: gEnd - GRILLS.y0, r: 0 }, z, 0.8, { tone: "hi", crease: "none" }, 2, 0)),
    ...[z0 - 1.2, z1].map((z) => slab({ x: -0.4, y: GRILLS.y0 - 1.2, w: 0.9, d: gEnd - GRILLS.y0 + 1.2 + (full ? 1.2 : 0), r: 0.3 }, z, 1.2, { tone: "mid", crease: "none" }, 2, 0)),
  ].join("");
  return { wall: wall.join(""), top: grill(GRILLS.top, 104, 120), bottom: grill(GRILLS.bottom, 8, 24) };
}

// ---------- racks ----------
function rack(R) {
  const out = [];
  const postsAt = k.corners(R, 2.2);
  const wire = (x, y) => S(k.slabOf({ x: x - 1.4, y: y - 1.4, w: 2.8, d: 2.8, r: 0.5 }, 0, RACK_H, P, 2, 0.3), { tone: "mid", crease: "none" });
  postsAt.slice(0, 2).forEach(([x, y]) => out.push(wire(x, y)));
  SHELVES.forEach((z) => {
    out.push(S(k.slabOf(R, z, 1.8, P, 3, 0.4), { tone: "mid" }));
    const cols = Math.floor((R.w - 8) / 4.4);
    const rows = Math.floor((R.d - 8) / 4.4);
    out.push(D(k.dotGrid(R.x + 4.4, R.y + 4.4, cols, rows, 4.4, z + 1.8, P), { size: 0.3, tone: "lo" }));
  });
  postsAt.slice(2).forEach(([x, y]) => out.push(wire(x, y)));
  postsAt.forEach(([x, y]) => out.push(D([at([x, y, RACK_H])], { size: 0.5, tone: "lo" })));
  return out.join("");
}

// ---------- door and near walls ----------
function nearWalls() {
  const out = [];
  const W3a = { x: RX, y: 0, w: 8, d: OPEN[0] - 8, r: 0 };
  const W3b = { x: RX, y: OPEN[1] + 8, w: 8, d: RY - OPEN[1] - 8, r: 0 };
  const W4 = { x: -T, y: RY, w: RX + 8 + T, d: 8, r: 0 };
  const cutTop = (plan) => L(k.planOutline(k.insetPlan(plan, 1.8), CUT, P, 2), { tone: "faint" });
  out.push(S(k.slabOf(W3a, 0, CUT, P, 2, 0.8), { tone: "mid", inner: cutTop(W3a) }));
  const leaf = { x: RX + 8, y: OPEN[0] - 8, w: 62, d: 8, r: 1.5 };
  const face = leaf.y + leaf.d;
  const leafSeam = [30, 88].map((z) => L(k.sideSeam(leaf, z, P, 3), { tone: "faint" })).join("");
  out.push(S(k.slabOf(leaf, 0, DOOR_H, P, 3, 0.7), { tone: "hi", crease: "lo", inner: leafSeam }));
  out.push(L(rectY(leaf.x + 6, leaf.x + leaf.w - 6, face, 6, DOOR_H - 6), { tone: "faint" }));
  out.push(slotSvg((a, z) => [a, face, z], leaf.x + leaf.w / 2));
  // cam-lock handle: bevelled latch body with two screws and a key lock, flat chrome lever, safety hook; plate hinges on the other edge; top latch
  const ex = leaf.x + leaf.w;
  out.push(slab({ x: ex - 17, y: face, w: 13, d: 1.4, r: 1 }, 53.5, 10, { tone: "mid", crease: "none" }, 2, 0.3));
  out.push(slab({ x: ex - 15, y: face + 1.4, w: 9, d: 1, r: 0.6 }, 56, 5, { tone: "hi", crease: "none" }, 2, 0.2));
  out.push(D([at([ex - 15.5, face + 1.4, 61]), at([ex - 5.5, face + 1.4, 61])], { size: 0.6, tone: "lo" }));
  out.push(slab({ x: ex - 27, y: face + 1.8, w: 19, d: 1.5, r: 0.6 }, 56.5, 4.5, { tone: "hi", crease: "none" }, 2, 0.3));
  out.push(alongY(ex - 12, face + 1.4, face + 2.6, 55, 0.9, { tone: "hi" }));
  out.push(slab({ x: ex - 12.4, y: face + 2.6, w: 0.8, d: 0.5, r: 0.2 }, 46, 8, { tone: "mid", crease: "none" }, 2, 0));
  out.push(slab({ x: ex - 21, y: face + 1.4, w: 2, d: 1.6, r: 0.5 }, 50, 5, { tone: "mid", crease: "none" }, 2, 0));
  for (const z of [94, 78, 18]) {
    out.push(slab({ x: leaf.x + 0.5, y: face, w: 8, d: 1, r: 0.4 }, z, 6, { tone: "mid", crease: "none" }, 2, 0));
    out.push(post(leaf.x + 1.4, face + 0.9, 1.3, z - 0.4, 6.8, { tone: "hi" }, 14));
    out.push(D([at([leaf.x + 6, face + 1, z + 1.6]), at([leaf.x + 6, face + 1, z + 4.4])], { size: 0.5, tone: "lo" }));
  }
  const cx = leaf.x + leaf.w / 2;
  out.push(slab({ x: cx - 2.4, y: face, w: 4.8, d: 1.2, r: 0.5 }, 100, 8, { tone: "hi", crease: "none" }, 2, 0.2));
  out.push(post(cx, face + 1.6, 0.7, 95, 11, { tone: "mid" }, 12));
  const jambA = { x: RX, y: OPEN[0] - 8, w: 8, d: 8, r: 0 };
  const jambB = { x: RX, y: OPEN[1], w: 8, d: 8, r: 0 };
  out.push(S(k.slabOf(jambA, 0, H - 10, P, 2, 0.6), { tone: "mid" }));
  out.push(slab({ x: RX, y: OPEN[0], w: 8, d: OPEN[1] - OPEN[0], r: 0 }, 0, 1.4, { tone: "lo", crease: "none" }, 2, 0));
  out.push(S(k.slabOf(W3b, 0, CUT, P, 2, 0.8), { tone: "mid", inner: cutTop(W3b) }));
  out.push(S(k.slabOf(jambB, 0, H - 10, P, 2, 0.6), { tone: "mid" }));
  const head = { x: RX, y: OPEN[0], w: 8, d: OPEN[1] - OPEN[0], r: 0 };
  out.push(S(k.slabOf(head, DOOR_H + 2, H - 10 - DOOR_H - 2, P, 2, 0.6), { tone: "mid", inner: L(k.sideSeam(head, 136, P, 2), { tone: "faint" }) }));
  out.push(L(poly([[RX + 8, OPEN[0], 0], [RX + 8, OPEN[0], DOOR_H], [RX + 8, OPEN[1], DOOR_H], [RX + 8, OPEN[1], 0]]), { tone: "faint" }));
  out.push(S(k.slabOf(W4, 0, CUT, P, 2, 0.8), { tone: "mid", inner: cutTop(W4) }));
  return out.join("");
}

// ---------- the utility, cut open at YC (Fig 2) ----------
function utility() {
  const shell = [];
  shell.push(slab({ x: UX0 - 1, y: UY0 - 1, w: UX1 - UX0 + 2, d: YC - UY0 + 1, r: 0.6 }, 0, 1.4, { tone: "lo" }, 2, 0));
  const back = { x: UX0, y: UY0, w: 0.8, d: YC - UY0, r: 0 };
  const endp = { x: UX0, y: UY0, w: UX1 - UX0, d: 0.8, r: 0 };
  shell.push(S(k.slabOf(back, 1.4, UH, P, 2, 0.3), { tone: "mid", inner: L(k.rise([UX0 + 0.8, UY0 + 10], 1.4, UH + 1.4, P), { tone: "faint" }) }));
  shell.push(S(k.slabOf(endp, 1.4, UH, P, 2, 0.3), { tone: "mid", inner: L(k.rise([UX0 + 8, UY0 + 0.8], 1.4, UH + 1.4, P), { tone: "faint" }) }));
  const coil = [];
  coil.push(slab({ x: -23.2, y: UY0 + 1, w: 17.4, d: YC - UY0 - 1, r: 0.6 }, 37, 1.6, { tone: "lo", crease: "none" }, 2, 0));
  coil.push(slab({ x: -23.2, y: UY0 + 1, w: 1, d: YC - UY0 - 1, r: 0 }, 37, 4, { tone: "lo", crease: "none" }, 2, 0));
  coil.push(S(k.slabOf(COIL, 40, 22, P, 3, 0.4), { tone: "mid" }));
  const finXs = Array.from({ length: 9 }, (_, i) => COIL.x + 1.4 + i * 1.5);
  coil.push(L(finXs.map((x) => k.segment([x, YC, 40], [x, YC, 62], P)).join(""), { tone: "lo" }));
  const tubes = [];
  for (const x of [-19.5, -14.5, -9.5]) for (const z of [44, 49, 54, 59]) tubes.push(at([x, YC, z]));
  coil.push(D(tubes, { size: 0.7, tone: "hi" }));
  const steam = [];
  for (const y of [49, 62]) steam.push(slab({ x: MANIFOLD[0] - 1.7, y: y - 1, w: 3.4, d: 2, r: 0.4 }, 1.4, MANIFOLD[1] - 1.3 - 1.4, { tone: "lo", crease: "none" }, 2, 0));
  steam.push(alongY(MANIFOLD[0], UY0 + 2, YC, MANIFOLD[1], 1.3, { tone: "mid" }));
  steam.push(D(HOLES.map((y) => at([MANIFOLD[0] + 1.2, y, MANIFOLD[1] + 0.2])), { size: 0.4, tone: "hi" }));
  const heater = [];
  heater.push(slab({ x: -22, y: UY0 + 1, w: 14, d: 1.2, r: 0.4 }, 68, 20, { tone: "lo", crease: "none" }, 2, 0));
  for (const z of HEATER_Z) {
    heater.push(alongX(HEATER_X[0], HEATER_X[1], UY0 + 2.4, z, 1.1, { tone: "mid" }));
    for (const x of HEATER_X) heater.push(alongY(x, UY0 + 2.4, YC, z, 1.1, { tone: "mid" }));
  }
  const blower = [];
  blower.push(slab({ x: -21, y: 49, w: 12, d: 12, r: 1 }, 90, 10, { tone: "lo" }, 3, 0.3));
  const F = G.frameAlong(BLOWER, [1, 0, 0]);
  blower.push(S(G.disc(0, BLOWER_W, BLOWER_R, F, P), { tone: "hi", crease: "lo" }));
  blower.push(S(G.ringBand(BLOWER_W, BLOWER_W + 1.2, 4.6, 7.8, F, P), { tone: "mid" }));
  blower.push(S(G.disc(BLOWER_W, BLOWER_W + 1.6, 1.6, F, P), { tone: "hi" }));
  return [hot("shell", shell.join("")), hot("coil", coil.join("")), hot("steam", steam.join("")), hot("heater", heater.join("")), hot("blower", blower.join(""))].join("");
}
const BX = BLOWER[0] + BLOWER_W + 1.2;
const bladesAt = (angle) => {
  const out = [];
  for (let i = 0; i < 8; i++) {
    const a = angle + (i / 8) * Math.PI * 2;
    const pts = [0, 0.5, 1].map((t) => {
      const r = 1.6 + (4.8 - 1.6) * t;
      const s = a - 0.8 * t;
      return [BX, BLOWER[1] + Math.sin(s) * r, BLOWER[2] + Math.cos(s) * r];
    });
    out.push(poly(pts));
  }
  return out.join("");
};

// ---------- back view pieces (Fig 3): room box, utility, motors, panel ----------
const gp3 = (yc, zc, a, r) => [PFX, yc + Math.sin(a) * r, zc + Math.cos(a) * r];
function roomBox() {
  const out = [];
  const plan = { x: -T, y: -T, w: BACK_X + T, d: RY + 8 + T, r: 0 };
  const seamsX = [43, 86, 129].map((x) => L(k.rise([x, -T], 0, H, P), { tone: "faint" })).join("");
  const seamsY = [25, 66, 107].map((y) => L(k.rise([-T, y], 0, H, P), { tone: "faint" })).join("");
  out.push(S(k.slabOf(plan, 0, H, P, 2, 0.8), { tone: "mid", inner: seamsX + seamsY }));
  out.push(D([43, 86, 129].flatMap((x) => [30, 130].map((z) => at([x, -T, z]))), { size: 0.7, tone: "lo" }));
  out.push(D([25, 66, 107].flatMap((y) => [30, 130].map((z) => at([-T, y, z]))), { size: 0.7, tone: "lo" }));
  const roof = { x: -T - 1.5, y: -T - 1.5, w: BACK_X + T + 3, d: RY + 8 + T + 3, r: 0 };
  out.push(S(k.slabOf(roof, H, 6, P, 2, 0.8), { tone: "mid", inner: L(k.sideSeam(roof, H + 3, P, 2), { tone: "faint" }) }));
  out.push(L(k.planOutline(k.insetPlan(roof, 5), H + 6, P, 2), { tone: "faint" }));
  return out.join("");
}
// 65 mm validation port holes low on the back wall, hovered on their own
function portHoles() {
  const out = [];
  for (const x of [20, 34]) {
    out.push(alongY(x, -T - 1, -T, 30, 3.2, { tone: "mid" }));
    out.push(alongY(x, -T - 1.4, -T - 1, 30, 2.17, { tone: "lo" }));
    out.push(D([at([x - 3.9, -T - 1.4, 30]), at([x + 3.9, -T - 1.4, 30])], { size: 0.4, tone: "lo" }));
  }
  return hot("porthole", out.join(""));
}

function utilityBack() {
  const out = [];
  const motors = [];
  const box = { x: UX0, y: UY0, w: UX1 - UX0, d: UY1 - UY0, r: 0.8 };
  out.push(slab({ x: UX0 - 1, y: UY0 - 1, w: UX1 - UX0 + 2, d: UY1 - UY0 + 2, r: 0.6 }, 0, 1.4, { tone: "lo" }, 2, 0));
  const seams = [L(k.sideSeam(box, 96, P, 3), { tone: "faint" })].join("");
  out.push(S(k.slabOf(box, 1.4, UH, P, 3, 0.7), { tone: "mid", inner: seams }));
  // service door on the back face (x = UX0, facing the viewer)
  const fx = UX0;
  out.push(L(rectX(fx, UY0 + 3, UY1 - 3, 6, 92), { tone: "faint" }));
  out.push(L(rectX(fx, UY0 + 5, UY1 - 5, 8, 90), { tone: "faint" }));
  for (const y of [UY0 + 5.5, UY1 - 7.7]) out.push(slab({ x: fx - 3.2, y, w: 3.2, d: 2.2, r: 0.8 }, 40, 24, { tone: "lo", crease: "none" }, 2, 0.2));
  for (const [y, z] of [[UY0 + 4, 12], [UY0 + 4, 84], [UY1 - 4, 12], [UY1 - 4, 84]]) out.push(slab({ x: fx - 1.4, y: y - 1.6, w: 1.4, d: 3.2, r: 0.5 }, z, 3.6, { tone: "mid", crease: "none" }, 2, 0));
  // caution label
  out.push(L(rectX(fx, UY0 + 12, UY0 + 22, 70, 80), { tone: "lo" }));
  [73, 75.5, 78].forEach((z) => out.push(L(k.segment([fx, UY0 + 14, z], [fx, UY0 + 20, z], P), { tone: "faint", free: true })));
  // vent slots on the side face (y = UY0)
  for (let i = 0; i < 5; i++) out.push(L(rectY(-22, -9, UY0, 18 + i * 3, 19.8 + i * 3), { tone: "lo" }));
  // the two blower motors on the upper back face, with an isolator beside them
  for (const y of [55, 77]) {
    const out = motors;
    const F = G.frameAlong([fx, y, 104], [-1, 0, 0]);
    out.push(S(G.disc(0, 1.6, 6.6, F, P), { tone: "mid" }));
    out.push(S(G.disc(1.6, 11, 5.4, F, P), { tone: "hi", crease: "lo" }));
    out.push(L(G.ribsOf(F, 1.6, 11, 5.4, 22, P, { seams: true }), { tone: "lo" }));
    out.push(S(G.disc(11, 13, 4.9, F, P), { tone: "mid" }));
    out.push(D(G.dotsOf(F, 13, 3.2, 12, P, { all: true }), { size: 0.35, tone: "lo" }));
    out.push(D(G.dotsOf(F, 13, 1.6, 6, P, { all: true }), { size: 0.35, tone: "lo" }));
    out.push(slab({ x: fx - 8.4, y: y - 2.2, w: 5.2, d: 4.4, r: 0.8 }, 109.2, 3.2, { tone: "mid" }, 2, 0.2));
  }
  motors.push(slab({ x: fx - 3.4, y: 82, w: 3.4, d: 5.6, r: 0.8 }, 100, 9, { tone: "mid" }, 2, 0.3));
  motors.push(S(G.disc(0, 1.6, 1.7, G.frameAlong([fx - 3.4, 84.8, 106], [-1, 0, 0]), P), { tone: "hi" }));
  motors.push(k.wireSvg(at([fx - 5.8, 55, 112.4]), at([fx - 2, 84.8, 109]), { via: [at([fx - 5, 66, 118]), at([fx - 3, 80, 116])], tone: "lo", dotted: true, size: 0.8 }));
  motors.push(k.wireSvg(at([fx - 5.8, 77, 112.4]), at([fx - 2, 84.8, 109]), { via: [at([fx - 5, 80, 117])], tone: "lo", dotted: true, size: 0.8 }));
  return hot("cabinet", out.join("")) + hot("motors", motors.join(""));
}

function panelBack() {
  const out = [];
  const zs = PANEL_Z;
  out.push(`<path class="iso-halo" d="${k.haloOf(PANEL, zs[0], zs[1] - zs[0], P)}" style="filter:blur(3px)"/>`);
  out.push(S(k.slabOf(PANEL, zs[0], zs[1] - zs[0], P, 3, 0.6), { tone: "mid", inner: L(k.sideSeam(PANEL, zs[1] - 3, P, 3), { tone: "faint" }) }));
  const f = PFX;
  const y0 = PANEL.y;
  const y1 = PANEL.y + PANEL.d;
  out.push(L(rectX(f, y0 + 1.6, y1 - 1.6, zs[0] + 2.5, zs[1] - 5), { tone: "faint" }));
  for (const z of [zs[0] + 8, zs[1] - 14]) out.push(slab({ x: f - 1, y: y0 + 0.8, w: 1, d: 1.4, r: 0.4 }, z, 5, { tone: "lo", crease: "none" }, 2, 0));
  out.push(slab({ x: f - 2.8, y: y1 - 5, w: 2.8, d: 2, r: 0.7 }, 66, 18, { tone: "lo", crease: "none" }, 2, 0.2));
  for (let i = 0; i < 4; i++) out.push(L(rectX(f, y0 + 4, y0 + 13, 59 + i * 2.2, 60.4 + i * 2.2), { tone: "lo" }));
  BUTTONS.forEach(([y, z]) => out.push(L(poly(Array.from({ length: 12 }, (_, i) => gp3(y, z, (i / 12) * Math.PI * 2, 1.2)), true), { tone: "mid" })));
  // wall brackets top and bottom
  for (const z of [zs[0] - 1.2, zs[1]]) out.push(slab({ x: PANEL.x + 2, y: y0 + 6, w: 8, d: 10, r: 0.6 }, z, 1.2, { tone: "lo", crease: "none" }, 2, 0));
  return out.join("");
}
// text laid on the panel door, reading along +y
const faceMatrixX = (y, z) => {
  const o = at([PFX, y, z]);
  const u = at([PFX, y + 1, z]);
  const d = at([PFX, y, z - 1]);
  const f = (v) => Math.round(v * 1000) / 1000;
  return `matrix(${f(u[0] - o[0])} ${f(u[1] - o[1])} ${f(d[0] - o[0])} ${f(d[1] - o[1])} ${f(o[0])} ${f(o[1])})`;
};

// ---------- boilers and steam line ----------
function boilers(list = BOILERS, label) {
  const out = [];
  list.forEach((b) => {
    out.push(`<path class="iso-halo" d="${k.haloOf(b, 0, BOILER_H, P)}" style="filter:blur(3px)"/>`);
    const bands = [4, 8].map((z) => L(k.sideSeam(b, z, P, 3), { tone: "faint" })).join("");
    out.push(S(k.slabOf(b, 0, BOILER_H, P, 3, 0.6), { tone: "lo", inner: bands }));
    const topPlate = { x: b.x + 1.5, y: b.y + 1.5, w: b.w - 3, d: b.d - 3, r: 1 };
    out.push(S(k.slabOf(topPlate, BOILER_H, 1.4, P, 3, 0.4), { tone: "mid" }));
    const studs = [[3, 3], [b.w - 6, 3], [3, b.d - 6], [b.w - 6, b.d - 6], [b.w / 2 - 1.5, 3], [b.w / 2 - 1.5, b.d - 6]].map(([dx, dy]) => at([b.x + 1.5 + dx, b.y + 1.5 + dy, BOILER_H + 1.4]));
    out.push(D(studs, { size: 0.5, tone: "lo" }));
    out.push(post(b.x + b.w - 5, b.y + 5, 2.1, BOILER_H + 1.4, 3, { tone: "mid" }, 16));
    out.push(k.faceTextSvg(k.topMatrix([b.x + 3.5, b.y + b.d / 2 + 1.4], BOILER_H + 1.4, P, "x"), label ?? b.label, { size: Math.min(2.8, 14 / ((label ?? b.label).length * 0.6)), tone: "hi" }));
  });
  return out.join("");
}
const boilerHot = (b, id = b.name === "DUTY" ? "duty" : "standby", label) => hot(id, boilers([b], label));
function tankOf(t) {
  const out = [];
  const h = t.h;
  const m = Math.min(t.w, t.d);
  const plan = { x: t.x - t.w / 2, y: t.y - t.d / 2, w: t.w, d: t.d, r: 1.2 };
  out.push(`<path class="iso-halo" d="${k.haloOf(plan, 0, h, P)}" style="filter:blur(3px)"/>`);
  out.push(S(k.slabOf(plan, 0, h, P, 3, 0.7), { tone: "mid", inner: [0.34, 0.67].map((f) => L(k.sideSeam(plan, h * f, P, 3), { tone: "faint" })).join("") }));
  out.push(S(k.slabOf(k.insetPlan(plan, 1.1), h, 1.4, P, 3, 0.4), { tone: "hi" }));
  out.push(L(k.ring(t.x, t.y, m * 0.26, h + 1.4, P, 24), { tone: "lo" }));
  out.push(D(Array.from({ length: 6 }, (_, i) => at([t.x + Math.cos((i / 6) * Math.PI * 2) * m * 0.36, t.y + Math.sin((i / 6) * Math.PI * 2) * m * 0.36, h + 1.4])), { size: 0.35, tone: "lo" }));
  out.push(post(t.x + t.w * 0.3, t.y - t.d * 0.2, 1, h + 1.4, 3, { tone: "mid", crease: "none" }, 12));
  out.push(k.faceTextSvg(k.topMatrix([t.x - t.w * 0.3, t.y + t.d * 0.34], h + 1.4, P, "x"), "WATER", { size: Math.max(1.6, m * 0.15), tone: "lo" }));
  // level gauge on the face that points at the viewer
  const [vx] = k.towardViewer(P);
  const faceX = t.x + (vx > 0 ? t.w / 2 : -t.w / 2);
  out.push(slab({ x: vx > 0 ? faceX : faceX - 1.2, y: t.y - 0.9, w: 1.2, d: 1.8, r: 0.4 }, 3, h - 6, { tone: "lo", crease: "none" }, 2, 0));
  // water line to its boiler, with a valve
  const b = t.boiler;
  const lo = t.y < b.y ? t.y + t.d / 2 - 0.4 : b.y + b.d;
  const hi = t.y < b.y ? b.y : t.y - t.d / 2 + 0.4;
  out.push(alongY(t.x, lo, hi, 5, 1, { tone: "mid" }));
  out.push(slab({ x: t.x - 1.6, y: (lo + hi) / 2 - 1.1, w: 3.2, d: 2.2, r: 0.6 }, 2.6, 4.8, { tone: "mid", crease: "none" }, 2, 0.2));
  out.push(post(t.x, (lo + hi) / 2, 1.4, 7.4, 0.8, { tone: "hi" }, 14));
  return out.join("");
}
const tankHot = (t) => hot("tank", tankOf(t));

// steam header from a boiler to the cabinet: segments = [{ b, from }], from = y of the cabinet face (or the cut)
function steamLine(segments) {
  const out = [];
  segments.forEach(({ b, from }) => {
    const y = b.y + b.d / 2;
    const lo = Math.min(from, y);
    const hi = Math.max(from, y);
    out.push(alongY(STEAM_X, lo, hi, STEAM_Z, 1.7, { tone: "lo" }));
    out.push(slab({ x: STEAM_X - 2.6, y: from < y ? from + 3 : from - 5, w: 5.2, d: 2, r: 0.6 }, STEAM_Z - 2.6, 5.2, { tone: "mid", crease: "none" }, 2, 0));
    out.push(post(STEAM_X, y, 1.7, BOILER_H + 4.4, STEAM_Z - BOILER_H - 4.4, { tone: "lo", crease: "none" }, 16));
    out.push(post(STEAM_X, y, 2.7, BOILER_H + 8, 4, { tone: "mid" }, 16));
    out.push(post(STEAM_X, y, 3.4, BOILER_H + 12, 1.2, { tone: "mid" }, 16));
    out.push(ball([STEAM_X, y, STEAM_Z], 2.2, { tone: "lo" }));
  });
  return out.join("");
}

// ---------- compressor units and refrigerant piping (Fig 2) ----------
// two remote units (run / standby) feed the cooling coil; they can stand up to 15 m away, so the lines are drawn short
const CS = 1.5; // compressor units are drawn at 150 %
const CW = 16 * CS; // across x
const CD = 26 * CS; // along y, fan on the +y end, gauges and valves on the -x side
const CH = 16 * CS;
const CZ = 3; // skid rails under the cabinet
const COMPS = [
  { x: CX, y: 40, id: "compA", label: "COMPRESSOR A" },
  { x: CX, y: 40 + CD + 6, id: "compB", label: "COMPRESSOR B" },
];
const compCentre = (c) => [c.x + CW / 2, c.y + CD / 2];
const VY = 3 * CS; // y of the service valves from the cabinet's back end
const VALVES = [{ z: CZ + 12.5 * CS, len: 2.5 * CS }, { z: CZ + 10 * CS, len: 5.5 * CS }];
// each line leaves a plate on the cabinet's left side, steps out past the boiler, drops to the floor and runs to the compressors' service valves
const REF = [
  { zp: 46, xp: -17, yo: 38, xs: -31, hx: CX - VALVES[0].len - 0.5, zh: VALVES[0].z },
  { zp: 52, xp: -12.5, yo: 34.5, xs: -34, hx: CX - VALVES[1].len - 0.5, zh: VALVES[1].z },
];
const REF_R = 1.1;
function compUnit(c) {
  const out = [];
  const plan = { x: c.x, y: c.y, w: CW, d: CD, r: 0.8 * CS };
  out.push(`<path class="iso-halo" d="${k.haloOf(plan, CZ, CH, P)}" style="filter:blur(3px)"/>`);
  // skid rails, then a panelled cabinet like a packaged condensing unit
  for (const x of [c.x + 2 * CS, c.x + CW - 4.5 * CS]) out.push(slab({ x, y: c.y - CS, w: 2.5 * CS, d: CD + 2 * CS, r: 0 }, 0, CZ, { tone: "lo", crease: "none" }, 2, 0));
  out.push(S(k.slabOf(plan, CZ, CH, P, 3, 0.6), { tone: "hi", crease: "lo", inner: L(k.sideSeam(plan, CZ + CH - 2.2 * CS, P, 3), { tone: "faint" }) }));
  const yf = c.y + CD;
  const xf = c.x;
  // fan guard on the +y end: shroud, rings, spokes, motor hub
  const fz = CZ + CH / 2;
  const fx = c.x + CW / 2;
  const ringY = (r, y) => poly(Array.from({ length: 28 }, (_, i) => [fx + Math.sin((i / 28) * Math.PI * 2) * r, y, fz + Math.cos((i / 28) * Math.PI * 2) * r]), true);
  out.push(alongY(fx, yf, yf + 1.6 * CS, fz, 6.6 * CS, { tone: "lo" }));
  for (const r of [6.2 * CS, 4.7 * CS, 3.2 * CS]) out.push(L(ringY(r, yf + 1.6 * CS), { tone: r > 6 * CS ? "hi" : "mid" }));
  const spokes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return k.segment([fx + Math.sin(a) * 1.8 * CS, yf + 1.6 * CS, fz + Math.cos(a) * 1.8 * CS], [fx + Math.sin(a) * 6.2 * CS, yf + 1.6 * CS, fz + Math.cos(a) * 6.2 * CS], P);
  });
  out.push(L(spokes.join(""), { tone: "mid" }));
  out.push(alongY(fx, yf + 1.6 * CS, yf + 3.4 * CS, fz, 1.9 * CS, { tone: "mid" }));
  // access panels with recessed handles on the -x side
  out.push(L(rectX(xf, c.y + 9 * CS, c.y + CD - CS, CZ + 1.2 * CS, CZ + CH - 1.2 * CS), { tone: "faint" }));
  out.push(L(rectX(xf, c.y + 14 * CS, c.y + 17.5 * CS, CZ + 5 * CS, CZ + 11 * CS), { tone: "lo" }));
  for (const y of [c.y + 10 * CS, c.y + CD - 2 * CS]) out.push(D([at([xf, y, CZ + 2.2 * CS]), at([xf, y, CZ + CH - 2.2 * CS])], { size: 0.5, tone: "lo" }));
  // two gauges and two brass service valves on the connection end
  const gy = c.y + VY;
  const ringX = (y, z, r) => poly(Array.from({ length: 20 }, (_, i) => [xf, y + Math.sin((i / 20) * Math.PI * 2) * r, z + Math.cos((i / 20) * Math.PI * 2) * r]), true);
  for (const z of [CZ + 3.2 * CS, CZ + 7 * CS]) {
    out.push(L(ringX(gy, z, 1.5 * CS), { tone: "mid" }), L(ringX(gy, z, 0.8 * CS), { tone: "faint" }));
  }
  VALVES.forEach(({ z, len }) => {
    out.push(alongX(xf - len, xf, gy, z, 0.7 * CS, { tone: "mid" }));
    out.push(alongX(xf - len - 0.4, xf - len + 0.5, gy, z, 1.1 * CS, { tone: "hi" }));
  });
  out.push(k.faceTextSvg(k.topMatrix([c.x + 2 * CS, c.y + CD / 2 + 1], CZ + CH, P, "x"), c.label, { size: 1.4 * CS, tone: "hi" }));
  return hot(c.id, out.join(""));
}
const compLamp = (c) => [c.x + CW - 3 * CS, c.y + 4 * CS, CZ + CH + 0.4];
const GLAND = 2; // entry plate on the cabinet's left side (y = UY0), where the refrigerant lines go through
// corner points of one refrigerant line, from the entry plate to the far compressor's valve
const refPath = ({ zp, xp, yo, xs, hx, zh }) => [
  [xp, UY0 - GLAND, zp], [xp, yo, zp], [xs, yo, zp], [xs, yo, zh], [hx, yo, zh], [hx, COMPS[1].y + VY, zh],
];
function refPiping() {
  const out = [];
  out.push(slab({ x: -20, y: UY0 - GLAND, w: 12, d: GLAND, r: 0.6 }, 41, 16, { tone: "mid" }, 2, 0.2));
  for (const [x, z] of [[-18.5, 42.5], [-9.5, 42.5], [-18.5, 55.5], [-9.5, 55.5]]) out.push(D([at([x, UY0 - GLAND, z])], { size: 0.5, tone: "lo" }));
  REF.forEach((line) => {
    const { zp, xp, yo, xs, hx, zh } = line;
    out.push(alongY(xp, UY0 - GLAND - 2.6, UY0 - GLAND, zp, REF_R * 1.6, { tone: "mid" }));
    out.push(alongY(xp, yo, UY0 - GLAND, zp, REF_R, { tone: "lo" }));
    out.push(alongX(xs, xp, yo, zp, REF_R, { tone: "lo" }));
    out.push(post(xs, yo, REF_R, zh, zp - zh, { tone: "lo" }, 14));
    out.push(alongX(hx, xs, yo, zh, REF_R, { tone: "lo" }));
    out.push(alongY(hx, yo, COMPS[1].y + VY, zh, REF_R, { tone: "lo" }));
    for (const [x, y, z] of refPath(line).slice(1, 5)) out.push(ball([x, y, z], REF_R * 1.15, { tone: "mid" }));
  });
  return hot("refpipe", out.join(""));
}
// floor dimension: the compressor units can stand up to 15 m from the chamber
function distanceNote() {
  const y = 4;
  const x0 = UX0;
  const x1 = CX + CW / 2;
  const tick = (x) => k.segment([x, y - 3, 0], [x, y + 3, 0], P);
  return [
    L(k.segment([x0, y, 0], [x1, y, 0], P), { tone: "mid" }),
    L(tick(x0) + tick(x1), { tone: "mid" }),
    // the +x axis runs up-left on screen from this side, so turn the text half a turn to read left to right
    k.faceTextSvg(k.topMatrix([(x0 + x1) / 2 + 9, y - 3], 0, P, "x").replace(/matrix\(([^)]+)\)/, (_, v) => { const [a, b, c, d, e, f] = v.trim().split(/[\s,]+/).map(Number); return `matrix(${-a} ${-b} ${-c} ${-d} ${e} ${f})`; }), "UP TO 15 M", { size: 2.8, tone: "hi" }),
  ].join("");
}
// blue wash over the lines that carry refrigerant while the room holds 25 C / 60 %RH
function refBlue() {
  const segs = [];
  REF.forEach((line) => {
    const pts = refPath(line).map(([x, y, z]) => [x, y, z + 0.3]);
    for (let i = 1; i < pts.length; i++) segs.push(k.segment(pts[i - 1], pts[i], P));
  });
  return `<g data-part="refblue" opacity="0">${L(segs.join(""), { tone: "blue" })}</g>`;
}

// ---------- air paths ----------
const slat = (list, i) => list[i] + 0.8;
const wire = (from, to, via = []) => k.wireSvg(at(from), at(to), { via: via.map(at), tone: "lit", flow: true, size: 0.9 });
// a closed loop: out of the bottom grill, round the room, back into the top grill
const smoothWire = (points, radius = 12) => {
  const pts = G.fillet(points, radius, 8);
  return k.wireSvg(at(pts[0]), at(pts[pts.length - 1]), { via: pts.slice(1, -1).map(at), tone: "lit", flow: true, size: 0.9 });
};
function airRoom() {
  const bottom = slat(GRILLS.bottom, 0);
  const topEnd = slat(GRILLS.top, 3);
  const loop = (y, far, ceiling) => smoothWire([[-1.4, y, bottom], [10, y, 7], [far - 14, y, 6], [far, y, 24], [far, y, ceiling - 12], [far - 14, y, ceiling], [24, y, ceiling], [4, y, ceiling - 12], [-1.4, y, topEnd]], 14);
  return [loop(58, 150, 138), loop(74, 128, 128)].join("");
}
function airUtility() {
  const bottom = slat(GRILLS.bottom, 0);
  const topEnd = slat(GRILLS.top, 3);
  return [
    // top grill into the blower, down through heater, coil and steam, out of the bottom grill
    wire([-1.4, 62, topEnd], [BLOWER[0] + BLOWER_W, 62, 109.6], [[-5.4, 62, 114]]),
    wire([-15, 55, 90], [-1.4, 62, bottom], [[-15, 63, 66], [-15, 64, 36], [-9, 64, 24]]),
    // round the room and back to the top grill
    smoothWire([[-1.4, 62, bottom], [10, 62, 7], [22, 62, 6], [30, 62, 24], [30, 62, 112], [22, 62, 126], [8, 62, 126], [-1.4, 62, topEnd]], 12),
  ].join("");
}

const INFO = {
  wall: ["Room walls", "80mm PUF insulated walls with various MOC to choose from"],
  "grill-top": ["Top grill: air suction", "The blowers run continuously, drawing air from the chamber into the utility so that the air keeps circulating."],
  "grill-bottom": ["Bottom grill: air discharge", "Air is discharged from the utility into the chamber as per the temperature and humidity values selected."],
  rack: ["SS304 racks", "5 number of trays with adjustable height"],
  door: ["Door", "Insulated walk-in door with a toughened-glass viewing window."],
  shell: ["Utility", "Air-handling plenum behind the rear wall, about 300 mm deep and 1800 mm high. It houses the blowers, dry heater, cooling coil and steam injection manifold."],
  blower: ["Blowers", "Twin blowers (one in the section plane) draw return air through the top grill and push it down across the heater and cooling coil."],
  heater: ["U-shaped dry heater", "Sensible-heating stage. It is energised when chamber temperature is below setpoint (red in the drawing)."],
  coil: ["Cooling coil", "Evaporator coil fed with refrigerant from the compressor units. It removes sensible and latent heat when temperature or %RH is above setpoint (blue in the drawing)."],
  steam: ["Steam injection", "Perforated steam manifold at the base of the utility. Steam is injected into the airstream to raise %RH to setpoint."],
  duty: ["Steam generator A (duty)", "Primary steam source for humidification, with a dedicated feed-water tank. Its indicator lamp is lit while in service."],
  standby: ["Steam generator B (standby)", "Redundant steam generator with its own feed-water tank. It takes over automatically if steam generator A fails."],
  steamgen: ["Steam generator A", "Generates the steam used for humidification and feeds the injection manifold, with a dedicated feed-water tank."],
  tank: ["Water storage tank", "Feed-water storage tank for the adjacent steam generator. One tank is fitted per unit."],
  steamline: ["Steam line", "Steam header from the steam generator to the injection manifold. The routing is drawn schematically."],
  compA: ["Compressor unit A (running)", "Remote refrigeration compressor unit. It compresses and rejects heat from the refrigerant gas circulating through the cooling coil in the utility. May be located up to 15 m from the chamber."],
  compB: ["Compressor unit B (standby)", "Redundant compressor unit, connected to the same cooling coil. It takes over if compressor A is out of service. May be located up to 15 m from the chamber."],
  refpipe: ["Refrigerant piping", "Refrigerant lines from the cooling coil inside the utility to the compressor units. They leave the cabinet through a sealed entry plate on its left side, level with the coil, with a shared header to both units. Turns blue at 25 °C / 60 %RH. Run length up to 15 m."],
  cabinet: ["Utility cabinet", "Rear of the utility, with its service door for maintenance access."],
  motors: ["Blower motors", "Two drive motors on the upper back face of the utility, one per blower, with an isolator switch beside them."],
  panel: ["Control panel", "To controlling system as well as connection to power supply is connected here along with all electrical components"],
  porthole: ["Validation port holes", "Validation of equipment: third-party sensors are introduced through these ports. These are 65 mm port holes."],
  screen: ["HMI - Human-Machine Interface", "Operator interface by the door. Shows the room temperature and %RH and is used to monitor and set the chamber conditions."],
  estop: ["Emergency stop", "Push button that stops the chamber operation in an emergency."],
  errlamp: ["Visual error lamp", "Indicator lamp that lights when the system raises a fault or alarm."],
  reset: ["Reset button", "Resets the system after an alarm or emergency stop has been cleared."],
};
if (!V.humid) {
  for (const id of ["duty", "standby", "steamgen", "tank", "steamline", "steam"]) delete INFO[id];
  INFO.rack = ["Racks with trays", "Racks with trays stand inside the chamber. The number of trays and the rack layout depend on the model."];
  INFO["grill-bottom"] = ["Bottom grill: air discharge", "Air is discharged from the utility into the chamber as per the temperature value selected."];
  INFO.screen = ["HMI - Human-Machine Interface", "Operator interface by the door. Shows the room temperature and is used to monitor and set the chamber temperature."];
  INFO.refpipe = ["Refrigerant piping", "Refrigerant lines from the cooling coil inside the utility to the compressor units. They leave the cabinet through a sealed entry plate on its left side, level with the coil, with a shared header to both units. Turns blue while the room is being cooled. Run length up to 15 m."];
  INFO.compA = ["Compressor unit A (master)", "Master refrigeration compressor unit of the split-type refrigeration system. It compresses and rejects heat from the refrigerant gas circulating through the cooling coil in the utility. May be located up to 15 m from the chamber."];
  INFO.compB = ["Compressor unit B (stand by)", "Stand-by compressor unit, connected to the same cooling coil. It takes over if the master unit is out of service. May be located up to 15 m from the chamber."];
}
// ---------- outside, door side (Fig 1, second view) ----------
function outsideView() {
  const out = [];
  const X = RX + 8; // outer face of the door wall
  const Y = RY + 8; // outer face of the front wall
  const box = { x: -T, y: -T, w: X + T, d: Y + T, r: 0 };
  const seams = [
    ...[20, 120].map((y) => L(k.rise([X, y], 0, H, P), { tone: "faint" })),
    ...[43, 86, 129].map((x) => L(k.rise([x, Y], 0, H, P), { tone: "faint" })),
  ].join("");
  const walls = [];
  walls.push(S(k.slabOf(box, 0, H, P, 2, 0.8), { tone: "mid", inner: seams }));
  walls.push(D([[X, 20], [X, 120], [43, Y], [86, Y], [129, Y]].flatMap(([x, y]) => [30, 130].map((z) => at([x, y, z]))), { size: 0.7, tone: "lo" }));
  walls.push(slab({ x: -T - 1.5, y: -T - 1.5, w: X + T + 3, d: Y + T + 3, r: 0 }, H, 6, { tone: "mid" }, 2, 0.8));
  walls.push(L(k.planOutline({ x: -T + 3.5, y: -T + 3.5, w: X + T - 7, d: Y + T - 7, r: 0 }, H + 6, P, 2), { tone: "faint" }));
  out.push(hot("wall", walls.join("")));

  const door = [];
  door.push(slab({ x: X, y: OPEN[0] - 3, w: 1.2, d: OPEN[1] - OPEN[0] + 6, r: 0.5 }, 0, DOOR_H + 3, { tone: "mid", crease: "none" }, 2, 0));
  const leaf = { x: X + 1.2, y: OPEN[0], w: 3.4, d: OPEN[1] - OPEN[0], r: 1.2 };
  door.push(S(k.slabOf(leaf, 0, DOOR_H, P, 3, 0.7), { tone: "hi", crease: "lo", inner: [30, 88].map((z) => L(k.sideSeam(leaf, z, P, 3), { tone: "faint" })).join("") }));
  const fx = leaf.x + leaf.w;
  door.push(L(rectX(fx, OPEN[0] + 4, OPEN[1] - 4, 6, DOOR_H - 6), { tone: "faint" }));
  door.push(slotSvg((a, z) => [fx, a, z], (OPEN[0] + OPEN[1]) / 2));
  // cam-lock handle: bevelled latch body with two screws and a key lock, flat chrome lever, safety hook, keeper on the frame
  const ey = OPEN[1];
  door.push(slab({ x: fx, y: ey - 17, w: 1.4, d: 13, r: 1 }, 53.5, 10, { tone: "mid", crease: "none" }, 2, 0.3));
  door.push(slab({ x: fx + 1.4, y: ey - 15, w: 1, d: 9, r: 0.6 }, 56, 5, { tone: "hi", crease: "none" }, 2, 0.2));
  door.push(D([at([fx + 2.4, ey - 15.5, 61]), at([fx + 2.4, ey - 5.5, 61])], { size: 0.6, tone: "lo" }));
  door.push(slab({ x: fx + 1.8, y: ey - 27, w: 1.5, d: 19, r: 0.6 }, 56.5, 4.5, { tone: "hi", crease: "none" }, 2, 0.3));
  door.push(alongX(fx + 1.4, fx + 2.6, ey - 12, 55, 0.9, { tone: "hi" }));
  door.push(slab({ x: fx + 2.6, y: ey - 12.4, w: 0.5, d: 0.8, r: 0.2 }, 46, 8, { tone: "mid", crease: "none" }, 2, 0));
  door.push(slab({ x: fx + 1.4, y: ey - 21, w: 1.6, d: 2, r: 0.5 }, 50, 5, { tone: "mid", crease: "none" }, 2, 0));
  door.push(slab({ x: X, y: ey + 0.4, w: 3, d: 4, r: 1 }, 53, 8, { tone: "hi", crease: "none" }, 2, 0.3));
  for (const z of [94, 78, 18]) {
    door.push(slab({ x: fx, y: OPEN[0] + 0.5, w: 1, d: 8, r: 0.4 }, z, 6, { tone: "mid", crease: "none" }, 2, 0));
    door.push(post(fx + 0.9, OPEN[0] + 1.4, 1.3, z - 0.4, 6.8, { tone: "hi" }, 14));
    door.push(D([at([fx + 1, OPEN[0] + 6, z + 1.6]), at([fx + 1, OPEN[0] + 6, z + 4.4])], { size: 0.5, tone: "lo" }));
  }
  const dm = (OPEN[0] + OPEN[1]) / 2;
  door.push(slab({ x: fx, y: dm - 2.4, w: 1.2, d: 4.8, r: 0.5 }, 100, 8, { tone: "hi", crease: "none" }, 2, 0.2));
  door.push(post(fx + 1.6, dm, 0.7, 95, 11, { tone: "mid" }, 12));
  out.push(hot("door", door.join("")));

  const scr = [];
  const housing = { x: X, y: 112, w: 2.6, d: 18, r: 1.4 };
  scr.push(S(k.slabOf(housing, 54, 50, P, 3, 0.5), { tone: "mid" }));
  const sx = X + 2.6;
  scr.push(L(rectX(sx, 114, 128, 76, 100), { tone: "lo" }));
  scr.push(L(rectX(sx, 115, 127, 77.2, 98.8), { tone: "faint" }));
  scr.push(D([at([sx, 113, 72.4]), at([sx, 129, 72.4]), at([sx, 113, 101.6]), at([sx, 129, 101.6])], { size: 0.45, tone: "lo" }));
  scr.push(k.faceTextSvg(k.sideMatrix([sx, 121], V.humid ? 90.6 : 87, P, "right"), "25.0 °C", { size: 3.8, tone: "hi", anchor: "middle" }).replace("<text", '<text data-part="lcd-t"'));
  if (V.humid) scr.push(k.faceTextSvg(k.sideMatrix([sx, 121], 83.4, P, "right"), "60 %RH", { size: 3.8, tone: "hi", anchor: "middle" }).replace("<text", '<text data-part="lcd-rh"'));
  out.push(hot("screen", scr.join("")));
  // emergency stop, error lamp and reset under the HMI
  const ringAt = (y, z, r) => poly(Array.from({ length: 24 }, (_, i) => [sx + 1.7, y + Math.sin((i / 24) * Math.PI * 2) * r, z + Math.cos((i / 24) * Math.PI * 2) * r]), true);
  const BZ = 63;
  out.push(hot("estop", alongX(sx, sx + 1.7, 115.5, BZ, 2.6, { tone: "hi" }) + L(ringAt(115.5, BZ, 2.6), { tone: "red" }) + L(ringAt(115.5, BZ, 1.4), { tone: "red" })));
  out.push(hot("errlamp", alongX(sx, sx + 1.2, 121.5, BZ, 1.7, { tone: "mid" }) + L(ringAt(121.5, BZ, 0.8), { tone: "red" })));
  out.push(hot("reset", alongX(sx, sx + 1.2, 126.5, BZ, 1.7, { tone: "mid" }) + L(ringAt(126.5, BZ, 0.8), { tone: "lit" })));
  return out.join("");
}

// ---------- assemble ----------
const heaterGlow = () => HEATER_Z.flatMap((z) => HEATER_X.map((x) => k.segment([x + 0.4, UY0 + 3.4, z + 1.1], [x + 0.4, YC - 0.3, z + 1.1], P))).join("");
const coilGlow = () => Array.from({ length: 9 }, (_, i) => COIL.x + 1.4 + i * 1.5).map((x) => k.segment([x, YC, 40], [x, YC, 62], P)).join("");
const WIRE_CSS = `<style>.iso-wire[data-tone="lit"] .iso-line{stroke-width:1.3}</style>`;
const boilerLine = (b) => [b];
void boilerLine;

use(P1);
const lw1 = leftWall(true);
const racksSorted = byDepth(RACKS, (r) => depth(r.x + r.w / 2, r.y + r.d / 2));
const svg1 = k.figureSvg({
  width: 860,
  height: 520,
  label:
    "A walk-in stability chamber seen from the door side with its roof off. The room is stainless steel with 80 mm PUF walls and racks of five trays. The left wall has two louvred grills, a top one that draws room air in and a bottom one that returns conditioned air. The door stands open with a toughened-glass viewing window.",
  body: [
    WIRE_CSS,
    floorOf(FLOOR, [57, 115], [44, 88]),
    drain(),
    doorApron(),
    hot("wall", backWall()),
    hot("wall", lw1.wall),
    hot("grill-top", lw1.top),
    hot("grill-bottom", lw1.bottom),
    ...racksSorted.map((r) => hot("rack", rack(r))),
    hot("door", nearWalls()),
    airRoom(),
  ],
});

use(P1);
const svg1b = k.figureSvg({
  width: 860,
  height: 520,
  label:
    "The walk-in stability chamber seen from outside on the door side. The door is shut, with its toughened-glass window, and a small screen beside it shows the room temperature and humidity.",
  body: [floorOf(FLOOR, [57, 115], [44, 88]), doorApron(), outsideView()],
});

use(P3);
const svg3 = k.figureSvg({
  width: 860,
  height: 560,
  label:
    V.humid
      ? "The back of a walk-in stability chamber. The utility cabinet stands against the rear wall with a service door, two blower motors and an isolator switch on its upper back face. Two compressor units stand a short way behind it and feed its cooling coil through refrigerant piping. A small control panel with four selector buttons hangs on the wall above steam generator A. Steam generator A (duty) stands to the left of the cabinet and steam generator B (standby) to the right, each with its own water tank, and each feeds the cabinet through an insulated steam pipe."
      : "The back of a walk-in chamber. The utility cabinet stands against the rear wall with a service door, two blower motors and an isolator switch on its upper back face. Two compressor units, a master and a stand-by, stand a long way behind it and feed its cooling coil through refrigerant piping. A small control panel with four selector buttons hangs on the wall.",
  body: [
    floorOf(FLOOR3, [-36], [44, 88]),
    distanceNote(),
    hot("wall", roomBox()),
    portHoles(),
    ...byDepth(
      [
        ...(V.humid ? [
          ...TANKS.map((t) => ({ html: tankHot(t), x: t.x, y: t.y })),
          ...BOILERS.map((b) => ({ html: boilerHot(b), x: b.x + b.w / 2, y: b.y + b.d / 2 })),
          { html: hot("steamline", steamLine([{ b: BOILERS[0], from: UY0 }])), x: STEAM_X, y: (BOILERS[0].y + BOILERS[0].d / 2 + UY0) / 2 },
          { html: hot("steamline", steamLine([{ b: BOILERS[1], from: UY1 }])), x: STEAM_X, y: (BOILERS[1].y + BOILERS[1].d / 2 + UY1) / 2 },
        ] : []),
        { html: utilityBack(), x: (UX0 + UX1) / 2, y: (UY0 + UY1) / 2 },
        { html: hot("panel", panelBack()), x: PANEL.x + PANEL.w / 2, y: PANEL.y + PANEL.d / 2 },
        ...COMPS.map((c) => ({ html: compUnit(c), x: compCentre(c)[0], y: compCentre(c)[1] })),
        { html: refPiping(), x: (CX + UX0) / 2, y: 42 },
      ],
      (o) => depth(o.x, o.y),
    ).map((o) => o.html),
    refBlue(),
    `<g data-part="lamps"></g>`,
  ],
});

const live = `
const P3 = ${JSON.stringify(P3)};
const SETPOINTS = ${JSON.stringify(SETPOINTS)};
const HUM = ${V.humid}, BLUE = ${JSON.stringify(V.blue)};
const T_RANGE = ${JSON.stringify(T_RANGE)}, RH_RANGE = ${JSON.stringify(RH_RANGE)};
const GAUGES = ${JSON.stringify(GAUGES)}, GAUGE_R = ${GAUGE_R}, PFX = ${PFX};
const BUTTONS = ${JSON.stringify(BUTTONS)};
const DUTY = ${JSON.stringify([BOILERS[0].x + BOILERS[0].w - 5, BOILERS[0].y + 5])}, STANDBY = ${JSON.stringify([BOILERS[1].x + BOILERS[1].w - 5, BOILERS[1].y + 5])}, BOILER_TOP = ${BOILER_H + 1.4 + 3};
const COMP_LAMPS = ${JSON.stringify(COMPS.map(compLamp))};
const stages = [...document.querySelectorAll(".iso-stage")];
const svgs = stages.map((stage) => stage.querySelector("svg"));
const $ = (svg, name) => svg.querySelector('[data-part="' + name + '"]');
const refBlueEl = $(svgs[1], "refblue"), lamps3 = $(svgs[1], "lamps");
const lcdT = document.querySelector('[data-part="lcd-t"]'), lcdRh = document.querySelector('[data-part="lcd-rh"]');
const readouts = [...document.querySelectorAll("[data-readout]")];
const still = matchMedia("(prefers-reduced-motion: reduce)");
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
let sp = 0, T = SETPOINTS[0].t, RH = SETPOINTS[0].rh, clock = 0, since = 0;
let touring = true, frame = 0, last = 0, visible = false, idleTimer = 0;
const TAU_T = 5, TAU_RH = 4; // seconds on the page; a real room takes far longer
const dot = (p, r, on) => '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' + r + '"' + (on ? "" : ' fill-opacity="0.5"') + '/>';
function paint() {
  const s = SETPOINTS[sp];
  lcdT.textContent = T.toFixed(1) + " °C";
  if (lcdRh) lcdRh.textContent = Math.round(RH) + " %RH";
  const lamp = (P, [x, y], on) => dot(iso([x, y, BOILER_TOP], P), on ? 1.2 : 0.5, on);
  refBlueEl.setAttribute("opacity", BLUE.includes(sp) ? "1" : "0");
  lamps3.innerHTML = '<g class="iso-dots" data-tone="lit">' + BUTTONS.map(([y, z], i) => dot(iso([PFX - 0.2, y, z], P3), i === sp ? 0.8 : 0.35, i === sp)).join("") + (HUM ? lamp(P3, DUTY, true) + lamp(P3, STANDBY, false) : "") + dot(iso(COMP_LAMPS[0], P3), 1.2, true) + dot(iso(COMP_LAMPS[1], P3), 0.5, false) + '</g>';
  const text = SETPOINTS[sp].t + " °C" + (HUM ? " / " + SETPOINTS[sp].rh + " %RH" : "") + " set · room " + T.toFixed(1) + " °C" + (HUM ? ", " + Math.round(RH) + " %RH" : "");
  readouts.forEach((el) => { if (el.textContent !== text) el.textContent = text; });
  stages.forEach((stage) => { stage.setAttribute("aria-valuenow", String(sp)); stage.setAttribute("aria-valuetext", text); });
  document.querySelectorAll(".ch-cond button").forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.sp) === sp)));
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  const calm = still.matches;
  clock += dt;
  if (touring) { since += dt; if (since > 7) { since = 0; sp = (sp + 1) % SETPOINTS.length; } }
  const s = SETPOINTS[sp];
  T += (s.t - T) * (1 - Math.exp(-dt / TAU_T));
  RH += (s.rh - RH) * (1 - Math.exp(-dt / TAU_RH));
  paint();
  frame = visible && !calm ? requestAnimationFrame(tick) : 0;
}
const run = () => { if (!frame && visible) { last = 0; frame = requestAnimationFrame(tick); } };
const choose = (next) => { touring = false; sp = clamp(next, 0, SETPOINTS.length - 1); clearTimeout(idleTimer); idleTimer = setTimeout(() => { touring = !still.matches; since = 0; run(); }, 6000); if (still.matches) { T = SETPOINTS[sp].t; RH = SETPOINTS[sp].rh; paint(); } run(); };
const seen = new Set();
const observer = new IntersectionObserver((entries) => { entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target))); visible = seen.size > 0; if (visible) run(); }, { rootMargin: "120px 0px" });
const INFO = ${JSON.stringify(INFO)};
document.querySelectorAll(".ch-views button").forEach((button) => button.addEventListener("click", () => {
  const stage = button.closest("figure").querySelector(".iso-stage");
  const which = Number(button.dataset.view);
  stage.querySelectorAll("svg").forEach((svg, i) => { svg.style.display = i === which ? "" : "none"; });
  button.parentElement.querySelectorAll("button").forEach((other) => other.setAttribute("aria-pressed", String(other === button)));
}));
const buttons = [...document.querySelectorAll(".ch-cond button")];
buttons.forEach((button) => button.addEventListener("click", () => choose(Number(button.dataset.sp))));
stages.forEach((stage) => {
  observer.observe(stage);
  stage.addEventListener("keydown", (event) => {
    let to = null;
    if (event.key === "ArrowRight" || event.key === "ArrowUp") to = sp + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") to = sp - 1;
    if (event.key === "Home") to = 0;
    if (event.key === "End") to = SETPOINTS.length - 1;
    if (to === null) return;
    event.preventDefault();
    choose(to);
  });
  // hover (or tap) a part to read about it
  const plate = stage.closest(".iso-plate");
  const tip = document.createElement("div");
  tip.className = "ch-tip";
  tip.hidden = true;
  plate.appendChild(tip);
  let active = null;
  let focusSvg = null;
  const show = (group, event, svg) => {
    if (group !== active) {
      if (active) active.removeAttribute("data-active");
      active = group;
      if (group) {
        group.setAttribute("data-active", "");
        const [title, text] = INFO[group.dataset.info];
        tip.innerHTML = "<strong></strong><span></span>";
        tip.firstChild.textContent = title;
        tip.lastChild.textContent = text;
      }
      if (focusSvg && focusSvg !== svg) focusSvg.classList.remove("ch-focus");
      focusSvg = svg;
      if (svg) svg.classList.toggle("ch-focus", Boolean(group));
    }
    tip.hidden = !group;
    if (!group) return;
    const box = plate.getBoundingClientRect();
    const x = event.clientX - box.left, y = event.clientY - box.top;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.max(8, Math.min(box.width - w - 8, x + 16 > box.width - w - 8 ? x - w - 16 : x + 16)) + "px";
    tip.style.top = Math.max(8, Math.min(box.height - h - 8, y + 16)) + "px";
  };
  stage.querySelectorAll("svg").forEach((svg) => {
    const over = (event) => show(event.target.closest ? event.target.closest(".hot") : null, event, svg);
    svg.addEventListener("pointermove", over);
    svg.addEventListener("pointerdown", over);
    svg.addEventListener("pointerleave", (event) => { if (event.pointerType !== "touch") show(null, event, svg); });
  });
});
// embedded in the site: ?embed shows one figure at a time (no captions), and the parent picks which by postMessage
const figs = [...document.querySelectorAll("figure.iso-figure")];
const showFig = (n) => figs.forEach((f, i) => { f.hidden = i !== n; });
if (location.search.includes("embed")) { document.documentElement.classList.add("embed"); showFig(0); }
addEventListener("message", (e) => { if (e.origin === location.origin && typeof e.data?.fig === "number") showFig(e.data.fig); });
if (still.matches) touring = false;
paint();
`;

const CSS = `<style>
.hot{cursor:help}
figure[hidden]{display:none!important}
.embed .iso-caption{display:none}
.ch-copy{margin:10px 0 0;font:11px/1 var(--anatomy-mono);letter-spacing:.04em;color:var(--anatomy-text);opacity:.75}
.embed .iso-page{padding-top:0;padding-bottom:0}
.ch-focus .hot:not([data-active]){opacity:.38;transition:opacity .15s}
.hot[data-active] .iso-edge{stroke:var(--anatomy-lit);stroke-width:1.1}
.iso-wire,[data-part]{pointer-events:none}
.ch-tip{position:absolute;z-index:3;max-width:260px;padding:10px 12px;background:var(--anatomy-card);color:var(--anatomy-text);border:1px solid var(--anatomy-mid);box-shadow:var(--anatomy-lift);font:12px/1.5 var(--anatomy-mono);pointer-events:none}
.ch-tip strong{display:block;color:var(--anatomy-strong);font-weight:600;margin-bottom:2px}
.ch-views{display:flex;gap:6px;margin:10px 0 0}
.ch-views button{font:11px/1 var(--anatomy-mono);letter-spacing:.03em;padding:7px 10px;color:var(--anatomy-text);background:var(--anatomy-card);border:1px solid var(--anatomy-lo);cursor:pointer}
.ch-views button:hover{border-color:var(--anatomy-mid)}
.ch-views button[aria-pressed="true"]{color:var(--anatomy-strong);border-color:var(--anatomy-hi)}
.ch-cond{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 0}
.ch-cond button{font:11px/1 var(--anatomy-mono);letter-spacing:.03em;padding:7px 10px;color:var(--anatomy-text);background:var(--anatomy-card);border:1px solid var(--anatomy-lo);cursor:pointer}
.ch-cond button:hover{border-color:var(--anatomy-mid)}
.ch-cond button[aria-pressed="true"]{color:var(--anatomy-strong);border-color:var(--anatomy-hi)}
</style>`;
const cond = `<div class="ch-cond" role="group" aria-label="Storage condition">${SETPOINTS.map((p, i) => `<button type="button" data-sp="${i}" aria-pressed="${i === 0}">${V.humid ? `${p.t} °C / ${p.rh} %RH` : `${p.t} °C`}</button>`).join("")}</div>`;
const copy = `<p class="ch-copy">&copy; 2026 Aureole Pharmatech</p>`;
const withCond = (html, extra = "") => html.replace("<figcaption", extra + cond + "<figcaption").replace("</figure>", copy + "</figure>");
const views = `<div class="ch-views" role="group" aria-label="View"><button type="button" data-view="0" aria-pressed="true">Inside</button><button type="button" data-view="1" aria-pressed="false">Outside, door side</button></div>`;

const start = SETPOINTS[0];
const readout = V.humid ? `${start.t} °C / ${start.rh} %RH set · room ${start.t.toFixed(1)} °C, ${start.rh} %RH` : `${start.t} °C set · room ${start.t.toFixed(1)} °C`;
const stage = (svg, label) => `<div class="iso-stage" tabindex="0" role="slider" aria-label="${label}" aria-valuemin="0" aria-valuemax="3" aria-valuenow="0">${svg}</div>`;
const hint = "Hover a part for details";
const body =
  CSS +
  withCond(k.plateHtml({
    fig: "Fig 1",
    title: "Front of the chamber",
    hint,
    readout,
    keys: [
      { mark: "lit", label: "Conditioned air" },
      { mark: "raised", label: V.humid ? "SS304 trays, five to a rack" : "Racks with trays" },
    ],
    caption: "Standing inside the chamber you see only two grills on the rear wall: air goes in at the top and comes back at the bottom. Switch to Outside to see the door side with its display. Hover any part for details.",
    body: stage(svg1 + svg1b.replace("<svg ", '<svg style="display:none" '), "Front of the walk-in chamber: arrow keys choose the storage condition"),
  }), views) +
  withCond(k.plateHtml({
    fig: "Fig 2",
    title: V.humid ? "Back: utility, compressors, steam generators and panel" : "Back: utility, compressors and panel",
    hint,
    readout,
    keys: [
      { mark: "lit", label: V.humid ? "Selected condition, steam generator A, compressor A running" : "Selected temperature, compressor A running" },
      { mark: "blue", label: V.blueLabel },
    ],
    caption: V.humid
      ? "The chamber from behind: the utility cabinet with its blower motors, two compressor units (A running, B standby) that feed the cooling coil through refrigerant piping up to 15 m away, the small control panel on the wall, steam generator A (left, duty) and steam generator B (right, standby), each with its own water tank, and the 65 mm validation port holes low on the wall."
      : "The chamber from behind: the utility cabinet with its blower motors, two compressor units (a master and a stand-by) that feed the cooling coil through refrigerant piping up to 15 m away, the small control panel on the wall, and the 65 mm validation port holes low on the wall.",
    body: stage(svg3, "Back of the walk-in chamber: arrow keys choose the storage condition"),
  }));

const name = `${V.file}${theme === "light" ? "-light" : ""}.html`;
writeFileSync(join(HERE, name), k.pageHtml({ title: V.title, theme, body, script: kitScript() + live, width: 900 }));
console.log("wrote", name);
