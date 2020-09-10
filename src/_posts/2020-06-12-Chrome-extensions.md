---
title: Developing Chrome Extensions With React
tag:
  - extensions
  - js
  - react
  - rollup
date: 2020-06-12
---

Browser plugins are neat little pieces of software that run inside our browsers ...

## Overview of Chrome extensions

A Chrome extension is made up of a series of scripts that talk to each other utilizing native browser apis, in our case the `chrome.tabs.sendMessage` and `chrome.runtime.onMessage.addListener` API's.

In a nutshell:
- __background.js__ is the background script, only one instance of this will be running on our browser. This script is the 'coordinator' of our extension, it listen to requests and does some stuff based on which request it received. It can also send data back to the script that emmited the message.
- __popup.js__ is the script that listens for interactions inside our plugin popup and sends messaged to the other scripts in the extension. As with the background script, only one instance of this file runs in the browser at the same time.
- __content.js__ is the content script, this is the only part of our application which can access and manipulate the DOM. Unlike the previous scripts, this scripts runs an instance of it in every page we enable it in our manifest.
- __manifest.json__ is the configuration file for out extension. Here we declare the permissions the extension needs as well as which scripts we will use.

<img src="./chrome/overview-of-an-extension.png" alt="overview of chrome extensions" class="mx-auto">

Each script has access to different API's, this is out of the scope of this post, but you can learn more about extensions in the [official documentation](https://developer.chrome.com/extensions/getstarted)

## Chrome extensions with React 

My initial intents of developing chrome extensions with React were using create-react-app. 

This allowed me to prototype independent parts of extensions such as a popup, or a new tab page, but at the time of creating some content scripts I was no able to use ES module imports which made it difficult to develop the extensions once its scope started increasing.

There were some workarounds to circumvent this, but each workaround came with its limitations or felt a bit too hacky.

My other problem with extension development using CRA was that I had to build my plugin every time I made some changes and then I had to reload the plugin manually inside the browser.

## Bundlers to the rescue

I knew a bundler would help me to develop my plugin with react as well as alllow me to use imports in my content scripts, modularising my code and making it more maintainable.

I had some experience with Parcel, but after some tests I realised that whilst you can build a plugin with parcel, when you have to create bundles for multiple files: content, background, popup, etc... Parcel was hard to extend to make it work as needed (or at least I couldn't figure how to create multiple entrypoints for the bundle.)

Then looking at alternative bundlers I stumbled upon [rollup-plugin-chrome-extension](https://github.com/extend-chrome/rollup-plugin-chrome-extension#readme) which allows me skip all the reloading part and lets me use imports. I just had to figure out how to use React with this parcel plugin.

## React + Rollup + Chrome Extension    
