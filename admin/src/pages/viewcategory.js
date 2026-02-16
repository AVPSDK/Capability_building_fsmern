import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function ViewCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/viewcategory')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <>
      <div className="pagetitle">
        <h1>View Category</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active">View Category</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Category List</h5>

                {/* Table with stripped rows */}
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Category Name</th>
                      <th scope="col">Image</th>
                      <th scope="col">Description</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category, index) => (
                      <tr key={category.category_id}>
                        <th scope="row">{category.category_id}</th>
                        <td>{category.category_name}</td>
                        <td>
                          <img 
                            src={`http://localhost:1337/public/${category.category_img}`} 
                            alt={category.category_name} 
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                          />
                        </td>
                        <td>{category.description}</td>
                        <td>
                          <button type="button" className="btn btn-primary btn-sm me-2"><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-danger btn-sm"><i className="bi bi-trash"></i></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End Table with stripped rows */}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewCategory;
