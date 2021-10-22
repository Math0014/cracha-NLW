const social_media_links = {
   github: 'Math0014',
   facebook: "profile.php?id=100009239418794",
   youtube: "math0014",
   instagram: "matheusquerino14"
         }
         
function change_social_media_links(){
   for(let li of social_links.children){
      const social = li.getAttribute('class')
               
         li.children[0].href = `https://${social}.com/${social_media_links[social]}`
               
   }
}
change_social_media_links()

function get_github_user_info(){
   const url = `https://api.github.com/users/${social_media_links.github}`
   
   fetch(url).then(reponse => reponse.json()).then(data => {
      bio.textContent = data.bio
      user_name.textContent = data.name
      profile.href.textContent = data.html_url
      login.textContent = data.login
      user_image.src = data.avatar_url
   })
}
get_github_user_info()