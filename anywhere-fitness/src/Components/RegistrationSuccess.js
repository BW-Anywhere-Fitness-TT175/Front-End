import React from 'react';

const RegistrationSuccess = (props) => {
  const { role_id, first_name } = props;
  return (
    <div className='success'>
      <h1>
        {first_name}, {role_id}, successfully registered!
      </h1>
    </div>
  );
};

export default RegistrationSuccess;
