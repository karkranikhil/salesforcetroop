---
id: salesforce-data-binding
title: One-Way Data Binding
description: "Salesforce Troop Data Binding || Data binding in Lightning web component is the synchronization between the controller and template(HTML)."
---

## What is Data Binding?

Data binding in the Lightning web component is the synchronization between the controller and the template(HTML).

## What is One-Way Data Binding?

One-way data binding is a situation where information flows in only one direction in our case from the controller to the template(HTML)

![One Way Data Binding](assets/LWC/oneWayDataBinding.PNG)

## Example of One-Way Data Binding

1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `SFDX: Create Lightning Web Component.`

3. Type `dataBinding` as the name of the new component and press `Enter.`

4. Again, Press `Enter` to accept the default `force-app/main/default/lwc.`

5. Goto your `lwc` folder, you will see one new component with the name `dataBinding` gets created.

6. Let's add the following code to `dataBinding.html`, `dataBinding.js` and `dataBinding.js-meta.xml`

<!--DOCUSAURUS_CODE_TABS-->
<!--dataBinding.html-->

```html
<template>
  <lightning-card title="One-way Data Binding Demo" icon-name="custom:custom1">
    <hr />
    <div class="slds-p-around_medium">
      <h1>My full name is {fullname}</h1>
    </div>
  </lightning-card>
</template>
```

<!--END_DOCUSAURUS_CODE_TABS-->

- Inside the `<template>`, we have used the `lightning-card`
- Inside the `lightning-card` We have created a `<h1>` tag with text and property `fullname` binding.
- **`{fullname}`** - To bind a property in a template we have to surround the property with curly braces:

<!--DOCUSAURUS_CODE_TABS-->
<!--dataBinding.js-->

```javascript
import { LightningElement } from "lwc";
export default class DataBinding extends LightningElement {
  fullname = "Salesforce Troop";
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

- In the first line, we are importing `LightningElement` from `lwc` module

- After that, we are creating a `class` `DataBinding` _(Note - the class name always be pascal case)_

- Within the `class`, we have to define a property `fullname` and assign a value `Salesforce Troop` to it.

- So when a component loads, it initialize the variable `fullname` with value `Salesforce Troop`. After that, when HTML starts rendering in the browser, lwc engine looks for the `{}` tags and replace the `fullname` inside the curly braces with the properties defined inside the class `DataBinding`.


<!--DOCUSAURUS_CODE_TABS-->

<!--dataBinding.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="dataBinding">
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

- `dataBinding.js-meta.xml` is a configuration file
- The configuration file defines the metadata values for the component, including the design configuration for Lightning App Builder and Experience Builder.
- This file only show your component in app builder

> you get an error, if you don’t include a configuration file for your component
<!--https://developer.salesforce.com/docs/component-library/tools/playground/Gov7uHHc/3/edit-->
