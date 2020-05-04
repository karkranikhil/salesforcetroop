---
id: render-multiple-template
title: Render multiple template
description: "Salesforce Troop Render multiple template || Data binding in Lightning web component is the synchronization between the controller and template(HTML)."
---

## What is Multiple templates in a Component.
When we create multiple html file within a single component is called multiple template component.
To reference CSS from an extra template, the CSS filename must match the filename of the extra template.

* Till now we have learnt how to create a component and we know each component is consist of html, css, js and js-meta.xml. If we add more html(template) or css to same component then our component will look as shown below.

![Multiple template component structure](assets/LWC/render_multiple.PNG)

## When to prefer multiple template over if:true/if:false
* if:true/if:false is recommend whenever there is small template to hide and show
* Ideally it's always recommend to break down your component into smallest unit.
* Whenever we have a scenario in which we have same business logic but we want to render a component with more than one look and feel.
* Whenever we have two design in same component but not want to mix the HTML in one file.

## What is render() method?
* Render is a method that tells the component which template to load based on some conditions.
* Render always return the template reference

>Template loaded by render method replace the complete template.

* Below is the syntax by which we import the different templates and used those inside the render method.
![Multiple template render method](assets/LWC/render_syntax.PNG)

## How to render multiple template in a component
Let see how this whole process work with the below image
![Multiple template render method](assets/LWC/render_multiple_flow.PNG)

1. First we will import all the templates into the component js file
2. We will create the propety inside the component that will be used for check the conditions.
3. Will define the render method thata return the template refrence based on the conditions
4. In our case we have three templates
- appTemplate i.e. default template of the component
- signinTemplate ie. template for signIn form
- signupTemplate i.e. template for signUp form.
5. based on the condition appropriate template is loading.
## Demo
<!--DOCUSAURUS_CODE_TABS-->
<!--multipleTemplateDemo.html-->

```html
<template>
  <lightning-card title="Render Multiple Template" icon-name="custom:custom14">
    <hr />
    <div class="slds-m-around_medium">
      <h2 class="slds-text-heading_medium slds-m-bottom_medium">
        Choose your option
      </h2>
      <lightning-button
        variant="destructive"
        label="Sign Up"
        title="Sign Up"
        onclick="{handleClick}"
        class="slds-m-left_x-small"
      ></lightning-button>
      <lightning-button
        variant="success"
        label="Sign In"
        title="Sign In"
        onclick="{handleClick}"
        class="slds-m-left_x-small"
      ></lightning-button>
    </div>
  </lightning-card>
</template>
```

<!--multipleTemplateDemo.js-->

```js
import signinTemplate from "./signinTemplate.html";
import signupTemplate from "./signupTemplate.html";
import appTemplate from "./app.html";
export default class App extends LightningElement {
  selected = null;
  render() {
    return this.selected === "Sign Up"
      ? signupTemplate
      : this.selected === "Sign In"
      ? signinTemplate
      : appTemplate;
  }
  handleClick(event) {
    this.selected = event.target.label;
  }

  submitHandler(event) {
    if (event.target.label === "Sign In") {
      console.log("Login Successfully");
    } else if (event.target.label === "Sign Up") {
      console.log("Sign Up Successfully");
    }
  }
}
```

<!--signInTemplate.html-->

```html
<template>
  <lightning-card title="Render Multiple Template" icon-name="custom:custom14">
    <hr />
    <div class="slds-m-top_medium slds-m-bottom_x-large">
      <div class="slds-p-around_medium lgc-bg">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
          Sign In Form
        </h2>
        <lightning-input
          type="text"
          label="Enter Your Username"
        ></lightning-input>
        <lightning-input
          type="password"
          label="Enter some Password"
        ></lightning-input>
        <div class="slds-m-top_medium">
          <lightning-button
            variant="success"
            label="Sign In"
            title="Sign In"
            onclick="{submitHandler}"
            class="slds-m-left_x-small"
          ></lightning-button>
          <lightning-button
            variant="destructive"
            label="back"
            title="Back"
            onclick="{handleClick}"
            class="slds-m-left_x-small"
          ></lightning-button>
        </div>
      </div>
    </div>
  </lightning-card>
</template>
```

<!--signupTemplate.html-->

```js
<template>
  <lightning-card title="Render Multiple Template" icon-name="custom:custom14">
    <hr />
    <div class="slds-m-top_medium slds-m-bottom_x-large">
      <div class="slds-p-around_medium lgc-bg">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
          Sign Up Form
        </h2>
        <lightning-input type="text" label="First Name"></lightning-input>
        <lightning-input type="text" label="Last Name"></lightning-input>
        <lightning-input type="email" label="E-mail address"></lightning-input>
        <lightning-input type="password" label="Password"></lightning-input>
        <div class="slds-m-top_medium">
          <lightning-button
            variant="success"
            label="Sign Up"
            title="Sign Up"
            onclick={submitHandler}
            class="slds-m-left_x-small"
          ></lightning-button>
          <lightning-button
            variant="destructive"
            label="back"
            title="Back"
            onclick={handleClick}
            class="slds-m-left_x-small"
          ></lightning-button>
        </div>
      </div>
    </div>
  </lightning-card>
</template>
```

<!--END_DOCUSAURUS_CODE_TABS-->
