**Data Storage:**

-> aise kuch jaha par hm saare users ki info store kar sakte h
-> file - data.txt
-> Concept - database

**TYPES OF DBS**

1. SQL - yaha tables k form mein data ko rakha jayega

2. NoSQL (not only SQL) - objects way mein data hota h 
*eg:* 
{
    name: "ayushi",
    age: 25
}

-> NoSQL - mongoDB
-> NoSQL ek concept h wo khud mein ek database nhi h jisme objects k roop mein data rakha jayega 

**What and why mongoDB**

-> mongoDB actual database h aur wo NoSQL theory k basis par h iska mtlb h yeh objects k roop m data store karega
-> in order to store data in database we use MongoDB

**Terminologies** - collections, documents, schemes, keys, models

**Backend** - it itself contains database

-> it contains two servers:

1. *Application server* (Basics) - node

-> yeh wo server h routes waigera handle karta h aur request ko accept karta h
-> sab kuch karna siwaye data k kaam se

2. *Database server* - MongoDB

-> Database -> Collections -> Document
CODE
----------------------------------------------------------------------------------------------


CODE                      DATABASE
----------------------------------------------------------------------------------------------
mongoose.connect ->       database create
model create     ->       collection
CREATE           ->       document