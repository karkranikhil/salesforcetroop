---
id: simple-event-child-to-parent-component
title: Trigger event without data
---
## modalParentComponent
<!--DOCUSAURUS_CODE_TABS-->
<!--modalParentComponent.js-->

```js
import { LightningElement } from 'lwc';

export default class ModalParentComponent extends LightningElement {
    showModal = false;
    showHandler() {
        this.showModal = true;
    }
    modalCloseHandler() {
        this.showModal = false;
    }
}
```
<!--modalParentComponent.html-->

```html
<template>
    <lightning-card title="Simple Event" icon-name="custom:custom14">
        <div class="slds-m-around_medium">
            <button class="slds-button slds-button_success" onclick={showHandler}>Open Modal</button>
            <template if:true={showModal}>
                <c-modal-component header-text="Message !!"
                    body-text="This Modal is a child component. Triggered from parent and on click of Close button it will dispatch an event to parent handler and that close the modal"
                    onclose={modalCloseHandler}>
                </c-modal-component>
            </template>

        </div>
    </lightning-card>
    
</template>
```
<!--modalParentComponent.js-meta.xml-->

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

## modalComponent
<!--DOCUSAURUS_CODE_TABS-->

<!--modalComponent.js-->

```js
import { LightningElement, api } from 'lwc';

export default class ModalComponent extends LightningElement {
    @api headerText;
    @api bodyText;
    closeHandler() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
```

<!--modalComponent.html-->

```html
<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <header>
                <strong>{headerText}</strong>
            </header>
            <p>{bodyText}</p>
            <footer class="text-right">
                <button class="btn danger" onclick={closeHandler}>Close</button>
            </footer>
        </div>
    </div>
</template>
```

<!--modalComponent.css-->

```css
/* The Modal (background) */
.modal {
    display: block; 
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    width: 80%;
    top: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}
.btn {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
}
.danger {
    background-color: #f44336;
} 
.success{
    background-color: green;
}
.danger:hover {
    background: #da190b;
}
.text-right {
    text-align: right;
}
```

<!--modalComponent.js-meta.xml-->

```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
```

<!--END_DOCUSAURUS_CODE_TABS-->