import('vite-plugin-imagemin').then(m => {
  console.log('keys:', Object.keys(m));
  console.log('default:', typeof m.default);
}).catch(e => console.error(e));
