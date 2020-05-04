---
id: salesforce-organizational-setup
title: Organizational Setup
---

## Default Locale
- Default locale helps in determine the Name format, Phone number, numbers, name, address, format of dates and times

> It doesn't determine the Fiscal year and currency

## Company Locale
- New ueser inherit the company locacle setting
- The user or an adminstrator can change the locacle setting for the user.
## Fiscal year
- Standard Fiscal year used when an organization follows the Gregorian calendar
- Custom Fiscal Year used when an organization follows the  calendar other than Gregorian.
- In standard Fiscal year starting month can be set to any month
- By deafult, in Standard Fiscal Year, **Start month ** is `january` and **Fiscal year is Based on** `The ending month`

## Multiple currencies
- If multicurrency is enabled then it allow to add record amounts in different currencies.
- Once enabled can't be disabled
- The active currencies represent the countries in which the organization does bussiness.
- Only active currency can be used in currency amount field
- Admin needs to define a list of currenecies and make them active.
- `Advanced currency management` allows your to track exchange rates by date range.


## Company profile
In company profile we can see the following thing
- Organization Name
- Default Locale
- Used Data Space
- Used File SPace
- Organization Id
- User Licenses
- Currency Locale
- Default Language
- etc.

## Tab Hidden vs Default Off vs Default On
- tab Hidden - It will not allow the tab to be visible by default and user connot enable it
- Default off - It allow the tabs to be visible when viewing all tabs, but not visible within an app.
- Default On - It allows the tab to be visible in the app when viewing all the tabs.

## If user not able to see the specific tab
2) User may customized the navigation bar of the app.
3) User might me in different application using app launcher
4) User may be logged into the wrong salesforce org

> Admin can only modify the access of the tab for profile not for individual user

## Things to consider while creating New Home page in lightning experince
1) Home page can be assigned to each app
2) Home page can be customized for each profile

>Home pages cannot be assigned via permision set or for roles

## How to avoid data entry mistakes between two applications available within the same instance used by two different division.
- Give distinct colors, logos and backgrounds to each lightning app
- Create custom list view and pinned in the list view for two types of product.

## Pages created with Lightning App Builder
- App Page
- Home Page
- Record Page
> Lightning App Builder is used to customize the Home page for different profiles

## File storage and Data Storage
- File storage is used by file attachment
- Data Storage is used by adding data records 

## Edit multiple records at one time
- By Enabling inline editing
- By Enabling enhanced lists
- By giving the user the Mass edit fr lists permission. 200 selected fields can be update

## DIrect record edit in list view
- By Enabling Inline editing
- By Enabling Enhanced Lists

## Hide Sidebar
You can hide side bar by uncheck the `Enable collapsible Sidebar` option from User interface.

## Performance of page
Load the main record details first and then load the related lists by enabling the `Seperate loading of related list` from user interface

## Collapsible section
COllapsible section help user to quickly find the information that is relevent to them.