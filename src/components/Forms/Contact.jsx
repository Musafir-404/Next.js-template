import { useState, useRef } from 'react';
import { ModalButton } from '../Modal';

export function PopupContactForm({ name }) {
  return (
    <ModalButton name={name}>
      <ContactForm />
    </ModalButton>
  );
}

export function ContactForm() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const form = useRef();

  const [projectType, setProjectType] = useState([]);
  const projectTypeOptions = [`Tableau`, `Bi Modernization`, `Embedded Analytics`, `Data Management`];

  const handleUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const data = {
      user_name: userInfo.name,
      user_email: userInfo.email,
      user_phone: userInfo.phone,
      project_type: projectType,
      message: message
    };

    // emailjs.send('service_bdhbpes', 'template_jzgsr2rw', data, '0fOubXLW0QFnf-shy').then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
      {/* user info */}
      <img src={'/assets/logo.png'} alt='logo' className='w-20 mb-5 self-center' />
      <h1 className='font-bold text-2xl mb-5 text-center'>Tell us more about your project</h1>
      {Object.keys(userInfo).map((key, index) => {
        return (
          <div key={index} className='my-1'>
            <label htmlFor='key' className='text-sm font-medium leading-6 text-gray-900'>
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </label>
            <input
              type='text'
              //placeholder={`Enter ${key}`}
              required={key === 'name' || key === 'email'}
              name={key}
              value={userInfo[key]}
              onChange={handleUserInfo}
              className='w-full border-0 py-1.5 px-3 text-gray-900 ring-1  placeholder:text-gray-400  sm:text-sm sm:leading-6'
            />
          </div>
        );
      })}

      {/* project type */}
      <div className='my-5'>
        <label htmlFor='projectType' className='font-bold'>
          Project Type: <span className='text-gray-500 font-medium '>(select all that apply)</span>
        </label>
        {projectTypeOptions.map((option, index) => {
          return (
            <div key={index} className='my-1'>
              <input
                type='checkbox'
                name='projectType'
                value={option}
                //checked={projectType.includes(option)}
                onChange={(e) => {
                  const { name, checked } = e.target;
                  if (checked) {
                    setProjectType([...projectType, option]);
                  } else {
                    setProjectType(projectType.filter((item) => item !== option));
                  }
                }}
                className='mr-1'
              />
              <label htmlFor='projectType'>{option}</label>
            </div>
          );
        })}
      </div>
      {/* tell us more */}
      <label htmlFor='tellUsMore' className='font-bold'>
        Tell us more:
      </label>
      <textarea
        id='tellUsMore'
        name='tellUsMore'
        rows='3'
        value={message}
        required
        onChange={(e) => setMessage(e.target.value)}
        className='w-full border-0 py-1.5 px-3 text-gray-900 ring-1  placeholder:text-gray-400  sm:text-sm sm:leading-6 my-4'
      />

      {/* submit */}
      <button type='submit' className='px-3 py-2 rounded-md mb-5 bg-sky-700 text-white border-none'>
        Submit
      </button>

      <p className='text-center '>
        Or email us at <br></br>
        <a href='mailto:info@datafieldconsulting.com' className='text-sky-700'>
          info@datafieldconsulting.com
        </a>
      </p>
    </form>
  );
}
