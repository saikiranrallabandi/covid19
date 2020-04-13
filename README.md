### Step 2.1
> On Google Chrome browser - for instacart, open https://instacart.com or for Costco SameDay, open https://sameday.costco.com and login to your account. Take your time to add all your items in the shopping cart. Once you have all your desired items in the cart, then move to `Step 3`

### Step 2.2
> Go to your cart page
![Follow this step](https://raw.githubusercontent.com/saikiranrallabandi/covid19/master/assets/Step1.png)

### Step 2.3
> On the checkout page, if there is no availability window, then you may see this page, then
![follow this step to collect cookie](
https://raw.githubusercontent.com/jvkumar/delivery-finder/master/assets/Step%202%20and%203.png)

> **Move to step 3 now**

<hr>

## *If you want to find availability in Amazon Wholes Food then follow these three steps*

### Step 2.1
> On Google Chrome browser - open https://amazon.com (on Google Chrome browser) and take your time to add all your items in the shopping cart of Wholes Food (NOT Amazon Fresh). Once you have all your desired items in the cart, then move to `Step 3`

### Step 2.2
> Go to your Whole Foods Market cart page
![Follow this step](https://raw.githubusercontent.com/saikiranrallabandi/covid19/master/assets/wholesfood1.png)

### Step 2.3
> On the checkout page, if there is no availability window, then you may see this page. Then `right click` anywhere on this page and select `inspect` which will open a developer tool bar as shown below
![follow this step to collect cookie](
https://github.com/saikiranrallabandi/covid19/blob/master/assets/wholesfood2_1.png)

> **Move to step 3 now**

<hr>

## Step 3
*IMPORTANT* From the previous step you must have value of `cookie`, save it in any text editor (will be used later).


## Step 4
*IMPORTANT* - Make sure you don't close the retailer's checkout page (from where you collected the cookie) ever while this finder is running. So let the page remain opened.

## Step 6
Replace with `XXXXX` with the collected cookie value

![example](https://github.com/saikiranrallabandi/covid19/blob/master/assets/config1.png)


```
For instacart, run:
$ node finder.js -instacart
```
OR
```
For Amazon Wholes Food, run:
$ node finder.js -amazonwholesfood
```
OR
```
For Costco Sameday, run:
$ node finder.js -costcosameday
```
OR
```
NOT SUPPORTED YET
For Amazon Fresh, run:
$ node finder.js -amazonfresh
```

That's all!!
