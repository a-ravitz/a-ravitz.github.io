# a-ravitz.github.io
http://www.adamravitz.com

---

This site is hosted via heroku so I can utilize nodeMailer on the contact form.

The contact form looks like this, and utilizes jQuery form validation to make sure all the fields are filled out before sending the email.
<img width="1263" alt="Screen Shot 2019-06-19 at 5 15 12 PM" src="https://user-images.githubusercontent.com/46004362/59800963-e0d06380-92b5-11e9-82f1-7ea80838cef2.png">

<img width="536" alt="Screen Shot 2019-06-19 at 5 17 34 PM" src="https://user-images.githubusercontent.com/46004362/59801077-28ef8600-92b6-11e9-8d0f-011692bc366a.png">

If the field isn't filled out the site will urge you to fill it out inorder to submit the form.

<img width="1147" alt="Screen Shot 2019-06-19 at 5 18 59 PM" src="https://user-images.githubusercontent.com/46004362/59801455-5dfbd880-92b6-11e9-9a09-1ef956271dbd.png">

If you are sucessfully able to submit the form the `/send-email`route will be called 
<img width="518" alt="Screen Shot 2019-06-19 at 7 31 11 PM" src="https://user-images.githubusercontent.com/46004362/59808123-dec3d000-92c8-11e9-9a58-a987ec64e042.png">

And the user will be greeted with a modal that thanks them, and repeats their name using the same colors found in the navbar.

<img width="1085" alt="Screen Shot 2019-06-19 at 5 20 44 PM" src="https://user-images.githubusercontent.com/46004362/59802323-cba80480-92b6-11e9-9156-8a5d49a8a049.png">

At which point I will recieve an email that looks like this.

<img width="556" alt="Screen Shot 2019-06-19 at 5 26 59 PM" src="https://user-images.githubusercontent.com/46004362/59802670-77e9eb00-92b7-11e9-9511-d67beb7dea7b.png">




