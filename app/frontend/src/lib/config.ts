// Static runtime configuration for GitHub Pages (no backend)

let runtimeConfig: {
  API_BASE_URL: string;
} | null = null;

// Always disabled in static hosting
let configLoading = false;

// Default config (safe for frontend-only apps)
const defaultConfig = {
  API_BASE_URL: '',
};

// No backend config loader (GitHub Pages fix)
export async function loadRuntimeConfig(): Promise<void> {
  console.log('🔧 DEBUG: Static mode — skipping runtime config');
  configLoading = false;
}

// Get config safely
export function getConfig() {
  if (runtimeConfig) {
    return runtimeConfig;
  }

  if (import.meta.env.VITE_API_BASE_URL) {
    return {
      API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    };
  }

  return defaultConfig;
}

// API base URL helper
export function getAPIBaseURL(): string {
  return '';
}

// Unified config object
export const config = {
  get API_BASE_URL() {
    return '';
  },
};
