 
const latestApi = async (searchText ='comedy') => {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const data = await res.json();
 console.log(data);
  const post = data.posts;
  console.log(post);

  displayPost(post);
 
};

const displayPost = (post) => {
  const latestPost = document.getElementById("latest-card");
  latestPost.textContent = '';
  post.forEach((posts) => {
     const postDiv = document.createElement("div");
    postDiv.classList = `bg-gray-100 shadow-xl`;
    postDiv.innerHTML = `
    <div class="card border-blue-400 w-full h-64">
              <div class="flex items-center justify-start gap-6 h-full p-10">
                <div>
                  <div class="indicator">
                  
                    <span id="badge" class="indicator-item badge badge-secondary ${posts.isActive}"  ></span>
                    <div class="grid w-32 h-32 bg-base-300 place-items-center">
                      <img src="${posts.image}"  class="rounded-xl" />
                    </div>
                  </div>
                </div>
                <div class="w-full text-left space-y-3">
                  <div class="flex gap-6">
                    <p>#${posts.category}</p>
                    <p>${posts.author.name}</p>
                  </div>
                  <h2 class="font-bold text-3xl">
                    ${posts.title}
                  </h2>
                  <p>
                  ${posts.description}
                  </p>
                  <hr class="border-black border-dashed w-full" />
                  <div class="flex justify-between">
                    <div class="flex gap-6">
                      <p>
                        <span><i class="fa-regular fa-comment"></i></span>
                        <span> ${posts.comment_count}</span>
                      </p>
                      <p>
                        <span><i class="fa-regular fa-eye"></i> </span>
                        <span> ${posts.view_count}</span>
                      </p>
                      <p>
                        <span><i class="fa-regular fa-clock"></i> </span>
                        <span> ${posts.posted_time} min</span>
                      </p>
                    </div >
                    <div class="">
                    <button id="envelop-button" onclick="envelop(' ${posts.title}','${posts.view_count}')" class="bg-green-300 h-8 w-8 rounded-full text-center"><i class="fa-regular fa-envelope"></i></button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;

 

    latestPost.appendChild(postDiv);
  });
  // badge 
// const badge = document.getElementById('badge').classList;
 
// console.log(badge);
    
};
 

const envelop = (id, view_count) => {
  const button = document.getElementById("envelop-button");

  const rightBox = document.getElementById("right-box");

  const rCard = document.createElement("div");
  rCard.innerHTML = `
<div class="bg-white p-3 rounded-xl flex justify-between items-center h-20">
<h1 class=" font-extrabold">  ${id} Costume</h1>
<div>
  <span><i class="fa-regular fa-eye"></i> </span>
  <span>${view_count}</span>
</div>
</div>
`;

  rightBox.appendChild(rCard);
  countNum();
};

let i = 0;
const countNum = () => {
  clicks = i + 1;
  const mark = document.getElementById("mark").innerText;
  const makeNum = parseInt(mark);
  const count = makeNum + clicks;
  document.getElementById("mark").innerText = count;
};

// latest post
const latest = async()=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
  const data = await res.json();


  const latestPost = document.getElementById('latest-posts');
  data.forEach( ( data)=> {
    const card = document.createElement("div");
    card.innerHTML= `

    
    <div class="card w-96 bg-base-100 shadow-xl border-gray-200 border">
    <figure class="px-8 pt-10">
      <img src=${data.cover_image} alt="bg" class="rounded-xl" />

     </figure>
    <div class="card-body items-start text-left space-y-2">
       <p><i class="fa-solid fa-calendar-days mr-1"></i> <span>${data?.author?.posted_date}</span></p>
       <h3 class="text-2xl font-extrabold">${data.title}</h3>
       <p class="text-lg text-gray-400">${data.description}</p>
       <div class="flex items-center gap-4">
         <div class="bg-red-300 rounded-full w-12 h-12">
         <img src=${data.profile_image
         } alt="bg" class="rounded-full" />

         </div>
         <div>
          <h3 class="font-extrabold ">${data.author.name}</h3>
          <p class="text-gray-400">${data.author.designation}</p>
         </div>
       </div>
    </div>
  </div>

     `;
    latestPost.appendChild(card);
  });
     }

// handel
const handelSearch = ()=>{
  const searchField = document.getElementById('search-input');
  const searchText = searchField.value;
  console.log(searchText);
  latestApi(searchText)
}


 


 
 
//  searchApi();
latestApi();
latest();
 


// const latestApi = async ( ) => {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/retro-forum/posts`
//   );
//   const data = await res.json();
 
//   const post = data.posts;
//   console.log(post);

//   displayPost(post);
 
// };

// const displayPost = (post) => {
//   const latestPost = document.getElementById("latest-card");
//   post.forEach((posts) => {
//      const postDiv = document.createElement("div");
//     postDiv.classList = `bg-gray-100 shadow-xl`;
//     postDiv.innerHTML = `
//     <div class="card border-blue-400 w-full h-64">
//               <div class="flex items-center justify-start gap-6 h-full p-10">
//                 <div>
//                   <div class="indicator">
                  
//                     <span id="badge" class="indicator-item badge badge-secondary ${posts.isActive}"  ></span>
//                     <div class="grid w-32 h-32 bg-base-300 place-items-center">
//                       <img src="${posts.image}"  class="rounded-xl" />
//                     </div>
//                   </div>
//                 </div>
//                 <div class="w-full text-left space-y-3">
//                   <div class="flex gap-6">
//                     <p>#${posts.category}</p>
//                     <p>${posts.author.name}</p>
//                   </div>
//                   <h2 class="font-bold text-3xl">
//                     ${posts.title}
//                   </h2>
//                   <p>
//                   ${posts.description}
//                   </p>
//                   <hr class="border-black border-dashed w-full" />
//                   <div class="flex justify-between">
//                     <div class="flex gap-6">
//                       <p>
//                         <span><i class="fa-regular fa-comment"></i></span>
//                         <span> ${posts.comment_count}</span>
//                       </p>
//                       <p>
//                         <span><i class="fa-regular fa-eye"></i> </span>
//                         <span> ${posts.view_count}</span>
//                       </p>
//                       <p>
//                         <span><i class="fa-regular fa-clock"></i> </span>
//                         <span> ${posts.posted_time} min</span>
//                       </p>
//                     </div >
//                     <div class="">
//                     <button id="envelop-button" onclick="envelop(' ${posts.title}','${posts.view_count}')" class="bg-green-300 h-8 w-8 rounded-full text-center"><i class="fa-regular fa-envelope"></i></button>

//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     `;

 

//     latestPost.appendChild(postDiv);
//   });
//   // badge 
// const badge = document.getElementById('badge').classList;
 
// // console.log(badge);
    
// };
 

// const envelop = (id, view_count) => {
//   const button = document.getElementById("envelop-button");

//   const rightBox = document.getElementById("right-box");

//   const rCard = document.createElement("div");
//   rCard.innerHTML = `
// <div class="bg-white p-3 rounded-xl flex justify-between items-center h-20">
// <h1 class=" font-extrabold">  ${id} Costume</h1>
// <div>
//   <span><i class="fa-regular fa-eye"></i> </span>
//   <span>${view_count}</span>
// </div>
// </div>
// `;

//   rightBox.appendChild(rCard);
//   countNum();
// };

// let i = 0;
// const countNum = () => {
//   clicks = i + 1;
//   const mark = document.getElementById("mark").innerText;
//   const makeNum = parseInt(mark);
//   const count = makeNum + clicks;
//   document.getElementById("mark").innerText = count;
// };

// // latest post
// const latest = async()=>{
//   const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
//   const data = await res.json();


//   const latestPost = document.getElementById('latest-posts');
//   data.forEach( ( data)=> {
//     const card = document.createElement("div");
//     card.innerHTML= `

    
//     <div class="card w-96 bg-base-100 shadow-xl border-gray-200 border">
//     <figure class="px-8 pt-10">
//       <img src=${data.cover_image} alt="bg" class="rounded-xl" />

//      </figure>
//     <div class="card-body items-start text-left space-y-2">
//        <p><i class="fa-solid fa-calendar-days mr-1"></i> <span>${data?.author?.posted_date}</span></p>
//        <h3 class="text-2xl font-extrabold">${data.title}</h3>
//        <p class="text-lg text-gray-400">${data.description}</p>
//        <div class="flex items-center gap-4">
//          <div class="bg-red-300 rounded-full w-12 h-12">
//          <img src=${data.profile_image
//          } alt="bg" class="rounded-full" />

//          </div>
//          <div>
//           <h3 class="font-extrabold ">${data.author.name}</h3>
//           <p class="text-gray-400">${data.author.designation}</p>
//          </div>
//        </div>
//     </div>
//   </div>

//      `;
//     latestPost.appendChild(card);
//   });
//      }




 


 
 
// //  searchApi();
// latestApi();
// latest();