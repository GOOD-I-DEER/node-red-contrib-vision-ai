# @GOOD-I-DEER/node-red-contrib-vision-ai

[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm version](https://badge.fury.io/js/@good-i-deer%2Fnode-red-contrib-vision-ai.svg)](https://badge.fury.io/js/@good-i-deer%2Fnode-red-contrib-vision-ai)
[![GitHub license](https://img.shields.io/github/license/GOOD-I-DEER/node-red-contrib-vision-ai)](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/blob/main/LICENSE)

Nodes are the building blocks for creating a face recognition flow using AI in Node-RED.

These nodes require node.js version 18.16.1 and Node-RED version 3.1.0.

<hr>

## Description

This nodes provide object detection, face detection, face vectorization, vector comparing and vector database that work with Node-RED.  
If you would like a more detailed explanation, please refer to the links below:  
[@good-i-deer/node-red-contrib-face-vectorization](https://www.npmjs.com/package/@good-i-deer/node-red-contrib-face-vectorization)  
[@good-i-deer/node-red-cosine-similarity](https://www.npmjs.com/package/@good-i-deer/node-red-contrib-cosine-similarity)  
[@good-i-deer/node-red-contrib-chromadb](https://www.npmjs.com/package/@good-i-deer/node-red-contrib-chromadb)  
[@good-i-deer/node-red-contrib-face-detection](https://www.npmjs.com/package/@good-i-deer/node-red-contrib-face-detection)  
[@good-i-deer/node-red-contrib-object-detection](https://www.npmjs.com/package/@good-i-deer/node-red-contrib-object-detection)

<hr>

## Pre-requisites

The node-red-contrib-vision-ai requires [Node-RED](https://nodered.org) to be installed.

<hr>

## Nodes

> This is a brief description of each node.

- _Good Calculate Cosine_: It calculates cosine similarity between two vectors and return it as an array.
- _Good Face Vectorization_: It converts facial photos to vectors using FaceNet as an array.
- _Good ChromaDB_: It connects and operates with ChromaDB server.
- _Good Face Detection_ : It detects faces in the photo using yolov8.
- _Good Object Detection_ : It detects objects in the photo using yolov8.
- _Good Webcam Object Detection_ : It detects objects in the webcam.
<hr>

## Install

```
cd ~/.node-red
npm install @good-i-deer/node-red-contrib-vision-ai
```

Restart your Node-RED instance

<hr>

## Examples

> The examples require the node packages below.

[node-red-contrib-samsung-automation-studio-nodes](https://flows.nodered.org/node/node-red-contrib-samsung-automation-studio-nodes)  
[node-red-contrib-image-output](https://flows.nodered.org/node/node-red-contrib-image-output)

### Webcam Example

![webcam](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/assets/112360329/b413c024-03d1-4d2d-892a-e29e727ed9a7)


- JSON code

```
[{"id":"e64532d90f9d901d","type":"tab","label":"Webcam Example","disabled":false,"info":"","env":[]},{"id":"77c117be75f4fd81","type":"http in","z":"e64532d90f9d901d","name":"","url":"/webcamYolo","method":"get","upload":false,"swaggerDoc":"","x":130,"y":180,"wires":[["22bc7eb63595a6d8"]]},{"id":"fd99905d5d8f41c6","type":"http response","z":"e64532d90f9d901d","name":"","statusCode":"","headers":{},"x":610,"y":160,"wires":[]},{"id":"22bc7eb63595a6d8","type":"good-webcam-object-detection","z":"e64532d90f9d901d","name":"","model":"yolov8n","threshold":0.5,"serverUrl":"localhost","socketUrl":"http://localhost","socketPort":"1900","x":370,"y":180,"wires":[["fd99905d5d8f41c6"],["80d8ca9b48e9c36f","762c3ac1353188d0"]]},{"id":"80d8ca9b48e9c36f","type":"function","z":"e64532d90f9d901d","name":"check if person exists","func":"if(msg.payload.hasOwnProperty(\"person\")) {\n    msg.next = true;\n    msg.payload = msg.payload.originImg;\n} else {\n    msg.next = false;\n}\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","libs":[],"x":660,"y":220,"wires":[["b8070c30f488afc5"]]},{"id":"b8070c30f488afc5","type":"switch","z":"e64532d90f9d901d","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":850,"y":220,"wires":[["f09444d3253a6909"],["ba5fde1527a7ab4e"]]},{"id":"ba5fde1527a7ab4e","type":"file in","z":"e64532d90f9d901d","name":"Light Off","filename":"","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":1010,"y":240,"wires":[["deb8d3ab24982b33","19a9bea0bff54b33"]]},{"id":"deb8d3ab24982b33","type":"function","z":"e64532d90f9d901d","name":"function 7","func":"msg.payload = \"There is no people!!\"\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","libs":[],"x":1160,"y":240,"wires":[["bf9cadcd44cd36f1"]]},{"id":"bf9cadcd44cd36f1","type":"debug","z":"e64532d90f9d901d","name":"debug 16","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":1360,"y":240,"wires":[]},{"id":"f09444d3253a6909","type":"file in","z":"e64532d90f9d901d","name":"Light On","filename":"","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":1010,"y":180,"wires":[["19a9bea0bff54b33","378dea5cf74d870f"]]},{"id":"378dea5cf74d870f","type":"function","z":"e64532d90f9d901d","name":"function 8","func":"msg.payload = \"I can't find face!!\"\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","libs":[],"x":1160,"y":180,"wires":[["b8abd664d599f9c0"]]},{"id":"b8abd664d599f9c0","type":"debug","z":"e64532d90f9d901d","name":"debug 17","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":1360,"y":180,"wires":[]},{"id":"19a9bea0bff54b33","type":"image","z":"e64532d90f9d901d","name":"result","width":160,"data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1170,"y":40,"wires":[]},{"id":"762c3ac1353188d0","type":"debug","z":"e64532d90f9d901d","name":"debug 18","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":620,"y":280,"wires":[]}]
```

### Register Example

![register](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/assets/112360329/1e897483-f6a2-43f5-b259-b8fa3dab4f34)

- JSON code

```
[{"id":"055c98606c931f5b","type":"tab","label":"User Registration Example","disabled":false,"info":"","env":[]},{"id":"334d5fbc400a4d09","type":"inject","z":"055c98606c931f5b","name":"Start","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":"3","topic":"","payload":"","payloadType":"date","x":90,"y":180,"wires":[["4760404bb74fd565"]]},{"id":"4760404bb74fd565","type":"file in","z":"055c98606c931f5b","name":"Image Path","filename":"","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":250,"y":180,"wires":[["a97c094b3457d8cc","13b1112af91bcf3f"]]},{"id":"a97c094b3457d8cc","type":"good-object-detection","z":"055c98606c931f5b","name":"","returnValue":"0","model":"yolov8n","threshold":0.5,"absolutePathDir":"","x":480,"y":140,"wires":[["c4f25d8144c36cd0","dda59b39a5f988e5"]]},{"id":"13b1112af91bcf3f","type":"image","z":"055c98606c931f5b","name":"Input Image","width":160,"data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":450,"y":220,"wires":[]},{"id":"c4f25d8144c36cd0","type":"debug","z":"055c98606c931f5b","name":"Object Detection Result","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":730,"y":220,"wires":[]},{"id":"dda59b39a5f988e5","type":"function","z":"055c98606c931f5b","name":"check if person exists","func":"if(msg.payload.data.hasOwnProperty(\"person\")) {\n    msg.next = true;\n    msg.payload = msg.payload.originImg;\n} else {\n    msg.next = false;\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":720,"y":140,"wires":[["26b24ecf67973821"]]},{"id":"26b24ecf67973821","type":"switch","z":"055c98606c931f5b","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":910,"y":180,"wires":[["eb2c8ec65d140976"],["a81e55e82001909c"]]},{"id":"eb2c8ec65d140976","type":"good-face-detection","z":"055c98606c931f5b","name":"","returnValue":"1","threshold":"0.5","absolutePathDir":"","x":1100,"y":140,"wires":[["c5e8d82a2359ff4b","ce27ea806ba14e88","bf02cef20c7c5573","8e12543b6e483f99","8446c8d601ee8fcf"]]},{"id":"bf02cef20c7c5573","type":"function","z":"055c98606c931f5b","name":"check if face exists","func":"if (msg.payload.data.face.length === 1){\n    msg.next = true;\n    msg.payload = msg.payload.data.face;\n} else if (msg.payload.data.face.length === 0) {\n    msg.next = false;\n    msg.errMsg = \"Couldn't find the face. Please try again.\";\n} else {\n    msg.next = false;\n    msg.errMsg = \"There are several faces. Please register only one person.\";\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1470,"y":140,"wires":[["f8aa938b61591ffb"]]},{"id":"c5e8d82a2359ff4b","type":"debug","z":"055c98606c931f5b","name":"Number of faces extracted","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload.data.face.length","targetType":"msg","statusVal":"","statusType":"auto","x":1500,"y":100,"wires":[]},{"id":"ce27ea806ba14e88","type":"image","z":"055c98606c931f5b","name":"Extracted Face 1","width":160,"data":"payload.data.face[0]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1310,"y":220,"wires":[]},{"id":"f8aa938b61591ffb","type":"switch","z":"055c98606c931f5b","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":1710,"y":160,"wires":[["2ca56057b286ed99"],["061cd6fe11f24d84"]]},{"id":"2ca56057b286ed99","type":"good-face-vectorization","z":"055c98606c931f5b","name":"","inputType":"1","returnType":"1","method":"0","path":"./examples/Example.txt","x":1950,"y":120,"wires":[]},{"id":"a81e55e82001909c","type":"function","z":"055c98606c931f5b","name":"Error Messege","func":"return console.log(\"Couldn't find anyone. Please try again.\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1080,"y":220,"wires":[[]]},{"id":"061cd6fe11f24d84","type":"function","z":"055c98606c931f5b","name":"Error Messege","func":"return console.log(msg.errMsg);","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1920,"y":200,"wires":[[]]},{"id":"35437ccdc48fc7cb","type":"inject","z":"055c98606c931f5b","name":"Start registering users with 360 cameras in overwrite","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":"3","topic":"","payload":"","payloadType":"date","x":230,"y":800,"wires":[["ee8fdba3ba40e407"]]},{"id":"275c2082fb751207","type":"good-object-detection","z":"055c98606c931f5b","name":"","returnValue":"0","model":"yolov8n","threshold":0.5,"absolutePathDir":"","x":560,"y":960,"wires":[["2d262c24765191ce","d10e4d4be4277b52"]]},{"id":"aae8a9c9e8262196","type":"image","z":"055c98606c931f5b","name":"iot capture image","width":160,"data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":570,"y":1040,"wires":[]},{"id":"2d262c24765191ce","type":"debug","z":"055c98606c931f5b","name":"Object Detection Result","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":850,"y":1040,"wires":[]},{"id":"d10e4d4be4277b52","type":"function","z":"055c98606c931f5b","name":"check if person exists","func":"if(msg.payload.data.hasOwnProperty(\"person\")) {\n    msg.next = true;\n    msg.payload = msg.payload.originImg;\n} else {\n    msg.next = false;\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":800,"y":960,"wires":[["3fa069ad90de7a80"]]},{"id":"3fa069ad90de7a80","type":"switch","z":"055c98606c931f5b","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":990,"y":960,"wires":[["9962eb5170c9a941"],["ea1c98f1e5579318"]]},{"id":"9962eb5170c9a941","type":"good-face-detection","z":"055c98606c931f5b","name":"","returnValue":"1","threshold":"0.3","absolutePathDir":"","x":1180,"y":920,"wires":[["1987fe98dd22375f","e078070b62147c27","2815aaf8682a6b2a","074e5e4b6b3a14d8","c16fdcfec70c3ae9"]]},{"id":"1987fe98dd22375f","type":"function","z":"055c98606c931f5b","name":"check if face exists","func":"if (msg.payload.data.face.length >= 1){\n    msg.next = true;\n    msg.payload = msg.payload.data.face;\n} else {\n    msg.next = false;\n    msg.errMsg = \"Couldn't find the face. Please try again.\";\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1430,"y":940,"wires":[["21376d9f08c57574"]]},{"id":"21376d9f08c57574","type":"switch","z":"055c98606c931f5b","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":1610,"y":940,"wires":[["94ea6ac664b94b5a"],["d9f050c49c9383a9"]]},{"id":"94ea6ac664b94b5a","type":"good-face-vectorization","z":"055c98606c931f5b","name":"","inputType":"1","returnType":"1","method":"0","path":"./examples/Example.txt","x":1810,"y":900,"wires":[]},{"id":"143b8bb1a79412bf","type":"status-device","z":"055c98606c931f5b","name":"Smart Things 360 camera","alias":"홈카메라 360 서울","deviceNodeId":"fdc5e8092c1ec104","deviceType":"installed-device","deviceId":"4da0b057-ab8f-44a3-af2b-ebcddfa29cfa","componentId":"","capabilityId":"imageCapture_v1","attributeId":"image","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":690,"y":860,"wires":[["fd9e0761a7e11d66"]]},{"id":"fd9e0761a7e11d66","type":"function","z":"055c98606c931f5b","name":"Get Url","func":"return {\n    \"url\" : msg.payload.components.main.imageCapture.image.value\n}","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":180,"y":920,"wires":[["8f48369ef5b0b5fe"]]},{"id":"8f48369ef5b0b5fe","type":"http request","z":"055c98606c931f5b","name":"","method":"GET","ret":"bin","paytoqs":"ignore","url":"","tls":"","persist":false,"proxy":"","insecureHTTPParser":false,"authType":"","senderr":false,"headers":[{"keyType":"other","keyValue":"Authorization","valueType":"other","valueValue":"Bearer 2a4f1a67-8a2f-42a0-b48b-ec3b37565e23"}],"x":190,"y":1000,"wires":[["aae8a9c9e8262196","275c2082fb751207"]]},{"id":"ee8fdba3ba40e407","type":"command-device","z":"055c98606c931f5b","name":"Smart Things 360 camera","alias":"take","deviceNodeId":"fdc5e8092c1ec104","deviceType":"installed-device","deviceId":"4da0b057-ab8f-44a3-af2b-ebcddfa29cfa","componentId":"","capabilityId":"imageCapture_v1","attributeId":"take","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":430,"y":860,"wires":[["143b8bb1a79412bf"]]},{"id":"4d7764aab359dca7","type":"installed-device","z":"3abd784315b57070","name":"SmartThings PAT","alias":"","device":"","devices":null,"profileId":"4d7764aab359dca7","x":100,"y":40,"wires":[]},{"id":"64eb34ea1451d3e6","type":"comment","z":"055c98606c931f5b","name":"User Registration Overwrite Example","info":"","x":160,"y":120,"wires":[]},{"id":"8e12543b6e483f99","type":"image","z":"055c98606c931f5b","name":"Extracted Face 1","width":160,"data":"payload.data.face[1]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1510,"y":220,"wires":[]},{"id":"8446c8d601ee8fcf","type":"image","z":"055c98606c931f5b","name":"Extracted Face 2","width":160,"data":"payload.data.face[2]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1710,"y":220,"wires":[]},{"id":"2469c5a9cc3cee6a","type":"file in","z":"055c98606c931f5b","name":"Image Path","filename":"","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":250,"y":520,"wires":[["c209e5b968755c22","e22589c667c8eb12"]]},{"id":"4e155d069772bdcc","type":"inject","z":"055c98606c931f5b","name":"Start","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":"3","topic":"","payload":"","payloadType":"date","x":90,"y":520,"wires":[["2469c5a9cc3cee6a"]]},{"id":"c209e5b968755c22","type":"good-object-detection","z":"055c98606c931f5b","name":"","returnValue":"0","model":"yolov8n","threshold":0.5,"absolutePathDir":"","x":480,"y":480,"wires":[["edfe130bc2475cb1","bf91e71c02c2afcd"]]},{"id":"e22589c667c8eb12","type":"image","z":"055c98606c931f5b","name":"Input Image","width":160,"data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":450,"y":560,"wires":[]},{"id":"edfe130bc2475cb1","type":"debug","z":"055c98606c931f5b","name":"Object Detection Result","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":730,"y":560,"wires":[]},{"id":"bf91e71c02c2afcd","type":"function","z":"055c98606c931f5b","name":"check if person exists","func":"if(msg.payload.data.hasOwnProperty(\"person\")) {\n    msg.next = true;\n    msg.payload = msg.payload.originImg;\n} else {\n    msg.next = false;\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":720,"y":480,"wires":[["ec1882c09743f825"]]},{"id":"ec1882c09743f825","type":"switch","z":"055c98606c931f5b","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":910,"y":520,"wires":[["5624ae8625c55b35"],["63c423b95e4ade64"]]},{"id":"5624ae8625c55b35","type":"good-face-detection","z":"055c98606c931f5b","name":"","returnValue":"1","threshold":"0.5","absolutePathDir":"","x":1100,"y":480,"wires":[["0d7db66b97fae730","2aca0bea8ebf3b5a","0b68b8c711e52401","870c18b3780120d6","38a12dc86af4c102"]]},{"id":"63c423b95e4ade64","type":"function","z":"055c98606c931f5b","name":"Error Messege","func":"return console.log(\"Couldn't find anyone. Please try again.\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1080,"y":560,"wires":[[]]},{"id":"0d7db66b97fae730","type":"debug","z":"055c98606c931f5b","name":"Number of faces extracted","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload.data.face.length","targetType":"msg","statusVal":"","statusType":"auto","x":1500,"y":440,"wires":[]},{"id":"2aca0bea8ebf3b5a","type":"image","z":"055c98606c931f5b","name":"Extracted Face 1","width":160,"data":"payload.data.face[0]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1310,"y":560,"wires":[]},{"id":"0b68b8c711e52401","type":"function","z":"055c98606c931f5b","name":"check if face exists","func":"if (msg.payload.data.face.length === 1){\n    msg.next = true;\n    msg.payload = msg.payload.data.face;\n} else if (msg.payload.data.face.length === 0) {\n    msg.next = false;\n    msg.errMsg = \"Couldn't find the face. Please try again.\";\n} else {\n    msg.next = false;\n    msg.errMsg = \"There are several faces. Please register only one person.\";\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1470,"y":480,"wires":[["13e0e8684bdb8bf2"]]},{"id":"870c18b3780120d6","type":"image","z":"055c98606c931f5b","name":"Extracted Face 1","width":160,"data":"payload.data.face[1]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1510,"y":560,"wires":[]},{"id":"38a12dc86af4c102","type":"image","z":"055c98606c931f5b","name":"Extracted Face 2","width":160,"data":"payload.data.face[2]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1710,"y":560,"wires":[]},{"id":"13e0e8684bdb8bf2","type":"switch","z":"055c98606c931f5b","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":1710,"y":500,"wires":[["42818e21ad5b7524"],["a85142ef6077df61"]]},{"id":"42818e21ad5b7524","type":"good-face-vectorization","z":"055c98606c931f5b","name":"","inputType":"1","returnType":"1","method":"1","path":"./examples/Example.txt","x":1950,"y":460,"wires":[]},{"id":"a85142ef6077df61","type":"function","z":"055c98606c931f5b","name":"Error Messege","func":"return console.log(msg.errMsg);","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1920,"y":540,"wires":[[]]},{"id":"c5a004bc79e339b8","type":"comment","z":"055c98606c931f5b","name":"User Registration Add Example","info":"","x":150,"y":460,"wires":[]},{"id":"ea1c98f1e5579318","type":"function","z":"055c98606c931f5b","name":"Error Messege","func":"return console.log(\"Couldn't find anyone. Please try again.\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1160,"y":1000,"wires":[[]]},{"id":"d9f050c49c9383a9","type":"function","z":"055c98606c931f5b","name":"Error Messege","func":"return console.log(msg.errMsg);","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1780,"y":980,"wires":[[]]},{"id":"2815aaf8682a6b2a","type":"image","z":"055c98606c931f5b","name":"Extracted Face 1","width":160,"data":"payload.data.face[0]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1430,"y":1020,"wires":[]},{"id":"074e5e4b6b3a14d8","type":"image","z":"055c98606c931f5b","name":"Extracted Face 1","width":160,"data":"payload.data.face[1]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1630,"y":1020,"wires":[]},{"id":"c16fdcfec70c3ae9","type":"image","z":"055c98606c931f5b","name":"Extracted Face 2","width":160,"data":"payload.data.face[2]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1830,"y":1020,"wires":[]},{"id":"e078070b62147c27","type":"debug","z":"055c98606c931f5b","name":"Number of faces extracted","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload.data.face.length","targetType":"msg","statusVal":"","statusType":"auto","x":1460,"y":880,"wires":[]}]
```

### Monitoring Example

![monitoring](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/assets/112360329/a814b1a1-85bb-4bfb-81d7-925510cf0fa7)

- JSON code

```
[{"id":"3abd784315b57070","type":"tab","label":"Monitoring Example","disabled":false,"info":"","env":[]},{"id":"8d5478db3e57b123","type":"good-object-detection","z":"3abd784315b57070","name":"","returnValue":"0","model":"yolov8n","threshold":0.5,"absolutePathDir":"","x":380,"y":300,"wires":[["1170d079545471bd","cda1a873d1e04377"]]},{"id":"cae77404cbade88a","type":"image","z":"3abd784315b57070","name":"iot capture image","width":160,"data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":370,"y":380,"wires":[]},{"id":"1170d079545471bd","type":"function","z":"3abd784315b57070","name":"check if person exists","func":"if(msg.payload.data.hasOwnProperty(\"person\")) {\n    msg.next = true;\n    msg.payload = msg.payload.originImg;\n} else {\n    msg.next = false;\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":640,"y":300,"wires":[["33e31a7d9b673cbf"]]},{"id":"33e31a7d9b673cbf","type":"switch","z":"3abd784315b57070","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":850,"y":300,"wires":[["866ccff8c2b9d53b"],["f13cfa0f33c3b5b1","c3512ee077dd0719"]]},{"id":"866ccff8c2b9d53b","type":"good-face-detection","z":"3abd784315b57070","name":"","returnValue":"1","threshold":0.5,"absolutePathDir":"","x":1060,"y":260,"wires":[["6b18b3483a6238e6","3f2de214f01b1b27","6595cdf6afdc5b44","d727e6fce48dd200","7ea7fbc2973b2fa6","f0193a5a68fcb960"]]},{"id":"f13cfa0f33c3b5b1","type":"file in","z":"3abd784315b57070","name":"Light Off","filename":"/node_modules/@good-i-deer/node-red-contrib-vision-ai/examples/dark.png","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":1020,"y":320,"wires":[["06b91757709bb067","76d257949b25193a"]]},{"id":"6b18b3483a6238e6","type":"image","z":"3abd784315b57070","name":"","width":160,"data":"payload.data.face[0]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1320,"y":440,"wires":[]},{"id":"3f2de214f01b1b27","type":"image","z":"3abd784315b57070","name":"","width":160,"data":"payload.data.face[1]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1320,"y":620,"wires":[]},{"id":"6595cdf6afdc5b44","type":"image","z":"3abd784315b57070","name":"","width":160,"data":"payload.data.face[2]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1320,"y":800,"wires":[]},{"id":"d727e6fce48dd200","type":"image","z":"3abd784315b57070","name":"","width":160,"data":"payload.data.face[3]","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":1320,"y":980,"wires":[]},{"id":"7ea7fbc2973b2fa6","type":"function","z":"3abd784315b57070","name":"check if face exists","func":"if (msg.payload.data.face.length != 0){\n    msg.next = true;\n    msg.payload = msg.payload.data.face;\n} else {\n    msg.next = false;\n}\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1310,"y":260,"wires":[["8372b7facc97047e"]]},{"id":"06b91757709bb067","type":"image","z":"3abd784315b57070","name":"result","width":160,"data":"payload","dataType":"msg","thumbnail":false,"active":true,"pass":false,"outputs":0,"x":650,"y":20,"wires":[]},{"id":"8372b7facc97047e","type":"switch","z":"3abd784315b57070","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":1450,"y":320,"wires":[["f43a7881f3a7a83e"],["6c66c9b576497984","f8edc6b59dda5c4f"]]},{"id":"7bf6dff189179161","type":"file in","z":"3abd784315b57070","name":"Light On","filename":"/node_modules/@good-i-deer/node-red-contrib-vision-ai/examples/light.png","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":2560,"y":340,"wires":[["06b91757709bb067","0343fe1af774b512"]]},{"id":"a6cbdf543139d4b6","type":"file in","z":"3abd784315b57070","name":"Light Off","filename":"/node_modules/@good-i-deer/node-red-contrib-vision-ai/examples/dark.png","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":2560,"y":280,"wires":[["06b91757709bb067","d9842f878f96d232"]]},{"id":"6c66c9b576497984","type":"file in","z":"3abd784315b57070","name":"Light On","filename":"/node_modules/@good-i-deer/node-red-contrib-vision-ai/examples/light.png","filenameType":"str","format":"","chunk":false,"sendError":false,"encoding":"none","allProps":false,"x":1620,"y":360,"wires":[["06b91757709bb067","ed16ca76dc596d9c"]]},{"id":"f43a7881f3a7a83e","type":"good-face-vectorization","z":"3abd784315b57070","name":"","inputType":"1","returnType":"0","path":"2312","x":1670,"y":260,"wires":[["db19e49f65f45917","2af86d09e5063ff2"]]},{"id":"61f60683dcacaf85","type":"switch","z":"3abd784315b57070","name":"","property":"next","propertyType":"msg","rules":[{"t":"true"},{"t":"false"}],"checkall":"true","repair":false,"outputs":2,"x":2350,"y":320,"wires":[["a6cbdf543139d4b6","c3512ee077dd0719"],["7bf6dff189179161","f8edc6b59dda5c4f"]]},{"id":"0343fe1af774b512","type":"function","z":"3abd784315b57070","name":"Messege","func":"return console.log(\"unregistered person\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":2740,"y":340,"wires":[[]]},{"id":"d9842f878f96d232","type":"function","z":"3abd784315b57070","name":"Messege","func":"return console.log(\"registered person\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":2740,"y":280,"wires":[[]]},{"id":"ed16ca76dc596d9c","type":"function","z":"3abd784315b57070","name":"Messege","func":"return console.log(\"Couldn't find the face.\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1820,"y":400,"wires":[[]]},{"id":"db19e49f65f45917","type":"debug","z":"3abd784315b57070","name":"Face vectorization results","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":1930,"y":220,"wires":[]},{"id":"2af86d09e5063ff2","type":"good-calculate-cosine","z":"3abd784315b57070","name":"","file":"","x":1930,"y":320,"wires":[["c69c8a66d5fa50e8","5bb42c0c28f23e2c"]]},{"id":"5bb42c0c28f23e2c","type":"function","z":"3abd784315b57070","name":"temp function2","func":"for(let i=0;i<msg.payload.length;++i){\n    const list = msg.payload[i];\n    for(let j=0;j<list.length;++j){\n        if(list[j]>=0.8){\n            msg.next = true;\n            return msg;\n        }\n    }\n}\n\nmsg.next = false;\nreturn msg","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":2180,"y":280,"wires":[["61f60683dcacaf85"]]},{"id":"c69c8a66d5fa50e8","type":"debug","z":"3abd784315b57070","name":" Similarity results","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":2180,"y":360,"wires":[]},{"id":"f8edc6b59dda5c4f","type":"command-device","z":"3abd784315b57070","name":"Light On Settiing","alias":"on","deviceNodeId":"eba7677008957596","deviceType":"installed-device","deviceId":"b26a6de3-6791-46d4-9c36-4ccaf33816d4","componentId":"","capabilityId":"switch_v1","attributeId":"on","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":1130,"y":40,"wires":[["fa2a9be8d98629f6"]]},{"id":"fa2a9be8d98629f6","type":"command-device","z":"3abd784315b57070","name":"Light Option Setting","alias":"setColor:#ff33be","deviceNodeId":"eba7677008957596","deviceType":"installed-device","deviceId":"b26a6de3-6791-46d4-9c36-4ccaf33816d4","componentId":"","capabilityId":"colorControl_v1","attributeId":"setColor","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":1350,"y":40,"wires":[[]]},{"id":"c3512ee077dd0719","type":"command-device","z":"3abd784315b57070","name":"Light Off Settiing","alias":"off","deviceNodeId":"eba7677008957596","deviceType":"installed-device","deviceId":"b26a6de3-6791-46d4-9c36-4ccaf33816d4","componentId":"","capabilityId":"switch_v1","attributeId":"off","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":1620,"y":40,"wires":[[]]},{"id":"04f7a0f81013baf0","type":"inject","z":"3abd784315b57070","name":"Start monitoring with 360 camera","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"1","crontab":"","once":false,"onceDelay":"3","topic":"","payload":"","payloadType":"date","x":220,"y":100,"wires":[["c15806b4f4999035"]]},{"id":"c15806b4f4999035","type":"command-device","z":"3abd784315b57070","name":"Smart Things 360 camera","alias":"take","deviceNodeId":"82d553e06ad08a53","deviceType":"installed-device","deviceId":"4da0b057-ab8f-44a3-af2b-ebcddfa29cfa","componentId":"","capabilityId":"imageCapture_v1","attributeId":"take","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":170,"y":180,"wires":[["c73945183c8e4894"]]},{"id":"c73945183c8e4894","type":"status-device","z":"3abd784315b57070","name":"Smart Things 360 camera","alias":"홈카메라 360 서울","deviceNodeId":"82d553e06ad08a53","deviceType":"installed-device","deviceId":"4da0b057-ab8f-44a3-af2b-ebcddfa29cfa","componentId":"","capabilityId":"imageCapture_v1","attributeId":"image","rules":[],"logging":false,"loggingEditor":false,"loggingConsole":false,"outputs":1,"x":430,"y":180,"wires":[["29e1e9fb29d0870d"]]},{"id":"29e1e9fb29d0870d","type":"function","z":"3abd784315b57070","name":"Get Url","func":"return {\n    \"url\" : msg.payload.components.main.imageCapture.image.value\n}","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":120,"y":260,"wires":[["f18f3985db270bec"]]},{"id":"f18f3985db270bec","type":"http request","z":"3abd784315b57070","name":"","method":"GET","ret":"bin","paytoqs":"ignore","url":"","tls":"","persist":false,"proxy":"","insecureHTTPParser":false,"authType":"","senderr":false,"headers":[{"keyType":"other","keyValue":"Authorization","valueType":"other","valueValue":"Bearer 2a4f1a67-8a2f-42a0-b48b-ec3b37565e23"}],"x":130,"y":340,"wires":[["8d5478db3e57b123","cae77404cbade88a"]]},{"id":"cda1a873d1e04377","type":"debug","z":"3abd784315b57070","name":"Object Detection Result","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":650,"y":380,"wires":[]},{"id":"f0193a5a68fcb960","type":"debug","z":"3abd784315b57070","name":"Number of faces extracted","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload.data.face.length","targetType":"msg","statusVal":"","statusType":"auto","x":1360,"y":380,"wires":[]},{"id":"76d257949b25193a","type":"function","z":"3abd784315b57070","name":"Messege","func":"return console.log(\"Couldn't find anyone.\");","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":1020,"y":400,"wires":[[]]},{"id":"4d7764aab359dca7","type":"installed-device","z":"3abd784315b57070","name":"SmartThings PAT","alias":"","device":"","devices":null,"profileId":"4d7764aab359dca7","x":100,"y":40,"wires":[]}]
```

### ChromaDB Example

![chromadb](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/assets/112360329/35f657a8-48d9-4a6a-b246-643645c00b24)

- JSON code

```
[{"id":"8fab5feccdf8615c","type":"tab","label":"ChromaDB Example","disabled":false,"info":"","env":[]},{"id":"bbd5eb14fea36ece","type":"inject","z":"8fab5feccdf8615c","name":"Embeddings","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"[2.2, 3.4, 5.6]","payloadType":"jsonata","x":170,"y":260,"wires":[["7aa75543c37c854b"]]},{"id":"7aa75543c37c854b","type":"good-chroma-db","z":"8fab5feccdf8615c","name":"","dbIp":"http://localhost","dbPort":"8000","dbName":"MyCollection","distance":"cosine","operation":"query","nResults":"1","x":390,"y":260,"wires":[["95a00582f9fe669d"]]},{"id":"95a00582f9fe669d","type":"debug","z":"8fab5feccdf8615c","name":"Distance","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload.distances[0]","targetType":"msg","statusVal":"","statusType":"auto","x":600,"y":260,"wires":[]},{"id":"98fe2d9e7e6d7ea2","type":"inject","z":"8fab5feccdf8615c","name":"Embeddings","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"[1.2, 2.4, 3.6]","payloadType":"jsonata","x":170,"y":120,"wires":[["e93bc75960bd7916"]]},{"id":"27d39b2212dfb94b","type":"good-chroma-db","z":"8fab5feccdf8615c","name":"Insert","dbIp":"http://localhost","dbPort":"8000","dbName":"MyCollection","distance":"cosine","operation":"insert","nResults":"1","x":470,"y":120,"wires":[["725a6fa4fc896386"]]},{"id":"725a6fa4fc896386","type":"debug","z":"8fab5feccdf8615c","name":"Result","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"result","targetType":"msg","statusVal":"","statusType":"auto","x":610,"y":120,"wires":[]},{"id":"b0619bf4e563ca10","type":"comment","z":"8fab5feccdf8615c","name":"Insert","info":"","x":130,"y":80,"wires":[]},{"id":"e93bc75960bd7916","type":"good-chroma-db","z":"8fab5feccdf8615c","name":"Create","dbIp":"http://localhost","dbPort":"8000","dbName":"MyCollection","distance":"cosine","operation":"create","nResults":"1","x":330,"y":120,"wires":[["27d39b2212dfb94b"]]},{"id":"4292a9044362e632","type":"comment","z":"8fab5feccdf8615c","name":"Query","info":"","x":130,"y":220,"wires":[]}]
```

<hr>

## Discussions and suggestions

Use [GitHub Issues](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/issues) to ask questions or to discuss new features.

<hr>

## Authors

[**GOOD-I-DEER**](https://github.com/GOOD-I-DEER) in SSAFY(Samsung Software Academy for Youth) 9th

- [Kim Jaea](https://github.com/kimjaea)
- [Lee Deok Yong](https://github.com/Gitgloo)
- [Yi Jong Min](https://github.com/chickennight)
- [Lee Che Lim](https://github.com/leecr1215)
- [Lee Hyo Sik](https://github.com/hy06ix)
- [Jung Gyu Sung](https://github.com/ramaking)
<hr>

## Copyright and license

Copyright Samsung Automation Studio Team under the [General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)

<hr>

## Reference

- [Node-RED Creating Nodes](https://nodered.org/docs/creating-nodes/)
- [SamsungAutomationStudio Github Repository](https://github.com/Samsung/SamsungAutomationStudio)
- [FaceNet: A Unified Embedding for Face Recognition and Clustering](https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Schroff_FaceNet_A_Unified_2015_CVPR_paper.pdf)
- [VGGFace2](https://paperswithcode.com/dataset/vggface2-1)
- [inception_resnet_v1](https://github.com/timesler/facenet-pytorch/blob/master/models/inception_resnet_v1.py)
- [Ultralytics YOLOv8](https://docs.ultralytics.com/)
- [yolov8 onnx on javascript](https://github.com/AndreyGermanov/yolov8_onnx_javascript)
- [yolov8 onnx on nodejs](https://github.com/AndreyGermanov/yolov8_onnx_nodejs)
- [yolov8 face model](https://github.com/akanametov/yolov8-face/tree/dev#inference)
- [ChromaDB Github Repository](https://github.com/chroma-core/chroma)

<hr>
