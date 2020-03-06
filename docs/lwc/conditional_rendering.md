---
id: salesforce-conditional-rendering
title: Conditional rendering
description: "Salesforce Troop Conditional Rendering || Conditional rendering is essential to hide and show your DOM element. It gives you the power to play dynamically with the lightning web components."
---

## What is Directive?
Directives are special HTML attributes. The LWC programming model has a few custom directives that let you manipulate the DOM using markup.

In LWC we have two special directives for conditional rendering.

**1.`if:true`**

**2.`if:false`**

## How to render LWC template conditionally?
To render HTML conditionally, add the `if:true|if:false` directive to a nested `<template>` tag that encloses the conditional content.

### Syntax

```html
<template if:true={expression}>
    Show me when expression is true
</template>
```

```html
<template if:false={expression}>
    Show me when the expression is false
</template>
```
- Use this directive to render DOM elements in a template conditionally.
- The expression can be a JavaScript identifier(property)
- The expression can be a JavaScript dot notation that accesses a property from an object (user.fullName)
- You can't use ternary operator inside the expression
- To compute the value of the expression, use a getter in the JavaScript class.

Now I assume you guys are aware of how to create a component in vs code. For conditional rendering will build three demos
1. if:true demo
2. if:false demo
3. toogle demo
4. conditional rendering on change demo

## Example of `if:true` condition
- First, create a component called `templateTrueDemo`
- Add the following code to the `templateTrueDemo.js`, `templateTrueDemo.html` and `templateTrueDemo.js-meta.xml`

<!--DOCUSAURUS_CODE_TABS-->
<!--templateTrueDemo.js-->

```js
import { LightningElement, track } from 'lwc';
export default class TemplateTrueDemo extends LightningElement {
    //if:true demo logic
    @track showText = false;
    showHandler() {
        this.showText = true
    }
}
```
<!--templateTrueDemo.html-->
```html
<template>
    <!-- card for if:true demo -->
    <lightning-card title="if:true demo" icon-name="custom:custom17">
        <ul class="slds-m-around_medium">
        <button class="slds-button slds-button_success" onclick={showHandler}>Click me to show the text</button>
        <template if:true={showText}>
            <h3>Hurray!! You able to see the hidden text</h3>
        </template>
        </ul>
    </lightning-card>
</template>
```
<!--templateTrueDemo.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="templateTrueDemo">
        <apiVersion>46.0</apiVersion>
        <isExposed>true</isExposed>
        <targets>
            <target>lightning__AppPage</target>
            <target>lightning__RecordPage</target>
            <target>lightning__HomePage</target>
          </targets>
</LightningComponentBundle>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### if:true demo explanation
- `if:true` directive shows the DOM(Document object model) only if the condition/expression is `true`.
- As shown in the above example, the text will only be visible if `showText` property will become `true`
- We are using `showHandler` method to change the `showText` property to `true`
- `showHandler` will gets triggered on click of a button


## Example of `if:false` condition
- First create a component called `templateFalseDemo`
- Add the following code to the `templateFalseDemo.js`, `templateFalseDemo.html` and `templateFalseDemo.js-meta.xml`
<!--DOCUSAURUS_CODE_TABS-->
<!--templateFalseDemo.js-->

```js
import { LightningElement, track } from 'lwc';
export default class TemplateFalseDemo extends LightningElement {
    //if:false demo logic
    @track hideText = false;
    hideHandler(){
        this.hideText = true
    }
}

```
<!--templateFalseDemo.html-->
```html
<template>
    <lightning-card title="if:false demo" icon-name="custom:custom16">
        <ul class="slds-m-around_medium">
        <button class="slds-button slds-button_destructive" onclick={hideHandler}>Click me to hide the text</button>
        <template if:false={hideText}>
            <h3>Thanks for seeing me!! </h3>
        </template>
        </ul>
    </lightning-card>
</template>
```
<!--templateFalseDemo.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="templateFalseDemo">
        <apiVersion>46.0</apiVersion>
        <isExposed>true</isExposed>
        <targets>
            <target>lightning__AppPage</target>
            <target>lightning__RecordPage</target>
            <target>lightning__HomePage</target>
          </targets>
