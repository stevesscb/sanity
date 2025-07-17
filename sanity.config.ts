import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  projectId: '779bhpgl',

  dataset: 'production',

  title: 'K6 Consulting',

  apiVersion: '2025-17-07',

  basePath: '/admin',

  plugins: [structureTool()],
});

export default config;
