export default {
  input: './build/esm5/ngx-style-manager.js',
  output: {
    file: './dist/esm5/ngx-style-manager.js',
    format: 'es',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
    }
  }
};
