const vm = new Vue({
  el: '#app',
  data: {
    stop1: {
      city: '紐約市',
      img: 'https://gibs.earthdata.nasa.gov/image-download?TIME=2015172&extent=-75.22668580843734,39.04868871773263,-71.71106080843734,42.56431371773263&epsg=4326&layers=MODIS_Aqua_CorrectedReflectance_TrueColor,Coastlines,Reference_Labels&opacities=1,1,1&worldfile=false&format=image/jpeg&width=400&height=400',
      speechConent: '紐約是美國人口最多的城市，世界最大的城市之一，紐約都會區的核心，一座對全球的經濟、商業、金融、媒體、政治、教育和娛樂具有極大影響力的國際大都會。'
    }
  }

})
$(document).ready(function () {
  let url = `http://api.voicerss.org/?key=b9ee185dd0394b7aa4e062e891e28b15&hl=zh-tw&r=6&src=`
  let speechContent = `紐約是美國人口最多的城市，世界最大的城市之一，紐約都會區的核心，一座對全球的經濟、商業、金融、媒體、政治、教育和娛樂具有極大影響力的國際大都會。`
  const audioElement = document.getElementById('audio')
  audioElement.setAttribute('src', url + speechContent)

  $('#look-earth').on('click', function () {
    audioElement.play()
  })
})
