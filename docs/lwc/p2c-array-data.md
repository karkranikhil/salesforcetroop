---
id: passing-array-data-parent-to-child-component
title: Communication with Array/Object data
---
![parent-to-child-array](assets/LWC/parent-to-child-array.PNG)

### Parent component
 <!--DOCUSAURUS_CODE_TABS-->
   <!--businessCardParentComponent.js-->

```js
import { LightningElement } from 'lwc';

export default class BusinessCardParentComponent extends LightningElement {
    userDetails = [
        {
            name: 'John Doe',
            title: 'CEO & Founder',
            company: 'Harvard University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team1.jpg'
        },
        {
            name: 'Steve Smith',
            title: 'CEO & Founder',
            company: 'Standford University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team2.jpg'
        },
        {
            name: 'David Warner',
            title: 'CEO & Founder',
            company: 'Sydney University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team3.jpg'
        },
        {
            name: 'Peter Parker',
            title: 'CEO & Founder',
            company: 'Melbourne University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team4.jpg'
        }

    ]
}
```

<!--businessCardParentComponent.html-->

```html
 <template>
    <div class="margin-bottom-2rem">
        <lightning-card title="Parent to child data communication using Array/Objects" icon-name="custom:custom14">
            <div class="slds-m-around_medium">
                <c-business-card-child-component user-details={userDetails}></c-business-card-child-component>
            </div>
        </lightning-card>
    </div>

</template>

```

<!--businessCardParentComponent.js-meta.xml-->
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
   <!--businessCardChildComponent.js-->

```js
import { LightningElement, api } from 'lwc';

export default 
class BusinessCardChildComponent extends LightningElement {
    @api userDetails
}
```

<!--businessCardChildComponent.html-->

```html
 <template>
    <template for:each={_users} for:item="user">
        <div class="card" key={user.name}>
            <img src={user.imageUrl} alt={user.name} style="width:100%">
            <h1>{user.name}</h1>
            <p class="title">{user.title}</p>
            <p>{user.company}</p>
            <p><button>{user.buttontext}</button></p>
        </div>
    </template>
</template>
```

<!--businessCardChildComponent.css-->

```css
:host{
    display: flex;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 10px;
    text-align: center;
    font-family: arial;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }
```
<!--businessCardChildComponent.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>48.0</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
```

<!--END_DOCUSAURUS_CODE_TABS-->