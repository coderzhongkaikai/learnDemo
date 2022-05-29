let likeList = localStorage.getItem('likeList')
var initList = ['food-1', 'food-2', 'food-3', 'food-4', 'Accommodation-1', 'Accommodation-2', 'Accommodation-3', 'Accommodation-4', 'Accommodation-5']
console.log(likeList, 'list')
if (!likeList) {
    document.querySelector('.like-content').style.display = 'none'
} else {
    let intersection = initList.filter(v => !likeList.includes(v))
    console.log(intersection, 'new-list')
    intersection.forEach( function(item) {
        document.querySelector('.'+ item).style.display = 'none'
    })
}