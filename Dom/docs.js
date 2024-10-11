// 1.react me hum className likhte hai because behind the sccene document
// class ko class name hi read karta hai 
// like if we want to fetch the classname in dom of a tag

// than we have to use document.getElementById('title').className

/*  
*/


/*
2.  how to set and attribute value 
document.getElementById('title').setAttribute('class' , 'test') // wrong this always override the existing class name 
   correct - document.getElementById('title').setAttribute('class' , 'test heading') 
*/

/*  
3. how to get the attribute value
document.getElementById('title').getattribute('class')
*/

/*   how to apply css  (title = class)
4.title.style.backgroundColor='green'
*/



// how to fetch content
/*  
5.  
title.textContent  - it show us those text also which is hidden by css property 
title.innerText- it only show us those text which is visible means it does not show the hidden text content
title.innerHTML - it return us the inner html tags ot html nodes also with content

*/

/*  query selector return only one and first value
6.document.querySelector('h2)  return the first h2 
  document.querySelector('#title) for id
   document.querySelector('.title) for class
   
   // for selecting input attribute element
   document.querySelector(input[type = "password"])

   document.querySelector(p:first-child)
*/


/* 7. we are able to store the value of query selectors 
const myul =  document.querySelector('ul');
and can be further implement querySelector using the namee only 
myul.style.backgrounfColor = 'green'
*/





/*
 8.querySelectorAll - return all values 
 it return the NodeList nor array but looks like array and 
 Node list does not have map functionality for traverse so we have to use forEach

const values = document.querySelectorAll('li');
e.g. NodeList = [li ,li,li]
we have to fetch the elemenet whose property we want to change 
values[0].style.color = 'green'

// using forEach
values.foreach(function(l){
    l.style.background-color = 'green'})
*/

/*
9.document.getElementByClassName  - it return the HTMLCollection
it is different from nodelist and array

HTML Collections does not have any king of traversal method eg. forEach , map etc 
so first we have to convert HTML collection to Array

const lists = document.getElementsByClassName('list-item')
// we receive HTML Collection
not convert it to array 

const convertedarray = Array.from(lists);
not we are eligible to use the array method

convertedarray.foreach(function(li){
 li.style.color = 'orange'})


*/

