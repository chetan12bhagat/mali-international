const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.join(__dirname, '..', 'public', 'images', 'products');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const products = [
  {
    filename: 'g4-chilli.jpg',
    name: 'G4 Chilli',
    category: 'Vegetables',
    bg1: '#F4FBF7',
    bg2: '#E5F4EB',
    accent: '#2E7D32',
    svgArt: `
      <!-- Multiple fresh G4 green chillies -->
      <path d="M260,380 C270,300 320,230 420,180 C440,170 470,165 490,170 C470,195 440,240 370,330 C320,390 280,410 260,380 Z" fill="#2E7D32" filter="url(#shadow)" />
      <path d="M275,370 C290,300 340,240 430,190 C410,240 370,310 300,375 Z" fill="#43A047" opacity="0.8" />
      <!-- Chilli stalk/calyx -->
      <path d="M490,170 C510,150 530,130 540,110 C535,115 515,135 480,160" stroke="#1B5E20" stroke-width="8" stroke-linecap="round" fill="none" />
      <path d="M475,160 C490,165 500,180 495,190 C485,195 470,185 465,175 Z" fill="#1B5E20" />
      <!-- Second chilli crossing -->
      <path d="M520,380 C500,310 440,250 340,210 C320,200 300,205 285,215 C310,230 350,280 430,350 C480,395 515,405 520,380 Z" fill="#388E3C" opacity="0.9" filter="url(#shadow)" />
      <path d="M285,215 C265,200 250,180 240,160" stroke="#1B5E20" stroke-width="7" stroke-linecap="round" fill="none" />
    `
  },
  {
    filename: 'lemon.jpg',
    name: 'Indian Lemon',
    category: 'Fresh Produce',
    bg1: '#FEFDF0',
    bg2: '#FDF6D8',
    accent: '#F9A825',
    svgArt: `
      <!-- Whole oval lemon -->
      <ellipse cx="400" cy="300" rx="140" ry="110" fill="#FDD835" filter="url(#shadow)" transform="rotate(-15 400 300)" />
      <path d="M265,280 C250,290 250,310 265,320" fill="#FBC02D" />
      <path d="M535,280 C550,290 550,310 535,320" fill="#FBC02D" />
      <!-- Highlight -->
      <ellipse cx="370" cy="270" rx="90" ry="60" fill="#FFF59D" opacity="0.6" transform="rotate(-20 370 270)" />
      <!-- Fresh citrus leaf -->
      <path d="M280,220 C260,160 310,130 370,140 C370,190 330,230 280,220 Z" fill="#43A047" />
      <path d="M285,215 C320,185 365,145 365,145" stroke="#2E7D32" stroke-width="3" fill="none" />
    `
  },
  {
    filename: 'pomegranate.jpg',
    name: 'Bhagwa Pomegranate',
    category: 'Fruits',
    bg1: '#FCF2F2',
    bg2: '#F8E1E1',
    accent: '#C2185B',
    svgArt: `
      <!-- Whole Pomegranate -->
      <circle cx="380" cy="310" r="125" fill="#B71C1C" filter="url(#shadow)" />
      <ellipse cx="355" cy="285" rx="95" ry="80" fill="#D32F2F" opacity="0.8" />
      <!-- Crown / Calyx -->
      <polygon points="380,185 360,150 375,165 385,145 395,165 410,150 390,185" fill="#880E4F" />
      <!-- Glossy highlight -->
      <ellipse cx="340" cy="260" rx="40" ry="25" fill="#EF9A9A" opacity="0.5" transform="rotate(-30 340 260)" />
      <!-- Fresh Arils cluster preview on side -->
      <circle cx="490" cy="350" r="14" fill="#880E4F" />
      <circle cx="510" cy="345" r="13" fill="#AD1457" />
      <circle cx="500" cy="365" r="12" fill="#C2185B" />
      <circle cx="485" cy="370" r="14" fill="#880E4F" />
    `
  },
  {
    filename: 'drumstick.jpg',
    name: 'Fresh Drumstick',
    category: 'Vegetables',
    bg1: '#F3F9F4',
    bg2: '#E3F2E6',
    accent: '#388E3C',
    svgArt: `
      <!-- Long striated Moringa pods -->
      <g filter="url(#shadow)">
        <path d="M220,440 C280,360 360,260 520,130 C535,120 550,130 535,145 C380,275 300,380 240,460 Z" fill="#2E7D32" />
        <!-- Ribs / ridges -->
        <path d="M230,450 C290,370 370,270 530,140" stroke="#4CAF50" stroke-width="3" fill="none" opacity="0.7" />
        <path d="M235,445 C295,365 375,265 535,135" stroke="#1B5E20" stroke-width="2" fill="none" opacity="0.6" />
        <!-- Second crossing pod -->
        <path d="M260,140 C340,240 430,340 560,430 C570,440 555,450 545,440 C410,350 320,250 240,150 Z" fill="#388E3C" opacity="0.9" />
        <path d="M250,145 C330,245 420,345 550,435" stroke="#66BB6A" stroke-width="3" fill="none" opacity="0.7" />
      </g>
    `
  },
  {
    filename: 'ginger.jpg',
    name: 'Fresh Ginger',
    category: 'Spices & Fresh Produce',
    bg1: '#FAF6EE',
    bg2: '#F3EBD8',
    accent: '#8D6E63',
    svgArt: `
      <!-- Organic knobby Ginger rhizome -->
      <g filter="url(#shadow)">
        <path d="M300,340 C280,310 270,270 300,240 C330,210 370,220 390,250 C410,210 460,200 490,230 C520,260 500,300 520,330 C540,360 510,400 470,390 C430,380 410,400 370,390 C330,380 320,370 300,340 Z" fill="#D7CCC8" />
        <path d="M310,330 C295,305 285,275 310,250 C335,225 365,230 385,255 C400,225 445,215 475,240 C500,265 485,295 505,320 C520,345 495,380 465,375 C430,370 410,385 375,375 C340,370 325,355 310,330 Z" fill="#BCAAA4" opacity="0.7" />
        <!-- Node rings -->
        <path d="M320,280 C330,290 340,290 350,285" stroke="#795548" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.5" />
        <path d="M430,260 C440,270 455,270 465,260" stroke="#795548" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.5" />
        <path d="M410,340 C425,350 445,350 460,340" stroke="#795548" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.5" />
      </g>
    `
  },
  {
    filename: 'vellary.jpg',
    name: 'Vellary (Yellow Melon)',
    category: 'Vegetables',
    bg1: '#FEFDF2',
    bg2: '#FAF5D4',
    accent: '#E65100',
    svgArt: `
      <!-- Golden yellow cucumber / melon -->
      <g filter="url(#shadow)">
        <ellipse cx="400" cy="300" rx="160" ry="95" fill="#FFA000" transform="rotate(-5 400 300)" />
        <ellipse cx="400" cy="300" rx="145" ry="85" fill="#FFB300" opacity="0.85" transform="rotate(-5 400 300)" />
        <!-- Greenish white longitudinal ribs -->
        <path d="M245,295 C320,250 480,250 555,295" stroke="#FFE082" stroke-width="6" fill="none" opacity="0.8" />
        <path d="M248,300 C320,340 480,340 552,300" stroke="#FFE082" stroke-width="6" fill="none" opacity="0.8" />
        <!-- Stems on tips -->
        <circle cx="240" cy="295" r="8" fill="#558B2F" />
        <circle cx="560" cy="300" r="7" fill="#558B2F" />
      </g>
    `
  },
  {
    filename: 'red-pumpkin.jpg',
    name: 'Red Pumpkin',
    category: 'Vegetables',
    bg1: '#FDF6EE',
    bg2: '#FCE8D5',
    accent: '#E65100',
    svgArt: `
      <!-- Large Ribbed Pumpkin -->
      <g filter="url(#shadow)">
        <ellipse cx="400" cy="310" rx="150" ry="115" fill="#E65100" />
        <ellipse cx="350" cy="310" rx="110" ry="110" fill="#F57C00" />
        <ellipse cx="450" cy="310" rx="110" ry="110" fill="#F57C00" />
        <ellipse cx="400" cy="310" rx="75" ry="105" fill="#FB8C00" />
        <!-- Stem -->
        <path d="M400,205 C395,160 420,150 435,140 C425,165 410,180 410,205 Z" fill="#33691E" />
      </g>
    `
  },
  {
    filename: 'suran.jpg',
    name: 'Suran / Yam',
    category: 'Vegetables',
    bg1: '#F7F4F0',
    bg2: '#ECE5DC',
    accent: '#6D4C41',
    svgArt: `
      <!-- Large earthy Elephant Foot Yam tuber -->
      <g filter="url(#shadow)">
        <ellipse cx="400" cy="315" rx="135" ry="110" fill="#5D4037" />
        <ellipse cx="395" cy="305" rx="120" ry="95" fill="#6D4C41" opacity="0.9" />
        <!-- Rough bark texture rings -->
        <path d="M310,270 C360,250 440,255 480,280" stroke="#4E342E" stroke-width="5" stroke-linecap="round" fill="none" />
        <path d="M290,320 C350,300 450,305 505,330" stroke="#4E342E" stroke-width="5" stroke-linecap="round" fill="none" />
        <path d="M320,365 C370,355 430,355 470,370" stroke="#4E342E" stroke-width="5" stroke-linecap="round" fill="none" />
        <ellipse cx="400" cy="230" rx="40" ry="18" fill="#8D6E63" />
      </g>
    `
  },
  {
    filename: 'small-onion.jpg',
    name: 'Small Shallot Onion',
    category: 'Vegetables',
    bg1: '#FDF2F4',
    bg2: '#F9E2E6',
    accent: '#880E4F',
    svgArt: `
      <!-- Cluster of small red shallot onions -->
      <g filter="url(#shadow)">
        <ellipse cx="360" cy="330" rx="60" ry="70" fill="#880E4F" />
        <path d="M360,260 C355,230 370,210 365,200" stroke="#4A148C" stroke-width="4" stroke-linecap="round" fill="none" />
        <ellipse cx="435" cy="325" rx="55" ry="65" fill="#AD1457" opacity="0.95" />
        <path d="M435,260 C430,235 440,215 438,205" stroke="#6A1B9A" stroke-width="4" stroke-linecap="round" fill="none" />
        <ellipse cx="400" cy="360" rx="50" ry="55" fill="#C2185B" opacity="0.9" />
        <!-- Roots at base -->
        <path d="M360,400 L355,420 M365,400 L370,418 M435,390 L440,412" stroke="#D7CCC8" stroke-width="3" fill="none" />
      </g>
    `
  },
  {
    filename: 'turmeric.jpg',
    name: 'Indian Turmeric',
    category: 'Spices',
    bg1: '#FFFDF0',
    bg2: '#FFF5CC',
    accent: '#F57F17',
    svgArt: `
      <!-- Whole golden yellow Turmeric fingers -->
      <g filter="url(#shadow)">
        <path d="M260,340 C320,310 420,290 520,310 C535,315 540,335 525,345 C430,370 330,375 265,360 Z" fill="#F57F17" />
        <path d="M350,300 C370,240 430,210 460,225 C470,235 460,260 440,290 Z" fill="#FF8F00" />
        <path d="M330,355 C340,395 380,420 400,410 C410,400 405,375 395,350 Z" fill="#FFA000" />
        <!-- Striated segment rings -->
        <path d="M300,325 L310,355 M360,315 L370,350 M420,310 L428,345 M480,315 L488,340" stroke="#E65100" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.6" />
      </g>
    `
  },
  {
    filename: 'banana.jpg',
    name: 'Cavendish Export Banana',
    category: 'Fruits',
    bg1: '#FEFDF0',
    bg2: '#FCF7D4',
    accent: '#FBC02D',
    svgArt: `
      <!-- Curve of fresh Cavendish bananas -->
      <g filter="url(#shadow)">
        <path d="M260,380 C300,350 400,300 500,180 C515,160 535,165 525,185 C420,330 330,400 270,410 Z" fill="#FDD835" />
        <path d="M250,350 C310,320 420,270 510,150 C520,135 540,140 530,160 C430,300 330,375 260,375 Z" fill="#FFEE58" opacity="0.9" />
        <path d="M280,395 C330,370 410,330 480,230 C490,215 505,220 495,235 C425,350 355,415 290,420 Z" fill="#FBC02D" opacity="0.8" />
        <!-- Crown / stalk top -->
        <rect x="505" y="140" width="30" height="20" rx="5" fill="#33691E" transform="rotate(-30 520 150)" />
        <!-- Tips -->
        <circle cx="260" cy="380" r="6" fill="#3E2723" />
        <circle cx="250" cy="350" r="6" fill="#3E2723" />
        <circle cx="280" cy="395" r="5" fill="#3E2723" />
      </g>
    `
  },
  {
    filename: 'semi-husk-coconut.jpg',
    name: 'Semi-Husk Coconut',
    category: 'Coconut',
    bg1: '#F9F7F3',
    bg2: '#EFECE6',
    accent: '#5D4037',
    svgArt: `
      <!-- Oval semi-husked coconut with fibrous crown -->
      <g filter="url(#shadow)">
        <!-- Hard shell base -->
        <ellipse cx="400" cy="320" rx="115" ry="135" fill="#4E342E" />
        <ellipse cx="390" cy="310" rx="100" ry="120" fill="#5D4037" opacity="0.9" />
        <!-- Upper fibrous pale husk tuft -->
        <path d="M305,240 C340,170 460,170 495,240 C460,250 430,245 400,248 C370,245 340,250 305,240 Z" fill="#D7CCC8" />
        <path d="M320,230 C350,180 450,180 480,230" stroke="#BCAAA4" stroke-width="4" stroke-linecap="round" fill="none" />
        <path d="M360,200 C380,165 420,165 440,200" stroke="#A1887F" stroke-width="3" stroke-linecap="round" fill="none" />
        <!-- Three germ pores (eyes) -->
        <circle cx="375" cy="380" r="8" fill="#2E1B13" />
        <circle cx="425" cy="380" r="8" fill="#2E1B13" />
        <circle cx="400" cy="410" r="7" fill="#2E1B13" />
      </g>
    `
  },
  {
    filename: 'onion.jpg',
    name: 'Export Red Onion',
    category: 'Vegetables',
    bg1: '#FCF2F4',
    bg2: '#F8E0E4',
    accent: '#880E4F',
    svgArt: `
      <!-- Large export-grade 55+ mm Red Onion -->
      <g filter="url(#shadow)">
        <ellipse cx="400" cy="305" rx="130" ry="115" fill="#880E4F" />
        <ellipse cx="385" cy="295" rx="115" ry="100" fill="#AD1457" opacity="0.9" />
        <!-- Onion skin surface lines -->
        <path d="M400,195 C330,225 330,380 400,415" stroke="#C2185B" stroke-width="3.5" fill="none" opacity="0.7" />
        <path d="M400,195 C470,225 470,380 400,415" stroke="#C2185B" stroke-width="3.5" fill="none" opacity="0.7" />
        <path d="M400,195 L400,415" stroke="#E91E63" stroke-width="2.5" fill="none" opacity="0.6" />
        <!-- Top neck -->
        <path d="M400,195 C395,170 405,160 410,145" stroke="#6A1B9A" stroke-width="5" stroke-linecap="round" fill="none" />
        <!-- Root tuft -->
        <path d="M395,415 L390,435 M400,415 L402,438 M405,415 L412,434" stroke="#D7CCC8" stroke-width="3" fill="none" />
      </g>
    `
  }
];

