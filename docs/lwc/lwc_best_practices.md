---
id: lightning-web-component-best-practices
title: Lightning Web Components Best Practices
description: "Salesforce Troop Lightning Web Components Best Practices || Never mutate the data directly. Mutating the data directly leads to odd bugs, and it always recommends to create a new reference or copy and then update it."
---

## Naming conventions

- Component name must begin with a letter
- use camelCase format like `helloWorld`.

## Never mutate the data

Never mutate the data directly. Mutating the data directly leads to odd bugs, and it always recommends to create a new reference or copy and then update it.

- Always use immutable methods like spread operator, `filter()`, `slice()`, `map()`, and so on.
- Don’t use `push()`, `pop()` , `splice()` and so on.

```
let arr =[“hello”]
let newArr =[...arr, "world"]
```

## Prefer **`@wire`** over imperative Apex method invocation

Always prefer **`@wire`** decorator over imperative Apex method invocation. **`@wire`** fits nicely in the overall Lightning Web component reactive architecture. It makes the code less verbose and defines a predictable response pattern to work with `myProperty.data` and `myProperty.error`.

## Prefer the Lightning Data Service functions over invoking Apex methods

Prefer the Lightning Data Service functions (createRecord, updateRecord, and deleteRecord) over invoking Apex methods to create, update, and delete single records. Benefits: You don’t have to write Apex code, and, most importantly, the Lightning Data Service updates the local record cache, ensuring consistency across components showing the same data.

## Prefer LDS based components for building a form-type user interface

1. Always consider `lightning-record-form`. It is the fastest/most productive way to build a form.
2. If you need more control over the layout, want to handle events on individual input fields, or need to execute pre-submission logic: consider `lightning-record-view-form` or `lightning-record-edit-form`

## Build Accessible UI components.

To make your components accessible so that it can be available to screen readers and other assistive technologies, use HTML attributes on your components. HTML attributes (aria-label, aria-describedby, alt, etc.) describe the UI elements that they contain. Accessibility software interprets UI elements by reading the attributes aloud.

## Always write unit test for the lightning web components.

Always write a unit test cases using Jest for the individual component to determine whether they are fit to use. By writing the unit test, we can find bugs early.

## Type conversion v/s Equality (=== vs==).

In JavaScript, we have two different kinds of equality operators (‘===’ and ‘==’). It is a good practice to use **‘===’** instead of **‘==’**. Because the == operator will compare for equality after doing any necessary type conversions. The ===operator will not do the conversion, so if two values are not the same type === will simply return false. Both are equally quick.

## Avoid hardcoding of text (String, Number, URL)

Always use Custom Labels to store the text. Custom labels can be accessed from Apex classes, Visualforce pages, Aura components and LWC. Custom labels value can be translated into any language Salesforce supports. It helps in maintenance also

## Child component to parent component communication best practices

1. Always use **`CustomEvent`**(not event), even when the event doesn’t have a data payload.
2. Prefer passing data using primitive data types in the event payload.
3. If you must pass data using a non-primitive data type in the event payload, pass a copy of the object or array to avoid leaking private objects and unpredictable mutations by the event listener.
4. If you need to pass a record, consider passing the record ID.
5. Prefer setting bubbles to false and composed to false when dispatching events (these are the default values).
6. Bubbling is especially useful when the parent uses an iteration of the child component to parent component communication.

## Use pubsub utility only for sibling communication

Do not use the pubsub utility for parent/child communication. For sibling communication, only use pubsub utility. For the parent-to-child and child-to-parent patterns, communication use @api and CustomEvent

## Avoid Popup dialogs or toasts for error messages.

Prefer in-place/inline error messages, especially for errors that occur without user interaction / when components load their state. Popup dialogs or toasts wouldn’t be advisable in this case because if multiple components on a page fail, the user would see a succession of dialogs, which is a poor user experience.
