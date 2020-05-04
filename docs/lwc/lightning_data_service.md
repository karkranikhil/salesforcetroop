---
id: lightning-data-service
title: Lightning Data Service(LDS)
description: 'Salesforce Troop LWC Introduction || Lightning web components are custom HTML elements built using HTML and modern JavaScript. Lightning Web Components uses core Web Components standards and provides us only what's necessary to perform well in browsers supported by Salesforce'
---
Lightning Data Service is a centralized data caching mechanism that is used to create,read, update and delete a record without server-side apex code. 
- It supports the sharing rules and field-level security as well. Which means user will never has access to unauthorized data or will never able to update the field for which he doesn't have access.
- Lightning data service returns the data and metadata in the same request


Whenever we have to work with salesforce data and metadata for salesforce record we use Lightning data service.

Lightning data service is built on top of User interface api. So whenever client has to display some data on browser it send the resquest, the request will first go to User interface api then to salesforce database. similary the response send back first to the user interface api and then to the client and once data recieve it displays data on the browser.

![Lightning data service](assets/LWC/Lightning_data_Service.PNG)


## Actions performs by Lightning Data Service behind the scene.
1) It loads the record data progressively to imporves the proformance of our lightning web component.
2) It Caches the result on the client side that also improves the performance by reducing the network calls.
3) Invalidates cache, whenever any change happens to the same record data or metadata. Always keep the updated copy of record in the cache. 
4) Records loaded in Lightning Data Service are cached and shared across components. If same service call is happening in the different components at the same time it calls only once and serve the all component by the Cache data.

## Advantages of LDS
1) No apex side controller required
2) Caching techninque inproves the performance

## LDS Based components
There are three components that are built on Lightning Data Service(LDS)

**1.`lightning-record-view-form`**
- This form will allow you to view the record and to customize fields in the form. 

**2.`lightning-record-edit-form`**
- This form will allow you to create and edit the record and to customize fields in the form.

**3.`lightning-record-form`**
- This form allow us to display a form with standard Lightning UI to view, edit, or create a record.


