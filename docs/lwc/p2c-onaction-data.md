---
id: passing-data-parent-to-child-on-action
title: Communication on action at parent
---
![parent to child action](assets/LWC/parent-to-child-action.PNG)

### Parent component
 <!--DOCUSAURUS_CODE_TABS-->
   <!--progressBarParentComponent.js-->

```js
import { LightningElement } from 'lwc';

export default class ProgressBarParentComponent extends LightningElement {
    percentage = 10
    changeHandler(event) {
        this[event.target.name] = event.target.value <= 100 ? event.target.value : 100;
    }
}
```

<!--progressBarParentComponent.html-->

```html
 <template>
    <div class="margin-bottom-2rem">
        <lightning-card title="Passing data to Child on action at parent" icon-name="custom:custom14">
            <div class="slds-m-around_medium">
                <div class="parent-wrapper">
                    <h2>Parent Component</h2>
                    <div class="field">
                        <label for="name">Enter your percentage:</label>
                        <input id="percentage" type="number" min="0" max="100" name="percentage" onkeyup={changeHandler}
                            value={percentage} />
                    </div>
                    <div class="child-wrapper">
                        <h2>Child Component</h2>
                        <c-progress-bar-child-component percentage={percentage}></c-progress-bar-child-component>
                    </div>
                </div>
            </div>
        </lightning-card>
    </div>
</template>

```

<!--progressBarParentComponent.css-->

```css
input {
    vertical-align: middle;
    margin: 5px;
    padding: 10px;
    background-color: #fff;
    border: 2px solid #ddd;
    font-size: 16px;
}
h2{
    font-weight: 700;
    font-size: 18px;
}
.child-wrapper{
    padding: 10px;
    border: 2px solid #3cc2b3;
    margin: 10px;
}
.parent-wrapper{
    border: 5px solid #00a1e0;
    padding: 5px;
}
```
<!--progressBarParentComponent.js-meta.xml-->
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
   <!--progressBarChildComponent.js-->

```js
import { LightningElement, api } from 'lwc';

export default class ProgressBarChildComponent extends LightningElement {
    @api percentage;
    get getStyle() {
        return 'width:' + this.percentage + '%';
    }
}
```

<!--progressBarChildComponent.html-->

```html
 <template>
    <div class="myProgress">
        <div class="myBar" style={getStyle}>{percentage}</div>
    </div>
</template>
```

<!--progressBarChildComponent.css-->

```css
.myProgress {
    width: 100%;
    background-color: #ddd;
}
  
.myBar {
  height: 50px;
  background-color: #4CAF50;
  text-align: center;
  line-height: 50px;
  color: white;
}
.danger{
  background-color: #f00;
}
```
<!--progressBarChildComponent.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
```
<!--END_DOCUSAURUS_CODE_TABS-->go 