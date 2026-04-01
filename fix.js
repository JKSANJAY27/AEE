const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/sections');
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (!f.endsWith('.tsx')) return;
  let p = path.join(dir, f);
  let text = fs.readFileSync(p, 'utf8');
  
  // replace the centered container with full width
  text = text.replace(/className="max-w-screen-xl mx-auto px-4"/g, 'className="w-full"');
  text = text.replace(/className="max-w-screen-xl mx-auto px-2"/g, 'className="w-full"');
  text = text.replace(/className="max-w-screen-lg mx-auto"/g, 'className="w-full"');
  
  // remove stray border-l and border-r from the main wrapper of sections 
  text = text.replace(/border-l border-r border-b border-\[#111111\]/g, 'border-b border-[#111111]');
  text = text.replace(/border-l border-r border-[#111111]/g, 'border-b border-[#111111]');
  text = text.replace(/border-l border-r border-\[#404040\]/g, 'border-b border-[#404040]');

  fs.writeFileSync(p, text);
});
console.log('done modifying sections');
