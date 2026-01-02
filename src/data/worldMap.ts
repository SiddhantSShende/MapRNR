// World map coordinates as simplified polygon points (percentage-based 0-100)
// These represent the major landmasses in a simplified form

export const worldMapPaths = {
  // North America
  northAmerica: [
    // Main continent
    { points: "M 5,28 L 8,25 L 12,23 L 18,22 L 22,24 L 25,28 L 28,32 L 30,38 L 28,42 L 25,45 L 22,48 L 18,50 L 15,48 L 12,45 L 10,42 L 8,38 L 6,34 L 5,30 Z" },
    // Alaska
    { points: "M 2,26 L 5,24 L 8,26 L 6,28 L 3,28 Z" },
    // Greenland
    { points: "M 38,18 L 42,16 L 45,18 L 44,22 L 40,24 L 37,22 Z" },
  ],
  
  // South America
  southAmerica: [
    { points: "M 22,52 L 26,50 L 30,52 L 32,56 L 33,62 L 32,68 L 30,74 L 28,78 L 25,82 L 22,80 L 20,75 L 19,68 L 20,62 L 21,56 Z" },
  ],
  
  // Europe
  europe: [
    { points: "M 46,28 L 50,26 L 54,27 L 58,28 L 60,32 L 58,36 L 54,38 L 50,40 L 46,38 L 44,34 L 45,30 Z" },
    // UK & Ireland
    { points: "M 44,30 L 46,28 L 47,31 L 45,33 L 43,32 Z" },
    // Scandinavia
    { points: "M 50,22 L 54,20 L 56,24 L 54,28 L 50,26 Z" },
  ],
  
  // Africa
  africa: [
    { points: "M 46,42 L 52,40 L 58,42 L 62,48 L 64,56 L 62,64 L 58,72 L 52,76 L 46,74 L 42,68 L 40,60 L 42,52 L 44,46 Z" },
    // Madagascar
    { points: "M 64,66 L 66,64 L 67,68 L 65,72 L 63,70 Z" },
  ],
  
  // Asia
  asia: [
    // Main mass
    { points: "M 58,24 L 65,22 L 72,20 L 80,22 L 88,26 L 92,32 L 90,38 L 86,42 L 80,46 L 74,48 L 68,50 L 62,48 L 58,44 L 56,38 L 58,32 Z" },
    // Middle East
    { points: "M 58,42 L 64,40 L 68,44 L 66,50 L 62,52 L 58,50 L 56,46 Z" },
    // India
    { points: "M 68,44 L 74,42 L 78,48 L 76,56 L 72,60 L 68,56 L 66,50 Z" },
    // Southeast Asia
    { points: "M 76,48 L 82,46 L 86,50 L 84,56 L 80,58 L 76,54 Z" },
    // Japan
    { points: "M 88,36 L 91,34 L 92,38 L 90,42 L 87,40 Z" },
  ],
  
  // Oceania
  oceania: [
    // Australia
    { points: "M 80,64 L 88,62 L 94,66 L 96,72 L 92,78 L 86,80 L 80,78 L 78,72 L 79,68 Z" },
    // New Zealand
    { points: "M 98,78 L 100,76 L 101,80 L 99,82 L 97,80 Z" },
    // Indonesia islands
    { points: "M 78,58 L 82,56 L 86,58 L 84,62 L 80,62 Z" },
    { points: "M 84,58 L 88,56 L 90,60 L 86,62 Z" },
  ],
};

// Generate dots along a path
export const generateMapDots = (
  svgWidth: number = 1200,
  svgHeight: number = 600,
  dotSpacing: number = 8
): Array<{ x: number; y: number; opacity: number }> => {
  const dots: Array<{ x: number; y: number; opacity: number }> = [];
  
  // Define continent regions as bounding boxes with density
  const regions = [
    // North America
    { xMin: 5, xMax: 30, yMin: 22, yMax: 52, density: 0.7, shape: isInNorthAmerica },
    // South America  
    { xMin: 18, xMax: 35, yMin: 50, yMax: 85, density: 0.65, shape: isInSouthAmerica },
    // Europe
    { xMin: 43, xMax: 62, yMin: 20, yMax: 42, density: 0.8, shape: isInEurope },
    // Africa
    { xMin: 40, xMax: 68, yMin: 38, yMax: 78, density: 0.6, shape: isInAfrica },
    // Asia
    { xMin: 55, xMax: 95, yMin: 18, yMax: 58, density: 0.7, shape: isInAsia },
    // Australia
    { xMin: 76, xMax: 98, yMin: 60, yMax: 82, density: 0.55, shape: isInOceania },
  ];

  // Generate grid of potential dots
  for (let x = 0; x <= 100; x += dotSpacing / 10) {
    for (let y = 0; y <= 100; y += dotSpacing / 10) {
      for (const region of regions) {
        if (x >= region.xMin && x <= region.xMax && y >= region.yMin && y <= region.yMax) {
          if (region.shape(x, y)) {
            // Add some randomness
            const jitterX = (Math.random() - 0.5) * 0.8;
            const jitterY = (Math.random() - 0.5) * 0.8;
            const opacity = 0.3 + Math.random() * 0.4;
            
            dots.push({
              x: ((x + jitterX) / 100) * svgWidth,
              y: ((y + jitterY) / 100) * svgHeight,
              opacity,
            });
          }
          break;
        }
      }
    }
  }

  return dots;
};

