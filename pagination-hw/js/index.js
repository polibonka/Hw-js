
import template from "../template/images.hbs";

const photos = document.querySelector(".images")
const loadMoreBtn = document.querySelector(".loadMore")

class ImagesApiService {
    constructor() {
        this.q = "",
        this.page = 1;
    }
    async getImages() {
        const param = new URLSearchParams({
            key: "49049631-469d09f2d52404bad7f37fd7b",  
            q: this.q,
            page: this.page,
            per_page: 15,
            image_type: "photo"
        });
    
        return fetch(`https://pixabay.com/api/?${param}`);
    }
    

    newPage() {
        this.page += 1;
        console.log("new page", this.page);
        
    }

}

const imagesTest = new ImagesApiService();

loadMoreBtn.addEventListener("click", (e) => {
    if(e.target.id === "loadMore"){
        imagesTest.newPage()
    }
} )

const renderImages = (images) => {
    const markUp = images.map((image, i) => {
      const params = {
          image: image.webformatURL,  
          title: image.tags,         
          id: i,
      }
      return template(params);
    });
  
    photos.insertAdjacentHTML("beforeend", markUp.join(""));
  };
  
const loadMore = () => {
    imagesTest.getImages()
     .then(response => response.json())
     .then((data) => {
        console.log(data.hits); 
        renderImages(data.hits);
     })
     .catch(err => console.log("Error loading images:", err));
};


loadMoreBtn.addEventListener("click", () => {
    imagesTest.newPage();
    loadMore();
});


