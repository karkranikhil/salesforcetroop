---
id: salesforce-roles
title: Salesforce roles
---
Salesforce offers a user role hierarchy that you can use with sharing settings to determine the levels of access that users have to your Salesforce org’s data. 
- Roles specify the hierarchy of the data model and where you stand in that hierarchy.
- Roles also specify to whom you have to report .
- Roles also specify whoes data you can access.
- If you want to delete any role, sub-ordinate role should be deleted first or assign the sub-ordinate role to some other role.

 ![Roles structure](assets/ADMIN/roles.PNG)
 Let's set up the roles.

 ![Salesforce roles navigation](assets/ADMIN/roles_navigation.png)
 
 1. First click on `gear` icon 
 2. Then click on `Setup`
 3. Type `roles` in quick search box
 4. click roles and you will see the existing role hierarchy

 There are three view to see the role hierarchy as shown below and in each view you can able to add new role.
 1. Tree View
 2. Sorted list view
 3. Sorted List view
  ![Salesforce roles view structure](assets/ADMIN/Different_views_of_role_hierarchy.PNG)
 
Let's create a new role. For that click on `New Role`
- Enter the `Label` of the role
- `Role Name` will be autopopulated
- `This role reports to` is a lookup in which you have to select the role to whom this role is reporting
- Enter the role name your want to see on reports.
- Click `save`
As shown below in the image. we are creating a role `Recruiter` and this Recruiter is reporting to the `Recruiting Manager`.
 ![Salesforce new roles](assets/ADMIN/new_role.PNG)

> If two users have same role like Manager doesn't mean they have same permissions.
> One user can have only one role