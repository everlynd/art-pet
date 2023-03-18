import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { fetchUsers, User } from './usersHelper';
import s from './Users.module.scss';
import { Paginator } from '../ui/Paginator/Paginator';
export const Users = () => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        fetchUsers().then((res) => {
            setUsers(res.data.users);
            setTotal(res.data.total);
        });
    }, []);
    return (
        <Box>
            <div className={s['users-grid-template']}>
                <div>User Id</div>
                <div>User Email</div>
                <div>User Created</div>
                <div>User Roles</div>
            </div>
            <div>
                {users
                    ? users.map((elem) => (
                          <div className={`${s['users-grid-template']} ${s['users__item']}`} key={elem.createdAt}>
                              <div>{elem.id}</div>
                              <div>{elem.email}</div>
                              <div>{elem.createdAt}</div>
                              <div className={s['roles']}>
                                  {elem.roles.map((role, index) => (
                                      <div key={Math.random()}>{role.value}</div>
                                  ))}
                              </div>
                          </div>
                      ))
                    : []}
            </div>
            <Paginator
                total={total}
                customEvent={(page: number) => {
                    fetchUsers(page).then((res) => {
                        setUsers(res.data.users);
                        setTotal(res.data.total);
                    });
                }}
            />
        </Box>
    );
};
