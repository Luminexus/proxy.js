﻿let urlQueue=[],backButton=document.createElement("button");backButton.style.width="25px",backButton.innerHTML="<";let urlBox=document.createElement("input");urlBox.type="text",urlBox.style.width="300px";let goButton1=document.createElement("button");goButton1.innerHTML="Load Page using iFrame";let goButton2=document.createElement("button");goButton2.innerHTML="Goto proxysite";let wbButton=document.createElement("button");wbButton.innerHTML="Load Website";let mcButton=document.createElement("button");mcButton.innerHTML="Memory Reset";let snButton=document.createElement("button");snButton.innerHTML="Snokido";let iframe=document.createElement("iframe");iframe.src="https://www.bing.com",iframe.width=window.innerWidth,iframe.height=window.innerHeight,goButton1.addEventListener("click",(()=>{0!=urlBox.value.length&&urlBox.value.startsWith("http")&&(iframe.src=urlBox.value.toLowerCase(),urlQueue.push(urlBox.value.toLowerCase()))})),goButton2.addEventListener("click",(()=>{iframe.src="https://www.proxysite.com",urlQueue.push("https://www.proxysite.com")})),mcButton.addEventListener("click",(()=>{window.location.reload(true)})),wbButton.addEventListener("click",(()=>{iframe.src="http://waylon.carlsprojects.com",urlQueue.push("http://waylon.carlsprojects.com")})),snButton.addEventListener("click",(()=>{iframe.src="https://www.snokido.com",urlQueue.push("https://www.snokido.com")})),backButton.addEventListener("click",(()=>{urlQueue.length>1&&(urlQueue.pop(),iframe.src=urlQueue.at(-1))})),document.body.appendChild(backButton),document.body.appendChild(urlBox),document.body.appendChild(goButton1),document.body.appendChild(goButton2),document.body.appendChild(wbButton),document.body.appendChild(snButton),document.body.appendChild(mcButton),document.body.appendChild(iframe);