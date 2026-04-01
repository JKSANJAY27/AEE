const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), 'src/sections');
const files = fs.readdirSync(dir);

files.forEach(f => {
  if (!f.endsWith('.tsx')) return;
  let p = path.join(dir, f);
  let text = fs.readFileSync(p, 'utf8');
  
  // Replace the centered wrapper with w-full
  text = text.replace(/className="max-w-screen-xl mx-auto px-4"/g, 'className="w-full"');
  text = text.replace(/className="max-w-screen-lg mx-auto"/g, 'className="w-full"');
  
  // For the typical outer borders in sections
  text = text.replace(/className="border-l border-r border-b border-\[#111111\]"/g, 'className="border-b border-[#111111]"');
  text = text.replace(/className="border-l border-r border-\[#111111\]"/g, 'className="border-b border-[#111111]"');
  
  fs.writeFileSync(p, text);
});

// Also replace in Footer
let footerP = path.join(process.cwd(), 'src/sections/Footer.tsx');
let footerText = fs.readFileSync(footerP, 'utf8');
footerText = footerText.replace(/className="bg-\[#111111\] text-\[#F9F9F7\] pt-16 pb-8"/g, 'className="bg-[#111111] text-[#F9F9F7] pt-16 pb-8 w-full"');
footerText = footerText.replace(/className="max-w-screen-xl mx-auto px-4"/g, 'className="w-full px-8"');
footerText = footerText.replace(/className="border-t border-\[#404040\] mt-12 pt-8 flex/g, 'className="border-t border-[#404040] mx-8 mt-12 pt-8 flex');
fs.writeFileSync(footerP, footerText);

console.log('done correctly');
