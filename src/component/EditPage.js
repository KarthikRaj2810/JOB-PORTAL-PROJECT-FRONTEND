// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getJobDetailsAction,
//   updateJobAction,
// } from "../redux/actions/jobAction";

// const EditJob = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const job = useSelector((state) => state.jobDetails); // Update this based on your Redux state structure

//   useEffect(() => {
//     dispatch(getJobDetailsAction(id));
//   }, [dispatch, id]);

//   const [updatedJob, setUpdatedJob] = useState({
//     title: job.title || "",
//     // Add other fields here (e.g., description, salary, location, category)
//     // Example: description: job.description || "",
//   });

//   const handleUpdate = () => {
//     dispatch(updateJobAction(id, updatedJob));
//     // Redirect or perform any other action after update
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedJob((prevJob) => ({
//       ...prevJob,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h2>Edit Job</h2>
//       {/* Render form fields for editing */}
//       <div>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={updatedJob.title}
//           onChange={handleInputChange}
//         />
//       </div>
//       {/* Add other fields here, similar to the example above */}
//       <button onClick={handleUpdate}>Update Job</button>
//     </div>
//   );
// };

// export default EditJob;
