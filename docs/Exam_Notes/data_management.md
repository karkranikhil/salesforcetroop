---
id: salesforce-data-management
title: Data management
---

## Updating picklist value like `closed` with blank field
- Export the records and replace the `closed` with blank.
- Upload data using dataloader and while loading enable checkbox "Insert null values" on data loader that will insert or update blank field with null values.

## Mass transfer feature by default for account record
- It transfer the Open opportunities that belong to the existing owner
- It transfer the Open activities assigned to the existing owner

## Mass transfer options
- Transfer open opportunities not owned by the existing account owner
- Transfer closed opportunity 
- Transfer open cases owned by the existing account owner
- Transfer closed cases
- Keep Account Team
- Keep opportunity Team on opportnuities transferred to new owner.

## Change ownership of cases
- Current owner of the case can change
- any user above in the role hierarchy
- Admin that have modify all data permission

## Duplicate record management
- You can use duplicate management to control when to allow users to create duplicate records.

## How to make sure that the opportunity close date cannot be set in the past.
- Validation rule is the best way to check if the opportunity close date has been set in the past.

## Validity of export backup data
- 48 hours before it is deleted

## Data export service
- Export option allows the scheduling of backup  on weekly and monthly basis
- Exported data is in `.csv` format
- You can export csv files, images, documents and attachments baed on the options

## Large data volumes impacts
- Search take more time
- reports run more slowly
- Full sandbox refresh takes longer because it need to more data

## Where to check record ID
- Get it from record URL in the browser, 15 character id
- Get it from records, 15 character id
- Get it from data exported file, 18 character id