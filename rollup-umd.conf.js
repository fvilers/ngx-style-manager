export default {
  input: './build/esm5/ngx-style-manager.js',
  output: {
    file: './dist/bundles/ngx-style-manager.umd.js',
    name: 'ngxFilesHelpers',
    format: 'umd',
    globals: {
      '@angular/core': 'ng.core',
      '@angular/common': 'ng.common',
    }
  }
};
