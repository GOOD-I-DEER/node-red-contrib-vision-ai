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

The Node-Red-Contrib-Face-Vectorization requires [Node-RED](https://nodered.org) to be installed.

<hr>

## Nodes

> This is a brief description of each node.

- _Good Calculate Cosine_: It calculate cosine similarity between two vectors and return it as an array.
- _Good Face Vectorization_: It converts facial photos to vectors using AI as an array.
- _Good ChromaDB_: It connects and operates with ChromaDB server.

<hr>

## Install

```
cd ~/.node-red
npm install @good-i-deer/node-red-contrib-vision-ai
```

Restart your Node-RED instance

<hr>

## Examples

<hr>

## Discussions and suggestions

Use [GitHub Issues](https://github.com/GOOD-I-DEER/node-red-contrib-vision-ai/issues) to ask questions or to discuss new features.

<hr>

## Authors

[**GOOD-I-DEER**](https://github.com/GOOD-I-DEER) in SSAFY(Samsung Software Academy for Youth) 9th

- [Kim Jaea](https://github.com/kimjaea)
- [Yi Jong Min](https://github.com/chickennight)
- [Lee Deok Yong](https://github.com/Gitgloo)
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
