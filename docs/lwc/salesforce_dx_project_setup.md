---
id: salesforce-dx-project-setup
title: Salesforce DX project setup.
---
Before creating the Lightning Web Component, we need to set up the salesforce DX project. In the previous article, we already have covered the prerequisite for creating the DX project.

## Steps to setup Salesforce DX project
1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.

2. Type `SFDX` and Select `SFDX: Create Project.`

![Salesforce VS code Create project](assets/LWC/create_Project.png)

3. Type `HelloWorld` as the project name and press `Enter.`

![DX project Name](assets/LWC/projectName.png)

4. Select a folder to store the project.
5. Click `Create Project.` You will see something like this as your base setup.

![Salesforce DX folder structure](assets/LWC/folderStructure.png)

## Authorize Your org
Till now, we have set up the DX project for our machine now. We have to connect this with our salesforce org. Follow the following steps to authorize your org
1. In VS Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS.
2. Type `SFDX` and `Select SFDX: Authorize an Org.`

![Salesforce DX Authorize to org](assets/LWC/AuthorizeOrg.png)

3. Press `Enter` to accept the Project Default `Use login URL` option.
4. Press `Enter` to accept the default alias. It will open a window to Log in using your Salesforce credentials.

![Authorize login](assets/LWC/login_Auth.png)

5. After you authenticate in the browser, the CLI remembers your credentials. The success message should look like this:

![Success authorization](assets/LWC/successAuth.png)
