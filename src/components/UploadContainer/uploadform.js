import React from 'react'
// import { createVideo } from '../../Functions/apiFunctions';
import './styles.css'
const UploadVideoForm = () => {
    const [values, setValues] = React.useState({
        title:"",
        description:"",
        video:"",
        fomrData:""
    });
    const {title, description,formData} = values;
    const handleChange = name => event => {
        const value = name  === 'video' ? event.target.files[0] : event.target.value;
        formData.set(name,value);
        setValues({...values,[name]:value});
    } 

    // React.useEffect(()=>{ 
    //     setValues({...values, formData: new FormData()})
    // },[])

    const clickSubmit = (e) => {
        e.preventDefault();
        setValues({...values})
        console.log(formData);
        // createVideo(formData)
        // .then(data => {
        //     if(!data){
        //         console.log("Failed");
        //         setValues({...values});
        //     }else{
        //         console.log("Success")
        //     }
        // })
    }
     
    return (
        <div className="UploadVideoContainer">
        <form onSubmit={clickSubmit}>
            <div className="titleContainer">
                <label>Title:</label>
                <input onChange={handleChange('title')} name="title" type="text" placeholder="Title..." value={title} />
            </div>

            <div className="descriptionContainer">
                <label>Description:</label>
                <textarea onChange={handleChange('description')} name="description" value={description} placeholder="Description..." />
            </div>
            <div className="bottomSection">
                <div className="thumbnailContainer">
                    <input
                    type="file"
                    name="video"
                    accept="video/mp4"
                    onChange={handleChange("video")}
                    id="uploadThumbnail"
                    style={{ display: "none" }}
                    />
                    <div id="uploadThumbnail">
                        <label htmlFor="uploadThumbnail"> - Select - </label>
                    </div>
                </div>
                <div className="uploadButtonContainer">
                    <button type="submit"> Upload Video</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default UploadVideoForm
