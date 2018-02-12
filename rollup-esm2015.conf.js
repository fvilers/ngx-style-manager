export default {
  input: './build/esm2015/ngx-style-manager.js',
  output: {
    file: './dist/esm2015/ngx-style-manager.js',
    format: 'es',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
    }
  }
};
