import React, { useState } from 'react';

const App = () => {

    const [fullName, setFullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

     //   const value = event.target.value;
     //   const name = event.target.name;

        const {value,name} = event.target;

        setFullName((preValue) => {
          console.log(preValue);
      
          return {
            ...preValue,
            [name] : value,
        }; 
        
        });

    };

    const onSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <>
            <div className='main_div'>
                <form onSubmit={onSubmit}>    <div>
                    <h1>Hello {fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.email} </p>
                    <p>{fullName.phone} </p>

                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        name='fName'
                        onChange={inputEvent}
                        value={fullName.fname}
                    />
                    <br />


                    <input
                        type='text'
                        placeholder='Enter Your Lastname'
                        name='lName'
                        onChange={inputEvent}
                        value={fullName.lname}

                    />
                    <br />

                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        onChange={inputEvent}
                        value={fullName.email}

                    />
                    <br />
                    <input
                        type='number'
                        placeholder='Phone number'
                        name='phone'
                        onChange={inputEvent}
                        value={fullName.phone}

                    />
                    <br />

                    <button type='submit'>Submit</button>
                </div>
                </form>

            </div>
        </>
    );
};
export default App;