export interface Country {
  name: string;
  code: string;
  lat: number;
  lng: number;
  // Projected positions in percentage (0-100) using Web Mercator
  x: number;
  y: number;
  // Optional fine-tuning offsets (percentage points) to manually nudge
  // markers/labels on the projected map without changing the base lat/lng
  offsetX?: number;
  offsetY?: number;
  flag?: string;
}

// Simple Web Mercator projection to map lat/lng to 0-100% space
const projectLatLngToPercent = (lat: number, lng: number) => {
  const x = (lng + 180) / 360; // 0..1
  const sinLat = Math.sin((lat * Math.PI) / 180);
  const y =
    0.5 -
    (Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)); // 0..1 for ~±85°

  return {
    x: x * 100,
    y: y * 100,
  };
};

const createCountry = (
  name: string,
  code: string,
  lat: number,
  lng: number,
  flag?: string,
  offsetX: number = 0,
  offsetY: number = 0
): Country => {
  const { x, y } = projectLatLngToPercent(lat, lng);
  return { name, code, lat, lng, x, y, offsetX, offsetY, flag };
};

// Countries with real-world lat/lng mapped onto the dotted-map style projection
export const countries: Country[] = [
  // North America
  createCountry("United States", "US", 37.0902, -95.7129, "🇺🇸", 0, 0),
  createCountry("Canada", "CA", 56.1304, -106.3468, "🇨🇦"),
  createCountry("Mexico", "MX", 23.6345, -102.5528, "🇲🇽"),
  
  // South America
  createCountry("Brazil", "BR", -14.235, -51.9253, "🇧🇷", 0, 10),
  createCountry("Argentina", "AR", -38.4161, -63.6167, "🇦🇷"),
  createCountry("Chile", "CL", -35.6751, -71.543, "🇨🇱"),
  
  // Europe
  createCountry("United Kingdom", "GB", 55.3781, -3.436, "🇬🇧", 0, -9),
  createCountry("France", "FR", 46.2276, 2.2137, "🇫🇷"),
  createCountry("Germany", "DE", 51.1657, 10.4515, "🇩🇪", 0, -5),
  createCountry("Spain", "ES", 40.4637, -3.7492, "🇪🇸"),
  createCountry("Italy", "IT", 41.8719, 12.5674, "🇮🇹"),
  createCountry("Netherlands", "NL", 52.1326, 5.2913, "🇳🇱"),
  createCountry("Poland", "PL", 51.9194, 19.1451, "🇵🇱"),
  createCountry("Sweden", "SE", 60.1282, 18.6435, "🇸🇪"),
  createCountry("Norway", "NO", 60.472, 8.4689, "🇳🇴"),
  createCountry("Finland", "FI", 61.9241, 25.7482, "🇫🇮"),
  
  // Eastern Europe & Central Asia
  createCountry("Ukraine", "UA", 48.3794, 31.1656, "🇺🇦"),
  createCountry("Russia", "RU", 61.524, 105.3188, "🇷🇺"),
  createCountry("Turkey", "TR", 38.9637, 35.2433, "🇹🇷"),
  createCountry("Georgia", "GE", 42.3154, 43.3569, "🇬🇪"),
  
  // Middle East
  createCountry("Israel", "IL", 31.0461, 34.8516, "🇮🇱"),
  createCountry("Iran", "IR", 32.4279, 53.688, "🇮🇷"),
  createCountry("UAE", "AE", 23.4241, 53.8478, "🇦🇪"),
  createCountry("Saudi Arabia", "SA", 23.8859, 45.0792, "🇸🇦"),
  createCountry("Egypt", "EG", 26.8206, 30.8025, "🇪🇬"),
  
  // Asia
  createCountry("China", "CN", 35.8617, 104.1954, "🇨🇳"),
  createCountry("Japan", "JP", 36.2048, 138.2529, "🇯🇵"),
  createCountry("South Korea", "KR", 35.9078, 127.7669, "🇰🇷"),
  createCountry("India", "IN", 20.5937, 78.9629, "🇮🇳"),
  createCountry("Pakistan", "PK", 30.3753, 69.3451, "🇵🇰"),
  createCountry("Bangladesh", "BD", 23.685, 90.3563, "🇧🇩"),
  createCountry("Nepal", "NP", 28.3949, 84.124, "🇳🇵"),
  
  // Southeast Asia
  createCountry("Vietnam", "VN", 14.0583, 108.2772, "🇻🇳"),
  createCountry("Thailand", "TH", 15.87, 100.9925, "🇹🇭"),
  createCountry("Indonesia", "ID", -0.7893, 113.9213, "🇮🇩"),
  createCountry("Singapore", "SG", 1.3521, 103.8198, "🇸🇬"),
  createCountry("Malaysia", "MY", 4.2105, 101.9758, "🇲🇾"),
  createCountry("Philippines", "PH", 12.8797, 121.774, "🇵🇭"),
  createCountry("Taiwan", "TW", 23.6978, 120.9605, "🇹🇼"),
  createCountry("Hong Kong", "HK", 22.3193, 114.1694, "🇭🇰"),
  
  // Africa
  createCountry("Nigeria", "NG", 9.082, 8.6753, "🇳🇬"),
  createCountry("South Africa", "ZA", -30.5595, 22.9375, "🇿🇦"),
  
  // Oceania
  createCountry("Australia", "AU", -25.2744, 133.7751, "🇦🇺", 0, 17),
];

export type AttackType = "malware" | "phishing" | "exploit";

export interface Attack {
  id: string;
  type: AttackType;
  source: Country;
  target: Country;
  timestamp: Date;
  name: string;
}

export const attackTypes: Record<AttackType, { label: string; color: string }> = {
  malware: { label: "Malware", color: "cyber-red" },
  phishing: { label: "Phishing", color: "cyber-purple" },
  exploit: { label: "Exploit", color: "cyber-orange" },
};

export const attackNames: Record<AttackType, string[]> = {
  malware: [
    "Trojan.GenericKD",
    "Ransomware.Cerber",
    "Backdoor.Emotet",
    "Worm.Conficker",
    "Virus.Sality",
    "Spyware.Agent",
    "Rootkit.ZeroAccess",
    "Dropper.Generic",
    "Keylogger.Snake",
    "Botnet.Mirai",
  ],
  phishing: [
    "Credential Harvester",
    "Fake Login Portal",
    "Email Spoofing",
    "Clone Site Attack",
    "Spear Phishing",
    "Whaling Attack",
    "Vishing Attempt",
    "Smishing Campaign",
    "Business Email Compromise",
    "OAuth Phishing",
  ],
  exploit: [
    "CVE-2024-0001",
    "Zero-Day RCE",
    "Buffer Overflow",
    "SQL Injection",
    "XSS Attack",
    "Memory Corruption",
    "Privilege Escalation",
    "Remote Code Execution",
    "Heap Spray Attack",
    "Use-After-Free",
  ],
};

export const topTargetedIndustries = [
  { name: "Telecommunications", icon: "📡" },
  { name: "Education", icon: "🎓" },
  { name: "Government", icon: "🏛️" },
  { name: "Healthcare", icon: "🏥" },
  { name: "Finance", icon: "💰" },
];

export const topMalwareTypes = [
  { name: "Mobile", icon: "📱" },
  { name: "Adware", icon: "📢" },
  { name: "Phishing", icon: "🎣" },
  { name: "Ransomware", icon: "🔒" },
  { name: "Trojan", icon: "🐴" },
];
