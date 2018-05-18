// call xml object
const request = new XMLHttpRequest();

//set container div
const container = document.getElementById('app');


// api params
const params = {
    key : '9003161-2c93bc03ace4f4149ca34efd1',
    query : 'puppies',
    per_page : 10,
}

// https://pixabay.com/api/?key=9003161-2c93bc03ace4f4149ca34efd1&q=yellow+flowers&image_type=photo
// api call
request.open('GET', 'https://pixabay.com/api/?key=' + params.key + '&q=' + params.query  + '&per_page=' + params.per_page, true);

// main call
request.onload = function(){
    // parse data
    const data = JSON.parse(this.response);
    // loop through data 
    if (request.status >= 200 && request.status < 400) {
        data.hits.forEach(image => {
        
            // mark up for image
            const markup =  `
            <div class="swiper-slide" id="image-item">
                <div class="image_holder" style="background-image:url(${image.largeImageURL})">
                    <img src="${image.largeImageURL}" class="pseudo-img" alt="">
                </div>
                <div class="overlay">
                    <div class="image_content">
                    <div class="user">
                        <label><i class="fa fa-user"></i></label>
                        <span>${image.user}</span>
                    </div>
                    <ul>
                        <li>
                            <label><i class="fa fa-heart"></i></label>
                            <span>${image.likes}</span>
                        </li>
                        <li>
                        <label><i class="fa fa-star"></i></label>
                        <span>${image.favorites}</span>
                        </li>
                        <li>
                        <label><i class="fa fa-arrow-circle-o-down"></i></label>
                        <span>${image.downloads}</span>
                        </li>
                    </ul>
                    <div class="comments">
                        <ul>
                            <li> <a href="#">leave a comment <i class="fa fa-plus"></i></a></li>
                        </ul>
                    
                    </div>
                </div>
                </div>
            </div>
            `;
    
            // gets html element container for slides
            var grid = document.getElementById('items');
            grid.insertAdjacentHTML('beforeend', markup);
            
    
            // to do add modal for commments
            //     const modalContent = `
            //     <!-- The Modal -->
            //     <div id="myModal" class="modal">
            //            <!-- Modal content -->
            //            <div class="modal-content">
            //                <span class="close">&times;</span>
            //                  <div class="comments"></div>
            //                 </div>
            //                </div>
            //            </div>
            //    </div>
    
                // `;
            
        });
      } else {
        console.log('something went wrong');
      }
   
}
// send request
request.send();
