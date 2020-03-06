---
id: lwc-forEach-looping-in-template
title:  for:each loop
description: ''Salesforce Troop LWC looping for:each and iterator || There are many scenarios in which we have to render the same set of elements with the same styling with different data in the HTML. To solve this issue, we have template looping in the LWC.'
---

There are many scenarios in which we have to render the same set of elements with the same styling with different data in the HTML. To solve this issue, we have template looping in the LWC.

There are are two types of directives by which we can achieve template looping.

**1. for:each**

**2. iterator**

> use _`for:each`_ directive or the _`iterator`_ directive to iterate over an array.

## for:each loop

Below is the syntax of the _`for:each`_ loop

```javascript
<template for:each={array} for:item="currentItem" for:index="index">
  -----Here your repeatable template comes-----
</template>
```

| Sno. |       attributes        |                                                             Description                                                             |
| :--: | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |
|  1.  |    for:each={array}    |                                              `for:each` takes the `array` as an input                                               |
|  2.  | for:item="currentItem" | `currentItem` is the value of the current element. `currentItem` is an alias and can be anyname. `for:item` holds the `currentItem`.  |
|  3.  |   for:index="index"    |  `index` is the current element index in the array. `for:index` holds the `index`.         |

### what is key and it's importance in the loop

- A `key` is a special string attribute you need to include to the first element inside the template when creating lists of elements.
- Keys help the LWC engine identify which items have changed, are added, or are removed.
- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

> _Note-_ The key must be a string or a number, it can't be an object.

          You can't use the index as a value for the key.

## Example of `for:each` template looping

1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `SFDX: Create Lightning Web Component.`

3. Type `templateLoopingForEach` as the name of the new component and press `Enter.`

4. Again, Press `Enter` to accept the default `force-app/main/default/lwc.`

5. Goto your `lwc` folder, you will see one new component with the name `templateLoopingForEach` gets created.

6. Create one more file inside the folder `templateLoopingForEach.css` for styling.

7. Let's add the following code to `templateLoopingForEach.html`, `templateLoopingForEach.js`, `templateLoopingForEach.css` and `templateLoopingForEach.js-meta.xml`
   <!--DOCUSAURUS_CODE_TABS-->
   <!--templateLoopingForEach.js-->

```js
import { LightningElement } from "lwc";
export default class TemplateLoopingForEach extends LightningElement {
  carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"];
  programmingList = [
    {
      id: "06868",
      language: "HTML"
    },
    {
      id: "19797",
      language: "CSS"
    },
    {
      id: "298789",
      language: "Javascript"
    },
    {
      id: "398798",
      language: "Apex"
    },
    {
      id: "48967",
      language: "Aura"
    },
    {
      id: "58798",
      language: "Java"
    }
  ];
}
```

<!--templateLoopingForEach.html-->

```html
<template>
  <!-- Card for for:each demo with an array -->
  <lightning-card title="for:each demo with array" icon-name="custom:custom14">
    <ul class="slds-m-around_medium">
      <template for:each="{carList}" for:item="car">
        <a href="#" class="list-group-item list-group-item-action" key="{car}"
          >{car}</a
        >
      </template>
    </ul>
  </lightning-card>
  <hr />
  <!-- Card for for:each demo with an array of objects -->
  <lightning-card
    title="for:each demo with array of objects"
    icon-name="custom:custom14"
  >
    <ul class="slds-m-around_medium">
      <template for:each="{programmingList}" for:item="program">
        <a
          href="#"
          class="list-group-item list-group-item-action"
          key="{program.id}"
          >{program.language}</a
        >
      </template>
    </ul>
  </lightning-card>
</template>
```

<!--templateLoopingForEach.css-->

```css
.list-group {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  width: 50%;
}
.list-group-item:first-child {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.list-group-item-action {
  color: #495057;
  text-align: inherit;
  text-decoration: none;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.list-group-item:last-child {
  margin-bottom: 0;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
```
<!--templateLoopingForEach.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="templateLoopingForEach">
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
### templateLoopingForEach.js-meta.xml
- `templateLoopingForEach.js-meta.xml` is a configuration file
- The configuration file defines the metadata values for the component, including the design configuration for Lightning App Builder and Experience Builder.
- This file only show your component in app builder

> you get an error, if you don’t include a configuration file for your component

### for:each with Array demo explanation

- Inside the `templateLoopingForEach.html` the first `lightning-card` is for normal array demo
- `for:each` is taking an Array `carList` which is a private property inside the `templateLoopingForEach.js`
- we have used `car` alias for the current item of an array and mapped it to `for:item`
- As `key` should be unique and in this case, our all cars name is unique, so we have used their name as a key

### for:each with an array of objects demo explanation

- Inside the `templateLoopingForEach.html` the second `lightning-card` is for array of objects demo
- `for:each` is taking an Array `programmingList` which is a private property inside the `templateLoopingForEach.js`
- we have used `program` alias for the current item of an array and mapped it to `for:item`
- To access any property of an object, we have to use dot notation. _for example_ `program.language`
- As key should be unique and in this case, we have a unique id for each object, so we are using `program.id`
- `templateLoopingForEach.css` you can update based on your styling

## Output

Once you deploy your code, you will see the following output.

<!--https://developer.salesforce.com/docs/component-library/tools/playground/wjmwvqUK/3/edit-->
