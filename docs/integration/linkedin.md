
1) Go to https://www.linkedin.com/developers/
2) Enter your Username and password anc sign in 
3) Linkedin is the service provider
4) SF is the service consumer
6) click on  `Create App`
Now the Create App form will be open. This form is in three section
1) App information section
- 1. Enter your `App name`
- 2. Type your company name and select your `Company`
- 3. let add the `App logo`
2) Products section
- Under this section we can select the products that you'd like to add/integrate into your app. By default `share with linkedin` and `Sign In with LinkedIn` is added. 

3) Legal terms
- select the checkbox

Once you completed the all three section click on create an app

Go to deveoper console create an vf page called `linkedinVFPage`
Back to linkedin developer console and enter the following url to the oAuth2.0
`https://ap4.salesforce.com/apex/linkedinVFPage`

https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin/consumer/context

## Authorization using linkedin
1) create apex class `linkedin_integration`

## Exchange Authorization Code for an Access Token

LinkedIn_Response

remote site setting
https://api.linkedin.com