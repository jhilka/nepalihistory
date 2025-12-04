import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const downloadImage = async (url, filepath) => {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    writeFileSync(filepath, Buffer.from(buffer));
    return true;
  } catch (error) {
    console.error(`Failed: ${url}`);
    return false;
  }
};

const downloadDir = join(__dirname, '..', 'public', 'downloaded');
if (!existsSync(downloadDir)) mkdirSync(downloadDir, { recursive: true });

// Hardcoded remote URLs from your data
const remoteImages = [
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Prithvi_Narayan_Shah_1960_%28restoration%29.png/180px-Prithvi_Narayan_Shah_1960_%28restoration%29.png', filename: 'prithvi-narayan-shah.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Prithvi_Narayan_Shah_statue.jpg', filename: 'prithvi-statue.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Gorkha_Palace_durbar.jpg', filename: 'gorkha-palace.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nuwakot_Palace_%285%29.jpg/526px-Nuwakot_Palace_%285%29.jpg', filename: 'nuwakot-palace.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Kirtipur%2C_1950_-_1955.jpg/800px-Kirtipur%2C_1950_-_1955.jpg', filename: 'kirtipur.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Makwanpur_gadhi_fortress.jpg/800px-Makwanpur_gadhi_fortress.jpg', filename: 'makwanpur-fortress.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Kathmandu_Durbar_Square_IMG_2284_18.jpg/800px-Kathmandu_Durbar_Square_IMG_2284_18.jpg', filename: 'kathmandu-durbar.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Patan_durbar_square.jpg/800px-Patan_durbar_square.jpg', filename: 'patan-durbar.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bhaktapurs-Durbar-Square-before-the-1932-earthquake.jpg/800px-Bhaktapurs-Durbar-Square-before-the-1932-earthquake.jpg', filename: 'bhaktapur-durbar.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ilam_Bazar.jpg/800px-Ilam_Bazar.jpg', filename: 'ilam-bazar.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Kathmandu_valley_scene_Shivapuri_Nagarjun.JPG/800px-Kathmandu_valley_scene_Shivapuri_Nagarjun.JPG', filename: 'kathmandu-valley.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Devighat_Nepal.jpg/800px-Devighat_Nepal.jpg', filename: 'devighat.jpg' },
  { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kingdom_of_nepal.png/800px-Kingdom_of_nepal.png', filename: 'kingdom-map.png' },
];

let count = 0;
for (const { url, filename } of remoteImages) {
  const filepath = join(downloadDir, filename);
  const success = await downloadImage(url, filepath);
  if (success) {
    count++;
    console.log(`Downloaded: ${filename}`);
  }
}

console.log(`\nDownloaded ${count}/${remoteImages.length} images`);
