## Step 1
Assuming you are on Mac OS, so open a terminal window and create a folder, let's say, `covid19`
```
$ mkdir covid19
$ cd covid19
```
Move the downloaded folder `delivery-finder`  (as done in Step0-b above) in `covid19` folder

## Step 2
<hr>

## *If you want to find availability in Instacart or Costco SameDay then follow these three steps*

### Step 2.1
> On Google Chrome browser - for instacart, open https://instacart.com or for Costco SameDay, open https://sameday.costco.com and login to your account. Take your time to add all your items in the shopping cart. Once you have all your desired items in the cart, then move to `Step 3`

### Step 2.2
> Go to your cart page
![Follow this step](https://raw.githubusercontent.com/jvkumar/delivery-finder/master/assets/Step1.png)

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
![Follow this step](https://raw.githubusercontent.com/jvkumar/delivery-finder/master/assets/wholesfood1.png)

### Step 2.3
> On the checkout page, if there is no availability window, then you may see this page. Then `right click` anywhere on this page and select `inspect` which will open a developer tool bar as shown below
![follow this step to collect cookie](
https://github.com/jvkumar/delivery-finder/blob/master/assets/wholesfood2_1.png)

> **Move to step 3 now**

<hr>

## Step 3
*IMPORTANT* From the previous step you must have value of `cookie`, save it in any text editor (will be used later).


## Step 4
*IMPORTANT* - Make sure you don't close the retailer's checkout page (from where you collected the cookie) ever while this finder is running. So let the page remain opened.

## Step 5
Go to `covid19` folder and then subfolder `delivery-finder` subfolder where this finder codebase is residing.

## Step 6
In the `delivery-finder` folder, you would find a file called `finder.js`. Open that file in any editor and at the top of the file, you will find keys for three different retailers' cookies (lines 4,5 and 6). Whichever retailer's cookie you collected in step2 above, then replace the value of `XXXXX` with the collected cookie value. You can input multiple retaliers' cookies value by replacing the corresponding `XXXXX`. Then save the file.
![example](https://github.com/jvkumar/delivery-finder/blob/master/assets/config1.png)

## Step 7
Go to the terminal window at `/covid19/delivery-finder` folder
`You will have to open separate terminal windows for finding each retailer's availability window`
when you are at `/covid19/delivery-finder` folder, follow the step below:

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

**An example**
![example](https://raw.githubusercontent.com/jvkumar/delivery-finder/master/assets/start.png)


In your output, if you see the following then you are all set.
```
** SUCCESS ** YOUR COOKIE VALUE OF instacartCookie IS CORRECT, NOW LET THE FINDER FIND AND ALERT YOU. MAKE SURE YOU KEEP THIS TERMINAL WINDOW & CHECKOUT PAGE OPEN WITH YOUR LAPTOP SOUND AT MAX
```

If you see any error, then it means you need to correctly put the values of cookie for that retailer

That's all!!

## What to expect next.
Leave your computer plugged in and don't close it (let it remain connected to the internet). You may leave it in the low power mode if you wish. Let the terminal window remain opened and you may see progress there every minute. This finder will keep checking the availability window every minute, you may hear a [Beep sound](https://clyp.it/fjrsqftl) when it finds an availability. Then you just go to the opened retailer's checkout page (as mentioned in step 2) and refresh it. You may see the availability window. *Remember there is no guarantee that this script will find a delivery window, unless retailer opens it (common sense) Sometime if you don't act fast enough then even if script alerted the delivery window, but you delayed in taking action, then the window may disappear) :wink:*

## Any developer wants to contribute?
You are welcome to send the PR

## Thanks to these folks who contributed in the development of this script for supporting the cause.
1. [@dishant](https://github.com/dishant)
2. ?

## Disclaimer
The author doesn't take any responsibility for any situation that may be the result of running this script. Please use it at your own risk.
