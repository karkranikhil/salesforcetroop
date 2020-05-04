---
id: passing-string-data-parent-to-child-component
title: Communication with string data
---
![parent to child string](assets/LWC/parent-to-child-string.PNG)

### Parent component
 <!--DOCUSAURUS_CODE_TABS-->
<!--alertParentComponent.js-->

```js
import { LightningElement } from 'lwc';

export default class AlertParentComponent extends LightningElement {}
```

<!--alertParentComponent.html-->

```html
 
<template>
    <div class="margin-bottom-2rem">
        <lightning-card title="Parent to child data communication using strings" icon-name="custom:custom14">
            <div class="slds-m-around_medium">
                <div>
                    <c-alert-child-component message="Indicates a dangerous or potentially negative action"></c-alert-child-component>
                    <c-alert-child-component class-name="success" message="Success! Indicates a successful or positive action.">
                    </c-alert-child-component>
                    <c-alert-child-component class-name="info" message="Info! Indicates a neutral informative change or action.">
                    </c-alert-child-component>
                    <c-alert-child-component class-name="warning" message="Warning! Indicates a warning that might need attention.">
                    </c-alert-child-component>
                </div>
            </div>
        </lightning-card>
    </div>
    
</template>
```
<!--alertParentComponent.js-meta.xml-->
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


### Child component

<!--DOCUSAURUS_CODE_TABS-->
   <!--alertChildComponent.js-->

```js
import { LightningElement, api } from 'lwc';

export default class AlertChildComponent extends LightningElement {
    @api message
    @api className

    get alertClassName() {
        return this.className ? 'alert ' + this.className : 'alert'
    }
}
```

<!--alertChildComponent.html-->

```html
 <template>
    <div class={alertClassName}>
        {message}
    </div>
</template>
```

<!--alertChildComponent.css-->

```css
.alert {
        padding: 20px;
        background-color: #f44336;
        color: white;
        opacity: 1;
        transition: opacity 0.6s;
        margin-bottom: 15px;
      }
      
.alert.success {background-color: #4CAF50;}
.alert.info {background-color: #2196F3;}
.alert.warning {background-color: #ff9800;}
```
<!--alertChildComponent.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
```

<!--END_DOCUSAURUS_CODE_TABS-->