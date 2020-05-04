---
id: event-with-bubbling-child-to-parent-component
title: Trigger event with bubbling
---

## notifyParentComponent
<!--DOCUSAURUS_CODE_TABS-->

<!--notifyParentComponent.js-->

```js

import { LightningElement } from 'lwc';

export default class NotifyParentComponent extends LightningElement {
    showNotification = false;
    showHandler() {
        this.showNotification = true;
    }
}
```

<!--notifyParentComponent.html-->

```html
<template>
    <lightning-card title="Event with Bubbling" icon-name="custom:custom14">
        <div class="slds-m-around_medium">
    <div class="parent-section" onshow={showHandler}>
        <p>I am parent component</p>
        <template if:true={showNotification}>
            <div class="notificationbox">
                <span>Notification from Child. Event bubbled successfully!</span>
            </div>
        </template>
        <c-notify-child-component></c-notify-child-component>
    </div>
    </div></lightning-card>
</template>
```

<!--notifyParentComponent.css-->

```css
.notificationbox {
    background-color: #43a047;
    color: #fff;
    display: flex;
    padding: 16px 16px;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 4px;
    flex-grow: initial;
    max-width: 80%;
    margin-bottom: 1rem;
}
.parent-section {
    border: 5px solid black;
    padding: 2rem;
}
```

<!--notifyParentComponent.js-meta.xml-->

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>true</isExposed>
    <targets>
        <target>lightning__AppPage</target>
        <target>lightning__RecordPage</target>
        <target>lightning__HomePage</target>
    </targets>
</LightningComponentBundle>
```

<!--END_DOCUSAURUS_CODE_TABS-->

## notifyChildComponent
<!--DOCUSAURUS_CODE_TABS-->
<!--notifyChildComponent.js-->

```js
import { LightningElement } from 'lwc';

export default class NotifyChildComponent extends LightningElement {
    showChildNotification = false;
    childHandler() {
        this.showChildNotification = true;
    }
    showNotifyParentHandler(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('show', {
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }
}
```
<!--notifyChildComponent.html-->

```html
<template>
    <div class="child-section">
        <p>I am child component</p>
        <template if:true={showChildNotification}>
            <div class="notificationbox">
                <span>Notification in Child component. Event bubbled till parent
                    element in same component</span>
            </div>
        </template>
        <div class="content" onclick={childHandler}>
            <button class="btn" onclick={showNotifyParentHandler}>
                Click me to send notification to parent component using event bubbling
            </button>
        </div>
    </div>
</template>
```

<!--notifyChildComponent.css-->

```css
  
.notificationbox {
    background-color: #ffa000;
    color: #fff;
    display: flex;
    padding: 16px 16px;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 4px;
    flex-grow: initial;
    max-width: 80%;
    margin-bottom: 1rem;
}
.child-section {
    border: 5px solid red;
    padding: 2rem;
}
.btn {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    background-color: #01344e;
}
.content {
    display: contents;
}
```
<!--notifyChildComponent.js-meta.xml-->

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
```

<!--END_DOCUSAURUS_CODE_TABS-->