// Shape detection functions for each continent
function isInNorthAmerica(x: number, y: number): boolean {
  // Simplified North America shape
  if (x < 5 || x > 30) return false;
  
  // Alaska region
  if (x >= 2 && x <= 10 && y >= 24 && y <= 32) return true;
  
  // Canada
  if (y >= 24 && y <= 38) {
    const width = 25 - (y - 24) * 0.3;
    const center = 18;
    return x >= center - width / 2 && x <= center + width / 2;
  }
  
  // USA
  if (y >= 36 && y <= 48) {
    const leftEdge = 8 + (y - 36) * 0.5;
    const rightEdge = 28 - (y - 36) * 0.3;
    return x >= leftEdge && x <= rightEdge;
  }
  
  // Mexico & Central America
  if (y >= 46 && y <= 54) {
    const width = 12 - (y - 46) * 0.8;
    return x >= 12 && x <= 12 + width;
  }
  
  return false;
}

function isInSouthAmerica(x: number, y: number): boolean {
  if (y < 50 || y > 85) return false;
  
  // Northern part (wider)
  if (y >= 50 && y <= 60) {
    return x >= 20 && x <= 34;
  }
  
  // Middle (Brazil bulge)
  if (y >= 58 && y <= 72) {
    const bulge = Math.sin((y - 58) / 14 * Math.PI) * 4;
    return x >= 22 - bulge && x <= 32 + bulge;
  }
  
  // Southern cone (narrowing)
  if (y >= 70 && y <= 85) {
    const width = 12 - (y - 70) * 0.6;
    return x >= 24 && x <= 24 + width;
  }
  
  return false;
}

function isInEurope(x: number, y: number): boolean {
  if (x < 43 || x > 62 || y < 20 || y > 42) return false;
  
  // Scandinavia
  if (y >= 20 && y <= 30 && x >= 48 && x <= 58) return true;
  
  // UK & Ireland
  if (y >= 28 && y <= 36 && x >= 43 && x <= 48) return true;
  
  // Western Europe
  if (y >= 32 && y <= 42 && x >= 44 && x <= 52) return true;
  
  // Central/Eastern Europe
  if (y >= 28 && y <= 40 && x >= 50 && x <= 62) return true;
  
  return false;
}

function isInAfrica(x: number, y: number): boolean {
  if (y < 38 || y > 78) return false;
  
  // North Africa
  if (y >= 38 && y <= 50) {
    return x >= 42 && x <= 62;
  }
  
  // Central Africa (widest part)
  if (y >= 48 && y <= 65) {
    const bulge = 4 * Math.sin((y - 48) / 17 * Math.PI);
    return x >= 42 - bulge && x <= 60 + bulge;
  }
  
  // Southern Africa (narrowing)
  if (y >= 62 && y <= 78) {
    const width = 16 - (y - 62) * 0.8;
    const center = 52;
    return x >= center - width / 2 && x <= center + width / 2;
  }
  
  return false;
}

function isInAsia(x: number, y: number): boolean {
  // Russia (northern)
  if (y >= 18 && y <= 35 && x >= 58 && x <= 95) return true;
  
  // Middle East
  if (y >= 38 && y <= 52 && x >= 55 && x <= 68) return true;
  
  // Central Asia
  if (y >= 30 && y <= 45 && x >= 62 && x <= 80) return true;
  
  // India
  if (y >= 42 && y <= 58) {
    const tipY = (y - 42) / 16;
    const width = 12 * (1 - tipY * 0.6);
    return x >= 68 && x <= 68 + width;
  }
  
  // China
  if (y >= 32 && y <= 48 && x >= 72 && x <= 90) return true;
  
  // Southeast Asia
  if (y >= 46 && y <= 58 && x >= 76 && x <= 88) return true;
  
  // Japan
  if (y >= 32 && y <= 44 && x >= 86 && x <= 92) return true;
  
  // Korea
  if (y >= 36 && y <= 44 && x >= 82 && x <= 86) return true;
  
  return false;
}

function isInOceania(x: number, y: number): boolean {
  // Australia
  if (y >= 62 && y <= 80) {
    if (x >= 78 && x <= 96) {
      // Create Australia shape
      const centerY = 71;
      const centerX = 87;
      const distX = Math.abs(x - centerX) / 9;
      const distY = Math.abs(y - centerY) / 9;
      return distX * distX + distY * distY < 1;
    }
  }
  
  // New Zealand
  if (y >= 75 && y <= 84 && x >= 96 && x <= 100) return true;
  
  // Indonesia
  if (y >= 56 && y <= 64 && x >= 76 && x <= 92) return true;
  
  // Papua New Guinea
  if (y >= 58 && y <= 66 && x >= 90 && x <= 96) return true;
  
  return false;
}
