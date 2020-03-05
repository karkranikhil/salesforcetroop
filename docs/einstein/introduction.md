---
id: salesforce-analytics-query-language-saql
title: Salesforce Analytics Query Language(SAQL)
---

It is a Query Language to take action in Einstein Analytics. Every lens, dashboard, and explorer action generates and executes a SAQL statement to build the data needed for the visualization.

## SAQL connection flow

To render a dashboard, Analytics evaluates the steps, widgets, and layouts. It converts each step into a SAQL query, then sends the query for execution to the query engine.
The resulting data is passed to the dashboard, which uses the corresponding widget definitions to render it.

![SAQL architecture](assets/EINSTEIN/SAQL_connection.PNG)

## Developers can write SAQL to directly access Analytics data via:

**1. Analytics REST API** - Use SAQL for Creating your own app to access and analyse data from Analytics, or integrate data with existing apps.

**2. Dashboard JSON** - Use SAQL for Creating cutting-edge dashboards.A dashboard is a curated set of charts, metrics, and tables.

**3. Compare Table** - Use SAQL to calculate data in your tables and then add the results to a new column.

**4. Transformations During Data Flow** - Use SAQL to manipulate or calculate data when it's brought in to Analytics.
Steps to setup Einstein Analytics
