let count = 0;
let num = 0;
const latestApi = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts`
  );
  const data = await res.json();
  console.log(data.posts);

  const post = data.posts;
  displayPost(post);
  // envelop(post);
};

const displayPost = (post) => {
  const latestPost = document.getElementById("latest-post");
  post.forEach((posts) => {
    // console.log(posts);
    const postDiv = document.createElement("div");
    postDiv.classList = `bg-gray-100 shadow-xl`;
    postDiv.innerHTML = `
    <div class="card border-blue-400 w-full h-64">
              <div class="flex items-center justify-start gap-6 h-full p-10">
                <div>
                  <div class="indicator">
                  
                    <span class="indicator-item badge badge-secondary"></span>
                    <div class="grid w-32 h-32 bg-base-300 place-items-center">
                      <img src="${posts.image}" />
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
};
// envelop
// const envelop= (post)=>{
// // const button = document.getElementById('envelop-button');
// const cd = post;
// console.log(cd);

// }

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
  console.log(count);
};

// latest post

latestApi();
