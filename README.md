
  <h3 align="center">NWEN304 Group Project</h3>



<!-- TABLE OF CONTENTS -->
# Table of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Installation](#installation)
* [How to use the System](#how-to-use-the-system)
* [Error Handling](#error-handling)




# About The Project
This a website created for NWEN304 as part of the Group project
Created by

* Sultan Banabila
* Fangyi Yan
* James Hutton

The website we created is a basic e-commerce platform that allows
the user to shop for a number of different clothing items and add them
to their cart and finally check out. We also have a login/logout system
that will keep your cart information between be login and logout.


# Built With

* Node.js
* Express
* React
* MongoDB


# Installation

You can either visit the website : http://www.example.com to see the live version of the site

or you can download it and run it on your own machine
to do this you must complete the following steps:

1. Clone the repo
git clone https://github.com/0x01BF52/NWEN304_Group_Project.git

2. Install NPM packages
open some sort of terminal and cd into "web application"
run npm install to download all of the node module's that are used in the project

3. type npm start and go to localhost:5000 to see the webpage



# How to use the System
![Landing Page](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Home.png)  
when you first load up the page you will be greeted with out landing page
on this page there are a number of things you can do.
if you scroll down you can view a randomly selected assortment of products
as well as find a link to each of the different Categories of products we have available    

![Browse/Categories](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Home%20Browse.png)  

if we scroll back to the top we can see a number of other action we can perform
top right of the screen we have Cart, Browse(dropdown) and login.
Cart is only available once you have logged in so we will start there.  
![Login](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Login%20(Small).png)  
We are then taken to the login page and are asked to either enter out login information
or login through Google. if we enter correct information here we will be taken back to the
Landing page but we will now be logged in. But as of now we don't have a account
so we should click the sign up button at the bottom of the screen.  
![Register](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Register%20(Small).png)  
once we have successful created an account we will be taken back to the landing Page
![Logged in](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Home%20Logged%20in.png)  
we can now see that we have been logged in, we can now add and remove items from our cart that will persist between sessions  
![Cart](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/EmptyCart%20(Small).png)  
as of how we can see that the cart is empty but when can add items to the cart either from the home page or
from one of the dedicated category pages  
![Add Item](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Add%20Item.png)  
![Added](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Added.png)  
we can now see that we have added the item to our cart and if we check the cart itself
we can see that the items have been added   
![CartFull](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/CartFull.png)  
That is all the functions that a regular user can do but we also have a role for
admins so that they can add delete and update products in the database.  
![Admin Login](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Admin%20Login.png)  
Admins have the same login portal as regular users and have all the same capabilities as regular users
but can also access routes that are restricted to be admin only  
![Admin routes](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Admin%20Panel%20(Small).png)  
if we go to the /admin route on our we site we find our admin panel that has functionality for
adding and deleting products in the database.  
![Admin Add](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Add%20Product.png)  
the add feature always admins to easily add new products to the website without needing for it to be rewritten
we can set the product name, its price, what category it is under, a description and a link to its photo  
![Add confirm](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/add%20confrim.png)  
![Store Added](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/StoreAdd.png)  
As we can see the new products have been added to the page (only test ones)  
![Admin delete](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Admin%20Panel%20(Small).png)  
We can also delete old product from the store if we happen to stop carrying them
when deleting the item it isn't deleted with one click to avoid miss clicking and accidently
deleting a product that wasn't meant to be deleted  
![Admin delete1](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Delete%20Confirm.png)  
![Admin delete2](https://github.com/0x01BF52/NWEN304_Group_Project/blob/master/Images/How%20To/Delete%20Confirm2.png)  
as you can see we need to confirm that the item is deleted and we are then given conformation
once it has been successful deleted  


# Error Handling



### Login/Register

We have a number of different error states that we can handle
when it comes to both login and Register  
![Register Error 1](www.test.com)  
the first one checks for make sure what is entered is a correctly formatted email  
![Register Error2](www.test.com)  
the second checks the database to see if the email already exists and if it does
it gives an alert saying the email already exists  
![login Error](www.test.com)  
this is the same check as before but now done on the login page  
![login Error](www.test.com)  
if the password does not match the user then an error is sent to the console
and we have a print on the server end that tells us as well  
![login Error2](www.test.com)  
![login Error3](www.test.com)  
We also make it so that the fields can't be left blank and send an alert if they are

### User/Admin routes
we have also secured all of our routes so that they are only available to
users who have the correct permissions eg. user or admin  
![Admin Panel](www.test.com)  
![Admin Panel 2](www.test.com)  
we use a custom written middle ware for our routes to check to see if the Users
that is requesting the route has the right permissions.
we can also just do a general check to see if the user is logged in  
![Cart AUTH](www.test.com)  
this is used for the cart. if the user is not logged in then it will redirect
them to the login page  
