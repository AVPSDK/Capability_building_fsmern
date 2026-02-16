import React from "react";
import Axios from 'axios';
import Swal from 'sweetalert2';

function AddCategory(){
 
             
  function categoryadd() {
    const category_name = document.getElementById("category_name").value;
    const image = document.getElementById("image").files[0];
    const description=document.getElementById("description").value;
    
    if (!category_name || !image || !description){

      Swal.fire({
          icon:'error',
          title:'oops...',
          text:'please fill all required fields.',
        });
        return;
    }
        
            
    const formData=new FormData();
    formData.append("category_name",category_name);
    formData.append("image",image);
    formData.append("description",description);
    

    Axios.post(`http://localhost:1337/api/addcategoryprocess`,formData,{
      headers:{
        'Content-Type':'multipart/form-data',
      },
    }).then((response) =>{
      if (response.data.message){
    
        Swal.fire({
          icon:'success',
          title:'success',
          text:response.data.message ||'category inserted succesfully',
          confirmButtonText:'OK'

        }).then(() => {
          window.location="/viewcategory";
     });
    
    }

    });
  }
  
  
    return(
        <>
        <br></br>
            <div class="container">
            <div class="page-inner">
           <div
              class="d-flex align-items-left align-items-md-center flex-column flex-md-row pt-2 pb-4">
              <div>
                <h3 class="fw-bold mb-3">Add Category</h3>
            
              </div>
           
            </div>
        <div class="row">
          <div class="col-md-10">
                <div class="card">
                  <div class="card-header">
                    <div class="card-title">Add Category</div>
                  </div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-12 col-lg-6">
                     
                         <div class="form-group">
                          <label for="email2">Category Name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="category_name"
                            name="category_name"
                            placeholder="Enter Category"
                          />
                   
                        </div>
                        <div class="form-group">
                          <label for="password">Category Image</label>
                          <input type="file" id="image" name="image" class="form-control"></input>
                      
                        </div>
                        <div class="form-group">
                          <label
                            for="inlineinput"
                            class="col-md-3 col-form-label"
                            >Description</label>
                          
                            <textarea   
                              class="form-control"
                              id="description"
                              name="description"
                              placeholder="Enter Description.."
                            ></textarea>
                         
                        </div>
                        </div>
                        </div>
                  </div>
                  <div class="card-action">
                    <button type="submit" name="submit" class="btn btn-success" onClick={categoryadd}>Submit</button>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
        </>

    );
}
export default AddCategory;