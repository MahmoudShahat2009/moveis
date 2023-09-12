let rowdata = document.getElementById("data")
function openSideNav() {
   $(".side-nav-menu").animate({
       left: 0
   }, 500)
   
   
   $(".open-close-icon").removeClass("fa-align-justify");
   $(".open-close-icon").addClass("fa-x");


   for (let i = 0; i < 6; i++) {
       $(".links li").eq(i).animate({
           top: 0
       }, (i + 6) * 100)
   }
}

function closeSideNav() {
   let boxWidth = $(".side-nav-menu .nav-tab").outerWidth()
   $(".side-nav-menu").animate({
       left: -boxWidth
   }, 500)

   $(".open-close-icon").addClass("fa-align-justify");
   $(".open-close-icon").removeClass("fa-x");


   $(".links li").animate({
       top: 300
   }, 500)
}

closeSideNav()
$(".side-nav-menu i.open-close-icon").click(() => {
   if ($(".side-nav-menu").css("left") == "0px") {
       closeSideNav()
   } else {
       openSideNav()
   }
})



async function search() {
   let respons =await fetch ('https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
   respons = await respons.json()
   // console.log(respons.results);
   dispalyMovies(respons.results)  
}
function dispalyMovies(arr) {
   let cartona = ""
   for (let i = 0; i < arr.length; i++) {
     
      cartona += `
      
      <div class="col-lg-4">
      <div class="card h-100 position-relative overflow-hidden">
          <img src="${"https://image.tmdb.org/t/p/w500/"+arr[i].poster_path}" class="card-img-top"
              alt="...">
          <div class="card-body position-absolute layer-contant">
              <h1 class="card-title text-center">${arr[i].title}</h1>
              <p class="card-text  fs-6 ">${arr[i].overview}</p>
              <p>Release Data : <span>${arr[i].release_date}</span></p>
              <div class=" reating ">${ Math.round(arr[i].vote_average*10)/10}</div>
          </div>
      </div>
  </div>
      `
   }
   rowdata.innerHTML = cartona
}
search("")
// /////////////////////////////////////////////////popular//////////////////////////////////////////////////////////////////////////////////////////
async function getpopular(){
   let respons =await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
       respons = await respons.json()
      console.log(respons.results);
      dispalypopular(respons.results)
}
function dispalypopular(arr) {
   let cartona = ""
   for (let i = 0; i < arr.length; i++) {
     
     cartona += `
      
      <div class="col-lg-4">
      <div class="card h-100 position-relative overflow-hidden">
          <img src="${"https://image.tmdb.org/t/p/w500/"+arr[i].poster_path}" class="card-img-top"
              alt="...">
          <div class="card-body position-absolute layer-contant">
              <h1 class="card-title text-center">${arr[i].original_title}</h1>
              <p class="card-text  fs-6 ">${arr[i].overview}</p>
              <p>Release Data : <span>${arr[i].release_date}</span></p>
              <div class=" reating ">${arr[i].vote_average}</div>
          </div>
      </div>
  </div>
      `
   }
   rowdata.innerHTML = cartona
}




// /////////////////////////////////////////////////// TOP REATED MOVIES////////////////////////////////////////////////////////////////

async function getTopReated(){
   let respons =await fetch ('https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
       respons = await respons.json()
      // console.log(respons.results);
      dispalyTopReated(respons.results)
}
function dispalyTopReated(arr) {
   let cartona = ""
   for (let i = 0; i < arr.length; i++) {
     
     cartona += `
      
      <div class="col-lg-4">
      <div class="card h-100 position-relative overflow-hidden">
          <img src="${"https://image.tmdb.org/t/p/w500/"+arr[i].poster_path}" class="card-img-top"
              alt="...">
          <div class="card-body position-absolute layer-contant">
              <h1 class="card-title text-center">${arr[i].original_title}</h1>
              <p class="card-text  fs-6 ">${arr[i].overview}</p>
              <p>Release Data : <span>${arr[i].release_date}</span></p>
              <div class=" reating ">${arr[i].vote_average}</div>
          </div>
      </div>
  </div>
      `
   }
   rowdata.innerHTML = cartona
}
//   //////////////////////////////////Trending MOVIES ////////////////////////////////////////////
async function getTrending(){
   let respons =await fetch ('https://api.themoviedb.org/3/trending/movie/week?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
       respons = await respons.json()
      console.log(respons.results);
      dispalyTrending(respons.results)
}
function dispalyTrending(arr) {
   let cartona = ""
   for (let i = 0; i < arr.length; i++) {
     
     cartona += `
      
      <div class="col-lg-4">
      <div class="card h-100 position-relative overflow-hidden">
          <img src="${"https://image.tmdb.org/t/p/w500/"+arr[i].poster_path}" class="card-img-top"
              alt="...">
          <div class="card-body position-absolute layer-contant">
              <h1 class="card-title text-center">${arr[i].original_title}</h1>
              <p class="card-text  fs-6 ">${arr[i].overview}</p>
              <p>Release Data : <span>${arr[i].release_date}</span></p>
              <div class=" reating ">${arr[i].vote_average}</div>
          </div>
      </div>
  </div>
      `
   }
   rowdata.innerHTML = cartona
}

//////////////////////////////////////////////Upcoming ///////////////////////////////////////

async function getUpcoming(){
   let respons =await fetch ('https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44')
       respons = await respons.json()
      console.log(respons.results);
      dispayUpcoming(respons.results)
}
function dispayUpcoming(arr) {
   let cartona = ""
   for (let i = 0; i < arr.length; i++) {
     
     cartona += `
      
      <div class="col-lg-4">
      <div class="card h-100 position-relative overflow-hidden">
          <img src="${"https://image.tmdb.org/t/p/w500/"+arr[i].poster_path}" class="card-img-top"
              alt="...">
          <div class="card-body position-absolute layer-contant">
              <h1 class="card-title text-center">${arr[i].original_title}</h1>
              <p class="card-text  fs-6 ">${arr[i].overview}</p>
              <p>Release Data : <span>${arr[i].release_date}</span></p>
              <div class=" reating ">${arr[i].vote_average}</div>
          </div>
      </div>
  </div>
      `
   }
   rowdata.innerHTML = cartona
}


function inputsValdtion() {
  if( valdationName()&&
      valdationEmail()&&
  valdationPhon()&&
  valdationAge()&&
  valdationPassword()&&
  valdationRePassword()
)
{
   alert("All Input is Done");
}else{
   alert("All Input is required") ;
}
}
 function valdationName() {
   return(/^[a-zA-Z ]$/.test(document.getElementById("nameInput").value))
 }
 function valdationEmail() {
   return  (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput")).value)
   
}
function valdationPhon() {
   return (/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/.test(document.getElementById("phonInput").value))
}
function valdationAge() {
   return (/^\S[0-9]{0,3}$/.test(document.getElementById("ageInput").value))
}
function valdationPassword() {
   return ( /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/.test(document.getElementById("passwordInput").value))
}
function valdationRePassword() {
   return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}








































// function allMoveis () {

//    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
//    .then(test=>test.json())
//    .then((rus)=>{
//       const data = rus.results
//       data.forEach(element => {
//          console.log(element);
//       });
//    })
   
// }
// allMoveis ()


// async function startApp(){

//    let moviesData = await getmovies() 
//    allMoveis (moviesData)
//    console.log(moviesData.results );

// }
// startApp()




