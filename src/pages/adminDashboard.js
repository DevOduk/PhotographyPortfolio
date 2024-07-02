import { useEffect, useState } from "react";

    // -------------------COOKIES FOR LOGGING IN ADMIN AND SIGNING UP ----------------------//
    const expiryDate = new Date();
    expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    
    
    
    

    document.cookie = `Language=${navigator.language};`;
    document.cookie = `serviceProvider=${navigator.userAgent};`;
    
    
    
    
    function getCookies() {
        const cookies = document.cookie.split("; ");
        const cookiesObject = {};
    
        cookies.forEach(function(cookie) {
            const parts = cookie.split("=");
            const key = parts[0];
            const value = parts.slice(1).join("="); // Join remaining parts as the value may contain "="
            cookiesObject[key] = value;
        });
        return cookiesObject;
    }
    
    const cookies = getCookies();
    
 










function AdminDashboard() {
    const [imagePreviews, setImagePreviews] = useState([]);
    
    const convertImages = (e) => {
        const files = Array.from(e.target.files);

        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();

                reader.onload = (event) => {
                    resolve(event.target.result);
                    //console.log("Item = ", event.target.result, "yes")
                };

                reader.onerror = (error) => {
                    reject(error);
                };

                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises)
            .then((imagesto64Array) => {
                setImagePreviews(imagesto64Array);
                console.log("Results", imagesto64Array[0])
            })
            .catch((error) => {
                console.error('Error reading files:', error);
            });
    };









    const setDate = "Null";
    document.title = "A-codes Admin | Dashboard";
    

    const [category, setCategory] = useState('');
    const [images, setImages] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        
        fetch('http://localhost:7000/postImage', {
                method: 'POST',
                crossDomain: true,
                headers: {
                    "Access-Cpntrol+Allow-Origin": "*",
                    accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    base64: images
                })
            }).then((res) => res.json()).then((data) => console.log(data));
    
        const formData = new FormData();
        formData.append('category', category);
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }

    
        //try {
        //    const response = await fetch('http://localhost:7000/postImage', {
        //        method: 'POST',
        //        body: formData
        //    });
    //
        //    if (!response.ok) {
        //        throw new Error('Failed to add image data to the database');
        //    }
    //
        //    console.log('Image data added successfully!');
        //    setCategory('');
        //    setImages([]);
        //} catch (error) {
        //    console.error('Error adding image data:', error);
        //}
    };
    
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };
    
    





    const handleLoginDataSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const PIN = formData.get("PIN");
    
        try {
            const response = await fetch(`/getAdmin?username=${username}&PIN=${PIN}`);
            if (!response.ok) {
                throw new Error("Failed to fetch admin data");
            }
            const data = await response.json();
            if (data.error) {
                // Display error message if login fails
                setError(data.error);
            } else {
                // Login successful, handle admin data
                document.cookie = `adminId=${data._id};`;
                document.cookie = `adminName=${data.username};`;
                window.location.reload();
                console.log("Admin data:", data.username, data);
            }
        } catch (error) {
            // Handle errors from fetch request
            console.error("Error fetching admin data:", error);
            setError("Invalid userName or PIN!");
        }
    };
    
    
    const [error, setError] = useState("");
    


    function clearCookies() {
        if (window.confirm("Are you sure you want to log out?!")) {
            document.cookie = "";
            
            
            
            document.cookie = "adminId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}";
            document.cookie = "adminName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}";

            window.location.reload();
          } else {
            // Do nothing
          } 
    }















  return (
    <>
            {cookies.adminId && cookies.adminName ? (
                <div className="mainContainer">
                    <div className="navigation">
                        <ul>
                            <li>
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="shield-checkmark-outline"></ion-icon>
                                    </span>
                                    <span className="title company"> Admin </span>
                                </a>
                            </li>
                
                            <li className="hovered">
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="home-outline"></ion-icon>
                                    </span>
                                    <span className="title">Dashboard</span>
                                </a>
                            </li>
                
                            <li className="">
                                <a href="#">
                                    <span className="icon">
                                        <ion-icon name="home-outline"></ion-icon>
                                    </span>
                                    <span className="title">Blogs</span>
                                </a>
                            </li>
                        </ul>
                        <div className="time">
                            <div className="icon">
                                <ion-icon name="time-outline"></ion-icon>
                            </div>
                            <div className="day">day</div>
                        </div>
                    </div>
                
                
                
                    <div className="main">
                        <div className="topbar">
                            <div className="toggle">
                                <ion-icon name="menu-outline"></ion-icon>
                            </div>
                
                            <div className="user">
                                <div>
                                    <img src="/media/images/Sample_User_Icon.png" alt="" />
                                    {cookies.adminName}/_id:{cookies.adminId}
                                </div>
                                <div className="midline"></div>
                                <div title="You are not Signed in!" onClick={clearCookies}>
                                        <span className="icon">
                                            <ion-icon name="log-out-outline"></ion-icon>
                                        </span>
                                        <span className="title">Sign out</span>
                                </div>
                            </div>
                        </div>
                        <div className='mainWraperadmin'>
                
                
                        <div className="cardBox container">
                            <div className="card">
                                <div className="onlinedot"></div>
                                <div>
                                    <div className="numbers peopleonline">675</div>
                                    <div className="cardName">Page visits</div>
                                </div>
                
                                <div className="iconBx">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <div className="numbers">974</div>
                                    <div className="cardName">Downloads</div>
                                </div>
                
                                <div className="iconBx">
                                    <ion-icon name="cart-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                
                            <table className='container analyticsTable'>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Website</th>
                                        <th>Status</th>
                                    </tr>
                                    <tr>
                                        <td>A-codes Photography</td>
                                        <td><a href='https:www./A-codes-photography.vercel.app'>A-codes-photography.vercel.app</a> </td>
                                        <td>Active</td>
                                    </tr>
                                </tbody>
                            </table> 
                
                
                        <div className="addImage">
                        <form className='container' id='container' onSubmit={handleSubmit}>
                            <h2>Add Photos</h2>
                            <label htmlFor="category" className="form-label">Select category</label>
                                <select className="form-select form-select-lg mb-4" required name="category" aria-label=".form-select-lg example" value={category} onChange={(e) => setCategory(e.target.value)}>
                                  <option value="" defaultValue> Select category</option>
                                  <option value="City/Urban Photography">City/Urban Photography</option>
                                  <option value="Landscape Photography">Landscape Photography</option>
                                  <option value="Cars/Vehicles Photography">Cars/Vehicles Photography</option>
                                  <option value="Events/Wedding Photography">Events/Wedding Photography</option>
                                  <option value="People/Humanity Photography">People/Humanity Photography</option>
                                </select>
                                    <code>Can't see a category? Create one here.</code><br/><br/>
                            <div className="mb-3">
                              <label htmlFor="images" className="form-label">Submit image file to add</label>
                              <input className="form-control" type="file" id="formFileMultiple" name="images" accept="image/*" multiple onChange={convertImages} required/>
                              <div className='imagesPreview'>
                                {imagePreviews.map((dataURL, index) => (
                                    <img key={index} src={dataURL} alt={`Image Preview ${index}`} />
                                ))}
                              </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dateInput" className="form-label">Date</label>
                                <input type="date" className="form-control" id="dateInput" value={setDate} placeholder="name@example.com" readOnly/>
                            </div>
                            <button className='btn btn-success upload'>Upload</button>
                        </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
            ) : 
                <div className="Login">
                    <form className="formContainer" style={{ width: "fit-content", position: "relative" }} onSubmit={handleLoginDataSubmit}>
                        <img src='/media/images/Sample_User_Icon.png' alt='Admin Login.jpg'/>
                        <h1>Admin Login</h1>
                        <label htmlFor="username">Username</label>
                        <div style={{ width: "fit-content", position: "relative" }}>
                            <input type="text" placeholder="Enter username" name="username" required />
                        </div>
                        <label htmlFor="PIN">PIN</label>
                        <div style={{ width: "fit-content", position: "relative" }}>
                            <input type="password" placeholder="Enter PIN" name="PIN" maxLength="6" minLength="6" required />
                            <button className="submitBtn" type="submit"><ion-icon name="arrow-forward-outline"></ion-icon></button>
                        </div>
                    </form>
                    {error && <div className="error-message">{error}</div>}
                    <p><a href="#">I forgot my PIN</a> </p>
                </div>
            }
    </>
  )
}

export default AdminDashboard;


//<div className="Login bg-black">
//    <button type="submit"><ion-icon name="help-outline"></ion-icon></button>
//    <h2>Access Denied! Not an Admin.</h2>
//    <p><a href="#">Should't be seeing this? Find Assistance!</a> </p>
//</div>
