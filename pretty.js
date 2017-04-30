let res = {
  stop1: {
    'bottomLeftLon': -28.315652604651756,
    'time': '2017-04-26T16:30:30.555Z',
    'bottomLeftLat': -61.07187211865161,
    'topRightLon': -27.115652604651753,
    'satellite': 'TERRA',
    'topLeftLat': -59.87187211865161
  },
  stop2: {
    'bottomLeftLon': -28.315652604651756,
    'time': '2017-04-26T16:30:30.555Z',
    'bottomLeftLat': -61.07187211865161,
    'topRightLon': -27.115652604651753,
    'satellite': 'TERRA',
    'topLeftLat': -59.87187211865161
  },
  stop3: {
    'bottomLeftLon': -28.315652604651756,
    'time': '2017-04-26T16:30:30.555Z',
    'bottomLeftLat': -61.07187211865161,
    'topRightLon': -27.115652604651753,
    'satellite': 'TERRA',
    'topLeftLat': -59.87187211865161
  },
  stop4: {
    'bottomLeftLon': -28.315652604651756,
    'time': '2017-04-26T16:30:30.555Z',
    'bottomLeftLat': -61.07187211865161,
    'topRightLon': -27.115652604651753,
    'satellite': 'TERRA',
    'topLeftLat': -59.87187211865161
  }

}

const vm = new Vue({
  el: '#app',
  data: {
    stopPoints: {}
  },
  created () {
    setTimeout(function () {
      for (let prop in res) {
        vm.stopPoints[prop] = res[prop]
      }
    })
  }
})
