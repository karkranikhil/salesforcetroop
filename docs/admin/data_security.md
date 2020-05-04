User
It is an employee of our organization

Ther person who create a record generally becomes the owner but based on rule we can decide who should be the owner.

## Queues
Queues allow groups of users to manage a shared workload more effectively. 
- A queue is a location where records can be routed to await processing by a group member. 
- The records remain in the queue until a user accepts them for processing or they are transferred to another queue.
- You can specify the set of objects that are supported by each queue, as well as the set of users that are allowed to retrieve records from the queue.

## Queue creation
1) First go to setup
2) Then type `queue` in quick search box
3) select the `Queues` from the filtered list
4)  Click on `New` button
//Queues_navigation.png

//new_queue1.PNG && new_queue2.PNG

Enter your queue name
choose the objects
choose the queue Memebers
save

> Queue memeber can be User, Role, ROle&Sub, or Publilc group


A team can be an owner of the record.
Go to leads select a record. 
Edit the owner of the record
select the queue insted of the person.


## Public group
A public group is a set of users. It can contain individual users, other groups, the users in a particular role or territory, or the users in a role or territory plus all of the users below that role or territory in the hierarchy.

We can say Public group is a group of users wrapped under one name.
- If Admin creates a group, then it is calles public group
- If any other user creates then it is calles private group
## Public group creation
1) First go to setup
2) Then type `Public Group` in quick search box
3) select the `Public Groups` from the filtered list
4)  Click on `New` button
//public_group creation 

5) Enter group name `Recruiter public group`
6) Add the roles to this group
7) click `save`

//new_recruiter_public_group.png

> Group of user to be owner

## Difference between Public group and Queue
| Sno   |      Public group      |  Queue |
|----------|:-------------|:------|
|1. | Public Group is solely used for sharing  | Queue is used for load balancing|
| 2. |    Public Group is kind of team or group of related users; this will help you to share the data.   |   Queue is a feature available to salesforce.com users that allows you to integrate prospect assignments with your current salesforce.com workflow. Rather than assigning to a specific user, you can choose to assign leads to a salesforce.com queue and then use your CRM workflow or manual method of distributing leads to sales representatives.|
| 3.  | Public group created can be used across any objects.|    Queue can be created for Custom objects and for Case, Lead and Knowledge Article Version. |