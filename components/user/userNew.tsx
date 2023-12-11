/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../actions/user';
import { useRouter } from 'next/router';
import { ModalResponse } from '../util/modalResponse';

const UserNew = (props: any) => {

    const router = useRouter();
    const [userName, setUserName] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [days, setDays] = useState([
        { day: 'Lun', sel: false },
        { day: 'Mart', sel: false },
        { day: 'Miérc', sel: false },
        { day: 'Juev', sel: false },
        { day: 'Vier', sel: false },
        { day: 'Sáb', sel: false },
        { day: 'Dom', sel: false },
    ])
    const [openModal, setOpenModal] = useState(false);
    const [textModal, setTextModal] = useState('');

    useEffect(() => {
        if (props.data) {
            props.actions.createUserClear({})
            router.push('/');
        }
    }, [props.data]);

    useEffect(() => {
        if (props.error) {
            if(props.error.message){
                setTextModal(props.error.message);   
            }else{
                setTextModal("Se presento un error, por favor verifica los datos");
            }
            setOpenModal(true);
        }
    }, [props.error]);

    const handleDays = (day: string) => {
        const newDays = days.map((val) => {
            if (val.day == day) {
                return { ...val, sel: !val.sel }
            }
            return val;
        })
        setDays(newDays);
    }

    const createUser = (e: any) => {
        //e.preventDefault()
        if (
            name != ''
            && email != ''
            && userName != ''
            && city != ''
        ) {
            const data = {
                Name: name,
                Email: email,
                Password: Math.random().toString(36).substring(2, 7)
            }
            props.actions.createUser(data);
        } else {
            setTextModal("Debes ingresar todos los datos para poder guardar");
            setOpenModal(true);
        }

    }

    return (
        <form>
            
            <div className='border border-gray-300 rounded-xl p-6'>
                <div className="caption-top text-left font-medium text-sm text-gray-500 text mb-10">
                    REGISTRO
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <input
                            type="text"
                            id="user_name"
                            value={userName}
                            onChange={(e: any) => setUserName(e.target.value)}
                            className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm focus:border-b focus:border-gray-700 outline-0 block w-full p-2.5"
                            placeholder="Nombre de usuario *"
                            required />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="city"
                            value={city}
                            onChange={(e: any) => setCity(e.target.value)}
                            className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm focus:border-b focus:border-gray-700 outline-0 block w-full p-2.5"
                            placeholder="Ciudad *"
                            required />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e: any) => setName(e.target.value)}
                            className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm focus:border-b focus:border-gray-700 outline-0 block w-full p-2.5"
                            placeholder="Nombre Completo *"
                            required />
                    </div>
                    <div className='row-span-2'>
                        <span className='caption-top text-left font-medium text-sm text-gray-500'>DIAS DE LA SEMANA</span>
                        <div className='flex flex-wrap'>
                            {
                                days.map((val: any, id: number) => (
                                    <div key={id} className="flex items-center m-2">

                                        <input checked={val.sel} onChange={() => handleDays(val.day)} id="checked-checkbox" type="checkbox" value="" className="w-5 h-5 accent-violet-600 text-violet-700 bg-gray-100 border-gray-300 rounded-lg focus:ring-violet-500 focus:ring-2" />
                                        <label htmlFor="checked-checkbox" className="ms-2 text-base font-medium text-gray-700">{val.day}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e: any) => setEmail(e.target.value)}
                            className="bg-gray-50 border-b border-gray-400 text-gray-900 text-sm focus:border-b focus:border-gray-700 outline-0 block w-full p-2.5"
                            placeholder="Correo Electrónico *"
                            required />
                    </div>

                </div>
                <div className='mt-20 flex'>
                    <button 
                        onClick={createUser}  
                        disabled={props.isLoading}
                        data-modal-hide="popup-modal" 
                        type="button" 
                        className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-4 focus:outline-none disabled:bg-gray-500 focus:ring-violet-300 font-mediumm rounded-3xl text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                        >
                        REGISTRO
                    </button>
                    <button 
                        data-modal-hide="popup-modal" 
                        type="button" 
                        onClick={() => router.push('/')}  
                        disabled={props.isLoading}
                        className="text-violet-600 border-none bg-white hover:bg-gray-100 focus:ring-4 disabled:text-gray-500 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                        >CANCELAR
                    </button>
                    {props.isLoading ?
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div> : null}

                </div>
            </div>
            <ModalResponse
                open={openModal}
                hideModal={() => setOpenModal(false)}
                text={textModal}
            />
        </form>
    )
}

const mapStateToProps = (state: any) => ({
    isLoading: state.user.isLoadingCr,
    error: state.user.errorCr,
    data: state.user.dataCr,
})

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(userAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserNew);