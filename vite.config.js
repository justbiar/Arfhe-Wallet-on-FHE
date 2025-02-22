import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // '/' olarak ayarla, yoksa hash routing oluşabilir
  server: {
    historyApiFallback: true, // Tarayıcının yönlendirme işlemini düzgün yapmasını sağlar
  },
  build: {
    outDir: 'dist', // Çıktıyı "dist" klasörüne yönlendir
    emptyOutDir: true, // Eski dosyaları temizle
    rollupOptions: {
      input: 'index.html', // DOĞRU KULLANIM
      output: {
        dir: 'dist',
        entryFileNames: '[name].js'
      }
    }
  }
});
