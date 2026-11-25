import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tr.cengiztv.radyo',
  appName: 'Cengiz TV',
  webDir: 'dist',
  bundledWebRuntime: false,
  android: {allowMixedContent: true},
};

export default config;
