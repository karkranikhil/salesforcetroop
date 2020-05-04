---
id: salesforce-two-way-data-binding
title: Two-Way Data Binding (@track)
description: "Salesforce Troop Data Binding || Two-way data binding in LWC will help users to exchange data from the controller to the template and form template to the controller. It will help users to establish communication bi-directionally."
---
<!-- blank line -->
<iframe width="1280" height="720" src="https://www.youtube.com/embed/SRgR852RFDs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- blank line -->


## What is Two-way Data Binding?

Two-way data binding in LWC will help users to exchange data from the controller to the template and form template to the controller. It will help users to establish communication bi-directionally.

![Two Way Data Binding](assets/LWC/twoWayDataBinding.PNG)

> Before Spring ’20, to make a field reactive, you had to decorate it with @track. You see this approach used in older code samples, and it’s still supported.

## How to achieve Two-Way Data Binding?

- The Lightning Web Components programming model has given us some **decorators** that add functionality to property or function.
- **_@track_** is the decorator that helps us to track a private property's value and re-render a component when it changes.
- Tracked properties are also called private reactive properties.
- `@track` helps us to achieve two-way data binding

> `@track` is powerful, but remember, track a property only if you want the component to re-render when the property's value changes. Don't track every private property.

## Example of Two-Way Data Binding

1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `SFDX: Create Lightning Web Component.`

3. Type `twoWayDataBinding` as the name of the new component and press `Enter.`

4. Again, Press `Enter` to accept the default `force-app/main/default/lwc.`

5. Goto your `lwc` folder, you will see one new component with the name `twoWayDataBinding` gets created.

6. Let's add the following code to `twoWayDataBinding.html`, `twoWayDataBinding.js` and `twoWayDataBinding.js-meta.xml`

<!--DOCUSAURUS_CODE_TABS-->
<!--twoWayDataBinding.html-->

```html
<template>
  <lightning-card title="Two-way Data Binding Demo" icon-name="custom:custom2">
    <hr />

    <!--First input box-->
    <div class="slds-p-around_medium">
      <lightning-input
        type="text"
        name="fullname"
        label="Enter your name:"
        onkeyup={changeHandler}
        value={fullname}
      ></lightning-input>
    </div>
    <!--Second input box-->
    <div class="slds-p-around_medium">
      <lightning-input
        type="text"
        name="title"
        label="Enter your title:"
        onkeyup={changeHandler}
        value={title}
      ></lightning-input>
    </div>
    <!--Result of binding-->
    <div class="slds-p-around_medium">
      <h5>My name is {fullname} and my title is {title}</h5>
    </div>
  </lightning-card>
</template>
```

<!--END_DOCUSAURUS_CODE_TABS-->

- we have created two input box `fullname` and `title` using `lightning-input` inside the `lightning-card`.
- `{name}` - is used to bind `fullname` property to `fullname` input box
- `{title}` - is used to bind `title` property to `title` input box
- we have defined an event handler called `onKeyUp` that is bind to `changeHandler`, which gets triggered on every key up.
- We have used the `<h5>` tag to test the two-way data binding

<!--DOCUSAURUS_CODE_TABS-->
<!--twoWayDataBinding.js-->

```javascript
import { LightningElement, track } from "lwc";

export default class TwoWayDataBinding extends LightningElement {
  @track fullname = "Salesforce Troop";
  @track title = "Salesforce developer";

  changeHandler(event) {
    this[event.target.name] = event.target.value;
  }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

- In the first line, we are importing `LightningElement` and `track` from `lwc` module

- After that, we are creating a `class` `TwoWayDataBinding` _(Note - the class name always be pascal case)_

- Within the `class`, we have to define two properties `fullname` and `title`.
- **`@track`** decorator decorates both properties.
- Both properties are assigned with an initial value of `Salesforce Troop` and `Salesforce developer`, respectively.
- We have defined a method `changeHandler` that takes the value from the textbox and update the property based on the input box name


<!--DOCUSAURUS_CODE_TABS-->

<!--twoWayDataBinding.js-meta.xml-->
```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="twoWayDataBinding">
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

> you get an error, if you don’t include a configuration file for your component


<!--https://developer.salesforce.com/docs/component-library/tools/playground/UdjeQaem/7/edit-->
