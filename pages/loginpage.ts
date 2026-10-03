import{expect,Page,Locator}from "@playwright/test";
import { TIMEOUT } from "node:dns/promises";
export class loginpage{
    username: Locator;
    password: Locator;
    loginbtn: Locator;
    products: Locator;
    page: Page

    constructor(page:Page){
        this.page=page;
        this.username=page.getByPlaceholder("Username");
        
        this.password=page.getByPlaceholder("Password");
        this.loginbtn=page.getByRole("button",{name:"login"})
        this.products=page.getByText("Products")
    }

async navigate(url:string){
    await this.page.goto(url,{waitUntil:"domcontentloaded",timeout:30000});
    

}
async loginmethod(username: string,password: string)
{
   
    try{await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click({ timeout: 20000 });
    const pass=await this.products.waitFor({
            state: "visible",
            timeout: 10000
        })
        console.log("test passed")
    return await this.products.isVisible();}
    catch{
        console.log("test failed due to invalid")
        return false
    }

    
}}
