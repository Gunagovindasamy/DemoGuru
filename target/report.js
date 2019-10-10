$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/demoguru.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "DemoGurupage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User in homepage and click the add customer",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_in_homepage_and_click_the_add_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the details",
  "rows": [
    {
      "cells": [
        "Gunasekaran",
        "Govindasamy",
        "gunaanjali03@gmailcom",
        "Krishnagiri",
        "9159491573"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MainClass.user_enters_the_details(DataTable)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WELCOME-PC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.10 (bc3579f611bbc..., userDataDir: C:\\Users\\Welcome\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54283}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8a52ce0999d9ba1abc2d96e135aca466\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.DemoGuruSources.Base.passTheValue(Base.java:17)\r\n\tat com.DemoGuruStepDefinition.MainClass.user_enters_the_details(MainClass.java:33)\r\n\tat ✽.User enters the details(src/test/resources/Feature/demoguru.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should verify the Customer id",
  "keyword": "Then "
});
formatter.match({
  "location": "MainClass.user_should_verify_the_Customer_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should in homepage and click the add customer",
  "keyword": "Given "
});
formatter.match({
  "location": "MainClass.user_should_in_homepage_and_click_the_add_customer()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Add Customer\u0027])[1]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WELCOME-PC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 77.0.3865.10 (bc3579f611bbc..., userDataDir: C:\\Users\\Welcome\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 57a483f0703a764912e5ba114c13924f\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Add Customer\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.DemoGuruSources.Base.Btnclick(Base.java:20)\r\n\tat com.DemoGuruStepDefinition.MainClass.user_should_in_homepage_and_click_the_add_customer(MainClass.java:47)\r\n\tat ✽.User should in homepage and click the add customer(src/test/resources/Feature/demoguru.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User enter the details \"\u003cfname\u003e\",\"\u003clname\u003e\",\"\u003cemail\u003e\",\"\u003caddress\u003e\",\"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainClass.user_enter_the_details(String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verified the Customer id",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "email",
        "address",
        "phone"
      ]
    },
    {
      "cells": [
        "Gunasekaran",
        "Govindasamy",
        "gunaanjali03@gmailcom",
        "Krishnagiri",
        "9159491573"
      ]
    },
    {
      "cells": [
        "Gokulnath",
        "Mahendiran",
        "gokulnath03@gmailcom",
        "Dharmapuri",
        "9159491572"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MainClass.user_verified_the_Customer_id(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});