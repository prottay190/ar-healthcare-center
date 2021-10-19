import React from 'react';
import doctor1 from '../../../images/Doctors/img-1271328839-170667a.jpg';
import doctor2 from '../../../images/Doctors/img-1290682791-170667a.jpg';
import doctor3 from '../../../images/Doctors/img-1307543618-170667a.jpg';
import doctor4 from '../../../images/Doctors/portrait-smiling-handsome-male-doctor-man.jpg';
import Doctor from '../Doctor/Doctor';

const doctors =[
    {   id: 1,
        img: doctor3,
        name: 'Dr. Stive', 
        work: 'Dental',
    },
    {   id: 2,
        img: doctor4,
        name: 'Dr. Mark',
        work: 'Neurologist',
    },

    {   id: 3,
        img: doctor1,
        name: 'Dr. Mun',
        work: 'Traumatologist',
    },

    {   id: 4,
        img: doctor2,
        name: 'Dr. Teresa',
        work: 'Pediatric',
    }
]
const Doctors = () => {
    return (
        <div id="doctors" className="container m-5">
            <h2>Our Doctors</h2>
            <div className="row">
                {
                    doctors.map(doctor => <Doctor
                      key={doctor.id}
                      doctor ={doctor}
                    ></Doctor>)
                }
            </div>
            
        </div>
    );
};

export default Doctors;