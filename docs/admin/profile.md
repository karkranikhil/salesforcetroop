---
id: salesforce-profiles
title: Salesforce profiles
---

Profiles specify what user can see or perform once he login to his application or salesforce org.
The profile and the user permissions restrict what the user can see. The modifications made in
the desktop Salesforce site are reflected in the app even and mobile users to get their
Organization's data without special configuration.


## There are two types of profiles

1. Standard profile

- Profile created by salesforce
- These profiles cannot be deleted
- Example : System Administrator

2. Custom Profile - Profiles created by the user as per business requirement

- These profiles can be deleted
- These profiles can be edited as per needs

## Profile controls

- Which application you can see
- Login access permission
- Fields and Objects
- Control Create, Read, Update and Delete permissions on Objects
- Record types and pagelayouts
- User level permissions
- etc.

> Every profile is created for specific license. It means based on the license the profile features varies.

## Profile creation

![Salesforce profile creation steps](assets/ADMIN/new_profile.png)

1. First click on `set up`
2. then type `profiles` in quick search box
3. then click on `profiles`
4. then click on `New profile`

   > Every profile is a clone of one of the existing profile.
   > ![Salesforce profile new creation](assets/ADMIN/profile_creation.png)

5. then select from `existing profile`
6. Verify the license name
7. then enter your `Profile Name` as shown below.
   ![Salesforce recruiting manager profile creation](assets/ADMIN/profile_creation1.png)
8. Click `save`

Once your profile is created your can control the Apps and system permission for the profile you have created as shown below.

![Salesforce recruiting manager profile creation](assets/ADMIN/profile_app_control.png)
## Under App permission you can  
- specify which apps are visible in the app menu
- specify which connected apps are visible in the app menu
- Permissions to access objects and fields, and settings that specify which record types, page layouts, and tabs are visible
- Permissions to perform app-specific actions, such as "Manage Call Centers"
- Permissions to execute Apex classes
- Permissions to execute Flows
- etc.

![Salesforce recruiting manager profile creation](assets/ADMIN/profile_system_permission.png)
## Under system permission you can  
- control when users can log in
- control the IP addresses from which users can log in
- perform actions that apply across apps, such as "Modify All Data"
- Profile Based password policies
-etc

> If three people have same profile they will get same permission.
