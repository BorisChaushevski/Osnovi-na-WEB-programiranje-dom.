let defime="User"+parseInt(Math.floor(Math.random()*10000));


const form=document.getElementById("loginforma");
const input=document.getElementById("name");
const message=document.getElementById("message");
const userdisplay=document.getElementById("userdispl");

form.onsubmit=function(promena){
    promena.preventDefault();

    let inputval=input.value.trim();

    if(inputval!==""){
        defime=inputval;
    }

    
    form.style.display="none";
    userdisplay.style.display="block";
    userdisplay.innerText="Username is:"+defime;
    
};

document.addEventListener("DOMContentLoaded", () => {
    let likeCount = Math.floor(Math.random()*10000);
  let dislikeCount = Math.floor(Math.random()*10000);
  const likeBtn = document.getElementById("likeBtn");
  const dislikeBtn = document.getElementById("dislikeBtn");
  const likeSpan = document.getElementById("likeCount");
  const dislikeSpan = document.getElementById("dislikeCount");
likeSpan.innerText=likeCount;
dislikeSpan.innerText=dislikeCount;

  likeBtn.addEventListener("click", () => {
    likeCount++;
    likeSpan.innerText = likeCount;
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeCount++;
    dislikeSpan.innerText = dislikeCount;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    let likeCount2 = Math.floor(Math.random()*10000);
  let dislikeCount2 = Math.floor(Math.random()*10000);
  const likeBtn = document.getElementById("likeBtn2");
  const dislikeBtn = document.getElementById("dislikeBtn2");
  const likeSpan = document.getElementById("likeCount2");
  const dislikeSpan = document.getElementById("dislikeCount2");
  likeSpan.innerText=likeCount2;
  dislikeSpan.innerText=dislikeCount2

  likeBtn.addEventListener("click", () => {
    likeCount2++;
    likeSpan.innerText = likeCount2;
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeCount2++;
    dislikeSpan.innerText = dislikeCount2;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    let likeCount3 = Math.floor(Math.random()*10000);
  let dislikeCount3 = Math.floor(Math.random()*10000);
  const likeBtn = document.getElementById("likeBtn3");
  const dislikeBtn = document.getElementById("dislikeBtn3");
  const likeSpan = document.getElementById("likeCount3");
  const dislikeSpan = document.getElementById("dislikeCount3");
  likeSpan.innerText=likeCount3;
  dislikeSpan.innerText=dislikeCount3;

  likeBtn.addEventListener("click", () => {
    likeCount3++;
    likeSpan.innerText = likeCount3;
  });

  dislikeBtn.addEventListener("click", () => {
    dislikeCount3++;
    dislikeSpan.innerText = dislikeCount3;
  });
});

document.addEventListener("DOMContentLoaded", ()=>{
const postcommet=document.getElementById("postcomment");
const commentinput=document.getElementById("commentinput");
const komentiranje=document.getElementById("comments");
postcommet.addEventListener("click", ()=>
{
    const text=commentinput.value.trim();
    if(text=="")
    { return;
    }
        const randomnumber=Math.floor(Math.random()*1000);
        const now=new Date();
        const time=now.toLocaleDateString([], {hour: '2-digit', minute: '2-digit'})
    const newcomment=document.createElement("div");
    newcomment.classList.add("comment");
    newcomment.textContent=`[${time}]-User: ${randomnumber}: commented: ${text}`;

    komentiranje.prepend(newcomment);

    commentinput.value="";
});
});

document.addEventListener("DOMContentLoaded", ()=>{
const naslovnablog=document.getElementById("naslovnablog");
const tekstnablog=document.getElementById("tekstnablog");
const postblog=document.getElementById("postblog");
const blogovi=document.getElementById("blogovi");
postblog.addEventListener("click", ()=>{
    let tekstvonaslov=naslovnablog.value.trim();
    const tekstvosodrzina=tekstnablog.value.trim();
    if(tekstvonaslov=="")
    {
        tekstvonaslov="No Title";
    }
    if(tekstvosodrzina=="")
    {
        return;
    }
    const randomnumber=Math.floor(Math.random()*10000);
    const novblog=document.createElement("div");
    novblog.classList.add("blogpost");
    novblog.innerHTML=`
      <h4>${tekstvonaslov} (#${randomnumber})</h4>
      <p>${tekstvosodrzina}</p>`;
    blogovi.prepend(novblog);
    naslovnablog.value="";
    tekstnablog.value="";
});
});
document.addEventListener('DOMContentLoaded', () => {
  const stars = Array.from(document.querySelectorAll('.star'));
  const updateBtn = document.getElementById('updateRatingBtn');
  const ratingOutput = document.getElementById('ratingOutput');
  let currentRating = 0; 

  stars.forEach((star, idx) => {
    star.addEventListener('click', () => {
      const val = parseInt(star.dataset.value, 10);
      currentRating = val;

      stars.forEach((s, i) => {
        if (i < currentRating) s.classList.add('selected');
        else s.classList.remove('selected');
      });
    });
  });

  updateBtn.addEventListener('click', () => {
    ratingOutput.innerText = 'Rating is: ' + currentRating + '/5';
  });
});