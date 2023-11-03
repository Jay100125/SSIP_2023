import React from 'react';
import "./../jobcard/Jobcard"
import Jobcard from './../jobcard/Jobcard';

const Jobs = () =>{
    const jobData = [
        {
            category: "Apperal Products",
            title:"Tailor",
            location:"Vadodara",
            time:"Full time",
            date:"15 january 2024",
            employer:"Ranimal",
            logo:"https://images-platform.99static.com//T66QLsp-auGvAK7LkDZeuUF66nU=/230x0:1020x790/fit-in/500x500/99designs-contests-attachments/110/110230/attachment_110230544"
        },
        {
            category: "Food Products",
            title:"Production Worker",
            location:"Ahmedabad",
            time:"Full time",
            date:"1 january 2024",
            employer:"Gopipa",
            logo:"https://i.pinimg.com/550x/c0/8f/76/c08f7669ba9d3fc6d929ab02b88b8c75.jpg"
        },
        {
            category: "Food Products",
            title:"Packaging Operator",
            location:"Surat",
            time:"Full time",
            date:"25 December 2023",
            employer:"Gopal",
            logo:"https://venngage-wordpress.s3.amazonaws.com/uploads/2019/04/Evergreen-Business-Logo.png"
        },
        {
            category: "Textile",
            title:"Machine operator",
            location:"Kutch",
            time:"Full time",
            date:"25 November 2023",
            employer:"Levi",
            logo:"https://media.istockphoto.com/id/1129780703/vector/vector-design-template-for-interior-furniture-shops-decor-items-and-home-decoration-abstract.jpg?s=612x612&w=0&k=20&c=ROm0-BKJS2gvw5b74e0p2vmw4xXMW6xLCcI00BCeDpI="
        },
        {
            category: "Metal Products",
            title:"Technician",
            location:"Ahmedabad",
            time:"Full time",
            date:"25 december 2023",
            employer:"Cross",
            logo:"https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg"
        },
        {
            category: "Food Products",
            title:"Packaging Operator",
            location:"Ahmedabad",
            time:"Full time",
            date:"15 November 2023",
            employer:"Eren's",
            logo:"https://img.freepik.com/premium-vector/catering-quality-food-design-logo_187482-593.jpg"
        },
        {
            category: "Textile",
            title:"Machine operator",
            location:"Ahmedabad",
            time:"Full time",
            date:"1 december 2023",
            employer:"Cross",
            logo:"https://images-platform.99static.com//anrImbzLXv_9jjVA4kXQZQyq0GA=/725x74:1225x574/fit-in/590x590/99designs-contests-attachments/111/111190/attachment_111190748"
        },
        {
            category: "Fabrication",
            title:"Welder",
            location:"Ahmedabad",
            time:"Full time",
            date:"1 december 2023",
            employer:"Phill Knight",
            logo:"https://t3.ftcdn.net/jpg/03/04/25/90/360_F_304259040_gnGWtdMYheatj3yFayeGUQJpmmYzpHJM.jpg"
        }
    ]
    return (
        <div className="App">
          <div className="job-cards-container">
            {jobData.map((job, index) => (
              <Jobcard key={index} category={job.category} title={job.title} location={job.location} time={job.time} date={job.date} employer={job.employer} logo={job.logo} />
            ))}
          </div>
        </div>
      );
}

export default Jobs;
