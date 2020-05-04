---
id: LWC-introduction
title: LWC Introduction
description: 'Salesforce Troop LWC Introduction || Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning Web Components uses core Web Components standards and provides us only what's necessary to perform well in browsers supported by Salesforce'
---

Lightning web components are custom HTML elements built using HTML and modern JavaScript.

- Lightning Web Components uses core Web Components standards and provides us only what's necessary to perform well in browsers supported by Salesforce.
- Lightning Web Components are lightweight and delivers exceptional performance Because it's built on code that runs natively in browsers.

Since LWC has come into existence, we can now create Lightning components in the following ways:

**Aura components** – which are also known as lightning components.

**Lightning Web Components**- the newest way to create lightning components.

## Web Components

Web Components are a set of standards that allow us to write modular, reusable, and encapsulated HTML elements. And the best thing about them: since they're based on web standards, we don't have to install any framework or library to start using them. You can start writing web components using vanilla javascript right now!.

## Key concepts of Web components

There are four key concepts to understand the web components that are as explained below.

![web component model](assets/LWC/Web_component_model.PNG)

### 1) Custom Elements

The Custom Elements API allows us to create our own DOM elements. Using this API, we can define a custom element, and inform the parser how to construct that element properly and how elements of that class should react to changes. Now you can create your own HTML element.

**Key features:**

- It defines an element's behavior
- It reacts to attribute changes
- Augment existing elements

### 2) Shadow DOM

Shadow DOM gives us a way to encapsulate the styling and markup of our components. It's a sub DOM tree attached to a DOM element, to make sure none of our stylings leaks out or gets overwritten by any external styles. It provides great modularity.

**Key features:**

- It keeps implementation logic inside
- It avoids styles leaking out
- Naming becomes simpler

### 3) ES Modules

The ES Modules specification defines the inclusion and reuse of JS documents in a standards-based, modular, performant way.

**Key features:**

- Add modules wherever it's needed
- No build step requirement
- Keep everything in one place

### 4) HTML Templates

The HTML `<template>` tag allows us to write reusable chunks of DOM. Inside a template, scripts don't run, images don't load, and styling/mark up is not rendered. A template tag itself is not even considered to be in the document until it's activated. HTML templates are great because, for every instance of our element, only one template is used.

**Key features:**

- Create ready-made structures
- Contains HTML, CSS and JS
- Highly reusable