</LightningComponentBundle>
```
<!--END_DOCUSAURUS_CODE_TABS-->
### if:false demo explanation
- `if:false` directive is just opposite of the `if:true`
- `if:false` directive hides the DOM(Document object model) only if the condition/expression is `true`.
- As shown in above example, text will only be hidden if `hideText` property will become `true`
- We are using `hideHandler` method to change the `hideText` property to `true`
- `hideHandler` will gets triggered on click of button

## Example of toggle condition
- First create a component called `templateToggleDemo`
- Once `templateToggleDemo` component gets created add `templateToggleDemo.css` file to the folder
- Add the following code to the `templateToggleDemo.js`, `templateToggleDemo.html` and `templateToggleDemo.js-meta.xml`
<!--DOCUSAURUS_CODE_TABS-->
<!--templateToggleDemo.js-->

```js
import { LightningElement, track } from 'lwc';
export default class TemplateToggleDemo extends LightningElement {
    @track toggleText = true;
    toggleHandler(){
        this.toggleText = !this.toggleText
    }
}
```
<!--templateToggleDemo.html-->
```html
  <lightning-card title="toggle demo" icon-name="custom:custom16">
        <ul class="slds-m-around_medium">
        <button class="slds-button slds-button_brand" onclick={toggleHandler}>Click me to toggle the text</button>
        <template if:false={toggleText}>
            <h3>let's play hide and seek!! </h3>
        </template>
        </ul>
    </lightning-card>
```
<!--templateToggleDemo.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="templateToggleDemo">
        <apiVersion>46.0</apiVersion>
        <isExposed>true</isExposed>
        <targets>
            <target>lightning__AppPage</target>
            <target>lightning__RecordPage</target>
            <target>lightning__HomePage</target>
          </targets>
</LightningComponentBundle>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### toggle demo explanation
- Toggle means flip-flop, we will hide and show the text on click of the same action
- As shown in the above example, the text will only be hidden if `hideText` property will become `true`
- We are using `if:false` condition and binding the `toggleText` which is initialized to `true`. It means that load data will be visible.
- We have bind the `toggleHandler` method to the button
- on click of a button, we are toggling the value of `toggleText`. Initially, it was `true` on the first click it becomes `false` on the second click again it becomer `true` and so.


## Example of on change condition
- First create a component called `templateOnChangeDemo`
- Add the following code to the `templateOnChangeDemo.js`, `templateOnChangeDemo.html` and `templateOnChangeDemo.js-meta.xml`
<!--DOCUSAURUS_CODE_TABS-->
<!--templateOnChangeDemo.js-->

```js
import { LightningElement, track } from 'lwc';
export default class TemplateOnChangeDemo extends LightningElement {
     // condtional hide and show demo
    @track inputText = null
    changeHandler(event){
        this.inputText = event.target.value
    }
    get checkText(){
        return this.inputText === 'Hello'
    }
}
```
<!--templateOnChangeDemo.html-->
```html
<template>
    <lightning-card title="Condition based Hide/show. Type 'Hello' in textbox." icon-name="custom:custom16">
        <ul class="slds-m-around_medium">
        <lightning-input
            type="text"
            name="title"
            label="Enter your Name:"
            onkeyup={changeHandler}
            value={inputText}
        ></lightning-input>
        <template if:true={checkText}>
            <h3>Hello salesforce </h3>
        </template>
        </ul>
    </lightning-card>
</template>
```

<!--templateOnChangeDemo.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="templateOnChangeDemo">
        <apiVersion>46.0</apiVersion>
        <isExposed>true</isExposed>
        <targets>
            <target>lightning__AppPage</target>
            <target>lightning__RecordPage</target>
            <target>lightning__HomePage</target>
          </targets>
</LightningComponentBundle>
```
<!--END_DOCUSAURUS_CODE_TABS-->

### on change demo explanation

- There are many scenario in which we have to hide or show HTML based on some calculation
- To compute a value for the property, we have to use a JavaScript getter.
- In above example, text will be visible if you type the `Hello` word in the textbox.

<!--https://developer.salesforce.com/docs/component-library/tools/playground/cOCFVTXa/1/edit-->