import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Table } from 'react-bootstrap';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);  
  const navigate = useNavigate(); 

  const handleProjectClick = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setFetchedData(response.data);  
      navigate("/Datapage");
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleDateSubmit = (e) => {
    e.preventDefault();
    alert("The date has been submitted");
  };

  return (
    <div className="app-container">
      <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <div style={{ backgroundColor: "wheat" }}>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhAPEQ8TFQ4REBcXGBcWFhUQFhYWFhUXFyAXFhYaHSggGRolHhUWITEhJyorLi4uGCAzODYsNygtLysBCgoKDg0OGxAQGy0mHyUtLS0tLS0tLS0tLSs2LS0tLSstLS0tLS0tLSstLS0tLSstLS0tLS0tLS0tLS0tKy0rLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQcEBQYIAwL/xABFEAACAgECAwQFBgoIBwAAAAAAAQIDBAURBhIhBxMxUSJBYXGBMjZygpGzFBUjM0JSVHSToRYXYnOSstHSNENTY6Kx8P/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBQb/xAAwEQEAAgIBAwEHAgUFAAAAAAAAAQIDESEEEjFRExQiMkFhcQWhFTORseEGQlKB8f/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEgAAEAAJAAQBIAAAAgCQAEAAAACQAEASBAACQAACuu2m6ynRsZ1ynFvIe/I5Re3dy8diNmXqt9saVG87IS/PXf47P8AUr5Yt2+6Pxhf/wBe7+JP/UbO63rKLM3J7t/lr/B/p2f6jl2Jv93pm3Jhh6c7Zvauurmk/KMY7t/yLfo9Teq7ebs/W8jPzrbndbF22SnsrJpR5m3ypJ+C32+BVuXlze0zvbvOxrXp/jW7EtslLvYc8OaTk+aHilv5xe/1GSpLT0t532ysPjHiGPDOhTyWuae6jCPhzTl4JvyXVv2Jk5nTTkydldqTzuP9TzLXJ5koJvpGtRrivYtlv9rZX3SwWz5J+rF/phqP7ff/AI2c3KPtb+ouMdRT/wCPv3+mNye1v6t3oHaXnadlx7+3v8fdc0ZKPOl63CSSe/se69x2LT9VlOovWfiXnRar6Yzi94yimn5prdMtehE7h57404is1XibItrumqVPkgozlFcsPR36P1tN/EqtPLzcuSbXnUtj2Y8QWYXFlcLbZyqyIup805SSk9nF9X480VH6wrPKXT5Ji/K9i16Ki+1XMtp41ujG2yMe7r6RnKK+QvUmVWnl53UWmMmtszss4vlgak8TIsbpyJLklOTlyW+CW7/Rl0XsaXmztbJdPl1PbP1dt2tWyp4MslCUoy72rrFuL+WvWiVvDR1EzFFadm+bdbxxhxldZKLlZunOck/yFnimyFZ5ZMNp74ja/S16Siu1DiCzM4ssrqtnGrHiqvRk4pyW8pPo/HeXL9UqtPLzuoyTN9R9Gr4P4it0riTHtsusdXPyzUpykuSfot7N+rdP4CJ5QxZJreNy9Elr1FOds2VZRxJSoWzivwZPaM5RW/eT9SZXeWHqZmLRpndiOTZkZGdz2TltGnbmlKe27t8N308Edo70szMztaxNtAAEOKYHJdqcUuBMrp66vv6yNvCjqI+CVKcMfObB/fKPvoFceXn0+aHpfkXkvsLnrahwnbDq/wCAcNrHi/ymVPl9vdw2lL+bgvrEbzwz9TbVdeqvezrhxcQ5uVGS9CGJNJ+Vtnowfw2k/giFY2y4Kd8y0GjZ89F1qnI22nRam17ntKPxXMviR8Srpbttv0XrxjxT+ItJoyK6o2xumkt5cq2cJTUk9n5fzLL37YfR9B0kdVaa71qNtdwZxrLiTVpUSxYVpVSnupcz6SittuVfrEaZO6dNHXfpsdNji/dvnXh2/dx/VX2IteVp8srBqzKJV2VwlCS2alFNNByaxPEvMepUrG1G+uPya7rIr3Rm0v5Iol5NuJmF2aprL0XsuqtT2tniV1w8+eyCjuvct5fVLd8PQvftxbVXwBpS1fivHqlFOuLc5p9U4QW+z9jfKviV1jcseGndeIa7WMKWi65dSm1Oi5qL9foy3jL7OVieJQvHZaYeiuG9VWt6Dj5K2/K1ptL1TXSUfhJSXwLYl6lLd1YlS/az8+Lv7ur/ACIrt5YOp/mOSnTKFMZuL5JuSi/U3HbdL2rdfaiKn6bWBqXFX9IezO2q2W+Xj2Uqb9c4c6Ss9/qft96J73Vptl78Wp8tF2Z/PzC+lZ9xYRr5V4P5kLz4i1SOi6Jfky/5VbaXnLwjH4yaXxLZ4ehe3bWZed9Ew5a5xBTS23K+9c79e0pc05fZzMqjmXmUr32iGZx3pS0firJpS2rcueCXRck1zbL2Jtr4CY1KWavbeYXT2eax+OuFKLG97IR7ufnzV+ju/etpfEsrPDfhv3UiVddtnzmp/dV95Mjfyy9V80Nh2F/8Rn/Ro/8Adwo70nmVtFjcAAAHJdqnzEyvfV9/WRt4UdR8kqT4Y+c+D++0ffQK48vPp80PTBc9dQfalq/414tsinvXjruo+W66yf8Aie31UVXnl5vUW7r/AIYHDXGGVwzRZDHjTtZJSk5wc5bpbJbqS6Lr9rORbSNM1qeGmzsp5ubZdJRU7Zym1FcseaT3ey3ey3bOK7TMzuXY36k9U7NMeD6ywstVy+hKE+R+70uX6py/NX1P+nMsTkms+df5/sxuCNdjw9rqvnGTrdcoS5erSk090vX1iivHftl9D1/Sz1GLtr53tZf9Zmm/r2/w5F/tavA/hHU+kf1bfROKMbXqbHjScp1rdwku7k+nTo/U303J1vFvDL1PSZen13x5edM+2VuZdOceWcrJykv1ZOTbXwe6KpfPW8y7HtG1KSw9OwP2fErnNf8AcnBJJrzUV/5k7ejR1FvFfRz/AA3xFfw1lztojW7Jw5G5xc9o7p9NpLbdpfYiMTpTTJNJ3D4a7q9uu6lLJtUFbNJPkTinyrZPZt9dtvsOTO3L3m07lZXYnq/Pj34Un1g+9h9GWykl7ns/rFlJa+ktxNZcr2s/Pi7+7q/yIjfyp6n+ZLoeC+HIcTdm1tL2VscqyVU3+jNQh4/2X4P3+wlEbhdixxfFpWeRRPEyJ1zi42Qk4yi/FNPqn8UVsetcOi7M/n3hfSs+4tO18rMHzw7bts1fu8OjCi+tku9n9GHSKfvlu/qE7zw0dXbiKqz0HWLdB1KOTSoO2MZJc8XJLmWzeya67br4lcTpkpeazuH14k4hv4kzI3XxrVkYcm8IuG8d21vu3vs2/tOzO3b3m87l2PYtq/4Pq92HJ+jfDnj9OHil7XF7/UJUlf0ttTNXy7a/nNT+6r7yYv5Oq+ZPY/rONo9+Y8i+upTjTy88lHm5Xbvtv47br7RSTprRWZ2sv+mmmft+P/EiT3DX7Wnq2un59WpYqtpsjZVLfaUXzRez2ez96aOpxMTG4ZANpDrnuPtMt1jhO/HpjzXTdey3Ud+W2En1fTwTOTHCrNWbVmIVfoXZ9qeJrmLbPHSrryapyfeVvaMbIyb2369EyuKztjrgvExwujUbLK8C2VMOe5Vy5I7qPNPZ7Jt9Et9i16Ft64UVPs51eyTboTlJttu2vq31bfpeZV2y873fJP0W/hcG6dj4lcHg40nCEYuUqa5Sk0kuaTa3bfjuyzthtjDTXhyXaHwA83uJ6fi1QlHmjZGCroTT2ak/BNrZr4kbV9FObBvXbDA4H4LzdPz7asvFTwsmpws/KQezj6UZLaW+6e+zXVb7nIr6pdJ7XBk744Z2b2Tp2t05jUfKcOZr6ya3+whOH7vp6frc6+On7sb+qa79sr/hy/3HPYfdP+OV/wCH7/4fbD7Oc3R8lZGNm19/X1inCUFLzjJ7v0X7jsYpjmEMn6tizV7MlJ1P38M3TODcbVNfszcmqcMjnU54r27tWJLeakvzkJNcy67btp+SsiN8vn8/SY65O6s7ieYchrXA+r6tq9+TLGXNbY5fna+i8EvlepJL4EZrO2C+HJa0zpYfCvBOLhaBRDJwseeTyb2SnXXbLmk29uZp7pb7fAnFYaseGsV5jlg8ecCVZ+ipYOJRXkwtjL8nCulzjs04uWy6dU/qi1eOEc2CJr8McuW4P4O1XQeJKMh467uMuWe1tfWua5X05uu2/Nt5xRGtZhTixZK33pl9oPBefrXFNt9FKlVKEEm5wj1jFJ9G9xasylnw3tfcQ67sy0W/QuHZU5EFCx3zltzRn6LjFJ7p+xkqxwvwUmlNS0vaXwLZrOTDKxIJ3v0bI7qHOkuk9303Xh7Vt5HLV2rz4Jt8VfLScD8D6hpPFmNkXUKNNcpuT7yEtt6pxXRPd9ZI5FZ2rxYbxeJmH54z4P1XX+Jb8hY67ty5a97K1tXBbLpzdN+stv7QtWZlzLiyXvM6dTwLwLTgaFtm4lFmTKyUn3kK7nGPSKipNPptHfZeuTJVquxYYivxRyyOL+C8TL0C2vGxMevKe3duFddMnNPm5VJJeKTQmqWTBE1nthX+j8DaxpWq05MMZc1Vil+dq6pPqvletbr4kIrMSy0wZKzE6dJ2m8J5vEGtVW49KlCOOovecIbS55PbZv2olaJlbnxWvbcOQ/q21X9mj/Fr/wBxHslT7vk9D+rbVf2aP8Wv/cOyXPd8notvs+0u7RuFace+PLbCVm63UvlWSkuq6eDRZWOG7DWa01Lojq1IACAGwDYCQAEASAAgBsAAkABGwAAAAAc3rfG+FomovHtlZ3sYptRhKaSl1XVf/dSu2StZ1LXh6HLlp31jj8vvpHFuHqtsIQtcbLI80I2RdcpJSlDon49YS6ePQlF4lHJ0eXHE2mOI4nTm8vjWhcT2W2Tl+BYa7uPKufnvt5t5JLxSjXOKftfmVzeO7ltjoLxgiIj4rc/iI/8AWzr7RdPsosnvdy1pOTdUl8qSikvN7vw8k/Il7WrPP6dniYjUc/d99J48wNUzlRCycbJJtKyEq0+VOT6vp4Jvr5CMlZnSOToM+OvdMcfaXxj2jadPMVUbLJbzUFNVy7vmbSXpP1btdfAe1rtL+HZ4ruYj+sMlccYL0azLdklVXb3TTg1Pn2T5VDxfR/yfkd7662h7lm74x65mNt/i3/hOPGxRlFTintJcslv5r1P2E4ZbRqdPrsEUh0AAAAAAAAAAAAAAAAAAAABAFNajTlT4ozcn8G1KPeWNRlRXKPNCHoLdyi901CLWxmmJ7pnl9LjnDGClO6nEfWf+/o/MOHcjinXb4wskli1Qh3lu8pOyMU+SUl+lzOe7Xh06eA7JtKXvWPpcNdx80zOo9PX8f3YdvDuXhUY9UsTKbjfZZZ3Nbsaa5YQcZJOO65JteyZzsmFnvWDLa1u6PERG51+WwzNLzNVwqKFXnvvctNvKg2q1XFrmlyxSjF96/Hx5PYdmtpiIZ6ZMGK1rTNeI/wBs+d+n34fbUdC1DVdRy1kRsnkY+O40ShX3VNibSkozSS5nCUtlv4t+R2aTMztynUdNjpSaeLT8W53Men7v1pVOoZLw8bHx8vHqq7uFylBVVNKW87N5JOUmmxHdxGtOZfd69972raZ3rU8/b7abLh7hRX8b5lttNscWi92VRnGUa52Tb9NJ9JJcu/TzidrT4p9FHUdXEdLStZjumNTrzpZJe8UAkAAAAAAAAAAAAAAAAAAAAAAB+LG1W2ustnsvDdgj7sDQdKjpGnKtdZuTnZL9eyb3lL7f5JHIjS3PmnLfc/iPw2R1UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z" width="180" height="75" alt="Taqanal Energy" />
          </div>
        </a>
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <form onSubmit={handleDateSubmit}>
            <label htmlFor="date" style={{ color: "ghostwhite" }}>Choose a date:</label>
            <input type="date" id="date" name="date" />
            <input className="datee" type="submit" />
          </form>
        </nav>
      </header>

      {/* Adding Routes */}
      <Routes>
        <Route path="/" element={
          <MainPage onProjectClick={handleProjectClick} />
        } />
        <Route path="/Datapage" element={<DataPage fetchedData={fetchedData} />} />
      </Routes>

      {/* Loading spinner */}
      {loading && (
        <div className="overlay">
          <div className="spinner-container">
            <Spinner animation="border" role="status" variant="light">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        </div>
      )}
    </div>
  );
};

