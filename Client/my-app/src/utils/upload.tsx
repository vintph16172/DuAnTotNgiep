import axios from "axios";



export const uploadImage = async (imgPost:any) => {

    // const CLOUDINARY_PRESET = "longchanhthon";
    // const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/chanh-thon/image/upload";

    const CLOUDINARY_PRESET = "ypn4yccr";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/vintph16172/image/upload"

    let imgLink = "";

    const file =  imgPost?.files[0];
    console.log(file);
    
    if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset",CLOUDINARY_PRESET);
        // call api để upload ảnh lên
        const {data} = await axios.post(CLOUDINARY_API_URL, formData, {
            headers:{
                "Content-Type": "application/form-data",
            },
        });
        imgLink = data.url
    }
    return imgLink
}

export const changeImage = (imgPost:any, imgPreview:any) => {
    if (imgPost) {
        imgPost.addEventListener("change", async (e:any) => {
             // handle sự kiện change để xem ảnh trên local
             if (imgPreview) {
                imgPreview.src = await URL.createObjectURL(e.target.files[0])
             }
        })
    }
}