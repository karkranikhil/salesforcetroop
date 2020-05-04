---
id: salesforce-dx-setup
title: Salesforce DX environment setup
description: "Salesforce Troop DX environment setup || To create a Lightning web component from the CLI, you must have an lwc directory in your Salesforce DX project. There are many steps you have to follow to set up this."
---

To create a Lightning web component from the CLI, you must have an lwc directory in your Salesforce DX project.

> **The Salesforce Developer Experience (DX)** is a set of tools that streamlines the entire development life cycle. It improves team development and collaboration, facilitates automated testing and continuous integration, and makes the release cycle more efficient and agile. [source](https://trailhead.salesforce.com/en/content/learn/projects/quick-start-salesforce-dx/set-up-your-salesforce-dx-environment)

So let's go through each step and set up the Salesforce DX

## System requirements

Salesforce CLI supports the following operating systems.

- Windows—Windows 7 (64-bit and 32-bit) or later
- Mac—macOS 10.11 or later
- Linux—Ubuntu 14.0.4

## Common terminology used in DX environment

**1. Scratch Org -** It is a source-driven and disposable deployment of Salesforce code and metadata. Scratch Orgs are driven by source, Sandboxes are copies of production.
_Note - Scratch orgs do not replace sandboxes_

**2. Dev Hub -** It is the main Salesforce org that you will use to create and manage your scratch orgs.

## Enable Dev Hub in Your Org

1. Log in as System Administrator to your Developer Edition
2. From `Setup`, enter Dev Hub in the Quick Find box and select _Dev Hub_
3. To enable Dev Hub, click Enable.

_Note - After you enable Dev Hub, you can’t disable it._

![Salesforce cli Version number](assets/LWC/dev_hub.jpg)

## Install the Visual Studio Code

Visual Studio Code: It is a source code editor developed by Microsoft for Windows, Linux, and macOS. It is a super fast and lightweight Source Code Editor, which can be used to view, edit, run, and debug source code for applications. Front-end developers mainly use it.
[`https://visualstudio.microsoft.com/downloads/`](https://visualstudio.microsoft.com/downloads/)

## Install Salesforce CLI

Download Salesforce CLI using the appropriate link for your operating system:

| S.NO | Operating system  | Link                                                                     |
| ---- | ----------------- | ------------------------------------------------------------------------ |
| 1    | macOS             | [https://sfdc.co/sfdx_cli_osx](https://sfdc.co/sfdx_cli_osx)             |
| 2    | Windows 32-bit    | [https://sfdc.co/sfdx_cli_win](https://sfdc.co/sfdx_cli_win)             |
| 3    | Windows 64-bit    | [https://sfdc.co/sfdx_cli_win64](https://sfdc.co/sfdx_cli_win64)         |
| 4    | Debian/Ubuntu 64  | [https://sfdc.co/sfdx_cli_linux](https://sfdc.co/sfdx_cli_linux)         |
| 5    | Debian/Ubuntu x86 | [https://sfdc.co/sfdx_cli_linux_x86](https://sfdc.co/sfdx_cli_linux_x86) |

## Verify Salesforce CLI installation

In order to verify the CLI setup is done successfull. Type the below command in Terminal or Command Prompt

<!--DOCUSAURUS_CODE_TABS-->
<!--CMD/Terminal-->

```javascript
sfdx;
```

<!--END_DOCUSAURUS_CODE_TABS-->

If You see something like this, it means CLI is installed successfully.

![Salesforce cli command prompt](assets/LWC/sf-cli-cmd.png)

## Verify the CLI version

To work with Lightning web components, you need version 45 or higher of the Salesforce CLI. Check the installed version by running the below command.

<!--DOCUSAURUS_CODE_TABS-->
<!--CMD/Terminal-->

```javascript
sfdx plugins --core
```

<!--END_DOCUSAURUS_CODE_TABS-->

The command outputs version numbers of CLI and plugins like shown below:
![Salesforce cli Version number](assets/LWC/cli-version.png)

## Install Salesforce Extension Pack in VS Code

Salesforce Extension Pack provides powerful features for working with the Salesforce CLI, the Lightning Component framework, Apex, and Visualforce.

_Note: You can’t develop Lightning web components in the Salesforce Developer Console._

- Launch Visual Studio Code.
- On the left toolbar, click the Extensions icon.
- Search for Salesforce Extension Pack and click Install.

![Salesforce cli Version number](assets/LWC/extension.png)

## Verify Salesforce Extension installation

In Visual Studio CodeVisual Studio Code, open the Command Palette by pressing `Ctrl+Shift+P` on Windows or `Cmd+Shift+P` on macOS. Enter `sfdx` to filter for commands provided by the Salesforce Extensions.

If You see something like this, it means Salesforce Extension Pack is installed successfully.

![Salesforce cli Version number](assets/LWC/verifying_plugin.png)

## Scratch Org Creation

A scratch Orgs are temporary Salesforce Orgs where developers will build source code and configure an application.

### Steps to create default Scratch Org 

- Go to command palette in visual studio code and find `sfdx: create a default Scratch Org…`. Select the command.

![Scratch org creation](assets/LWC/scratch_org.png)

- Select Configuration file which automatically suggested by vs code

- Give the alias name for the org

- Give the no of days that you wanted to use scratch org. Maximum value is 30 Days.

Once above process completed it will create a default scratch org associated with your Dev Hub Org.

You can verify the scratch org 
- first go to command palette in visual studio code and find `sfdx: Open Default org`.
- press `Enter` it will open the your org that you have created.

