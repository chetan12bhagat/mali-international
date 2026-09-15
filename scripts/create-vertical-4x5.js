const sharp = require('sharp');
const path = require('path');

async function createVertical4x5() {
  const srcPath = path.resolve('C:/Users/bhaga/.gemini/antigravity-ide/brain/6a0e174a-2066-4af7-8890-8c26c9f44dc9/indian_export_onions_1789452213327.jpg');
  const outBrain = path.resolve('C:/Users/bhaga/.gemini/antigravity-ide/brain/6a0e174a-2066-4af7-8890-8c26c9f44dc9/onions_vertical_4x5.jpg');
  const outPublic = path.resolve(__dirname, '../public/images/products/onion-vertical.jpg');

  // 4:5 Instagram / vertical mobile standard ratio: 1080 x 1350
  const targetW = 1080;
  const targetH = 1350;

  // Center product with breathing room around it
  // Source is 1376 x 768.
  // We want the entire pile visible with clean negative space on left/right and ample space top/bottom
  const scaledW = 980;
  const scaledH = Math.round(scaledW * (768 / 1376)); // 547px
  const productX = Math.round((targetW - scaledW) / 2); // 50px margin on each side
  const productY = Math.round((targetH - scaledH) / 2) + 15; // 416px from top

  // 1. Studio wall background for upper portion
  const topWall = await sharp(srcPath)
    .extract({ left: 100, top: 0, width: 1176, height: 60 })
    .resize(targetW, productY + 10, { fit: 'fill' })
    .blur(8)
    .toBuffer();

  // 2. Travertine stone slab background for lower portion
  const bottomSlab = await sharp(srcPath)
    .extract({ left: 100, top: 710, width: 1176, height: 58 })
    .resize(targetW, targetH - (productY + scaledH - 10), { fit: 'fill' })
    .toBuffer();

  // 3. Resized product layer with rounded soft edges or clean compositing
  const productImg = await sharp(srcPath)
    .resize(scaledW, scaledH)
    .toBuffer();

  // 4. Base background
  const baseCanvas = await sharp({
    create: {
      width: targetW,
      height: targetH,
      channels: 3,
      background: { r: 232, g: 221, b: 206 }
    }
  }).jpeg().toBuffer();

  // Composite layers
  const finalImage = await sharp(baseCanvas)
    .composite([
      { input: topWall, top: 0, left: 0 },
      { input: bottomSlab, top: productY + scaledH - 10, left: 0 },
      { input: productImg, top: productY, left: productX }
    ])
    .jpeg({ quality: 96 })
    .toFile(outBrain);

  // Copy to public folder
  await sharp(outBrain).toFile(outPublic);
  console.log('Vertical 4:5 image generated successfully at 1080x1350!');
}

createVertical4x5().catch(console.error);
