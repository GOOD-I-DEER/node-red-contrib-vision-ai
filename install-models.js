const axios = require("axios");
const fs = require("fs");
const path = require("path");

const modelUrls = {
  "facenet-model":
    "https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/raw/main/nodes/model/facenet-model.onnx",
  yolov8m:
    "https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/raw/main/nodes/model/yolov8m.onnx",
  "yolov8n-face":
    "https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/raw/main/nodes/model/yolov8n-face.onnx",
  yolov8n:
    "https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/raw/main/nodes/model/yolov8n.onnx",
  yolov8s:
    "https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/raw/main/nodes/model/yolov8s.onnx",
};

const downloadDir = path.join(__dirname, "nodes/model");

async function downloadModels() {
  try {
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir, { recursive: true });
    }

    for (const modelName in modelUrls) {
      const modelUrl = modelUrls[modelName];
      const response = await axios.get(modelUrl, { responseType: "stream" });
      const modelPath = path.join(downloadDir, `${modelName}.onnx`);
      const fileStream = fs.createWriteStream(modelPath);
      response.data.pipe(fileStream);
      await new Promise((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });
      console.log(`Model file ${modelName}.onnx Download Complete`);
    }
  } catch (error) {
    console.error("Error downloading model file:", error);
  }
}

downloadModels();
