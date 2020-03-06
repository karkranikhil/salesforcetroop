---
id: hello-world-using-lwc
title: Hello world using LWC
---

Before creating the Lightning Web Component make sure you have completed the [Salesforce DX environment setup](/salesforcetroop/docs/lwc/salesforce-dx-setup) and [Salesforce DX project setup](/salesforcetroop/docs/lwc/salesforce-dx-project-setup) section.

## Create a Lightning Web Component

1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `SFDX: Create Lightning Web Component.`

![VS code Create LWC](assets/LWC/CreateLWC.png)

3. Type `helloWorld` as the name of the new component and press `Enter.`

   > Always use the first letter as lowercase, While naming LWC components.
   > We use the camel case name to the component i.e., helloWorld.

4. Again, Press `Enter` to accept the default `force-app/main/default/lwc.`

5. Goto your `lwc` folder, you will see one new component with the name `helloWorld` gets created.

![Hello world component](assets/LWC/helloWorldLwc.png)

6. If you see the `helloWorld` component. It has three files

- **`helloWorld.html` -** This file contains your component HTML

> Every UI Component must have an HTML file with the root tag `<template>`

- **helloWorld.js -** This file defines our component and helps to bind the data to the UI.

  > The class name should always be Pascal Case i.e., the first letter of each word is capitalized

- **helloWorld.js-meta.xml -** This configuration file defines the metadata values for the component. Also, we specify which type of lightning page this component can be added.

> `html`, `js` and `meta.xml` file is mandatory for any component. There are other optional files like `css`, `extra js file` `test file`, `SVG icon` you can add to the component based on your requirement

Add the following code to the corresponding file of your project. Don't worry will learn the meaning of each and everything going forward.

<!--DOCUSAURUS_CODE_TABS-->
<!--helloWorld.html-->

```html
<template>
  <lightning-card title="HelloWorld" icon-name="custom:custom14">
    <div class="slds-m-around_medium">
      <p>Hello, {greeting}!</p>
      <lightning-input
        label="Name"
        value="{greeting}"
        onchange="{changeHandler}"
      ></lightning-input>
    </div>
  </lightning-card>
</template>
```

<!--helloWorld.js-->

```js
import { LightningElement, track } from "lwc";
export default class HelloWorld extends LightningElement {
  @track greeting = "World";
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}
```

<!--helloWorld.js-meta.xml-->

```xml
<?xml version="1.0" encoding="UTF-8"?>
    <LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata" fqn="helloWorld">
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

## Deploy `helloWorld` component to Org

1. `Right-click'the default folder.
2. Click `SFDX: Deploy Source to Org` from the options

![Right click Deploy](assets/LWC/rightClickDeploy.png)

3. In the Output tab of the integrated terminal, view the results of your deployment. You should have also received a notice that `states: SFDX: Deploy Source to Org ... ended with exit code 0`. This means that the command ran successfully.

![Successfull Deploy](assets/LWC/successDeploy.png)

## Add Component to Sales App in Lightning Experience

1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `Select SFDX: Open Default Org`

3. Click the `app launcher icon` it will open the App Launcher, then click `Sales`.

4. Once `Sales` app is opened, Click the `gear icon` shown in the top right corner, then click `Edit Page`. It will open the _Lightning App Builder_

5. Drag the `helloWorld` Lightning web component from the list of custom components to the top of the Page Canvas and Click `Save`.

![Right click Deploy](assets/LWC/builder.png)

6. Click `Activate`.
7. Click `Assign as Org Default` and then click `Save`
8. Click `Save` again, then click `Back` to return to the Home page.
9. Refresh the page to view your new component.

![Right click Deploy](assets/LWC/finalDashboard.png)

10. Hurray!! You've finally made your first Lightning web component!
