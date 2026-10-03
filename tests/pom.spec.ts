import { test,expect } from"@playwright/test";
import {loginpage} from"../pages/loginpage";
import { waitForDebugger } from "node:inspector";
import data from"../testdata/testdata.json"
import ddinput from "../testdata/datadrivenip.json"
for (let d of ddinput){
test(`test data driven ${d.username},${d.password}`,async({page})=>{
    const loginobj=new loginpage(page);

await loginobj.navigate(data.URL);
const userenabled=await loginobj.username.isEnabled();
const passwordenabled=await loginobj.password.isEnabled();
const loginbtnvisible=await loginobj.loginbtn.isVisible()
console.log(userenabled)
console.log(passwordenabled)
console.log(loginbtnvisible)

const result=await loginobj.loginmethod(d.username,d.password)
console.log(result)

//expect(result).toBe(true);
})
}

