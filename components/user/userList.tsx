/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';
import { daysRandom, cities } from '../data';
import { Modal } from '../util/modal';
import { useRouter } from 'next/router'

interface User {
    id: string;
    name: string;
    email: string;
}

const UserList = (props: any) => {

    const router = useRouter();
    const [users, setUsers] = useState<any>([]);
    const [openModal, setOpenModal] = useState(false);
    const [userSelect, setUserSelect] = useState<User | null>(null);
    const [name, setName] = useState('');

    useEffect(() => {
        props.actions.getUsers({});
    }, []);

    useEffect(() => {
        if (props.data) {
            setUsers(props.data.users);
        }
    }, [props.data]);

    useEffect(() => {
        if (props.dataUp) {
            setOpenModal(false);
            props.actions.getUsers({});
        }
    }, [props.dataUp]);

    const removeUser = () => {
        if (userSelect) {
            const data = {
                userId: userSelect.id,
                Name: userSelect.name,
                Email: userSelect.email,
                Blocked: true
            }
            props.actions.updateUser(data);
        }

    }

    const showConfirm = (user: User) => {
        setUserSelect(user);
        setOpenModal(true);

    }

    const search = (term:string) => {
        setName(term);
        if(term != ''){
            const userAux = users.filter((elem:any) => elem.name.toLowerCase().includes(term.toLowerCase()) );
            setUsers(userAux);
        }else{
            setUsers(props.data.users);
        }
        
    }

    return (
        <div style={{height: '70vh'}} className='overflow-hidden overflow-y-auto'>

            <table className="table-auto mt-10 w-full">
                <caption className="caption-top text-left font-medium text-2xl mb-10">
                    <div className='flex justify-between'>
                        <span>Usuarios</span>
                        <button
                            onClick={() => router.push('/user/new')}
                            disabled={props.isLoading}
                            data-modal-hide="popup-modal"
                            type="button"
                            className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none disabled:bg-gray-500 focus:ring-violet-300 font-mediumm rounded-3xl text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                        >
                            REGISTRO
                        </button>
                    </div>
                    <input
                        type='text'
                        value={name}
                        onChange={(e: any) => search(e.target.value)}
                        className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm focus:border-b focus:border-gray-700 outline-0 block w-full p-2.5 mt-3"
                        placeholder="Buscar"
                    />

                </caption>
                <thead>
                    <tr className="border-t border-b text-left px-8 py-4 h-9 text-xs font-bold text-gray-500 space-y-3.5">
                        <th  >USUARIO</th>
                        <th >NOMBRE</th>
                        <th >CORREO ELECTRÓNICO</th>
                        <th >CIUDAD</th>
                        <th >DIAS DE LA SEMANA</th>
                        <th >POSTS</th>
                        <th >ALBUMS</th>
                    </tr>
                </thead>
                <tbody >
                    {users && users.length > 0 ?
                        users.map((val: any, id: any) => (
                            !val.blocked ?
                                <tr key={id} className="border-b px-8 py-4 h-20 text-base font-normal text-gray-700 space-y-3.5 group">
                                    <td className=''>{val.name}</td>
                                    <td >{val.name}</td>
                                    <td >{val.email}</td>
                                    <td >{cities[Math.floor(Math.random() * 5)]}</td>
                                    <td >{daysRandom[Math.floor(Math.random() * 7)]}</td>
                                    <td >{val.numPosts}</td>
                                    <td >{val.numAlbums}</td>
                                    <td className='w-7'>
                                        <button onClick={() => router.push(`/user/${val.id}`)} className={"cursor-pointer hidden group-hover:block"} type='button'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 5C6.612 5 2 10.336 2 12C2 13.742 5.546 19 12 19C18.454 19 22 13.742 22 12C22 10.336 17.388 5 12 5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z" fill="#2F2F38" />
                                            </svg>
                                        </button>
                                        <button onClick={() => showConfirm(val)} className={"cursor-pointer hidden group-hover:block"} type='button'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 4H3C2.44772 4 2 4.44772 2 5V7C2 7.55228 2.44772 8 3 8H21C21.5523 8 22 7.55228 22 7V5C22 4.44772 21.5523 4 21 4Z" fill="#2F2F38" />
                                                <path d="M4 10V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V10H4ZM15 13C15 13.2652 14.8946 13.5196 14.7071 13.7071C14.5196 13.8946 14.2652 14 14 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13V12C9 11.7348 9.10536 11.4804 9.29289 11.2929C9.48043 11.1054 9.73478 11 10 11C10.2652 11 10.5196 11.1054 10.7071 11.2929C10.8946 11.4804 11 11.7348 11 12H13C13 11.7348 13.1054 11.4804 13.2929 11.2929C13.4804 11.1054 13.7348 11 14 11C14.2652 11 14.5196 11.1054 14.7071 11.2929C14.8946 11.4804 15 11.7348 15 12V13Z" fill="#2F2F38" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr> : null
                        )) : null}
                </tbody>
            </table>

            <Modal
                open={openModal}
                hideModal={() => setOpenModal(false)}
                userName={userSelect?.name}
                onAction={removeUser}
            />


        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isLoading: state.user.isLoading,
    error: state.user.error,
    data: state.user.data,
    dataUp: state.user.dataUp
})

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(userAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);