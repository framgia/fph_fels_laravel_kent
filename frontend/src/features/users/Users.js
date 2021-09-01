import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStudents } from './usersSlice';
import SpinnerTemplate from '../../components/SpinnerTemplate';
import defaultProfile from '../../images/defaultProfile.png';

const Users = () => {
  const id = localStorage.getItem('id');
  const dispatch = useDispatch();
  const { status, students } = useSelector((state) => state.users);
  const studentsList = students.students;

  useEffect(() => {
    dispatch(getStudents());
  }, [ dispatch ]);

  const UsersDetails = () => {
    if(status === 'loading' || status === null) {
      return (
        <SpinnerTemplate />
      );
    } else {
      return (
        <tbody>
          {
            studentsList.map((student) => (
              <tr key={student.id} className="text-center">
                <td className="text-center align-middle">
                  <img 
                  width={50} 
                  heigh={50} 
                  className="rounded-circle" 
                  src={student.thumbnail !== null ? process.env.REACT_APP_THUMBNAIL + student.thumbnail : defaultProfile} 
                  alt="Avatar">
                  </img>
                </td>

                <td className="align-middle">
                  <Link className="text-dark" to={id === `${student.id}`? '/profile' : `/users/${student.id}`}>{student.name}</Link>
                </td>
                <td className="align-middle">{student.username}</td>
                <td className="align-middle">{student.email}</td>
              </tr>
            ))
          }
        </tbody>
      );
    }
  };

  return (
    <UsersDetails />
  );
};

export default Users;
