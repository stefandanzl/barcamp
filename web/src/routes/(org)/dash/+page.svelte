<script lang="ts">
	import { pb } from '$lib/pocketbase/client';
    import { Button, Layout } from 'stwui';
    let records : string;
    let rec: Array<unknown> = []


    const obj = {
  "page": 1,
  "perPage": 11,
  "totalItems": 36,
  "totalPages": 4,
  "items": [
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": false,
      "created": "2024-03-22 11:33:23.572Z",
      "id": "chjhy9men2vfzut",
      "login": false,
      "organize": false,
      "pid": 0,
      "read": false,
      "schedule": false,
      "title": "blocked",
      "topic": false,
      "updated": "2024-03-22 11:33:23.572Z",
      "vote": false
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": false,
      "created": "2024-03-22 11:33:33.882Z",
      "id": "v6uz8r0n5qwcdg2",
      "login": false,
      "organize": false,
      "pid": 1,
      "read": false,
      "schedule": false,
      "title": "deleted",
      "topic": false,
      "updated": "2024-03-22 11:33:33.882Z",
      "vote": false
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": false,
      "created": "2024-03-22 11:33:51.984Z",
      "id": "beo0lx54uvm45bj",
      "login": true,
      "organize": false,
      "pid": 2,
      "read": true,
      "schedule": false,
      "title": "guest",
      "topic": true,
      "updated": "2024-03-22 11:33:51.984Z",
      "vote": true
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": true,
      "company": false,
      "created": "2024-03-22 11:34:24.732Z",
      "id": "s8ktaf0yhdpc1sv",
      "login": true,
      "organize": false,
      "pid": 3,
      "read": true,
      "schedule": true,
      "title": "registered",
      "topic": true,
      "updated": "2024-03-22 11:34:24.732Z",
      "vote": true
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": true,
      "company": true,
      "created": "2024-03-22 11:34:48.478Z",
      "id": "r1vezbnjr0dpp46",
      "login": true,
      "organize": false,
      "pid": 4,
      "read": true,
      "schedule": true,
      "title": "entrepreneur",
      "topic": true,
      "updated": "2024-03-22 11:34:48.478Z",
      "vote": true
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": true,
      "created": "2024-03-22 11:35:05.834Z",
      "id": "wqwbwgszqowxcoc",
      "login": true,
      "organize": false,
      "pid": 5,
      "read": false,
      "schedule": false,
      "title": "sponsor",
      "topic": false,
      "updated": "2024-03-22 11:35:05.834Z",
      "vote": false
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": true,
      "company": false,
      "created": "2024-03-22 11:35:27.613Z",
      "id": "ru67b1am6f6iyym",
      "login": true,
      "organize": true,
      "pid": 6,
      "read": true,
      "schedule": true,
      "title": "organizer",
      "topic": true,
      "updated": "2024-03-22 11:35:27.613Z",
      "vote": true
    },
    {
      "admin": true,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": true,
      "company": false,
      "created": "2024-03-22 11:35:48.077Z",
      "id": "4ftv3f4p6aixvkd",
      "login": true,
      "organize": true,
      "pid": 7,
      "read": true,
      "schedule": true,
      "title": "admin",
      "topic": true,
      "updated": "2024-03-22 11:35:48.077Z",
      "vote": true
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": false,
      "created": "2024-03-25 17:22:14.812Z",
      "id": "142eq81dmwapcfl",
      "login": false,
      "organize": false,
      "pid": 0,
      "read": false,
      "schedule": false,
      "title": "",
      "topic": false,
      "updated": "2024-03-25 17:22:14.812Z",
      "vote": false
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": false,
      "created": "2024-03-25 17:24:26.772Z",
      "id": "ckyhh60hxru3ml3",
      "login": false,
      "organize": false,
      "pid": 0,
      "read": false,
      "schedule": false,
      "title": "",
      "topic": false,
      "updated": "2024-03-25 17:24:26.772Z",
      "vote": false
    },
    {
      "admin": false,
      "collectionId": "79o9gyx8bv1k1cb",
      "collectionName": "permissions",
      "comment": false,
      "company": false,
      "created": "2024-03-25 17:24:27.761Z",
      "id": "jz6jm3e54fajd7x",
      "login": false,
      "organize": false,
      "pid": 0,
      "read": false,
      "schedule": false,
      "title": "",
      "topic": false,
      "updated": "2024-03-25 17:24:27.761Z",
      "vote": false
    }
  ]
}




</script>


<div class="flex flex-col w-full h-full p-10">
    
    
<div class="w-5">
<Button type="default" on:click={async ()=> {

    records = JSON.stringify(await pb.collection('topics').getFullList(),null,4)



}}><span>Show me</span></Button>
</div>
<div class="whitespace-pre-wrap w-1/3">{records}</div>


<div class="w-5">
<Button type="default" on:click={async ()=> {


for (const i of obj.items){
const k= await pb.collection('permissions').create({
    admin: i.admin,
    comment: i.comment,
    company: i.company,
    login: i.login,
    organize: i.organize,
    pid: i.pid,
    read: i.read,
    schedule: i.schedule,
    title: i.title,
    topic:i.topic,
    vote: i.vote,
}) ;

let a  = k as object
 
rec.push(k );
}
}}><span>Show me</span></Button>
</div>
<div class="whitespace-pre-wrap w-1/3">{JSON.stringify(rec,null,4)}</div>





















</div>


