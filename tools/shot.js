const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
for(const id of process.argv.slice(2)){await p.goto('file://'+process.cwd()+'/'+id+'.html');await p.waitForTimeout(1500);await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:id+'.jpg',type:'jpeg',quality:92});}
await b.close();})();
