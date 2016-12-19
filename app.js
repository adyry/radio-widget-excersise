const stations = ($scope) => {
  $scope.active = -1;
  $scope.toggle = (index, current) => {
    if (index === current) {
      $scope.active = -1;
    }
    else {
      $scope.active = index;
    }
  }
  $scope.activated = (id, active) => {
    if (id === active) 
      return true
    else
      return false
  }
  $scope.playing = () => {
    if ($scope.active === -1)
      return false
    else
      return true
  }
  $scope.stationslist = [
    {
      name: 'Putin FM',
      freq: '106.6',
      image: 'https://i.imgflip.com/11pyhk.jpg'
    },{
      name: 'Dribble FM',
      freq: '89.6',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/86/Geogaddi.jpg'
    },{
      name: 'Doge FM',
      freq: '120.6',
      image: 'https://i.redd.it/wup1sjd2cjix.jpg'
    },{
      name: 'Ballads FM',
      freq: '120.6',
      image: 'https://imgflip.com/s/meme/Look-At-All-These.jpg'
    },{
      name: 'Maximum FM',
      freq: '120.6',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Aphex_Twin_-_Syro_main_press_photo.jpg/220px-Aphex_Twin_-_Syro_main_press_photo.jpg'
    }
  ]
}

angular
  .module('radioApp', []);
angular
  .module('radioApp')
  .controller('radioCtrl', ['$scope', stations])