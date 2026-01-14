const fs = require('fs');
const https = require('https');
const path = require('path');

const fonts = [
  // Material Community Icons
  {
    name: 'MaterialCommunityIcons.ttf',
    url: 'https://github.com/oblador/react-native-vector-icons/raw/master/Fonts/MaterialCommunityIcons.ttf'
  },
  // Inter Font Family (Google Fonts)
  {
    name: 'Inter-Regular.otf',
    url: 'https://github.com/rsms/inter/raw/master/docs/fonts/Inter-Regular.otf'
  },
  {
    name: 'Inter-Medium.otf',
    url: 'https://github.com/rsms/inter/raw/master/docs/fonts/Inter-Medium.otf'
  },
  {
    name: 'Inter-SemiBold.otf',
    url: 'https://github.com/rsms/inter/raw/master/docs/fonts/Inter-SemiBold.otf'
  },
  {
    name: 'Inter-Bold.otf',
    url: 'https://github.com/rsms/inter/raw/master/docs/fonts/Inter-Bold.otf'
  },
  {
    name: 'Inter-ExtraBold.otf',
    url: 'https://github.com/rsms/inter/raw/master/docs/fonts/Inter-ExtraBold.otf'
  },
  {
    name: 'Inter-Black.otf',
    url: 'https://github.com/rsms/inter/raw/master/docs/fonts/Inter-Black.otf'
  },
  // Alternative: You can also use TTF versions
  {
    name: 'Inter-Regular.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v18/KFOmCnqEu92Fr1Mu4mxP.ttf'
  },
  {
    name: 'Inter-Medium.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v18/KFOlCnqEu92Fr1MmEU9fBBc9.ttf'
  },
  {
    name: 'Inter-SemiBold.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v18/KFOlCnqEu92Fr1MmEU9fABc9.ttf'
  },
  {
    name: 'Inter-Bold.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v18/KFOlCnqEu92Fr1MmEU9fCBc9.ttf'
  },
  {
    name: 'Inter-ExtraBold.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v18/KFOlCnqEu92Fr1MmEU9fDBc9.ttf'
  },
  {
    name: 'Inter-Black.ttf',
    url: 'https://fonts.gstatic.com/s/inter/v18/KFOlCnqEu92Fr1MmEU9fBBc9.ttf'
  }
];

const fontsDir = path.join(__dirname, '../assets/fonts');

// Create directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

function downloadFont(font) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(fontsDir, font.name);
    const file = fs.createWriteStream(filePath);
    
    console.log(`Downloading ${font.name}...`);
    
    https.get(font.url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded ${font.name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`✗ Error downloading ${font.name}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAllFonts() {
  console.log('Starting font downloads...');
  
  // Download only the TTF versions for simplicity
  const ttfFonts = fonts.filter(f => f.name.endsWith('.ttf'));
  
  for (const font of ttfFonts) {
    try {
      await downloadFont(font);
    } catch (error) {
      console.error(`Failed to download ${font.name}`);
    }
  }
  
  console.log('Font download complete!');
}

downloadAllFonts();