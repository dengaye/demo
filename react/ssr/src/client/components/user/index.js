import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { updateUsersByAction } from '../../../store/actions/user';

export default function UserPage() {
  const dispatch = useDispatch();
  const { userId, users } = useSelector((store) => ({
    userId: store.user.userId,
    users: store.user.users,
  }));

  const store = useSelector((store) => store);

  useEffect(() => {
    updateUsersByAction()(dispatch);
  }, []);

  return (
    <section>
      UserPage
     <h2>userId:  {userId || 0}</h2>
      <ul>
        <li>
          <Link to="/">to home page</Link>
        </li>
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar} /> &nbsp; &nbsp;
            first name: {user.first_name} &nbsp; &nbsp;
            last name: {user.last_name}
          </li>
        ))}
      </ul>
    </section>
  );
}
