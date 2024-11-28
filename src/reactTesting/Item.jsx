// Item.js
import axios from 'axios';

export const customFetch = axios.create({
  baseURL: 'https://your-api-url.com',
});

 


const item=[
 {
  text:'black',
  icon:'fas fa-trash',
  checkbox:'checkbox',
 },
 {
  text:'white',
  icon:'fas fa-trash',
  checkbox:'checkbox',
 },
 {
  text:'gray',
  icon:'fas fa-trash',
  checkbox:'checkbox',
 },
 {
  text:'green',
  icon:'fas fa-trash',
  checkbox:'checkbox',
 },
 {
  text:'pink',
  icon:'fas fa-trash',
  checkbox:'checkbox',
 },
 
]



export default item 