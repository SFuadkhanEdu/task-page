const toggle_menu = document.querySelector('.toggle_menu_btn')
const close = document.querySelector('.close')

toggle_menu.addEventListener('click', () => {
    document.querySelector('.ul_div').style.visibility = 'visible'

  document.querySelector('.ul_div').style.left = "0px"
  document.querySelector('.ul_div').style.opacity = "1"

})

close.addEventListener('click', () => {
  document.querySelector('.ul_div').style.left = "100%"
  setTimeout(
    () => {
        document.querySelector('.ul_div').style.visibility = 'hidden'
        document.querySelector('.ul_div').style.left = "0px"
        document.querySelector('.ul_div').style.opacity = "0"

    }
  , 500);
})