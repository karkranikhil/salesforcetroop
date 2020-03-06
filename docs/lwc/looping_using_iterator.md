---
id: lwc-iterator-looping-in-template
title:  iterator loop
description: ''Salesforce Troop LWC looping for:each and iterator || There are many scenarios in which we have to render the same set of elements with the same styling with different data in the HTML. To solve this issue, we have template looping in the LWC.'
---

There are many scenarios in which we have to render the same set of elements with the same styling with different data in the HTML. To solve this issue, we have template looping in the LWC.

There are are two types of directives by which we can achieve template looping.
**1. for:each**
**2. iterator**

> use _`for:each`_ directive or the _`iterator`_ directive to iterate over an array.

In previous section we covered the _`for:each`_ now we will cover the _`iterator`_ loop

## iterator loop

To apply a special behavior to the first or last item in a list we prefer `iterator` over `for:each`

Below is the syntax of the _`iterator_ loop

```js
<template iterator:iteratorName={array}>
  -----Here your repeatable template comes-----
</template>
```

| Sno. |  attributes   |                                                                                                   Description |
| :---- | :---------- | :------------------------------------------------------------------------------------------------------------ |
| 1.   |   iterator   |                                                    It's a keyword to tell template that it's an iterator loop |
| 2.   | iteratorName | `iteratorName` is the value of the current element in the loop. `iteratorName` is an alias and can be anyname |
| 3.   |    array     |                                                            `array` is the data on which we want to apply loop |

## Properties of iterator name

Using iterator name you can access the following properties

**`value`** — The value of the item in the list. Use this property to access the properties of the array. _For example -_ _`iteratorName.value.propertyName`_

**`index`** — The index of the item in the list. _For example -_ _`iteratorName.index`_

**`first`** — A boolean value indicating whether this item is the first item in the list. _For example -_ _`iteratorName.first`_

**`last`** — A boolean value indicating whether this item is the last item in the list. _For example -_ _`iteratorName.last`_


## what is key and it's importance in the loop

- A `key` is a special string attribute you need to include to the first element inside the template when creating lists of elements.
- Keys help the LWC engine identify which items have changed, are added, or are removed.
- The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.

> _Note-_ The key must be a string or a number, it can't be an object.

          You can't use the index as a value for the key.

## Example of `for:each` template looping

1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `SFDX: Create Lightning Web Component.`

3. Type `templateLoopingIterator` as the name of the new component and press `Enter.`

4. Again, Press `Enter` to accept the default `force-app/main/default/lwc.`

5. Goto your `lwc` folder, you will see one new component with the name `templateLoopingIterator` gets created.

6. Create one more file inside the folder `templateLoopingIterator.css` for styling.

7. Let's add the following code to `templateLoopingIterator.html`, `templateLoopingIterator.js`, `templateLoopingIterator.css` and `templateLoopingIterator.js-meta.xml`
   <!--DOCUSAURUS_CODE_TABS-->
   <!--templateLoopingIterator.js-->

```js
import { LightningElement } from "lwc";
export default class TemplateLoopingIterator extends LightningElement {
  ceoList = [
    {
      id: 1,
      company: "Google",
      name: "Sundar Pichai"
    },
    {
      id: 2,
      company: "Apple Inc.",
      name: "Tim cook"
    },
    {
      id: 3,
      company: "Facebook",
      name: "Mark Zuckerberg"
    },
    {
      id: 4,
      company: "Amazon.com",
      name: "Jeff Bezos"
    },
    {
      id: 5,
      company: "Capgemini",
      name: "Paul Hermelin"
    }
  ];
}
```

<!--templateLoopingIterator.html-->

```html
  <template>
    <lightning-card title="Iterator loop demo" icon-name="custom:custom14">
      <ul class="slds-m-around_medium">
        <div class="list-group-inline">
          <template iterator:ceo="{ceoList}">
            <div key="{ceo.value.id}">
              <a
                href="#"
                if:true="{ceo.first}"
                class="list-group-item list-group-item-action header"
              >
                <strong>List of top companies and there CEO's : </strong>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                <strong>{ceo.value.company} : </strong>{ceo.value.name}
              </a>
              <a
                href="#"
                if:true="{ceo.last}"
                class="list-group-item list-group-item-action footer"
              >
                <strong>&copy; 2019 Lightning school salesforce </strong>
              </a>
            </div>
          </template>
        </div>
      </ul>
    </lightning-card>
  </template>
>
```

<!--templateLoopingIterator.css-->

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
<!--templateLoopingIterator.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="templateLoopingIterator">
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

### iterator demo explanation

- `iterator` is taking an array of object named `ceoList` as input
- we have used `ceo` as `iteratorName` to get the current item of an array
- we are using iterator name propeties like `first` and `last` to show header and footer in the list
- To access the value of an Obejct we have to use `iteratorName.value property`. _for example_ - `ceo.value.name`
- As key should be unique and in this case each object having an unique id. So, we are mapping the same. _for example_ - `ceo.value.id`
- `templateLoopingIterator.css` you can update based on your styling

## Output

Once you deploy your code, you will see the following output.

<!--https://developer.salesforce.com/docs/component-library/tools/playground/wgQLpnK3/2/edit-->
