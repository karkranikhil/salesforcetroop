---
id: salesforce-object-and-fields
title: Salesforce Objects and Fields
---


when to use apex and when to not

UI/Api - User interface api has the capability to fetch the id, name meta data and the record, transalted labels

IN lWC we expose ui api and js api - for any single line of record action like adding or delete you don't have to write single line of apex


import {createRecord, deleteRecord} from 'lighting/uiRecordAPi'
This is using UI api, 

LDS allow you get your data without the need of the server side controller
LDS Based components when we want to user to create new and edit 
Apex method