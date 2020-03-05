---
id: why-lightning-web-component
title: Why Lightning Web Component
---

Lightning Web Component is a Salesforce latest model for building Lightning components. The best part is, LWC can coexist with the existing Aura Component.

_Note - AURA components can contains Lightning Web Components but, LWC cannot contain Aura Components._

## Benefits of Lightning Web Components

There are many benefits of using the Lightning Web Components, as shown below.

![web component model](assets/LWC/lwc_advantages.PNG)

### 1) Standard development

Developers familiar with Web Components are mostly familiar with LWC out-of-the-box. Aura is proprietary, so the more you know about web standards, the more you'll have of a skill that can be used outside Salesforce, too!

### 2) Better execution/Performance

LWC leverages built-in browser security features from WC standards, so there's less custom code. This means they run faster and are more consistent in how they enforce security. Also, events have a more limited scope, so there's much less processing required to handle events.

### 3) Better security features

We get better CSS isolation, script isolation, DOM isolation, and a more limited event scope, all of which lead to more consistent component design.

- _JavaScript Strict Mode Enforcement -_ In JavaScript, strict mode is enforced in modules but optional in regular programs. However, Lightning Locker implicitly enables JavaScript strict mode everywhere. You don't need to specify "use strict" in your code. JavaScript strict mode makes code more secure, robust, and supportable.
- _DOM Access Containment -_ A component can only traverse the DOM and access elements that it created. This behavior prevents the anti-pattern of reaching into DOM elements owned by other components. Lightning web components can't use the window or document global properties to query for DOM elements. For example, use this.template.querySelector() instead of document.querySelector().
- _Secure Wrappers -_ For security, Lightning Locker restricts the use of global objects by hiding an object or by wrapping it in a secure version of the object. For example, the secure version of the window is SecureWindow. Locker intercepts call to the window and use SecureWindow instead.
- *Restricted Access to Salesforce Global Variables -*Lightning web components don't have access to:\$A, Aura, Sfdc, sforce
- _Content Security Policy -_ OverviewThe Lightning Component framework uses Content Security Policy (CSP), which is a W3C standard, to control the source of content that can be loaded on a page. CSP helps prevent cross-site scripting (XSS) and other code injection attacks. All CSP rules work at the page level and apply to all components and libraries.
- _Call APIs from Apex -_ To call an API from Apex, use a named credential, which specifies the URL of a callout endpoint and its required authentication parameters.

### 4) ECMAScript ES6+

We now have better support for ES6 and ES7, not available in Aura. You can do more in less code. It also transpiles code to work with IE 11 and other browsers that are missing some features.

_Note - ES6 is an Advanced version of Javascript we called ES5 to the basic version of Javascript._

#### LWC supports the following features of Javascript

- ECMAScript
  - ES6 (ECMAScript 2015)
  - ES7 (ECMAScript 2016)
  - ES8 (ECMAScript 2017)—excluding Shared Memory and Atomics
  - ES9 (ECMAScript 2018)—including only Object Spread Properties (not Object Rest Properties)
- Templates and slots
- Decorators
- Modules
- Promises
- Classes
- Modules
- Promises
- Decorators
- Web Components
- Custom Elements
- Shadow DOM

### 5) More consistent data binding

Two-way data binding, which has always been buggy in Aura, is gone. It forces developers to coordinate how data moves between components. This also means that data binding will work as expected, without the "gotchas" from Aura.

### 6) Resuable components

You can now write components that have no UI. They provide reusable methods that you that you can use in other components. This is much more efficient than Static Resources.

### 7) Mixins

You can import available methods from other components, and also import specific Apex methods, even from multiple classes. Also, the Apex methods can be cached for improved performance.

### 8) Better testing

We can use [`Jest`](https://jestjs.io/) to write unit tests for all of your Lightning web components.Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
