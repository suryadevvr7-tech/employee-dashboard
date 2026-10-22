import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  designation: "",
  location: "",
  salary: "",
};

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "designation", label: "Designation", type: "text" },
  { name: "location", label: "Location", type: "text" },
  { name: "salary", label: "Salary", type: "number" },
];

function EmployeeForm() {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSubmitted(false);
  };

  // No data is posted to a server (as per the assignment) - we only log it.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee form data:", values);
    setSubmitted(true);
    setValues(initialValues);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h2 className="mb-4">Employee Form</h2>

            {submitted && (
              <div className="alert alert-success" role="alert">
                Employee details saved (check the browser console).
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {fields.map((f) => (
                <div className="mb-3" key={f.name}>
                  <label htmlFor={f.name} className="form-label">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    min={f.type === "number" ? "0" : undefined}
                    className="form-control"
                    id={f.name}
                    name={f.name}
                    value={values[f.name]}
                    onChange={handleChange}
                    required
                  />
                </div>
              ))}

              <div className="d-flex gap-2 mt-4">
                <button type="submit" className="btn btn-primary">
                  Save employee
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => navigate("/")}
                >
                  Back to dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeForm;
