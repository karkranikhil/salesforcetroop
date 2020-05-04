---
id: calling-child-method-from-parent-component
title: Trigger Child method from Parent component.
---
![child action from parent](assets/LWC/child-action-from-parent.PNG)

### Parent component
 <!--DOCUSAURUS_CODE_TABS-->
   <!--barParentComponent.js-->

```js
import { LightningElement } from 'lwc';

export default class BarParentComponent extends LightningElement {
    changeColor() {
        this.template.querySelector('c-bar-child-component').changeBarColor();
    }
}
```

<!--barParentComponent.html-->

```html
 <template>
    <div class="margin-bottom-2rem">
        <lightning-card title="Calling child method from parent" icon-name="custom:custom14">
            <div class="slds-m-around_medium">
                <div class="parent-wrapper">
                    <button class="btn" onclick={changeColor}>Click me to change bar color</button>
                    <div class="child-wrapper">
                        <c-bar-child-component></c-bar-child-component>
                    </div>
                    
                </div>
            </div>
        </lightning-card>
    </div>
</template>

```

<!--barParentComponent.css-->

```css
.btn {
  border: none; /* Remove borders */
  color: white; /* Add a text color */
  padding: 14px 28px; /* Add some padding */
  cursor: pointer; /* Add a pointer cursor on mouse-over */
  background: #2196f3;
}
.parent-wrapper{
    padding: 10px;
    border: 5px solid #00a1e0;
}
.child-wrapper{
    padding: 10px;
    border: 2px solid #3cc2b3;
    margin: 10px;
}
```
<!--barParentComponent.js-meta.xml-->
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
   <!--barChildComponent.js-->

```js
import { LightningElement, api } from 'lwc';

export default class BarChildComponent extends LightningElement {
    className = "greenBar";
    @api changeBarColor() {
        this.className = "redBar"
    }
}
```

<!--barChildComponent.html-->

```html
 <template>
    <div class={className}>I am child component</div>
</template>
```

<!--barChildComponent.css-->

```css
.redBar{
    background:red;
    height: 50px;
    margin: 10px;
    color: white;
    text-align: center;
    line-height: 50px;
}
.greenBar{
    background:green;
    height: 50px;
    margin: 10px;
    color: white;
    text-align: center;
    line-height: 50px;
}
```
<!--barChildComponent.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
```

<!--END_DOCUSAURUS_CODE_TABS-->