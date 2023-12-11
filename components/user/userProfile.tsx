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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [noFound, setNoFound] = useState(false);
    const [days, setDays] = useState([
        { day: 'Lun', sel: false },
        { day: 'Mart', sel: false },
        { day: 'Miérc', sel: true },
        { day: 'Juev', sel: false },
        { day: 'Vier', sel: true },
        { day: 'Sáb', sel: false },
        { day: 'Dom', sel: false },
    ])

    useEffect(() => {
        if (props.id) {
            props.actions.getUserById({ userId: props.id });
        }
    }, [props.id]);

    useEffect(() => {
        if (props.data) {
            setName(props.data.user.name);
            setEmail(props.data.user.email);
            setNoFound(false)
        } else if (props.data == '') {
            setNoFound(true)
        }
    }, [props.data]);


    return (
        <div className="mt-10">
            <div className="caption-top text-left font-medium text-2xl mb-10">
                <div className='flex justify-between'>
                    <span>Usuario</span>
                    <button
                        onClick={() => router.push('/')}
                        disabled={props.isLoading}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none disabled:bg-gray-500 focus:ring-violet-300 font-mediumm rounded-3xl text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                    >
                        Atras
                    </button>
                </div>

            </div>
            {noFound ?
                <div className="text-center">
                    <h1 className="mb-4 text-6xl font-semibold text-gray-500">404</h1>
                    <p className="mb-4 text-lg text-gray-600">Oops! Usuario no encontrado.</p>
                    <div className="animate-bounce">
                        <svg className="mx-auto h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                        </svg>
                    </div>
                    <p className="mt-4 text-gray-600"><button
                        onClick={() => router.push('/')}
                        disabled={props.isLoading}
                        data-modal-hide="popup-modal"
                        type="button"
                        className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none disabled:bg-gray-500 focus:ring-violet-300 font-mediumm rounded-3xl text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                    >
                        Ir al incio
                    </button></p>
                </div> :
                <div className="grid gap-6 mb-6 md:grid-cols-2 border border-gray-300 rounded-xl p-6">
                    <div className='flex flex-col'>
                        <label className=' text-gray-600'>
                            Nombre de usuario:
                        </label>
                        <label>
                            {name}
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label className=' text-gray-600'>
                            Ciudad:
                        </label>
                        <label>
                            Abraham
                        </label>
                    </div>
                    <div className='flex flex-col'>
                        <label className=' text-gray-600'>
                            Nombre Completo:
                        </label>
                        <label>
                            {name}
                        </label>
                    </div>
                    <div className='row-span-2'>
                        <span className='caption-top text-left font-medium text-sm text-gray-500'>DIAS DE LA SEMANA</span>
                        <div className='flex flex-wrap'>
                            {
                                days.map((val: any, id: number) => (
                                    <div key={id} className="flex items-center m-2">

                                        <input checked={val.sel} onChange={() => { }} id="checked-checkbox" type="checkbox" value="" className="w-5 h-5 accent-violet-600 text-violet-700 bg-gray-100 border-gray-300 rounded-lg focus:ring-violet-500 focus:ring-2" />
                                        <label htmlFor="checked-checkbox" className="ms-2 text-base font-medium text-gray-700">{val.day}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label className=' text-gray-600'>
                            Correo Electrónico:
                        </label>
                        <label>
                            {email}
                        </label>
                    </div>

                </div>

            }



        </div>
    )
}

const mapStateToProps = (state: any) => ({
    isLoading: state.user.isLoadingById,
    error: state.user.errorById,
    data: state.user.dataById
})

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(userAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);