const MainPage = ({ onProjectClick }) => (
  <div>
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center text-dark">
      <h1 className="display-4 fw-normal" style={{ color: "white" }}>
        <b><u>Taqanal Energy</u></b>
      </h1>
      <p className="fs-5" style={{ color: "white" }}>
        Taqanal Energy is powering the shift from fossil fuels and internal combustion engines through its Intelligent Energy Storage Management System which integrates the power of embedded intelligence in the battery with cloud applications.
      </p>
    </div>

    {/* Project Cards */}
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <ProjectCard
        title="Project 1"
        description="Smart Battery"
        details={[
          "Accurate Range Prediction",
          "Efficient Energy Management",
          "Proactive Maintenance Alerts",
          "Battery Health Monitoring"
        ]}
        onClick={() => onProjectClick('https://jsonplaceholder.typicode.com/posts?_limit=7')}
      />
      <ProjectCard
        title="Project 2"
        description="Battery Swapping"
        details={[
          "Reduced Downtime",
          "Extended Vehicle Life",
          "No Range Anxiety",
          "Optimized Charging Conditions"
        ]}
        onClick={() => onProjectClick('https://jsonplaceholder.typicode.com/posts?_limit=5')}
      />
      <ProjectCard
        title="Project 3"
        description="Fuel Replacement"
        details={[
          "Energy Independence",
          "Economic Savings",
          "Sustainability",
          "Health Improvements"
        ]}
        onClick={() => onProjectClick('https://jsonplaceholder.typicode.com/posts?_limit=8')}
      />
    </div>
  </div>
);

const ProjectCard = ({ title, description, details, onClick }) => (
  <div className="col">
    <div className="card mb-4 rounded-3 shadow-sm border-primary">
      <div className="card-header py-3 text-bg-primary border-primary">
        <h4 className="my-0 fw-normal">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">{description}</h1>
        <ul className="list-unstyled mt-3 mb-4">
          {details.map((detail, index) => <li key={index}>{detail}</li>)}
        </ul>
        <button type="button" className="w-100 btn btn-lg btn-primary" onClick={onClick}>Know About It</button>
      </div>
    </div>
  </div>
);


const DataPage = ({ fetchedData }) => (
  <div style={{ backgroundColor: "white", padding: "20px" }}>
    <h2>Fetched Data</h2>
    {fetchedData && fetchedData.length > 0 && (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </div>
);

export default App;