async function generate() {
  console.log(`Generating ${products.length} 4:3 product images...`);

  for (const p of products) {
    const svg = `
      <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${p.bg1}" />
            <stop offset="100%" stop-color="${p.bg2}" />
          </linearGradient>
          <filter id="shadow" x="-10%" y="-10%" width="125%" height="125%">
            <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0A192F" flood-opacity="0.12" />
          </filter>
        </defs>

        <!-- Background Studio Gradient -->
        <rect width="800" height="600" fill="url(#bg)" />

        <!-- Soft studio lighting disk -->
        <circle cx="400" cy="300" r="260" fill="#FFFFFF" opacity="0.45" />

        <!-- Ground shadow ellipse -->
        <ellipse cx="400" cy="460" rx="220" ry="24" fill="#0A192F" opacity="0.06" />

        <!-- Product Botanical Artwork -->
        ${p.svgArt}

        <!-- Top Badges -->
        <g transform="translate(40, 40)">
          <rect width="170" height="28" rx="14" fill="#0A192F" opacity="0.08" />
          <text x="85" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="600" letter-spacing="1.5" text-anchor="middle" fill="#0A192F">
            ${p.category.toUpperCase().replace(/&/g, '&amp;')}
          </text>
        </g>

        <!-- Mali International Subtle Brand Stamp -->
        <g transform="translate(620, 40)">
          <text x="0" y="18" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="700" letter-spacing="2" fill="#0A192F" opacity="0.4">
            MALI SOURCING
          </text>
        </g>

        <!-- Bottom Product Title Header -->
        <g transform="translate(40, 545)">
          <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" letter-spacing="0.5" fill="#0A192F">
            ${p.name}
          </text>
          <text x="0" y="22" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="500" letter-spacing="1.5" fill="#C5A059">
            EXPORT GRADE SPECIFICATION
          </text>
        </g>

        <!-- Subtle corner border -->
        <rect x="2" y="2" width="796" height="596" rx="2" fill="none" stroke="#0A192F" stroke-opacity="0.05" stroke-width="2" />
      </svg>
    `;

    const dest = path.join(outputDir, p.filename);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 92 })
      .toFile(dest);

    console.log(`✓ Created ${p.filename}`);
  }

  console.log('All product images successfully generated in 4:3 format!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
